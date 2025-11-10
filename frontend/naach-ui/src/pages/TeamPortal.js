import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@heroui/react';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../AuthContext';
import PageTemplate from '../components/PageTemplate';
import DocumentSharing from '../components/DocumentSharing';

export default function TeamPortal() {
  const { currentUser, userRole, userData } = useAuth();
  const [documents, setDocuments] = useState([]);
  const [sharedDocuments, setSharedDocuments] = useState([]);
  const [filteredDocs, setFilteredDocs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [newDocument, setNewDocument] = useState({ title: "", content: "", type: "general" });
  const [editingDoc, setEditingDoc] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Categories for documents
  const categories = [
    { key: "all", label: "All Documents", color: "default" },
    { key: "general", label: "General", color: "primary" },
    { key: "schedule", label: "Schedule", color: "secondary" },
    { key: "rules", label: "Rules", color: "warning" },
    { key: "announcement", label: "Announcements", color: "success" },
    { key: "forms", label: "Forms", color: "danger" }
  ];

  // Fetch user's own documents from Firestore
  useEffect(() => {
    if (!currentUser) return;

    let q;
    if (userRole === 'admin') {
      // Admin can see all documents
      q = query(collection(db, 'documents'), orderBy('createdAt', 'desc'));
    } else {
      // Regular users see their own documents
      q = query(
        collection(db, 'documents'), 
        where('userId', '==', currentUser.uid),
        orderBy('createdAt', 'desc')
      );
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(docs);
    });

    return () => unsubscribe();
  }, [currentUser, userRole]);

  // Fetch shared documents from admin
  useEffect(() => {
    console.log('=== FETCHING SHARED DOCUMENTS ===');
    console.log('currentUser:', currentUser);
    console.log('userData:', userData);
    console.log('userRole:', userRole);
    
    if (!currentUser || !userData) {
      console.log('⚠️ Missing currentUser or userData, skipping fetch');
      return;
    }

    const q = query(collection(db, 'shared_documents'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log('📄 Shared documents query returned:', querySnapshot.size, 'documents');
      const docs = [];
      
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        console.log('Processing document:', doc.id, docData);
        
        // Check if this user's team has access
        if (userRole === 'admin') {
          console.log('✅ Admin - Adding document:', doc.id);
          docs.push({ id: doc.id, ...docData, isShared: true });
        } else if (userData.teamName) {
          console.log('Checking access for team:', userData.teamName);
          console.log('Document accessibleBy:', docData.accessibleBy);
          console.log('Document accessibleTeams:', docData.accessibleTeams);
          
          const hasAccess = docData.accessibleBy === 'all_teams' || 
              (Array.isArray(docData.accessibleTeams) && docData.accessibleTeams.includes(userData.teamName)) ||
              (Array.isArray(docData.accessibleBy) && docData.accessibleBy.includes(userData.teamName));
          
          console.log('Has access?', hasAccess);
          
          if (hasAccess) {
            console.log('✅ Team has access - Adding document:', doc.id);
            docs.push({ id: doc.id, ...docData, isShared: true });
          } else {
            console.log('❌ Team does NOT have access to document:', doc.id);
          }
        } else {
          console.log('⚠️ No team name found for user');
        }
      });
      
      console.log('📊 Total shared documents for this user:', docs.length);
      console.log('Shared documents:', docs);
      setSharedDocuments(docs);
    });

    return () => unsubscribe();
  }, [currentUser, userData, userRole]);

  // Filter documents based on search and category
  useEffect(() => {
    console.log('=== FILTERING DOCUMENTS ===');
    console.log('Personal documents:', documents.length);
    console.log('Shared documents:', sharedDocuments.length);
    
    // Combine personal documents and shared documents
    let allDocs = [...documents, ...sharedDocuments];
    console.log('Combined total:', allDocs.length);
    console.log('All documents:', allDocs);

    // Filter by category
    if (selectedCategory !== "all") {
      console.log('Filtering by category:', selectedCategory);
      allDocs = allDocs.filter(doc => doc.type === selectedCategory);
      console.log('After category filter:', allDocs.length);
    }

    // Filter by search term
    if (searchTerm) {
      console.log('Filtering by search term:', searchTerm);
      allDocs = allDocs.filter(doc => 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (doc.content && doc.content.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      console.log('After search filter:', allDocs.length);
    }

    // Sort by date (most recent first)
    allDocs.sort((a, b) => {
      const dateA = a.sharedAt || a.createdAt;
      const dateB = b.sharedAt || b.createdAt;
      return dateB - dateA;
    });

    console.log('📋 Final filtered documents:', allDocs.length);
    console.log('Filtered docs:', allDocs);
    setFilteredDocs(allDocs);
  }, [documents, sharedDocuments, selectedCategory, searchTerm]);

  const handleCreateDocument = async () => {
    try {
      await addDoc(collection(db, 'documents'), {
        ...newDocument,
        userId: currentUser.uid,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      setNewDocument({ title: "", content: "", type: "general" });
      onOpenChange();
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };

  const handleEditDocument = async () => {
    if (!editingDoc) return;
    
    try {
      await updateDoc(doc(db, 'documents', editingDoc.id), {
        ...editingDoc,
        updatedAt: new Date()
      });
      setEditingDoc(null);
      onOpenChange();
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const handleDeleteDocument = async (docId) => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      try {
        await deleteDoc(doc(db, 'documents', docId));
      } catch (error) {
        console.error('Error deleting document:', error);
      }
    }
  };

  const getCategoryColor = (type) => {
    const category = categories.find(cat => cat.key === type);
    return category ? category.color : "default";
  };

  const getCategoryLabel = (type) => {
    const category = categories.find(cat => cat.key === type);
    return category ? category.label : type;
  };

  return (
    <PageTemplate>
      {/* Header */}
      <div className="bg-gradient-to-r from-beach-500 to-seafoam-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-lobster mb-2">
              Team Portal - {userData?.username || userData?.teamName || 'Dashboard'}
            </h1>
            <p className="text-beach-100 font-ocean">
              Manage your documents and access team resources
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Document Sharing Section (for admins) */}
          {userRole === 'admin' && (
            <DocumentSharing currentUser={currentUser} userRole={userRole} />
          )}
          
          {/* Controls */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md font-ocean"
                startContent={<span className="text-gray-400">🔍</span>}
              />
              
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Chip
                    key={category.key}
                    color={selectedCategory === category.key ? category.color : "default"}
                    variant={selectedCategory === category.key ? "solid" : "flat"}
                    onClick={() => setSelectedCategory(category.key)}
                    className="cursor-pointer font-ocean"
                  >
                    {category.label}
                  </Chip>
                ))}
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <Card key={doc.id} className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex-1">
                      <h3 className="text-lg font-beach text-beach-700 mb-2 line-clamp-2">
                        {doc.title}
                      </h3>
                      <Chip 
                        size="sm" 
                        color={getCategoryColor(doc.type)}
                        variant="flat"
                        className="font-ocean"
                      >
                        {getCategoryLabel(doc.type)}
                      </Chip>
                    </div>
                  </div>
                </CardHeader>
                
                <CardBody className="pt-0">
                  {doc.isShared ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Chip size="sm" color="success" variant="flat">
                          Shared by Admin
                        </Chip>
                      </div>
                      
                      {doc.downloadURL && (
                        <a
                          href={doc.downloadURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button
                            size="sm"
                            color="primary"
                            className="w-full"
                          >
                            📥 Download {doc.fileName || 'File'}
                          </Button>
                        </a>
                      )}
                      
                      {doc.googleDriveLink && (
                        <a
                          href={doc.googleDriveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button
                            size="sm"
                            color="primary"
                            className="w-full"
                          >
                            📄 Open Google Drive
                          </Button>
                        </a>
                      )}
                      
                      <div className="text-xs text-beach-500 font-ocean">
                        Shared: {doc.sharedAt?.toDate?.()?.toLocaleDateString() || 'Recently'}
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-beach-600 font-ocean mb-4 line-clamp-3">
                        {doc.content}
                      </p>
                      
                      <div className="flex justify-between items-center text-xs text-beach-500 font-ocean">
                        <span>
                          {doc.createdAt?.toDate?.()?.toLocaleDateString() || 'Recently'}
                        </span>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="flat"
                            color="primary"
                            onClick={() => {
                              setEditingDoc(doc);
                              onOpen();
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="flat"
                            color="danger"
                            onClick={() => handleDeleteDocument(doc.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>

          {filteredDocs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-xl font-beach text-beach-700 mb-2">No Documents Found</h3>
              <p className="text-beach-600 font-ocean">
                {searchTerm || selectedCategory !== "all" 
                  ? "Try adjusting your search or filters"
                  : "Create your first document to get started"
                }
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Create/Edit Document Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="text-xl font-lobster text-beach-700">
                  {editingDoc ? 'Edit Document' : 'Create New Document'}
                </h3>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <Input
                    label="Document Title"
                    placeholder="Enter document title"
                    value={editingDoc ? editingDoc.title : newDocument.title}
                    onChange={(e) => 
                      editingDoc 
                        ? setEditingDoc({...editingDoc, title: e.target.value})
                        : setNewDocument({...newDocument, title: e.target.value})
                    }
                    className="font-ocean"
                  />
                  
                  <div className="flex gap-4">
                    {categories.slice(1).map((category) => (
                      <Chip
                        key={category.key}
                        color={((editingDoc ? editingDoc.type : newDocument.type) === category.key) ? category.color : "default"}
                        variant={((editingDoc ? editingDoc.type : newDocument.type) === category.key) ? "solid" : "flat"}
                        onClick={() => 
                          editingDoc 
                            ? setEditingDoc({...editingDoc, type: category.key})
                            : setNewDocument({...newDocument, type: category.key})
                        }
                        className="cursor-pointer font-ocean"
                      >
                        {category.label}
                      </Chip>
                    ))}
                  </div>
                  
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg font-ocean resize-none"
                    rows={6}
                    placeholder="Enter document content..."
                    value={editingDoc ? editingDoc.content : newDocument.content}
                    onChange={(e) => 
                      editingDoc 
                        ? setEditingDoc({...editingDoc, content: e.target.value})
                        : setNewDocument({...newDocument, content: e.target.value})
                    }
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button 
                  color="primary" 
                  onPress={editingDoc ? handleEditDocument : handleCreateDocument}
                  className="font-comfortaa"
                >
                  {editingDoc ? 'Update' : 'Create'}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </PageTemplate>
  );
}
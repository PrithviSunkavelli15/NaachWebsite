import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  Chip,
  Progress,
  Checkbox
} from '@heroui/react';
import { 
  collection, 
  addDoc,
  query,
  getDocs,
  updateDoc,
  doc,
  onSnapshot,
  deleteDoc
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL 
} from 'firebase/storage';
import { db, storage } from '../firebase/config';

export default function DocumentSharing({ currentUser, userRole }) {
  const [googleDriveLink, setGoogleDriveLink] = useState('');
  const [documentTitle, setDocumentTitle] = useState('');
  const [documentType, setDocumentType] = useState('general');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [shareMethod, setShareMethod] = useState('googleDrive');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teams, setTeams] = useState([]);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [sendToAllTeams, setSendToAllTeams] = useState(true);
  const [sharedDocuments, setSharedDocuments] = useState([]);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const fileInputRef = useRef(null);

  const documentTypes = [
    { key: 'general', label: 'General', color: 'primary' },
    { key: 'schedule', label: 'Schedule', color: 'secondary' },
    { key: 'rules', label: 'Rules', color: 'warning' },
    { key: 'announcement', label: 'Announcement', color: 'success' },
    { key: 'forms', label: 'Forms', color: 'danger' }
  ];

  // Fetch teams from Firestore
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const usersQuery = query(collection(db, 'users'));
        const querySnapshot = await getDocs(usersQuery);
        const teamList = [];
        
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          if (userData.role === 'liaison' && userData.teamName) {
            if (!teamList.find(t => t.name === userData.teamName)) {
              teamList.push({
                id: doc.id,
                name: userData.teamName
              });
            }
          }
        });
        
        setTeams(teamList.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  // Fetch shared documents
  useEffect(() => {
    const q = query(collection(db, 'shared_documents'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setSharedDocuments(docs);
    });

    return () => unsubscribe();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset form
    setGoogleDriveLink('');
    setDocumentTitle('');
    setDocumentType('general');
    setSelectedFile(null);
    setUploadProgress(0);
    setSendToAllTeams(true);
    setSelectedTeams([]);
  };

  const handleOpenManageModal = (document) => {
    setSelectedDocument(document);
    setIsManageModalOpen(true);
  };

  const handleCloseManageModal = () => {
    setIsManageModalOpen(false);
    setSelectedDocument(null);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setDocumentTitle(file.name);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const toggleTeamSelection = (teamName) => {
    if (selectedTeams.includes(teamName)) {
      setSelectedTeams(selectedTeams.filter(t => t !== teamName));
    } else {
      setSelectedTeams([...selectedTeams, teamName]);
    }
  };

  const uploadFileToStorage = async (file) => {
    return new Promise((resolve, reject) => {
      try {
        console.log('Starting upload for file:', file.name);
        console.log('File size:', file.size);
        console.log('Storage object:', storage);
        
        const storageRef = ref(storage, `shared_documents/${Date.now()}_${file.name}`);
        console.log('Storage ref created:', storageRef);
        
        const uploadTask = uploadBytesResumable(storageRef, file);
        console.log('Upload task created');

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload progress:', progress);
            setUploadProgress(progress);
          },
          (error) => {
            console.error('Upload error details:', error);
            console.error('Error code:', error.code);
            console.error('Error message:', error.message);
            reject(error);
          },
          async () => {
            try {
              console.log('Upload complete, getting download URL');
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              console.log('Download URL obtained:', downloadURL);
              resolve(downloadURL);
            } catch (error) {
              console.error('Error getting download URL:', error);
              reject(error);
            }
          }
        );
      } catch (error) {
        console.error('Error in uploadFileToStorage:', error);
        reject(error);
      }
    });
  };

  const handleShareDocument = async () => {
    console.log('=== SHARE DOCUMENT STARTED ===');
    console.log('Share method:', shareMethod);
    console.log('Document title:', documentTitle);
    console.log('Selected file:', selectedFile);
    console.log('Google Drive link:', googleDriveLink);
    console.log('Send to all teams:', sendToAllTeams);
    console.log('Selected teams:', selectedTeams);
    
    try {
      setIsUploading(true);
      setUploadProgress(0);

      // Validate document title
      if (!documentTitle || documentTitle.trim() === '') {
        alert('Please enter a document title');
        setIsUploading(false);
        return;
      }

      // Determine accessible teams
      const accessibleTeams = sendToAllTeams ? 'all_teams' : selectedTeams;

      if (!sendToAllTeams && selectedTeams.length === 0) {
        alert('Please select at least one team or choose "All Teams"');
        setIsUploading(false);
        return;
      }

      let documentData = {
        title: documentTitle,
        type: documentType,
        sharedBy: currentUser.uid,
        sharedAt: new Date(),
        isPublic: sendToAllTeams,
        accessibleBy: accessibleTeams,
        accessibleTeams: accessibleTeams
      };

      if (shareMethod === 'fileUpload' && selectedFile) {
        console.log('=== FILE UPLOAD MODE ===');
        console.log('Starting file upload process...');
        try {
          const downloadURL = await uploadFileToStorage(selectedFile);
          console.log('✅ File uploaded successfully!');
          console.log('Download URL:', downloadURL);
          documentData = {
            ...documentData,
            fileName: selectedFile.name,
            fileSize: selectedFile.size,
            fileType: selectedFile.type,
            downloadURL: downloadURL,
            uploadMethod: 'fileUpload'
          };
        } catch (uploadError) {
          console.error('❌ FILE UPLOAD FAILED:', uploadError);
          console.error('Error code:', uploadError.code);
          console.error('Error message:', uploadError.message);
          setIsUploading(false);
          
          let errorMsg = 'Upload failed: ' + uploadError.message;
          if (uploadError.code === 'storage/unauthorized') {
            errorMsg = '🚫 Firebase Storage Rules Error!\n\nYou need to set up Storage rules in Firebase Console:\n\n1. Go to Firebase Console\n2. Click Storage → Rules\n3. Add rules to allow uploads\n\nError: ' + uploadError.message;
          }
          alert(errorMsg);
          return;
        }
      } else if (shareMethod === 'googleDrive' && googleDriveLink) {
        console.log('=== GOOGLE DRIVE MODE ===');
        const fileId = extractGoogleDriveFileId(googleDriveLink);
        
        if (!fileId) {
          alert('Please enter a valid Google Drive link');
          setIsUploading(false);
          return;
        }

        documentData = {
          ...documentData,
          googleDriveFileId: fileId,
          googleDriveLink: googleDriveLink,
          uploadMethod: 'googleDrive'
        };
        console.log('Google Drive document data prepared');
      } else {
        alert('Please select a file or enter a Google Drive link');
        setIsUploading(false);
        return;
      }

      console.log('=== SAVING TO FIRESTORE ===');
      console.log('Document data:', documentData);
      
      const docRef = await addDoc(collection(db, 'shared_documents'), documentData);
      console.log('✅ Document saved to Firestore with ID:', docRef.id);

      handleCloseModal();
      
      const teamMessage = sendToAllTeams 
        ? 'all teams' 
        : `${selectedTeams.length} team(s)`;
      
      alert(`✅ SUCCESS!\n\nDocument "${documentTitle}" has been shared with ${teamMessage}!\n\nTeams can now view it on their dashboard.`);
      console.log('=== SHARE DOCUMENT COMPLETED ===');
    } catch (error) {
      console.error('❌ ERROR IN handleShareDocument:', error);
      console.error('Error details:', error);
      alert('Error sharing document: ' + error.message + '\n\nCheck console for details.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveTeamAccess = async (documentId, teamToRemove) => {
    try {
      const docRef = doc(db, 'shared_documents', documentId);
      const document = sharedDocuments.find(d => d.id === documentId);
      
      if (document.accessibleBy === 'all_teams') {
        // If it was all teams, create a list of all teams except the one to remove
        const remainingTeams = teams.map(t => t.name).filter(t => t !== teamToRemove);
        await updateDoc(docRef, {
          accessibleBy: remainingTeams,
          accessibleTeams: remainingTeams,
          isPublic: false
        });
      } else {
        // Remove specific team from the list
        const updatedTeams = document.accessibleTeams.filter(t => t !== teamToRemove);
        
        if (updatedTeams.length === 0) {
          // If no teams left, delete the document
          await deleteDoc(docRef);
          alert('Document removed (no teams have access)');
        } else {
          await updateDoc(docRef, {
            accessibleBy: updatedTeams,
            accessibleTeams: updatedTeams
          });
        }
      }
      
      alert(`Access removed for ${teamToRemove}`);
    } catch (error) {
      console.error('Error removing team access:', error);
      alert('Error removing team access: ' + error.message);
    }
  };

  const extractGoogleDriveFileId = (url) => {
    const patterns = [
      /\/file\/d\/([a-zA-Z0-9-_]+)/,
      /id=([a-zA-Z0-9-_]+)/,
      /\/d\/([a-zA-Z0-9-_]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    
    return null;
  };

  return (
    <div className="mb-8">
      <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
        <CardHeader>
          <h3 className="text-xl font-beach text-beach-700">Share Documents</h3>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <p className="text-beach-600 font-ocean">
              Share documents from Google Drive or upload files directly. Choose which teams can access each document.
            </p>
            
            <div className="flex gap-4">
              <Button
                onClick={handleOpenModal}
                color="primary"
                className="bg-gradient-to-r from-beach-400 to-seafoam-400 text-white font-comfortaa font-semibold"
              >
                + Share Document
              </Button>
            </div>

            {/* Shared Documents List */}
            <div className="mt-6">
              <h4 className="text-lg font-beach text-beach-700 mb-4">Shared Documents</h4>
              {sharedDocuments.length === 0 ? (
                <p className="text-beach-600 font-ocean text-sm">No documents shared yet.</p>
              ) : (
                <div className="space-y-2">
                  {sharedDocuments.map((doc) => (
                    <div key={doc.id} className="bg-beach-50 p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="font-beach text-beach-700">{doc.title}</p>
                        <p className="text-sm text-beach-600 font-ocean">
                          {doc.accessibleBy === 'all_teams' ? 'All Teams' : `${doc.accessibleTeams.length} Team(s)`}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="flat"
                        color="primary"
                        onClick={() => handleOpenManageModal(doc)}
                      >
                        Manage Access
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              style={{ display: 'none' }}
              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif"
            />
          </div>
        </CardBody>
      </Card>

      {/* SHARE DOCUMENT MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-xl font-beach text-beach-700">Share Document</h3>
            </div>

            <div className="px-6 py-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {userRole === 'admin' && (
                <div>
                  <label className="text-sm font-ocean text-beach-700 mb-2 block">Share Method</label>
                  <div className="flex gap-2">
                    <Chip
                      color={shareMethod === 'googleDrive' ? 'primary' : 'default'}
                      variant={shareMethod === 'googleDrive' ? 'solid' : 'flat'}
                      onClick={() => setShareMethod('googleDrive')}
                      className="cursor-pointer font-ocean"
                    >
                      Google Drive Link
                    </Chip>
                    <Chip
                      color={shareMethod === 'fileUpload' ? 'primary' : 'default'}
                      variant={shareMethod === 'fileUpload' ? 'solid' : 'flat'}
                      onClick={() => setShareMethod('fileUpload')}
                      className="cursor-pointer font-ocean"
                    >
                      Upload File
                    </Chip>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-ocean text-beach-700 font-semibold">Document Title</label>
                <Input
                  placeholder="Enter document title"
                  value={documentTitle}
                  onChange={(e) => setDocumentTitle(e.target.value)}
                  className="font-ocean"
                  variant="bordered"
                />
              </div>
              
              {shareMethod === 'googleDrive' ? (
                <div className="space-y-2">
                  <label className="text-sm font-ocean text-beach-700 font-semibold">Google Drive Link</label>
                  <Input
                    placeholder="https://drive.google.com/file/d/..."
                    value={googleDriveLink}
                    onChange={(e) => setGoogleDriveLink(e.target.value)}
                    className="font-ocean"
                    variant="bordered"
                  />
                </div>
              ) : (
                <div>
                  <label className="text-sm font-ocean text-beach-700 mb-2 block">Select File</label>
                  <div className="flex gap-2 items-center">
                    <Button
                      onClick={triggerFileSelect}
                      variant="bordered"
                      className="font-ocean"
                    >
                      Choose File
                    </Button>
                    {selectedFile && (
                      <span className="text-sm text-beach-600 font-ocean">
                        {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    )}
                  </div>
                </div>
              )}

              {isUploading && (
                <div className="space-y-2">
                  <label className="text-sm font-ocean text-beach-700">Upload Progress</label>
                  <Progress value={uploadProgress} className="w-full" />
                  <p className="text-xs text-beach-600 font-ocean">{uploadProgress.toFixed(1)}% complete</p>
                </div>
              )}

              {/* Team Selection */}
              <div>
                <label className="text-sm font-ocean text-beach-700 mb-2 block font-semibold">Select Teams</label>
                <div className="bg-beach-50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between p-2 hover:bg-beach-100 rounded transition-colors">
                    <span className="font-ocean text-beach-700 font-semibold">Send to All Teams</span>
                    <Checkbox
                      isSelected={sendToAllTeams}
                      onChange={(e) => {
                        setSendToAllTeams(e.target.checked);
                        if (e.target.checked) {
                          setSelectedTeams([]);
                        }
                      }}
                      color="primary"
                      size="lg"
                    />
                  </div>

                  {!sendToAllTeams && (
                    <div className="space-y-1 mt-3 max-h-40 overflow-y-auto border-t border-beach-200 pt-3">
                      {teams.map((team) => (
                        <div key={team.id} className="flex items-center justify-between p-2 hover:bg-beach-100 rounded transition-colors">
                          <span className="font-ocean text-beach-700">{team.name}</span>
                          <Checkbox
                            isSelected={selectedTeams.includes(team.name)}
                            onChange={() => toggleTeamSelection(team.name)}
                            color="primary"
                            size="md"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {!sendToAllTeams && selectedTeams.length > 0 && (
                    <div className="bg-white p-2 rounded border border-beach-200 mt-2">
                      <p className="text-sm text-beach-700 font-ocean font-semibold">
                        ✓ Selected: {selectedTeams.length} team(s)
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-beach-50 p-4 rounded-lg">
                <h4 className="font-beach text-beach-700 mb-2">Instructions:</h4>
                {shareMethod === 'googleDrive' ? (
                  <ol className="text-sm text-beach-600 font-ocean space-y-1 list-decimal list-inside">
                    <li>Open your Google Drive document</li>
                    <li>Click "Share" button</li>
                    <li>Set permissions to "Anyone with the link can view" or "Anyone with the link can edit"</li>
                    <li>Copy the sharing link</li>
                    <li>Paste it above and click "Share Document"</li>
                  </ol>
                ) : (
                  <ol className="text-sm text-beach-600 font-ocean space-y-1 list-decimal list-inside">
                    <li>Click "Choose File" to select a document from your computer</li>
                    <li>Supported formats: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT, JPG, PNG, GIF</li>
                    <li>Maximum file size: 10MB</li>
                    <li>Add a title and select document type</li>
                    <li>Click "Share Document" to upload and share</li>
                  </ol>
                )}
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
              <Button 
                color="danger" 
                variant="light" 
                onClick={handleCloseModal} 
                isDisabled={isUploading}
              >
                Cancel
              </Button>
              <Button 
                color="primary" 
                onClick={handleShareDocument}
                className="bg-gradient-to-r from-beach-400 to-seafoam-400 text-white font-comfortaa font-semibold"
                isLoading={isUploading}
                isDisabled={isUploading}
              >
                {isUploading ? 'Uploading...' : 'Share Document'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MANAGE DOCUMENT ACCESS MODAL */}
      {isManageModalOpen && selectedDocument && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseManageModal}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-xl font-beach text-beach-700">Manage Document Access</h3>
              <p className="text-sm text-beach-600 font-ocean mt-1">{selectedDocument.title}</p>
            </div>

            <div className="px-6 py-4 space-y-4">
              <div>
                <label className="text-sm font-ocean text-beach-700 mb-3 block">Teams with Access:</label>
                {selectedDocument.accessibleBy === 'all_teams' ? (
                  <div className="space-y-2">
                    {teams.map((team) => (
                      <div key={team.id} className="flex justify-between items-center bg-beach-50 p-3 rounded">
                        <span className="font-ocean text-beach-700">{team.name}</span>
                        <Button
                          size="sm"
                          color="danger"
                          variant="flat"
                          onClick={() => handleRemoveTeamAccess(selectedDocument.id, team.name)}
                        >
                          Remove Access
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {selectedDocument.accessibleTeams && selectedDocument.accessibleTeams.map((teamName) => (
                      <div key={teamName} className="flex justify-between items-center bg-beach-50 p-3 rounded">
                        <span className="font-ocean text-beach-700">{teamName}</span>
                        <Button
                          size="sm"
                          color="danger"
                          variant="flat"
                          onClick={() => handleRemoveTeamAccess(selectedDocument.id, teamName)}
                        >
                          Remove Access
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
              <Button 
                color="primary" 
                onClick={handleCloseManageModal}
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

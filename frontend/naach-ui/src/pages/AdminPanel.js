import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@heroui/react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc
} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { useAuth } from '../AuthContext';
import PageTemplate from '../components/PageTemplate';

export default function AdminPanel() {
  const { currentUser, userRole } = useAuth();
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ 
    username: '', 
    password: '', 
    teamName: '', 
    role: 'liaison' 
  });
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // Fetch users from Firestore
  useEffect(() => {
    const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const userList = [];
      querySnapshot.forEach((doc) => {
        userList.push({ id: doc.id, ...doc.data() });
      });
      setUsers(userList);
    });

    return () => unsubscribe();
  }, []);

  // Redirect non-admin users
  if (userRole !== 'admin') {
    return (
      <PageTemplate>
        <div className="py-20 text-center">
          <h1 className="text-4xl font-lobster text-beach-700 mb-4">Access Denied</h1>
          <p className="text-beach-600 font-ocean">You don't have permission to access this page.</p>
        </div>
      </PageTemplate>
    );
  }

  const handleCreateUser = async () => {
    try {
      // Validate input
      if (!newUser.username || !newUser.password || !newUser.teamName) {
        alert('Please fill in all required fields');
        return;
      }

      // Create unique email from username for Firebase Authentication
      const timestamp = Date.now();
      const email = `${newUser.username.toLowerCase()}-${timestamp}@njnaach.com`;
      
      console.log('Creating user with email:', email);
      
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        email, 
        newUser.password
      );
      
      console.log('User created in Auth, UID:', userCredential.user.uid);
      
      // Add user to Firestore
      await addDoc(collection(db, 'users'), {
        username: newUser.username,
        email: email,
        teamName: newUser.teamName,
        role: newUser.role,
        uid: userCredential.user.uid,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      console.log('User added to Firestore');
      alert('User created successfully!');
      setNewUser({ username: '', password: '', teamName: '', role: 'liaison' });
      setShowAddForm(false);
    } catch (error) {
      console.error('Error creating user:', error);
      
      let errorMessage = 'Error creating user: ';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage += 'This username is already in use. Try a different username.';
          break;
        case 'auth/weak-password':
          errorMessage += 'Password is too weak. Please use at least 6 characters.';
          break;
        case 'auth/invalid-email':
          errorMessage += 'Invalid email format.';
          break;
        default:
          errorMessage += error.message;
      }
      
      alert(errorMessage);
    }
  };

  const handleEditUser = async () => {
    if (!editingUser) return;
    
    try {
      await updateDoc(doc(db, 'users', editingUser.id), {
        ...editingUser,
        updatedAt: new Date()
      });
      setEditingUser(null);
      setShowAddForm(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteDoc(doc(db, 'users', userId));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const filteredUsers = users.filter(user =>
    (user.username && user.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.teamName && user.teamName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin': return 'danger';
      case 'liaison': return 'primary';
      default: return 'default';
    }
  };

  return (
    <PageTemplate>
      {/* Header */}
      <div className="bg-gradient-to-r from-coral-500 to-beach-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-lobster mb-2">
            Admin Panel
          </h1>
          <p className="text-beach-100 font-ocean">
            Manage team liaisons and user accounts
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Controls */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md font-ocean"
              startContent={<span className="text-gray-400">🔍</span>}
            />
            
            <Button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-beach-400 to-seafoam-400 text-white font-comfortaa font-semibold"
            >
              + Add New Liaison
            </Button>
          </div>

          {/* Users Table */}
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
            <CardHeader>
              <h2 className="text-xl font-beach text-beach-700">Team Liaisons</h2>
            </CardHeader>
            <CardBody>
              <Table aria-label="Users table">
                <TableHeader>
                  <TableColumn>USERNAME</TableColumn>
                  <TableColumn>TEAM NAME</TableColumn>
                  <TableColumn>ROLE</TableColumn>
                  <TableColumn>CREATED</TableColumn>
                  <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-ocean">{user.username || user.email?.split('@')[0]}</TableCell>
                      <TableCell className="font-ocean">{user.teamName}</TableCell>
                      <TableCell>
                        <Chip 
                          color={getRoleColor(user.role)} 
                          variant="flat"
                          className="font-ocean"
                        >
                          {user.role.toUpperCase()}
                        </Chip>
                      </TableCell>
                      <TableCell className="font-ocean text-sm">
                        {user.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="flat"
                          color="primary"
                          onClick={() => {
                            setEditingUser(user);
                            setShowAddForm(true);
                          }}
                        >
                          Edit
                        </Button>
                          <Button
                            size="sm"
                            variant="flat"
                            color="danger"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-xl font-beach text-beach-700 mb-2">No Users Found</h3>
              <p className="text-beach-600 font-ocean">
                {searchTerm ? "Try adjusting your search" : "Add your first team liaison"}
              </p>
            </div>
          )}
        </div>
      </div>

        {/* Add/Edit User Form */}
        {showAddForm && (
          <Card className="mt-8 bg-white/80 backdrop-blur-sm border border-sand-200 shadow-xl">
            <CardHeader>
              <h3 className="text-xl font-lobster text-beach-700">
                {editingUser ? 'Edit User' : 'Add New Liaison'}
              </h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <Input
                  label="Username"
                  placeholder="rutgers, princeton, etc."
                  value={editingUser ? editingUser.username : newUser.username}
                  onChange={(e) => 
                    editingUser 
                      ? setEditingUser({...editingUser, username: e.target.value})
                      : setNewUser({...newUser, username: e.target.value})
                  }
                  className="font-ocean"
                  type="text"
                />
                
                {!editingUser && (
                  <Input
                    label="Password"
                    placeholder="Enter password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                    className="font-ocean"
                    type="password"
                  />
                )}
                
                <Input
                  label="Team Name"
                  placeholder="Team Name (e.g., Rutgers, Princeton)"
                  value={editingUser ? editingUser.teamName : newUser.teamName}
                  onChange={(e) => 
                    editingUser 
                      ? setEditingUser({...editingUser, teamName: e.target.value})
                      : setNewUser({...newUser, teamName: e.target.value})
                  }
                  className="font-ocean"
                />
                
                <div>
                  <label className="text-sm font-ocean text-beach-700 mb-2 block">Role</label>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered" className="w-full justify-start">
                        {editingUser ? editingUser.role : newUser.role}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      onAction={(key) => 
                        editingUser 
                          ? setEditingUser({...editingUser, role: key})
                          : setNewUser({...newUser, role: key})
                      }
                    >
                      <DropdownItem key="liaison">Liaison</DropdownItem>
                      <DropdownItem key="admin">Admin</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    color="danger" 
                    variant="light" 
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingUser(null);
                      setNewUser({ username: '', password: '', teamName: '', role: 'liaison' });
                    }}
                  >
                    Cancel
                  </Button>
                  <Button 
                    color="primary" 
                    onClick={editingUser ? handleEditUser : handleCreateUser}
                    className="font-comfortaa"
                  >
                    {editingUser ? 'Update' : 'Create'}
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        )}
    </PageTemplate>
  );
}

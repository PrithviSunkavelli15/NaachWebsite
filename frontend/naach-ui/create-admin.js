// Temporary script to create admin user
// Run this in your browser console after updating Firestore rules

import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './src/firebase/config.js';

async function createAdminUser() {
  try {
    const email = `admin-${Date.now()}@njnaach.com`;
    const password = 'admin123';
    
    // Create user in Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Admin user created in Auth:', userCredential.user.uid);
    
    // Create user document in Firestore
    await addDoc(collection(db, 'users'), {
      username: 'admin',
      email: email,
      teamName: 'NJ Naach Admin',
      role: 'admin',
      uid: userCredential.user.uid,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    console.log('Admin user document created in Firestore');
    console.log('Login credentials:');
    console.log('Username: admin');
    console.log('Password: admin123');
    
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

// Uncomment the line below to run
// createAdminUser();






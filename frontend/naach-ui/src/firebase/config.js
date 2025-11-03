import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU7JNDOtZrH07l3XBEttZEyECunyPwS-Y",
  authDomain: "naachwebsite.firebaseapp.com",
  projectId: "naachwebsite",
  storageBucket: "naachwebsite.firebasestorage.app",
  messagingSenderId: "1024471123515",
  appId: "1:1024471123515:web:57469b888b0743cc90be1e",
  measurementId: "G-7M19QW94GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);

export default app;

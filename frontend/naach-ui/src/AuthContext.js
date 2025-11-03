import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged
} from 'firebase/auth';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from './firebase/config';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export { AuthContext };

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      console.log('AuthContext: Attempting login with email:', email);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('AuthContext: Login successful, user UID:', user.uid);
      
      // Get user data from Firestore - try by document ID first
      let userDoc = await getDoc(doc(db, 'users', user.uid));
      console.log('AuthContext: User document exists (by ID):', userDoc.exists());
      
      if (userDoc.exists()) {
        const userInfo = userDoc.data();
        console.log('AuthContext: User info from Firestore:', userInfo);
        setUserRole(userInfo.role);
        setUserData({ ...userInfo, uid: user.uid });
      } else {
        console.log('AuthContext: Searching by UID field...');
        // Search by uid field
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          console.log('✅ Found user by UID field');
          const userInfo = querySnapshot.docs[0].data();
          console.log('AuthContext: User info from Firestore:', userInfo);
          setUserRole(userInfo.role);
          setUserData({ ...userInfo, uid: user.uid });
        } else {
          console.error('❌ No user document found in Firestore for UID:', user.uid);
          console.error('📋 SOLUTION: You need to create a team user in the Admin Panel!');
          alert('⚠️ User data not found!\n\nPlease create this team account in the Admin Panel first.');
        }
      }
      
      return user;
    } catch (error) {
      console.error('AuthContext: Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUserRole(null);
      setUserData(null);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        
        // Get user data from Firestore
        try {
          console.log('🔍 Looking for user document with UID:', user.uid);
          
          // First try to get by document ID
          let userDoc = await getDoc(doc(db, 'users', user.uid));
          
          if (userDoc.exists()) {
            console.log('✅ Found user by document ID');
            const userInfo = userDoc.data();
            console.log('User info:', userInfo);
            setUserRole(userInfo.role);
            setUserData({ ...userInfo, uid: user.uid });
          } else {
            console.log('⚠️ User document not found by ID, searching by UID field...');
            
            // If not found, search by uid field
            const q = query(collection(db, 'users'), where('uid', '==', user.uid));
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
              console.log('✅ Found user by UID field query');
              const userInfo = querySnapshot.docs[0].data();
              console.log('User info:', userInfo);
              setUserRole(userInfo.role);
              setUserData({ ...userInfo, uid: user.uid });
            } else {
              console.error('❌ No user document found for UID:', user.uid);
              console.error('Please create user document in Firestore');
            }
          }
        } catch (error) {
          console.error('❌ Error fetching user data:', error);
        }
      } else {
        setCurrentUser(null);
        setUserRole(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userRole,
    userData,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
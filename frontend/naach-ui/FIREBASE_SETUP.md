# Firebase Setup Guide for NJ NAACH Login System

## 🚀 Overview
This system provides a beach-themed login page with Firebase authentication and a Google Drive-like document storage system. Users can log in with pre-assigned **email addresses** and passwords to access/manage documents. Overseers can manage users and assign documents to specific users.

## 🔧 Setup Instructions

### 1. Firebase Project Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Authentication (Email/Password)
4. Enable Firestore Database
5. Get your Firebase configuration

### 2. Update Firebase Config
Replace the placeholder values in `src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-actual-messaging-sender-id",
  appId: "your-actual-app-id"
};
```

### 3. Install Firebase Dependencies
```bash
npm install firebase
```

### 4. Firestore Security Rules
Set up these Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own documents
    match /documents/{document} {
      allow read, write: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'overseer');
    }
    
    // Users can read their own user data
    match /users/{userId} {
      allow read: if request.auth != null && 
        (request.auth.uid == userId || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'overseer');
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'overseer';
    }
  }
}
```

### 5. Create Initial Users
You'll need to create users in Firebase Authentication and Firestore. Here's the structure:

#### Firestore Users Collection
```javascript
{
  "uid": "user-firebase-uid",
  "email": "admin@njnaach.com",
  "role": "overseer", // or "user"
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

#### Firestore Documents Collection
```javascript
{
  "title": "Document Title",
  "content": "Document content or description",
  "type": "general", // general, schedule, rules, announcement
  "userId": "user-firebase-uid",
  "createdBy": "overseer-uid", // optional, for overseer-created docs
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## 👥 User Roles

### Regular User
- Can log in with assigned **email** and password
- Can view their own documents
- Can create new documents
- Can edit their own documents

### Overseer
- All regular user permissions
- Can view all users
- Can assign documents to specific users
- Can manage user access

## 📁 Document Types
- **General**: General information documents
- **Schedule**: Event schedules and timelines
- **Rules**: Competition rules and guidelines
- **Announcement**: Important announcements and updates

## 🎨 Features

### Beach Theme
- Consistent with NJ NAACH website design
- Sand, beach, seafoam, and coral color palette
- Floating beach elements and animations
- Responsive design for all devices

### Security
- Firebase Authentication for secure login
- Firestore security rules for data protection
- User-specific document access
- Role-based permissions

### Document Management
- Google Drive-like interface
- Real-time updates
- Document categorization
- User assignment system

## 🔐 Default Credentials
You'll need to create users in Firebase Authentication with these credentials:

### Example Users:
1. **admin@njnaach.com** (Role: overseer)
2. **team1@njnaach.com** (Role: user)
3. **team2@njnaach.com** (Role: user)
4. **judge1@njnaach.com** (Role: user)

## 🚨 Important Notes
- Users cannot change their email addresses
- Users can change their passwords after first login
- Overseers can assign documents to any user
- All data is stored securely in Firebase
- System is fully responsive and beach-themed

## 🆘 Troubleshooting
- Ensure Firebase config is correct
- Check Firestore security rules
- Verify user roles are set correctly
- Check browser console for errors
- Ensure Firebase services are enabled

## 📞 Support
For technical support, contact your system administrator or refer to Firebase documentation.

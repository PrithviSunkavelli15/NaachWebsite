# NJ NAACH Team Portal Setup Guide

## 🎯 Overview
This system provides a comprehensive team portal for NJ NAACH with Firebase authentication, document management, and Google Drive integration. Team liaisons can log in to access shared documents and manage team-specific content.

## 🔧 Firebase Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project named "NJ NAACH Portal"
3. Enable Authentication (Email/Password)
4. Enable Firestore Database
5. Get your Firebase configuration

### 2. Update Firebase Configuration
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

### 3. Firestore Security Rules
Set up these Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null && 
        (request.auth.uid == userId || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Documents collection
    match /documents/{document} {
      allow read, write: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
    
    // Shared documents collection
    match /shared_documents/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## 👥 User Management

### 1. Create Admin User
First, create an admin user in Firebase Authentication:
1. Go to Firebase Console > Authentication > Users
2. Click "Add User"
3. Email: `admin@njnaach.com`
4. Password: (set a secure password)
5. Create user

### 2. Add Admin Role to Firestore
In Firestore, create a document in the `users` collection:

```javascript
Document ID: [admin-user-uid]
{
  "username": "admin",
  "email": "admin@njnaach.com",
  "role": "admin",
  "teamName": "NJ NAACH Admin",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### 3. Create Team Liaison Accounts
For each of the 16 teams, create users through the admin panel:

**Example Team Accounts:**
- Username: `rutgers` → Email: `rutgers@njnaach.com` (Rutgers Team)
- Username: `princeton` → Email: `princeton@njnaach.com` (Princeton Team)
- Username: `nyu` → Email: `nyu@njnaach.com` (NYU Team)
- Username: `columbia` → Email: `columbia@njnaach.com` (Columbia Team)
- etc.

## 🎨 Features

### Authentication System
- **Login Page**: Beach-themed login with Firebase authentication
- **Dynamic Navbar**: Shows username tab when logged in
- **Role-based Access**: Admin vs Liaison permissions
- **Secure Logout**: Proper session management

### Team Portal Dashboard
- **Document Management**: Create, edit, delete documents
- **Document Categories**: General, Schedule, Rules, Announcements, Forms
- **Search & Filter**: Find documents quickly
- **Real-time Updates**: Changes sync across all users

### Admin Panel
- **User Management**: Create/edit/delete team liaison accounts
- **Document Sharing**: Share Google Drive documents with all teams
- **Access Control**: Manage user roles and permissions

### Google Drive Integration
- **Document Sharing**: Share Google Drive links with team liaisons
- **Public Access**: Documents accessible to anyone with the link
- **Easy Updates**: When NJ NAACH updates Google Drive docs, they automatically appear in the portal

## 📁 Document Types

1. **General**: General information and updates
2. **Schedule**: Event schedules and timelines
3. **Rules**: Competition rules and guidelines
4. **Announcements**: Important announcements
5. **Forms**: Registration forms and documents

## 🔐 Security Features

- **Firebase Authentication**: Secure user login
- **Role-based Permissions**: Admin vs regular user access
- **Firestore Security Rules**: Data protection
- **Input Validation**: Secure form handling
- **Error Handling**: Graceful error management

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install firebase
```

### 2. Configure Firebase
- Update `src/firebase/config.js` with your Firebase config
- Set up Firestore security rules
- Enable Authentication and Firestore

### 3. Create Admin User
- Create admin user in Firebase Authentication
- Add admin role in Firestore users collection

### 4. Start the Application
```bash
npm start
```

### 5. Access Admin Panel
- Login with admin credentials
- Go to `/admin` to create team liaison accounts
- Share Google Drive documents through the portal

## 📱 Usage Guide

### For NJ NAACH Admins:
1. **Login** with admin credentials
2. **Create Team Accounts** in the Admin Panel (`/admin`)
3. **Share Documents** by adding Google Drive links
4. **Manage Users** and their access permissions

### For Team Liaisons:
1. **Login** with provided credentials
2. **Access Dashboard** via username tab in navbar
3. **View Documents** shared by NJ NAACH
4. **Create Personal Documents** for team use

### Google Drive Document Sharing:
1. **Upload Document** to Google Drive
2. **Set Permissions** to "Anyone with the link can view/edit"
3. **Copy Sharing Link**
4. **Share via Portal** using the Document Sharing feature
5. **Teams Access** documents instantly through their dashboard

## 🎨 Design Features

- **Beach Theme**: Consistent with NJ NAACH branding
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Floating elements and transitions
- **Intuitive UI**: Easy-to-use interface
- **Accessibility**: Proper contrast and navigation

## 🔧 Troubleshooting

### Common Issues:
1. **Firebase Config Error**: Ensure all config values are correct
2. **Permission Denied**: Check Firestore security rules
3. **User Not Found**: Verify user exists in both Auth and Firestore
4. **Document Not Loading**: Check Google Drive permissions

### Support:
- Check browser console for errors
- Verify Firebase services are enabled
- Ensure proper user roles are set
- Check network connectivity

## 📞 Next Steps

1. **Customize Branding**: Update colors and fonts as needed
2. **Add More Features**: File uploads, notifications, etc.
3. **Scale Up**: Add more teams or features
4. **Monitor Usage**: Track user activity and document access

## 🎉 Success!

Your NJ NAACH Team Portal is now ready! Team liaisons can log in, access shared documents, and manage their team information in a beautiful, beach-themed interface that matches your brand perfectly.

---

**Built with ❤️ for NJ NAACH 3.0**

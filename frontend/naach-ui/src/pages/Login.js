import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  Link,
} from "@heroui/react";
import { useAuth } from "../AuthContext";
import PageTemplate from "../components/PageTemplate";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError("");
      setLoading(true);
      
      // TEMPORARY: Try direct login first (for existing auth users)
      try {
        // Try direct login with username@njnaach.com format first
        const directEmail = `${username}@njnaach.com`;
        console.log('Trying direct login with:', directEmail);
        await login(directEmail, password);
        navigate("/portal");
        return;
      } catch (directError) {
        console.log('Direct login failed, trying Firestore lookup:', directError.message);
      }

      // Find user by username in Firestore to get their actual email
      console.log('Searching for username:', username);
      const usersQuery = query(collection(db, 'users'), where('username', '==', username));
      const querySnapshot = await getDocs(usersQuery);
      
      console.log('Query results:', querySnapshot.size, 'users found');
      
      if (querySnapshot.empty) {
        console.log('No users found with username:', username);
        throw new Error('Username not found');
      }
      
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      const email = userData.email;
      
      console.log('Found user data:', userData);
      console.log('Using email for login:', email);
      
      await login(email, password);
      navigate("/portal");
    } catch (error) {
      console.error("Login error:", error);
      if (error.message === 'Username not found') {
        setError("Username not found. Please check your username.");
      } else {
        setError("Failed to log in. Please check your username and password.");
      }
    }
    setLoading(false);
  };

  return (
    <PageTemplate>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-beach-100 via-coral-100 to-seafoam-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Floating beach elements */}
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 animate-float">
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-beach-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-12 sm:top-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-coral-200/60 rounded-full backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-beach text-beach-700 mb-4 sm:mb-6 animate-fade-in">
            Team Login
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-beach-600 font-ocean mb-6 sm:mb-8 animate-slide-up px-4">
            Access your team portal and documents
          </p>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-beach-400 to-coral-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Login Form */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-sand-50 to-beach-50">
        <div className="max-w-md mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border border-sand-200 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-beach-400 to-seafoam-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏖️</span>
                </div>
              </div>
              <h2 className="text-2xl font-lobster text-beach-700">
                Welcome Back
              </h2>
              <p className="text-beach-600 font-ocean">
                Sign in to access your team documents
              </p>
            </CardHeader>

            <CardBody className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-beach-700 font-ocean font-semibold text-sm">Username</label>
                  <Input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="font-ocean"
                    variant="bordered"
                    color="primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-beach-700 font-ocean font-semibold text-sm">Password</label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="font-ocean"
                    variant="bordered"
                    color="primary"
                  />
                </div>

                {error && (
                  <div className="bg-coral-100 border border-coral-300 text-coral-700 px-4 py-3 rounded-lg font-ocean text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-beach-400 to-seafoam-400 text-white font-comfortaa font-semibold py-3 rounded-full hover:from-beach-500 hover:to-seafoam-500 transition-all duration-300"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </form>

              <div className="text-center">
                <Link
                  as={RouterLink}
                  to="/"
                  className="text-beach-600 hover:text-beach-500 font-ocean font-medium transition-colors duration-200"
                >
                  ← Back to Home
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </PageTemplate>
  );
}
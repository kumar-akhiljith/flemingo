// providers/AuthProvider.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// --- CONFIGURATION & UTILITIES ---
const WEB_CLIENT_ID = 'YOUR_GOOGLE_WEB_CLIENT_ID.apps.googleusercontent.com';
const AuthContext = createContext(undefined); // Removed the interface type
const TOKEN_KEY = 'flemingo_jwt';

// Helper functions (removed Promise<void> and type annotations)
// ... saveToken, getToken, removeToken functions remain the same logic ...

// 2. The Auth Provider Component
export const AuthProvider = ({ children }) => { // Removed : { children: ReactNode }
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(null);
  const [loading, setLoading] = useState(true);

  // ... useEffect logic remains the same, but remove types from parameters ...
  useEffect(() => {
    // Initialize Google Sign-In
    GoogleSignin.configure({ webClientId: WEB_CLIENT_ID, offlineAccess: false });

    const bootstrapAsync = async () => {
      // ... initialization logic ...
      setLoading(false);
    };

    bootstrapAsync();

    const subscriber = auth().onAuthStateChanged((firebaseUser) => { // Removed FirebaseAuthTypes.User | null
        if (!firebaseUser && !jwt) {
            setUser(null);
        }
    });

    return subscriber;
  }, [jwt]);


  // --- CORE AUTH FUNCTIONS ---

  async function signInWithGoogle() { // Removed : Promise<void>
    setLoading(true);
    try {
      // ... Google Sign-In and Firebase logic ...
      
      const response = await GoogleSignin.signIn(); 
      const { idToken } = response; // This line should no longer throw the TS error!
      
      if (!idToken) throw new Error("Google sign-in failed: No ID Token received.");

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      // ... rest of your backend exchange logic ...

    } catch (error) { // Removed : any
      // ... error handling ...
    } finally {
      setLoading(false);
    }
  }


  async function signOut() { /* ... logic ... */ }
  async function refreshUser() { /* ... logic ... */ }


  const value = {
    user,
    jwt,
    loading,
    signInWithGoogle,
    signOut,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 4. The Custom Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
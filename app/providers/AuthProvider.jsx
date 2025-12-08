import React, { createContext, useContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID = 'YOUR_GOOGLE_WEB_CLIENT_ID.apps.googleusercontent.com';
const AuthContext = createContext(undefined);
const TOKEN_KEY = 'flemingo_jwt';

// 2. The Auth Provider Component
export const AuthProvider = ({ children }) => {
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

async function signInWithGoogle() {
  setLoading(true);
  try {
    const response = await GoogleSignin.signIn(); 
    const { idToken } = response;
    
    // 1. Sign in to Firebase locally to get the verified passport
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    const firebaseIdToken = await userCredential.user.getIdToken();

    // 2. Call your NEW backend endpoint
    // Replace BASE_URL with your machine's local IP or domain
    const apiResponse = await axios.post(`${BASE_URL}/auth/login-google`, { 
        idToken: firebaseIdToken 
    });

    const { token, user: returnedUser } = apiResponse.data;

    // 3. Store the JWT securely in Expo SecureStore
    await SecureStore.setItemAsync('flemingo_jwt', token);
    
    setJwt(token);
    setUser(returnedUser);

  } catch (error) {
    console.error("Login full flow failed:", error);
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
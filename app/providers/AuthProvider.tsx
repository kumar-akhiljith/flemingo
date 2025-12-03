import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import * as SecureStore from 'expo-secure-store';
import api, { setAuthToken } from '../services/api';

type User = {
  id: string;
  phone: string;
  name?: string;
  photo_url?: string;
  bio?: string;
};

type AuthContextState = {
  user: User | null;
  jwt: string | null;
  loading: boolean;
  sendOtp: (phone: string) => Promise<void>;
  verifyOtp: (phone: string, code: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextState | undefined>(undefined);

const JWT_KEY = 'flemingo_jwt';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [jwt, setJwt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // load token on startup
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const token = await SecureStore.getItemAsync(JWT_KEY);
        if (token && mounted) {
          setJwt(token);
          setAuthToken(token);
          await loadUser();
        }
      } catch (err) {
        console.warn('AuthProvider init error', err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // helper to load user from backend
  async function loadUser() {
    try {
      const resp = await api.get('/auth/me'); // expects { user }
      setUser(resp.data.user);
    } catch (err) {
      // token might be invalid
      console.warn('loadUser failed', err);
      await clearAuth();
    }
  }

  async function saveToken(token: string) {
    setJwt(token);
    setAuthToken(token);
    await SecureStore.setItemAsync(JWT_KEY, token, { keychainAccessible: SecureStore.ALWAYS_THIS_DEVICE_ONLY });
  }

  async function clearAuth() {
    setJwt(null);
    setUser(null);
    setAuthToken(null);
    await SecureStore.deleteItemAsync(JWT_KEY);
  }

  // Public API: request backend to send OTP to phone
  async function sendOtp(phone: string) {
    // POST /auth/send-otp { phone }
    // backend should invoke Firebase/Twilio and return 200
    await api.post('/auth/send-otp', { phone });
  }

  // Verify OTP with backend. Backend returns { token, user } (JWT issued by your server)
  async function verifyOtp(phone: string, code: string) {
    setLoading(true);
    try {
      const resp = await api.post('/auth/verify-otp', { phone, code });
      // expected: { token: string, user: {...} }
      const { token, user: returnedUser } = resp.data;
      if (!token) throw new Error('No token returned from /auth/verify-otp');
      await saveToken(token);
      setUser(returnedUser || null);
    } finally {
      setLoading(false);
    }
  }

  // Sign out user
  async function signOut() {
    await clearAuth();
    // optional: tell backend to revoke refresh tokens if you have such endpoint
    try {
      await api.post('/auth/logout');
    } catch {
      // ignore network errors
    }
  }

  // Refresh user info from server
  async function refreshUser() {
    setLoading(true);
    try {
      await loadUser();
    } finally {
      setLoading(false);
    }
  }

  const value: AuthContextState = {
    user,
    jwt,
    loading,
    sendOtp,
    verifyOtp,
    signOut,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}

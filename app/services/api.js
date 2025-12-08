// src/services/api.js
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// ✅ Scalable Best Practice: Set a base URL from environment variables
const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BACKEND_URL, 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ The Interceptor: Attaches the token to all outgoing requests
api.interceptors.response.use(
  (response) => response, // Directly return successful responses
  async (error) => {
    // Check if the server returned a 401 (Unauthorized)
    if (error.response && error.response.status === 401) {
      console.log('Token expired or invalid. Signing out...');

      // 1. Clear the invalid token from storage
      await SecureStore.deleteItemAsync('flemingo_jwt');

      // 2. App-wide redirection to login
      // Note: Because we used (auth) route group, this takes the user to login.tsx
      router.replace('/(auth)/login');
    }
    return Promise.reject(error);
  }
);

export default api;
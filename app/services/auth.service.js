// src/services/auth.service.js
import api from './api';

export const AuthService = {
  loginWithGoogle: async (idToken) => {
    // This sends the Firebase token to your verified backend route
    const response = await api.post('/auth/login-google', { idToken });
    return response.data; // Should return { token, user }
  },
  
  refreshProfile: async () => {
    // This request will automatically include the token via interceptor
    const response = await api.get('/user/me');
    return response.data;
  },
};
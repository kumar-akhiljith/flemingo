import api from './api';

export const ChatService = {
  getChats: async () => {
    // This request will automatically carry the token and handle 401s
    const response = await api.get('/chats');
    return response.data;
  }
};
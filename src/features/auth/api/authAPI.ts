// Исправленный импорт httpClient
import httpClient from '@/services/api/httpClient';
import { LoginCredentials, RegisterData, AuthResponse, User } from '@/core/types/auth';

export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await httpClient.post<AuthResponse>('/auth/login', credentials);
    return response.data;
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await httpClient.post<AuthResponse>('/auth/register', data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await httpClient.post('/auth/logout');
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await httpClient.get<User>('/auth/me');
    return response.data;
  }
};
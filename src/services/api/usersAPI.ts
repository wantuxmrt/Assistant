import httpClient from './httpClient';
import { User } from '@/core/types/auth'; // Исправленный импорт

export const usersAPI = {
  getUsers: async (): Promise<User[]> => {
    const response = await httpClient.get<User[]>('/users');
    return response.data;
  },
  
  updateUser: async (id: number, data: Partial<User>): Promise<User> => {
    const response = await httpClient.put<User>(`/users/${id}`, data);
    return response.data;
  },
  
  deleteUser: async (id: number): Promise<void> => {
    await httpClient.delete(`/users/${id}`);
  }
};
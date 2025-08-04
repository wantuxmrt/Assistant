import React, { createContext, useContext, useEffect, useState, FC, ReactNode } from 'react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { User } from '@/core/types/auth'; // Исправленный импорт

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: any) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { login: authLogin, logout: authLogout, register: authRegister, fetchCurrentUser } = useAuth();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await fetchCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Failed to fetch user', error);
      } finally {
        setLoading(false);
      }
    };
    
    initAuth();
  }, [fetchCurrentUser]);

  const login = async (credentials: { email: string; password: string }) => {
    const userData = await authLogin(credentials);
    setUser(userData.user);
  };

  const logout = async () => {
    await authLogout();
    setUser(null);
  };

  const register = async (data: any) => {
    const userData = await authRegister(data);
    setUser(userData.user);
  };

  const contextValue: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
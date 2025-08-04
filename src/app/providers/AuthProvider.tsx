import React, { createContext, useContext, useEffect, useState, FC, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { fetchCurrentUser, loginUser, logoutUser, registerUser } from '@/features/auth/store/authSlice';
import { User } from '@/features/auth/types/authTypes';

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
  const dispatch: AppDispatch = useDispatch();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const resultAction = await dispatch(fetchCurrentUser());
        if (fetchCurrentUser.fulfilled.match(resultAction)) {
          setUser(resultAction.payload);
        }
      } catch (error) {
        console.error('Failed to fetch user', error);
      } finally {
        setLoading(false);
      }
    };
    
    initAuth();
  }, [dispatch]);

  const login = async (credentials: { email: string; password: string }) => {
    setLoading(true);
    try {
      const resultAction = await dispatch(loginUser(credentials));
      if (loginUser.fulfilled.match(resultAction)) {
        setUser(resultAction.payload.user);
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await dispatch(logoutUser());
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: any) => {
    setLoading(true);
    try {
      const resultAction = await dispatch(registerUser(data));
      if (registerUser.fulfilled.match(resultAction)) {
        setUser(resultAction.payload.user);
      }
    } finally {
      setLoading(false);
    }
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
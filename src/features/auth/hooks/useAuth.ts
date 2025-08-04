import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { 
  fetchCurrentUser, 
  loginUser, 
  registerUser, 
  logoutUser 
} from '../store/authSlice';
import { LoginCredentials, RegisterData } from '../types/authTypes';

export const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();

  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    login: (credentials: LoginCredentials) => dispatch(loginUser(credentials)),
    register: (data: RegisterData) => dispatch(registerUser(data)),
    logout: () => dispatch(logoutUser())
  };
};
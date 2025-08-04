import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { Role } from '@/core/types/auth';
import { useAuth } from '@/contexts/AuthContext';

interface PrivateRouteProps {
  children: ReactElement;
  roles?: Role[];
}

const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  const { isAuthenticated, user } = useAuth();
  const userHasRequiredRole = user && roles ? roles.includes(user.role) : true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!userHasRequiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
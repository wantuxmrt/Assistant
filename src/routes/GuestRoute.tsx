import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/app/providers/AuthProvider';

interface GuestRouteProps {
  children: ReactElement;
}

const GuestRoute = ({ children }: GuestRouteProps) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default GuestRoute;
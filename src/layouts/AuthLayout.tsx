import { FC, ReactNode } from 'react';
import '@/assets/styles/authLayout.css';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-background" />
      <div className="auth-content">
        <div className="auth-card">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
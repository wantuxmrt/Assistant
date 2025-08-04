import { useState } from 'react';
import LoginForm from '@/features/auth/components/AuthForm/LoginForm';
import AuthLayout from '@/layouts/AuthLayout';
import { useAuth } from '@/features/auth/hooks/useAuth';

const AuthPage = () => {
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
    } catch (err) {
      setError('Неверные учетные данные');
    }
  };

  return (
    <AuthLayout>
      <div className="auth-container">
        <h1>Вход в систему</h1>
        <LoginForm onSubmit={handleLogin} error={error} />
      </div>
    </AuthLayout>
  );
};

export default AuthPage;
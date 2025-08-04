import AuthLayout from '@/layouts/AuthLayout';
import { useState } from 'react';
import LoginForm from '@/features/auth/components/AuthForm/LoginForm';
import { useAuth } from '@/features/auth/hooks/useAuth';

const AuthPage = () => {
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = async (credentials: { email: string; password: string }) => {
    try {
      await login(credentials);
    } catch (err) {
      setError('Неверные учетные данные');
    }
  };

  return (
    <AuthLayout>
      <div className="auth-container">
        <h1 className="text-2xl font-bold mb-6">Вход в систему</h1>
        <LoginForm onSubmit={handleLogin} error={error} />
      </div>
    </AuthLayout>
  );
};

export default AuthPage;
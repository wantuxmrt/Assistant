import { FormEvent, useState } from 'react';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  error?: string;
}

const LoginForm = ({ onSubmit, error }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {error && <div className="error-message">{error}</div>}
      
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      
      <Input
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      
      <Button type="submit" variant="primary">
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
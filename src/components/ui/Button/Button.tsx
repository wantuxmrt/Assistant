import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  ...props 
}) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export default Button;
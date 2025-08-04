import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
};

export default Input;
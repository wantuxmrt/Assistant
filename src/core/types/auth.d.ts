export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: string;
  organization: string;
  department: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  organization: string;
  department: string;
  position?: string;
}

export type Role = 'admin' | 'user' | 'support' | 'manager';
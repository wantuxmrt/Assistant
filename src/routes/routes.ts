import { ReactNode } from 'react';
import { Role } from '@/core/types/auth';

export interface RouteConfig {
  path: string;
  element: ReactNode;
  isPrivate?: boolean;
  guestOnly?: boolean;
  roles?: Role[];
}

export interface PrivateRouteProps {
  roles?: Role[];
  children: ReactNode;
}

export interface GuestRouteProps {
  children: ReactNode;
}
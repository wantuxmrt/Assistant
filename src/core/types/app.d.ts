export interface Organization {
  id: number;
  name: string;
}

export interface Department {
  id: number;
  name: string;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  role?: Role;
  organization?: string;
  department?: string;
  position?: string;
}

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
  priority: Priority;
  category: ProblemCategory;
  createdAt: string;
  updatedAt: string;
}

export type TicketStatus = 'open' | 'in_progress' | 'resolved' | 'closed';
export type Priority = 'low' | 'medium' | 'high' | 'critical';

export interface ProblemCategory {
  id: number;
  name: string;
}
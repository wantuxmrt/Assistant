import httpClient from './httpClient';
import { 
  Ticket, 
  TicketStatus, 
  Priority, 
  ProblemCategory 
} from '@/core/types/app';

export const getTickets = async (): Promise<Ticket[]> => {
  const response = await httpClient.get('/tickets');
  return response.data as Ticket[];
};

export const getTicketsByStatus = async (status: TicketStatus): Promise<Ticket[]> => {
  const response = await httpClient.get(`/tickets?status=${status}`);
  return response.data as Ticket[];
};

export const getTicketById = async (id: number): Promise<Ticket> => {
  const response = await httpClient.get(`/tickets/${id}`);
  return response.data as Ticket;
};

export const createTicket = async (ticketData: Omit<Ticket, 'id'>): Promise<Ticket> => {
  const response = await httpClient.post('/tickets', ticketData);
  return response.data as Ticket;
};

export const updateTicket = async (id: number, updates: Partial<Ticket>): Promise<Ticket> => {
  const response = await httpClient.patch(`/tickets/${id}`, updates);
  return response.data as Ticket;
};

export const updateTicketStatus = async (id: number, status: TicketStatus): Promise<Ticket> => {
  const response = await httpClient.patch(`/tickets/${id}/status`, { status });
  return response.data as Ticket;
};

export const addCommentToTicket = async (ticketId: number, comment: string): Promise<Ticket> => {
  const response = await httpClient.post(`/tickets/${ticketId}/comments`, { text: comment });
  return response.data as Ticket;
};

export const getProblemCategories = async (): Promise<ProblemCategory[]> => {
  const response = await httpClient.get('/problem-categories');
  return response.data as ProblemCategory[];
};
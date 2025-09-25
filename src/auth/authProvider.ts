import { AuthBindings } from '@refinedev/core';
import { api } from '../api/axios';

export const authProvider: AuthBindings = {
  login: async ({ email, password }) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem(import.meta.env.VITE_AUTH_STORAGE_KEY, data.access_token);
    return { success: true, redirectTo: '/' };
  },
  logout: async () => {
    localStorage.removeItem(import.meta.env.VITE_AUTH_STORAGE_KEY);
    return { success: true, redirectTo: '/login' };
  },
  check: async () => {
    try {
      await api.get('/auth/me');
      return { authenticated: true };
    } catch {
      return { authenticated: false, redirectTo: '/login' };
    }
  },
  getIdentity: async () => {
    const { data } = await api.get('/auth/me');
    return data;
  },
  getPermissions: async () => {
    const { data } = await api.get('/auth/me');
    return data.roles || [];
  },
};

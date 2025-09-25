import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use((config) => {
  const key = import.meta.env.VITE_AUTH_STORAGE_KEY || 'CSP_ADMIN_TOKEN';
  const token = localStorage.getItem(key);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export { instance as api };

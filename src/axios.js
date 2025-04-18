import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4444',
});

instance.interceptors.request.use((config) => {
  config.headers.Athorization = window.localStorage.getItem('token');
  return config;
});

export default instance;

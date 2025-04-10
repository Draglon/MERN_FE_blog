import axios from 'axios';

// http://localhost:4444
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use((config) => {
  config.headers.Athorization = window.localStorage.getItem('token');
  return config;
});

export default instance;

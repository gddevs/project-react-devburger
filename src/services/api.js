import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3003',
  

});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log(`Token armazenado: ${token}`);


  config.headers.authorization = `Bearer ${token}`;

  return config;
});
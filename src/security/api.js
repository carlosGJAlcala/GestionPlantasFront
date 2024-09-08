import axios from 'axios';

const port='8080';
const ip='localhost';
const API_BASE_URL='http://'+ip+':'+port;

// Configuración base de Axios
const api = axios.create({
  baseURL: API_BASE_URL, // Reemplaza con la URL base de tu API
});

// Interceptor para incluir el token en las peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Lee el token desde localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = 'http://localhost:3004/api';
const BASE_URL_DJ = 'http://localhost:8000/api';

export const instanceReact = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const instanceDJ = axios.create({
  baseURL: BASE_URL_DJ,
  withCredentials: true,
})

instanceReact.interceptors.request.use(
  async (config) => {
    const cookies = Cookies.get('auth')
    try {
      const token = cookies;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error al obtener el token:', error);
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
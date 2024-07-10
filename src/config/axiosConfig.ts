import axios from "axios";

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
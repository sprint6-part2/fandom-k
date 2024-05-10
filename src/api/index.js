import axios from 'axios';

export const baseAxios = axios.create({
  baseURL: BACKEND_ENDPOINT,
  timeout: 20000,
});

import axios from 'axios';
import { BACKEND_ENDPOINT } from '@/constants/endpoint';

export const baseAxios = axios.create({
  baseURL: BACKEND_ENDPOINT,
  timeout: 20000,
});

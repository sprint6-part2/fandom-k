import { baseAxios } from './api';
import { BACKEND_ENDPOINT } from '@/constants/endpoint';

export const getDonations = async (pageSize = 10) => {
  const response = await baseAxios.get(`/donations?pageSize=${pageSize}`);

  return response;
};

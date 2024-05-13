import { baseAxios } from './api';
import { loadingErrorMessage } from '@/constants/errorMessage';

export const getDonations = async (pageSize = 10) => {
  try {
    const response = await baseAxios.get(`/donations?pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    throw new Error(loadingErrorMessage);
  }
};

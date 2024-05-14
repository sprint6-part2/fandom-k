import { baseAxios } from './api';
import { contributeErrorMessage } from '@/constants/errorMessage';

export const putContribute = async (id, amount) => {
  try {
    const response = await baseAxios.put(`/donations/${id}/contribute`, {
      amount,
    });
    return response.data;
  } catch (error) {
    throw new Error(contributeErrorMessage);
  }
};

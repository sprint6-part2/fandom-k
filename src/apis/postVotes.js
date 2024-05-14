import { baseAxios } from './api';
import { votesErrorMessage } from '@/constants/errorMessage';

export const postVotes = async (idolId) => {
  try {
    const response = await baseAxios.post('/votes', {
      idolId,
    });
    return response.data;
  } catch (error) {
    throw new Error(votesErrorMessage);
  }
};

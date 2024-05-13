import { baseAxios } from './api';
import { loadingErrorMessage } from '@/constants/errorMessage';

export const getIdolData = async ({
  pageSize = 100,
  keyword = '',
  cursor = '',
}) => {
  const cursorQuery = cursor && `&cursor=${cursor}`;
  try {
    const response = await baseAxios.get(
      `idols?pageSize=${pageSize}${cursorQuery}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(loadingErrorMessage);
  }
};

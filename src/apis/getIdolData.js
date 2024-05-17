import { baseAxios } from './api';
import { loadingErrorMessage } from '@/constants/errorMessage';

export async function getIdolData({ pageSize = 100, cursor = '' }) {
  const cursorQuery = cursor && `&cursor=${cursor}`;
  const response = await baseAxios.get(
    `${base_url}/idols?pageSize=${pageSize}${cursorQuery}`,
  );
  if (response.status !== 200) {
    throw new Error(loadingErrorMessage);
  }
  const data = await response.data;
  return data;
}

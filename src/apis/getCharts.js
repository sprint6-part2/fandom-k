import { baseAxios } from './api';
import { FEMALE } from '@/constants/tabTypes';
import { loadingErrorMessage } from '@/constants/errorMessage';

const getCharts = async ({ gender = FEMALE, pageSize = 10, cursor = null }) => {
  try {
    const response = await baseAxios.get(`/charts/{gender}?gender=${gender}`, {
      params: { pageSize: pageSize, cursor: cursor },
    });
    return response.data;
  } catch (error) {
    throw new Error(loadingErrorMessage);
  }
};

export { getCharts };

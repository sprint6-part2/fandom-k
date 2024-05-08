import { baseAxios } from './api';
import { FEMALE } from '@/constants/tabTypes';

const getCharts = async ({ gender = FEMALE, pageSize = 10, cursor = null }) => {
  const response = await baseAxios.get(
    `/6-2/charts/{gender}?gender=${gender}`,
    { params: { pageSize: pageSize, cursor: cursor } },
  );

  if (400 <= response.status && response.status < 600) {
    throw new Error('서버 에러가 발생했습니다');
  }

  return response.data;
};

export { getCharts };

import { baseAxios } from './api';
import { FEMALE } from '@/constants/tabTypes';

const getCharts = async ({ gender = FEMALE, pageSize = 10, cursor = null }) => {
  try {
    const response = await baseAxios.get(
      `/6-2/charts/{gender}?gender=${gender}`,
      { params: { pageSize: pageSize, cursor: cursor } },
    );
    return response.data;
  } catch (error) {
    throw new Error(
      '후원 목록을 가져오지 못했습니다.\n나중에 다시 시도해주세요.',
    );
  }
};

export { getCharts };

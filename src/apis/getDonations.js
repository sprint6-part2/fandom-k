import { baseAxios } from './api';

export const getDonations = async (pageSize = 10) => {
  try {
    const response = await baseAxios.get(`/donations?pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    throw new Error(
      '후원 목록을 가져오지 못했습니다.\n나중에 다시 시도해주세요.',
    );
  }
};

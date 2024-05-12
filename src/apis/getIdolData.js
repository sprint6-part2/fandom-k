import { baseAxios } from './api';

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
  } catch(error) {
    throw new Error('로딩에 실패하였습니다 \n다시 시도해주세요');
  }
}

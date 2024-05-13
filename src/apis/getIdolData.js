import { baseAxios } from './api';

export async function getIdolData({
  pageSize = 100,
  keyword = '',
  cursor = '',
}) {
  const cursorQuery = cursor && `&cursor=${cursor}`;
  const response = await baseAxios.get(
    `${base_url}/idols?pageSize=${pageSize}${cursorQuery}`,
  );
  if (response.status !== 200) {
    throw new Error('아이돌 정보를 불러오는데 실패했습니다.');
  }
  const data = await response.data;
  return data;
}

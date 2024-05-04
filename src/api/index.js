import axios from 'axios';

// const base_url = process.env.REACT_APP_BASE_URL;
const base_url = 'https://fandom-k-api.vercel.app/6-2';

export async function getData(pageSize = 16, keyword = '') {
  const response = await axios.get(`${base_url}/idols?pageSize=${pageSize}`);
  if (response.status !== 200) {
    throw new Error('아이돌 정보를 불러오는데 실패했습니다.');
  }
  const data = await response.data;
  return data;
}

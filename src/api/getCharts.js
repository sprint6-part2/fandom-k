const fandom_k_api = import.meta.env.VITE_FANDOM_K_API;

const getCharts = async ({
  gender = 'female',
  pageSize = 10,
  cursor = null,
}) => {
  const query = `&pageSize=${pageSize}${cursor ? `&cursor=${cursor}` : ''}`;
  const response = await fetch(
    fandom_k_api + `/6-2/charts/{gender}?gender=${gender}${query}`,
  );

  if (400 <= response.status && response.status < 600) {
    throw new Error('서버 에러가 발생했습니다');
  }

  return await response.json();
};

export { getCharts };

/**
 * 인풋에 입력한 내용을 모두 숫자로 변환
 * @param {Array} arr 배열
 * @param {any} critia 정렬 기준이 되는 속성(또는 키)의 이름
 * @returns {Array} - 정렬된 배열
 */

export const sortByItems = (arr, critia) => {
  return arr.sort((a, b) => {
    if (a[critia] > b[critia]) return 1;
    if (a[critia] < b[critia]) return -1;
    return 0;
  });
};

export const sortByItemsNoDup = (arr, critia) => {
  return [...new Set(sortByItems(arr).map((item) => JSON.stringify(item)))].map(
    (item) => JSON.parse(item),
  );
};

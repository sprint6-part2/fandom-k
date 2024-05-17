/**
 * 배열을 주어진 크기로 나누어서 2차원 배열로 반환하는 함수
 * @param {Array} arr - 나눌 배열
 * @param {number} size - 각 하위 배열의 크기
 * @returns {Array} - 주어진 크기로 나누어진 2차원 배열
 */

export const splitItems = (arr, size) =>
  Array.from(new Array(Math.ceil(arr.length / size)), (_, i) =>
    arr.slice(i * size, i * size + size),
  );

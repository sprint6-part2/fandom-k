/**
 * 로컬스토리지에 저장된 데이터 가져옴
 * @param {string} key
 * @returns
 */
export const getStorage = (key) => {
  return localStorage.getItem(key);
};

/**
 * 로컬스토리지에 데이터 저장
 * @param {string} key
 * @param {any} value
 * @returns
 */
export const setStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

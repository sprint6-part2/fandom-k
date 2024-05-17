/**
 * 주어진 함수를 지정된 시간동안 지연시키는 debounce 함수
 * @param {Function} func - 지연시킬 함수
 * @param {number} delay - 지연 시간 (밀리초)
 * @returns {Function} - 지연된 함수
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

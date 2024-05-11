/**
 * 인풋에 입력한 내용을 모두 숫자로 변환
 * @param {any} value
 * @returns
 */
export const inputToNumber = (value) => {
  const filteredValue = value.replace(/[^0-9]/g, '');
  return filteredValue.toString().padStart(value.length, '1');
};

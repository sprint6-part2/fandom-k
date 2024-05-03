// 정수형을 쉼표 붙인 문자열로 바꿔주는 함수
export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

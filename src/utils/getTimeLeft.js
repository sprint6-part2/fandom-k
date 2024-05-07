//현재 시각과 비교해서 남은 시간을 알려주는 함수
//24시간 이상이면 일수를 24시간 이내면 시간을, 1시간 이내면 분을 표시
export const getTimeLeft = (deadline) => {
  const difference = new Date(deadline) - new Date();
  if (difference <= 0) {
    return '기한 만료';
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  if (days >= 1) {
    return `${days}일 남음`;
  }

  const hours = Math.floor(difference / (1000 * 60 * 60));
  if (hours >= 1) {
    return `${hours}시간 전`;
  }

  const minutes = Math.floor(difference / (1000 * 60));
  return `${minutes}분 전`;
};

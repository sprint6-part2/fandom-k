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
  
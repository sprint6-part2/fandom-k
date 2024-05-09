import React from 'react';
import CustomButton from '@/components/CustomButton';
import Logo from '@/assets/icons/Logo';
import BackgroundImg from '@/assets/images/background1.jpg';
import style from './styles.module.scss';

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={BackgroundImg} alt="아이돌 이미지" />
        <div />
        <Logo width={240} height={50} />
      </div>
      <h3>잘못된 경로</h3>
      <p>존재하지 않는 페이지입니다.</p>
      <CustomButton rounded btnText="랜딩 페이지로" />
    </div>
  );
};

export default NotFoundPage;

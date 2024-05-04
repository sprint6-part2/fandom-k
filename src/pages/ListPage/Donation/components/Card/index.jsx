import React from 'react';
import style from './styles.module.scss';
import ProgressBar from '../ProgressBar';

const Card = ({ item }) => {
  return (
    <>
      <div className={style.topWrapper}>
        <div className={style.gradient} />
        <img src={item.idol.profilePicture} alt={item.idol.name} />
        <button>후원하기</button>
      </div>
      <div>
        <div className={style.title}>
          <span>{item.subtitle}</span>
          <h3>{item.title}</h3>
        </div>
        <ProgressBar
          receivedDonations={item.receivedDonations}
          deadline={item.deadline}
          targetDonation={item.targetDonation}
        />
      </div>
    </>
  );
};

export default Card;

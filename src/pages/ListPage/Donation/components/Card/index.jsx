import React from 'react';
import style from './styles.module.scss';
import ProgressBar from '../ProgressBar';
import CustomButton from '@/components/CustomButton';

const Card = ({ item }) => {
  return (
    <article>
      <div className={style.topWrapper}>
        <div className={style.gradient} />
        <img src={item.idol.profilePicture} alt={item.idol.name} />
        <div className={style.button}>
          <CustomButton btnText="후원하기" />
        </div>
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
    </article>
  );
};

export default Card;

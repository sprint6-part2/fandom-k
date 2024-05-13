import React from 'react';
import style from './styles.module.scss';
import ProgressBar from '../ProgressBar';
import CustomButton from '@/components/CustomButton';
import DonationModal from './DonationModal';
import useModal from '@/hooks/useModal';

const Card = ({ item }) => {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <article>
      <div className={style.topWrapper}>
        <div className={style.gradient} />
        <img src={item.idol.profilePicture} alt={item.idol.name} />
        <div className={style.button}>
          <CustomButton btnText="후원하기" onClick={openModal} />
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
      <DonationModal isOpen={isOpen} closeModal={closeModal} item={item} />
    </article>
  );
};

export default Card;

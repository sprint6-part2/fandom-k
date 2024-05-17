import React from 'react';
import style from './styles.module.scss';
import ProgressBar from '../ProgressBar';
import CustomButton from '@/components/CustomButton';
import DonationModal from '../DonationModal';
import useModal from '@/hooks/useModal';

const Card = ({ item, setIsDonate }) => {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <article>
      <div className={style.top_wrapper}>
        <div className={style.gradient} />
        <img src={item.idol.profilePicture} alt={item.idol.name} />
        <div className={style.button}>
          <CustomButton
            btnText={item.status ? '후원하기' : '목표달성 🎉'}
            onClick={openModal}
            disabled={!item.status}
          />
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
      <DonationModal
        isOpen={isOpen}
        closeModal={closeModal}
        item={item}
        setIsDonate={setIsDonate}
      />
    </article>
  );
};

export default Card;

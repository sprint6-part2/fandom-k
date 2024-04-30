import React from 'react';
import styles from './styles.module.scss';
import { numberWithCommas } from '@/utils/numberWithCommas';
import { getTimeLeft } from '@/utils/getTimeLeft';
import CreditIcon from '@/assets/icons/Credit';

const ProgressBar = ({
  receivedDonations = 0,
  deadline = null,
  targetDonation = 0,
}) => {
  const progressed = (receivedDonations / targetDonation) * 100;
  const credit = numberWithCommas(receivedDonations);
  const countdown = getTimeLeft(deadline);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.credit}>
          <CreditIcon />
          <span className={styles.creditCount}>{credit}</span>
        </div>
        <div className={styles.countdown}>{countdown}</div>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressed}
          style={{ width: `${progressed}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

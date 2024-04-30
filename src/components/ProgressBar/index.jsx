import React from 'react';
import styles from './styles.module.scss';

const ProgressBar = ({credit="6,000",dayLeft=5}) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.credit}>
          <img></img>
          <span>{credit}</span>
        </div>
        <div className={styles.countdown}></div>
      </div>
      <div className={styles.progressBar}>{`${dayLeft}일 남음`}</div>
    </div>
  );
};

export default ProgressBar;

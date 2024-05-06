import React from 'react';
import styles from './styles.module.scss';
import CreditIcon from '@/assets/icons/Credit';

const Credit = () => {
  return (
    <section className={styles.container}>
      <div className={styles.credit}>
        <span>내 크래딧</span>
        <div className={styles.creditInfo}>
          <CreditIcon />
          <span>36,000</span>
        </div>
      </div>
      <div>
        <span className={styles.charge}>충전하기</span>
      </div>
    </section>
  );
};

export default Credit;

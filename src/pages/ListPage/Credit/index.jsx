import React from 'react';
import styles from './styles.module.scss';
import CreditIcon from '@/assets/icons/Credit';
import { motion } from 'framer-motion';

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
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.charge}
        >
          충전하기
        </motion.button>
      </div>
    </section>
  );
};

export default Credit;

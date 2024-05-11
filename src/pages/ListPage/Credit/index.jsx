import React from 'react';
import styles from './styles.module.scss';
import CreditIcon from '@/assets/icons/Credit';
import { motion } from 'framer-motion';
import useModal from '@/hooks/useModal';
import CreditModal from './CreditModal';
import { getCredit } from '@/contexts/CreditContext';

const Credit = () => {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <section className={styles.container}>
      <div className={styles.credit}>
        <span>내 크레딧</span>
        <div className={styles.creditInfo}>
          <CreditIcon />
          <span>{getCredit().toLocaleString('ko-KR')}</span>
        </div>
      </div>
      <div>
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.charge}
          onClick={openModal}
        >
          충전하기
        </motion.button>
      </div>
      <CreditModal isOpen={isOpen} closeModal={closeModal} />
    </section>
  );
};

export default Credit;

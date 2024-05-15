import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Description = ({ backgroundImg, mainImg, title, mainText }) => {
  const text = classNames(styles.text, {
    [styles.end]: title === '이달의 아티스트',
  });
  return (
    <section className={styles.description_section}>
      <div className={styles.background_gradient} />
      <img
        src={backgroundImg}
        alt="아이돌 사진"
        className={styles.background_image}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: 'easeInOut',
          duration: 2,
          x: { duration: 1 },
        }}
        className={text}
      >
        <span className={styles.title}>{title}</span>
        <p className={styles.main_text}>{mainText}</p>
      </motion.div>
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: 'easeInOut',
          duration: 2,
          x: { duration: 1 },
        }}
        src={mainImg}
        alt="사이트 캡쳐"
        className={styles.main_image}
      />
    </section>
  );
};

export default Description;

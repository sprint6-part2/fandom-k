import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

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
      <div className={text}>
        <span className={styles.title}>{title}</span>
        <p className={styles.main_text}>{mainText}</p>
      </div>
      <img src={mainImg} alt="사이트 캡쳐" className={styles.main_image} />
    </section>
  );
};

export default Description;

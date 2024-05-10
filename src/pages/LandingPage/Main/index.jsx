import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Logo from '@/assets/icons/Logo';

const Main = () => {
  return (
    <section className={styles.section}>
      <div className={styles.mainImg}>
        <div>
          <h1 className={styles.Title}>
            내가 좋아하는 아이돌을 <br />
            <div>
              <span>가장 </span>
              <span className={styles.Highlight}>쉽게 덕질 </span>
              <span>하는 방법</span>
            </div>
          </h1>
        </div>
        <div className={styles.contents}>
          <Link to="/list" className={styles.logo}>
            <Logo />
          </Link>
        </div>
        <div className="contactJoin">지금 시작하기</div>
      </div>
    </section>
  );
};

export default Main;

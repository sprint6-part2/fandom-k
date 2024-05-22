import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import userIcon from '@/assets/images/user_icon.png';
import Logo from '@/assets/icons/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <Link to="/list" className={styles.logo}>
          <Logo />
        </Link>
        <Link to="/myPage" className={styles.profile_img}>
          <img src={userIcon} alt="프로필 이미지" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

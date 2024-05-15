import React from 'react';
import GithubLogo from '@/assets/images/github.png';
import style from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <span>
        @ Codeit <span>2024, Inc.</span>
      </span>
      <span>
        <span>6기 2조 </span>Fandom-K
      </span>
      <div>
        <img
          src={GithubLogo}
          width={20}
          onClick={() =>
            window.open('https://github.com/sprint6-part2/fandom-k')
          }
        />
        <span>GitHub</span>
      </div>
    </footer>
  );
};

export default Footer;

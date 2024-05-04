import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { numberWithCommas } from '@/utils/numberWithCommas';
import Profile from '@/components/Profile';

const ChartElement = ({ idol, ranking }) => {
  const name = idol.name;
  const totalVotes = numberWithCommas(idol.totalVotes);

  return (
    <li className={styles.container}>
      <div className={styles.idolInfo}>
        <div className={styles.img}>
          <Profile
            size="sm"
            onClickDelete={() => {
              return console.log('삭제아이콘 누름');
            }}
            imageUrl="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714492902115/seven1.jpeg"
          />
        </div>
        <span className={styles.ranking}>{ranking}</span>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.totalVotes}>{totalVotes}</div>
    </li>
  );
};

export default ChartElement;

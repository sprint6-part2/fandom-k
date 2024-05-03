import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const ChartElement = ({ idol, ranking, lastLineElement = [9, 10] }) => {
  const { name, totalVotes } = idol;

  const isLastLineElement = (arr) => {
    return arr.some((element) => {
      if (element === ranking) {
        return true;
      }
      return false;
    });
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.lastLineElement]: isLastLineElement(lastLineElement),
      })}
    >
      <div className={styles.idolInfo}>
        <div className={styles.img}>
          <img src={null} alt="아이돌 사진" />
        </div>
        <span className={styles.ranking}>{ranking}</span>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.totalVotes}>{totalVotes}</div>
    </div>
  );
};

export default ChartElement;

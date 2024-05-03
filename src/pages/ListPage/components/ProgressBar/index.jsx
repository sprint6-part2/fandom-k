import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { numberWithCommas } from '@/utils/numberWithCommas';
import { getTimeLeft } from '@/utils/getTimeLeft';
import CreditIcon from '@/assets/icons/Credit';

/**
 * 진행바 컴포넌트
 * @param {number} receivedDonations 받은 크레딧
 * @param {number} targetDonation 크레딧 목표
 * @param {string} deadline 마감기한
 */

const ProgressBar = ({
  receivedDonations = 0,
  targetDonation = 0,
  deadline = null,
}) => {
  const progressed = (receivedDonations / targetDonation) * 100; // 현재 몇퍼센트 진행되었는지 계산
  const credit = numberWithCommas(receivedDonations); // 정수형을 콤마를 넣은 문자열로 변화 5000 -> '5,000'
  const countdown = getTimeLeft(deadline); // 마감기한 현재시간과 비교해서 남은 시간 계산

  //prop에 값이 없을 경우 크레딧은 0, 마가기한은 만료됨, 진행바는 100% 설정됩니다.

  return (
    // 높이는 26px로 고정
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.credit}>
          <CreditIcon />
          <span className={styles.creditCount}>{credit}</span>
        </div>
        <div className={styles.countdown}>{countdown}</div>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressed}
          style={{ width: `${progressed}%` }}
        ></div>
      </div>
    </div>
  );
};
ProgressBar.propTypes = {
  receivedDonations: PropTypes.number,
  targetDonation: PropTypes.number,
  deadline: PropTypes.string,
};

export default ProgressBar;

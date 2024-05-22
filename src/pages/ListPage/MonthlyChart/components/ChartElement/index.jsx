import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { numberWithCommas } from '@/utils/numberWithCommas';
import Profile from '@/components/Profile';
import { motion } from 'framer-motion';

/**
 *
 * @param {object} idol 아이돌 객체
 * @param {number} ranking 아이돌 순위
 */
const ChartElement = ({ idol, ranking }) => {
  const { name, profilePicture } = idol;
  const totalVotes = numberWithCommas(idol.totalVotes);

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <div className={styles.idol_info}>
        <div className={styles.img}>
          <Profile size="sm" imageUrl={profilePicture} />
        </div>
        <span className={styles.ranking}>{ranking}</span>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.total_votes}>{totalVotes}</div>
    </motion.li>
  );
};

ChartElement.propTypes = {
  idol: PropTypes.object,
  ranking: PropTypes.number,
};

export default ChartElement;

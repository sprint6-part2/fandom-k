import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FEMALE, MALE } from '@/constants/tabTypes';
import styles from './styles.module.scss';

/**
 *
 * @param {string} currentTab 'female' or 'male'
 * @param {func}} handleTabChange 탭 바꿈 이벤트 핸들러
 */

const Tab = ({ currentTab, handleTabChange }) => {
  const selectGirlTab = () => {
    handleTabChange(FEMALE);
  };
  const selectBoyTab = () => {
    handleTabChange(MALE);
  };

  return (
    <div className={styles.tab}>
      <button
        className={classNames(styles.tab, {
          [styles.current]: currentTab === FEMALE,
        })}
        onClick={selectGirlTab}
      >
        이달의 여자 아이돌
      </button>
      <button
        className={classNames(styles.tab, {
          [styles.current]: currentTab === MALE,
        })}
        onClick={selectBoyTab}
      >
        이달의 남자 아이돌
      </button>
    </div>
  );
};

Tab.propTypes = {
  currentTab: PropTypes.string,
  handleTabChange: PropTypes.func,
};

export default Tab;

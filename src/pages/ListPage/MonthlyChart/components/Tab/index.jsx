import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

/**
 *
 * @param {string} currentTab 'girl' or 'boy'
 * @param {func}} handleTabChange 탭 바꿈 이벤트 핸들러
 */

const Tab = ({ currentTab, handleTabChange }) => {
  const selectGirlTab = () => {
    handleTabChange('girl');
  };
  const selectBoyTab = () => {
    handleTabChange('boy');
  };

  return (
    <div className={styles.tab}>
      <div
        role="button"
        tabIndex="0"
        className={classNames(styles.tab, {
          [styles.current]: currentTab === 'girl',
        })}
        onClick={selectGirlTab}
        onKeyDown={null}
      >
        이달의 여자 아이돌
      </div>
      <div
        role="button"
        tabIndex="-1"
        className={classNames(styles.tab, {
          [styles.current]: currentTab === 'boy',
        })}
        onClick={selectBoyTab}
        onKeyDown={null}
      >
        이달의 남자 아이돌
      </div>
    </div>
  );
};

Tab.propTypes = {
  currentTab: PropTypes.string,
  handleTabChange: PropTypes.func,
};

export default Tab;

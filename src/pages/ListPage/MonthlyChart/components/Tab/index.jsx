import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

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

export default Tab;

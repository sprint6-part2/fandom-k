import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import ChartElement from './components/ChartElement';
import Tab from './components/Tab';

const MonthlyChart = () => {
  const [idolList, setIdolList] = useState([]);
  const [currentTab, setCurrentTab] = useState('girl');
  const chartClass = classNames(styles.chart, {
    [styles.even]: idolList.length % 2 === 0,
  });

  // 탭 선택 핸들러
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    setIdolList([
      { name: '뉴진스 민지', totalVotes: 1000 },
      { name: '뉴진스 민지', totalVotes: 1000 },
      { name: '뉴진스 민지', totalVotes: 1000 },
      { name: '뉴진스 민지', totalVotes: 1000 },
      { name: '뉴진스 민지', totalVotes: 1000 },
      { name: '뉴진스 민지', totalVotes: 1000 },
      { name: '뉴진스 민지', totalVotes: 1000 },
      { name: '뉴진스 민지', totalVotes: 1000 },
      { name: '뉴진스 민지', totalVotes: 1000 },
      { name: '뉴진스 민지', totalVotes: 1000 },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>이달의 차트</h1>
        <button type="button">차트 투표하기</button>
      </div>
      <Tab currentTab={currentTab} handleTabChange={handleTabChange} />
      <ul className={chartClass}>
        {idolList.map((idol, index) => {
          return <ChartElement idol={idol} ranking={index + 1} />;
        })}
      </ul>
      <div className={styles.moreButton}>
        <button type="button">더보기</button>
      </div>
    </div>
  );
};

export default MonthlyChart;

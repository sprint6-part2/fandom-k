import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import ChartElement from './components/ChartElement';
import Tab from './components/Tab';
import { boys, girls } from '@/utils/utils';

const MonthlyChart = () => {
  const [idolList, setIdolList] = useState([]);
  const [currentTab, setCurrentTab] = useState('girl');
  const chartClass = classNames(styles.chart, {
    [styles.even]: idolList.length % 2 === 0,
  });

  //데이터 가져오기
  const handleLoad = () => {
    if (currentTab === 'girl') {
      setIdolList(girls);
    }
    if (currentTab === 'boy') {
      setIdolList(boys);
    }
  };

  // 탭 선택 핸들러
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  //더보기 버튼
  const handleMoreBtn = () => {
    const newArr = [
      ...idolList,
      { id: idolList.length, name: '추가 버튼 눌렀구나', totalVotes: 1000 },
    ];
    setIdolList(newArr);
  };

  useEffect(() => {
    handleLoad();
  }, [currentTab]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>이달의 차트</h1>
        <button type="button">차트 투표하기</button>
      </div>
      <Tab currentTab={currentTab} handleTabChange={handleTabChange} />
      <ul className={chartClass}>
        {idolList.map((idol, index) => {
          return <ChartElement key={idol.id} idol={idol} ranking={index + 1} />;
        })}
      </ul>
      <div className={styles.moreButton}>
        <button type="button" onClick={handleMoreBtn}>
          더보기
        </button>
      </div>
    </div>
  );
};

export default MonthlyChart;

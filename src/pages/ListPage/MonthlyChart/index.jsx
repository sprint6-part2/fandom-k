import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import ChartElement from './components/ChartElement';
import Tab from './components/Tab';
import CustomButton from '@/components/CustomButton';
import Chart from '@/assets/icons/Chart';
import { boys, girls } from './mock';
import useSetNumOfItemsToShow from '@/hooks/useSetNumberOfItemsToShow';

const MonthlyChart = () => {
  const [idolList, setIdolList] = useState([]);
  const [currentTab, setCurrentTab] = useState('girl');
  const chartClass = classNames(styles.chart, {
    [styles.even]: idolList.length % 2 === 0,
  });
  const numOfItemsToShow = useSetNumOfItemsToShow({
    desktop: 10,
    tablet: 5,
    mobile: 5,
  });

  //데이터 가져오기
  const handleLoad = () => {
    if (currentTab === 'girl') {
      setIdolList(girls.slice(0, numOfItemsToShow));
    }
    if (currentTab === 'boy') {
      setIdolList(boys.slice(0, numOfItemsToShow));
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
      {
        id: idolList.length,
        name: '추가 버튼 눌렀구나',
        totalVotes: 1000,
        profilePicture:
          'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714613892649/ive1.jpeg',
      },
    ];
    setIdolList(newArr);
  };

  useEffect(() => {
    handleLoad();
  }, [currentTab, numOfItemsToShow]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>이달의 차트</h2>
        <CustomButton btnText="차트 투표하기" textSize={13} maxHeight={32}>
          <Chart />
        </CustomButton>
      </div>
      <Tab currentTab={currentTab} handleTabChange={handleTabChange} />
      <ul className={chartClass}>
        {idolList.map((idol, index) => {
          return <ChartElement key={idol.id} idol={idol} ranking={index + 1} />;
        })}
      </ul>
      <div className={styles.moreButton}>
        <CustomButton btnText="더보기" onClick={handleMoreBtn} />
      </div>
    </div>
  );
};

export default MonthlyChart;

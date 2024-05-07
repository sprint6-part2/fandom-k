import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import ChartElement from './components/ChartElement';
import Tab from './components/Tab';
import CustomButton from '@/components/CustomButton';
import Chart from '@/assets/icons/Chart';
import useSetNumOfItemsToShow from '@/hooks/useSetNumberOfItemsToShow';
import { getCharts } from '@/api/getCharts';

const MonthlyChart = () => {
  const [idolList, setIdolList] = useState([]);
  const [currentTab, setCurrentTab] = useState('female');
  const chartClass = classNames(styles.chart, {
    [styles.even]: idolList.length % 2 === 0,
  });
  const numOfItemsToShow = useSetNumOfItemsToShow({
    desktop: 10,
    tablet: 5,
    mobile: 5,
  });
  const [nextCursor, setNextCursor] = useState();

  //데이터 가져오기
  const handleLoad = async () => {
    const chart = await getCharts({
      gender: currentTab,
      pageSize: numOfItemsToShow,
      cursor: nextCursor,
    });
    console.log(chart);
    setIdolList(chart.idols);
    setNextCursor(chart.nextCursor);
  };

  // 탭 선택 핸들러
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setNextCursor(null);
  };

  //더보기 버튼
  const handleMoreBtn = async () => {
    const chart = await getCharts({
      gender: currentTab,
      pageSize: numOfItemsToShow,
      cursor: nextCursor,
    });
    const newArr = [...idolList, ...chart.idols];
    setIdolList(newArr);
    setNextCursor(chart.nextCursor)
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

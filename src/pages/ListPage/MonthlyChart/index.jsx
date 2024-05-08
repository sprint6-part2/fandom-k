import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import ChartElement from './components/ChartElement';
import Tab from './components/Tab';
import CustomButton from '@/components/CustomButton';
import Chart from '@/assets/icons/Chart';
import useSetNumOfItemsToShow from '@/hooks/useSetNumberOfItemsToShow';
import useLoad from '@/hooks/useLoad';
import { getCharts } from '@/api/getCharts';
import { FEMALE } from '@/constants/tabTypes';

const MonthlyChart = () => {
  const [idolList, setIdolList] = useState([]);
  const [isLoading, loadingError, handleLoad] = useLoad(getCharts);
  const [currentTab, setCurrentTab] = useState(FEMALE);
  const numOfItemsToShow = useSetNumOfItemsToShow({
    desktop: 10,
    tablet: 5,
    mobile: 5,
  });
  const [nextCursor, setNextCursor] = useState();
  const chartClass = classNames(styles.chart, {
    [styles.even]: idolList.length % 2 === 0,
  });

  //데이터 가져오기
  const handleChartLoad = async () => {
    const chart = await handleLoad({
      gender: currentTab,
      pageSize: numOfItemsToShow,
    });
    if (chart) {
      setIdolList(chart.idols);
      setNextCursor(chart.nextCursor);
    }
  };

  // 탭 선택 핸들러
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setNextCursor(null);
    setIdolList([]);
  };

  //더보기 버튼
  const handleMoreBtn = async () => {
    const chart = await handleLoad({
      gender: currentTab,
      pageSize: numOfItemsToShow,
      cursor: nextCursor,
    });
    if (chart) {
      const newArr = [...idolList, ...chart.idols];
      setIdolList(newArr);
      setNextCursor(chart.nextCursor);
    }
  };

  useEffect(() => {
    handleChartLoad();
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
      {loadingError && <h2 style={{ color: 'white' }}>에러가 발생했습니다</h2>}
      {idolList && (
        <ul className={chartClass}>
          {idolList.map((idol, index) => {
            return (
              <ChartElement key={idol.id} idol={idol} ranking={index + 1} />
            );
          })}
        </ul>
      )}
      {isLoading && <h2 style={{ color: 'white' }}>로딩 중입니다</h2>}

      <div className={styles.moreButton}>
        {nextCursor && (
          <CustomButton btnText="더보기" onClick={handleMoreBtn} />
        )}
      </div>
    </div>
  );
};

export default MonthlyChart;

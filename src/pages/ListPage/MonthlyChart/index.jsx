import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Tab from './components/Tab';
import CustomButton from '@/components/CustomButton';
import Chart from '@/assets/icons/Chart';
import useSetNumOfItemsToShow from '@/hooks/useSetNumberOfItemsToShow';
import useLoad from '@/hooks/useLoad';
import { getCharts } from '@/apis/getCharts';
import { FEMALE } from '@/constants/tabTypes';
import useModal from '@/hooks/useModal';
import MoreButton from './components/MoreButton';
import IdolChart from './components/IdolChart';
import ChartModal from './components/ChartModal';

const MonthlyChart = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [idolList, setIdolList] = useState([]);
  const [isLoading, loadingError, handleLoad] = useLoad(getCharts);
  const [currentTab, setCurrentTab] = useState(FEMALE);
  const numOfItemsToShow = useSetNumOfItemsToShow({
    desktop: 10,
    tablet: 5,
    mobile: 5,
  });
  const [nextCursor, setNextCursor] = useState();

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
        <CustomButton
          btnText="차트 투표하기"
          textSize={13}
          maxHeight={32}
          onClick={openModal}
        >
          <Chart />
        </CustomButton>
      </div>
      <Tab currentTab={currentTab} handleTabChange={handleTabChange} />
      <IdolChart
        isLoading={isLoading}
        loadingError={loadingError}
        idolList={idolList}
      />
      <MoreButton
        isLoading={isLoading}
        loadingError={loadingError}
        idolListLength={idolList.length}
        handleMoreBtn={handleMoreBtn}
        nextCursor={nextCursor}
      />
      {isOpen && (
        <ChartModal
          isOpen={isOpen}
          closeModal={closeModal}
          idolList={idolList}
          currentTab={currentTab}
        />
      )}
    </div>
  );
};

export default MonthlyChart;

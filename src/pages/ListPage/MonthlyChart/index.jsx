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

  //데이터 가져오기
  const handleLoad = () => {
    if (currentTab === 'girl') {
      setIdolList([
        {
          id: 137,
          name: '카리나',
          gender: 'female',
          group: '에스파',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714613612846/aespa1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 138,
          name: '아현',
          gender: 'female',
          group: '베이비몬스터',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714613657089/babymonster1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 139,
          name: '제니',
          gender: 'female',
          group: '블랙핑크',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714613706249/blackpink1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 140,
          name: '민니',
          gender: 'female',
          group: '(여자)아이들',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714613739640/idle1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 141,
          name: '원희',
          gender: 'female',
          group: '아일릿',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714613774880/illit1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 142,
          name: '유나',
          gender: 'female',
          group: '있지',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714613810908/itty1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 143,
          name: '안유진',
          gender: 'female',
          group: '아이브',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714613892649/ive1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 144,
          name: '장원영',
          gender: 'female',
          group: '아이브',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714613965309/ive2.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 145,
          name: '벨',
          gender: 'female',
          group: '키스오브라이프',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714614042940/kissoflife1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 146,
          name: '김채원',
          gender: 'female',
          group: '르세라핌',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714614228075/le1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
      ]);
    }
    if (currentTab === 'boy') {
      setIdolList([
        {
          id: 65,
          name: '원우',
          gender: 'male',
          group: '세븐틴',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714492902115/seven1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 68,
          name: '산',
          gender: 'male',
          group: '에이티즈',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493145628/ateez1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 69,
          name: '정우',
          gender: 'male',
          group: '엔시티127',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493201646/nct1271.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 71,
          name: '재민',
          gender: 'male',
          group: '엔시티드림',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493255267/nctdream1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 72,
          name: '시온',
          gender: 'male',
          group: '엔시티위시',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493292425/nctwish.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 73,
          name: '예준',
          gender: 'male',
          group: '플레이브',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493395422/prave1.png',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 74,
          name: '원빈',
          gender: 'male',
          group: '라이즈',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493431544/rllze1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 75,
          name: '명재현',
          gender: 'male',
          group: '보이넥스트도어',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493483552/boynextdoor%201.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 76,
          name: '필릭스',
          gender: 'male',
          group: '스트레이키즈',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493528093/straykids1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
        {
          id: 77,
          name: '현재',
          gender: 'male',
          group: '더보이즈',
          profilePicture:
            'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1714493561949/theboyz1.jpeg',
          totalVotes: 0,
          teamId: 12,
          rank: 1,
        },
      ]);
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
      { id: idolList.length, name: '추가 버튼 눌렀구나', totalVotes: 1000, },
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

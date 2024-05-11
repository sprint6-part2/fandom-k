import classNames from 'classnames';
import style from './styles.module.scss';

import { useEffect, useState } from 'react';

import IdolFavoriteList from './components/IdolFavoriteList';
import IdolSelectList from './components/IdolSelectList';
import Header from '@/components/Header';
import testData from './mock.json';
import CustomButton from '@/components/CustomButton';
import Plus from '@/assets/icons/Plus';

const ITEM_COUNTS = 100;

const INITIAL_VALUE = {
  allList: [],
  favoriteList: [],
  favoriteIdolList: [],
};

const MyPage = ({ pageSize = ITEM_COUNTS, keyword = '' }) => {
  const [idolList, setIdolList] = useState(INITIAL_VALUE);
  const [cursor, setCursor] = useState();

  const addFavorite = (selectedItem, clicked) => {
    if (clicked) {
      setIdolList({
        ...idolList,
        favoriteList: [{ ...selectedItem }, ...idolList.favoriteList],
      });
    } else {
      setIdolList({
        ...idolList,
        favoriteList: idolList.favoriteList.filter(
          (idol) => idol.id !== selectedItem.id,
        ),
      });
    }
  };

  const deleteFavorite = (id) => {
    setIdolList({
      ...idolList,
      favoriteIdolList: idolList.favoriteIdolList.filter(
        (idol) => idol.id !== id,
      ),
    });
  };

  const submitIdolList = (e) => {
    setIdolList({
      ...idolList,
      favoriteIdolList: [
        ...new Set(
          [...idolList.favoriteList, ...idolList.favoriteIdolList].map((idol) =>
            JSON.stringify(idol),
          ),
        ),
      ].map((idol) => JSON.parse(idol)),
      favoriteList: [],
    });
  };

  // UI용 데이터 호출 함수 제작
  const getIdolList = () => {
    setIdolList({ ...idolList, allList: testData.list });
  };

  // const getIdolList = async (options) => {
  //   let result;
  //   result = await getData(options);
  //   const { list, nextCursor } = result;
  //   if (!options.cursor) {
  //     setIdolList(list);
  //   } else {
  //     setIdolList((prevList) => [...prevList, ...list]);
  //   }

  //   setCursor(nextCursor);
  // };

  // 100개 이상의 데이터가 존재하는 경우, 더 불러오기 위한 함수
  // const getMoreIdolList = () => {
  //   getIdolList({ pageSize, cursor, keyword });
  // };

  useEffect(() => {
    // getIdolList({ pageSize, keyword });
    getIdolList();
  }, []);

  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <IdolFavoriteList
          list={idolList.favoriteIdolList}
          onDelete={deleteFavorite}
        />
        <div className={style.line}></div>
        <IdolSelectList
          list={idolList.allList}
          favoriteList={idolList.favoriteList}
          onClick={addFavorite}
          // onNextData={getMoreIdolList}
        />
        <CustomButton
          btnText="제출하기"
          rounded={true}
          iconTextGap={4}
          onClick={submitIdolList}
        >
          <Plus />
        </CustomButton>
      </main>
    </div>
  );
};

export default MyPage;

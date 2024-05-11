import classNames from 'classnames';
import style from './styles.module.scss';

import { useEffect, useState } from 'react';

import IdolFavoriteList from './components/IdolFavoriteList';
import IdolSelectList from './components/IdolSelectList';
import Header from '@/components/Header';
import testData from './mock.json';
import CustomButton from '@/components/CustomButton';
import Plus from '@/assets/icons/Plus';
import { sortByItems } from '@/utils/sortItems';

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

  const deleteFavorite = (selectedItem) => {
    setIdolList({
      ...idolList,
      allList: sortByItems([...idolList.allList, selectedItem], 'id'),
      favoriteIdolList: idolList.favoriteIdolList.filter(
        (idol) => idol.id !== selectedItem.id,
      ),
    });
  };

  const submitIdolList = () => {
    setIdolList({
      ...idolList,
      favoriteIdolList: [
        ...idolList.favoriteList,
        ...idolList.favoriteIdolList,
      ],
      allList: idolList.allList.filter(
        (item) =>
          !(idolList.favoriteList.filter((i) => item.id === i.id).length > 0),
      ),
      favoriteList: [],
    });
    console.log(idolList.allList);
    console.log(idolList.favoriteList);
    console.log(_(idolList.allList).difference(idolList.favoriteList));
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

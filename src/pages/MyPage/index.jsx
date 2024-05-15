import classNames from 'classnames';
import style from './styles.module.scss';

import { useEffect, useState } from 'react';

import IdolFavoriteList from './components/IdolFavoriteList';
import IdolSelectList from './components/IdolSelectList';
import Header from '@/components/Header';
import testData from './mock.json';
import CustomButton from '@/components/CustomButton';
import Plus from '@/assets/icons/Plus';
import Footer from '@/components/Footer';

import { debounce } from '@/utils/debounce';
import { sortByItems } from '@/utils/sortItems';
import { getStorage, setStorage } from '@/utils/localStorage';

import { useTitle } from '@/hooks/useTitle';

const ITEM_COUNTS = 100;

const INITIAL_VALUE = {
  allList: [],
  favoriteList: [],
};

const MyPage = ({ pageSize = ITEM_COUNTS, keyword = '' }) => {
  useTitle('FANDOM-K | My Page');

  const [idolList, setIdolList] = useState(INITIAL_VALUE);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
    let favoriteIdolList = JSON.parse(getStorage('favoriteIdolList'));

    favoriteIdolList = favoriteIdolList.filter(
      (idol) => idol.id !== selectedItem.id,
    );

    setStorage('favoriteIdolList', JSON.stringify(favoriteIdolList));

    setIdolList({
      ...idolList,
      allList: sortByItems([...idolList.allList, selectedItem], 'id'),
    });
  };

  const submitIdolList = () => {
    let favoriteIdolList = JSON.parse(getStorage('favoriteIdolList'));

    favoriteIdolList = [...idolList.favoriteList, ...favoriteIdolList];

    setStorage('favoriteIdolList', JSON.stringify(favoriteIdolList));

    setIdolList({
      ...idolList,
      allList: idolList.allList.filter(
        (item) =>
          !(idolList.favoriteList.filter((i) => item.id === i.id).length > 0),
      ),
      favoriteList: [],
    });
  };

  // UI용 데이터 호출 함수 제작
  const getIdolList = () => {
    setIdolList({ ...idolList, allList: testData.list });
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const debouncedResize = debounce(handleResize, 200);
    window.addEventListener('resize', debouncedResize);
    window.addEventListener('beforeunload', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('beforeunload', debouncedResize);
    };
  }, [windowWidth]);

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
        <IdolFavoriteList onDelete={deleteFavorite} windowWidth={windowWidth} />
        <div className={style.line}></div>
        <IdolSelectList
          list={idolList.allList}
          favoriteList={idolList.favoriteList}
          onClick={addFavorite}
          windowWidth={windowWidth}
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
      <Footer />
    </div>
  );
};

export default MyPage;

import style from './styles.module.scss';

import { useEffect, useState } from 'react';

import IdolFavoriteList from './components/IdolFavoriteList';
import IdolSelectList from './components/IdolSelectList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { debounce } from '@/utils/debounce';
import { sortByItems } from '@/utils/sortItems';
import { getStorage, setStorage } from '@/utils/localStorage';

import useLoad from '@/hooks/useLoad';
import { getIdolData } from '@/apis/getIdolData';

const ITEM_COUNTS = 100;

const INITIAL_VALUE = {
  allList: [],
  favoriteIdolList: [],
  favoriteList: [],
};

const MyPage = ({ pageSize = ITEM_COUNTS, keyword = '' }) => {
  const [idolList, setIdolList] = useState(INITIAL_VALUE);
  const [isLoading, loadingError, handleLoad] = useLoad(getIdolData);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [init, setInit] = useState(false);
  const [cursor, setCursor] = useState(null);

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
    // setStorage('IdolList', JSON.stringify(idolList));
  };

  const deleteFavorite = (selectedItem) => {
    setIdolList({
      ...idolList,
      favoriteIdolList: idolList.favoriteIdolList.filter(
        (idol) => idol.id !== selectedItem.id,
      ),
      allList: sortByItems([...idolList.allList, selectedItem], 'id'),
    });
    // setStorage('IdolList', JSON.stringify(idolList));
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
    // setStorage('IdolList', JSON.stringify(idolList));
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

  const getIdolList = async (options) => {
    let result;
    result = await handleLoad(options);
    const { list, nextCursor } = result;

    if (!result) {
      setInit(false);
      return;
    }

    if (!options.cursor) {
      setIdolList({ ...idolList, allList: list });
    } else {
      setIdolList((prevList) => {
        return { ...prevList, allList: [...prevList.allList, ...list] };
      });
    }
    setCursor(nextCursor);
    setInit(true);
    // setStorage('IdolList', JSON.stringify(idolList));
  };

  // 100개 이상의 데이터가 존재하는 경우, 더 불러오기 위한 함수
  const getMoreIdolList = () => {
    if (cursor !== null) {
      getIdolList({ pageSize, cursor, keyword });
    }
  };

  useEffect(() => {
    if (!init) {
      const IdolData = JSON.parse(getStorage('IdolList'));

      if (IdolData) {
        setIdolList(IdolData);
        setInit(true);
      } else {
        getIdolList({ pageSize, keyword });
      }
    } else {
      setStorage('IdolList', JSON.stringify(idolList));
    }
  }, [idolList]);

  return (
    <div className={style.container}>
      <Header />

      <main className={style.main}>
        <IdolFavoriteList
          onDelete={deleteFavorite}
          list={idolList.favoriteIdolList}
          windowWidth={windowWidth}
          isLoading={isLoading}
          loadingError={loadingError}
        />
        <div className={style.line}></div>
        <IdolSelectList
          list={idolList.allList}
          favoriteList={idolList.favoriteList}
          onClick={addFavorite}
          windowWidth={windowWidth}
          isLoading={isLoading}
          loadingError={loadingError}
          onSubmit={submitIdolList}
          onNext={getMoreIdolList}
        />
      </main>
      <Footer />
    </div>
  );
};

export default MyPage;

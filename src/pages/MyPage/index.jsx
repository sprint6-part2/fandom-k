import style from './styles.module.scss';

import { useEffect, useState } from 'react';

import IdolFavoriteList from './components/IdolFavoriteList';
import IdolSelectList from './components/IdolSelectList';

import Footer from '@/components/Footer';
import { toast } from 'react-toastify';

import { debounce } from '@/utils/debounce';
import { sortByItems } from '@/utils/sortItems';
import { getStorage, setStorage } from '@/utils/localStorage';

import useLoad from '@/hooks/useLoad';
import { getIdolData } from '@/apis/getIdolData';
import { useTitle } from '@/hooks/useTitle';
import useScrollToTop from '@/hooks/useScrollToTop';

import { motion } from 'framer-motion';

const ITEM_COUNTS = 100;

const INITIAL_VALUE = {
  allList: [],
  favoriteIdolList: [],
  favoriteList: [],
};

const check_collection = (idolList) => {
  if (idolList?.allList && idolList?.favoriteIdolList) {
    const a = Array.from(
      new Set(idolList.favoriteIdolList.map((v) => v['group'])),
    );
    const b = Array.from(new Set(idolList.allList.map((v) => v['group'])));

    return a.filter((x) => !b.includes(x));
  }
  return null;
};

const MyPage = () => {
  useTitle('FANDOM-K | My Page');
  useScrollToTop();

  const [idolList, setIdolList] = useState(INITIAL_VALUE);
  const [collection, setCollection] = useState([]);
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
    toast(`🎉 ${selectedItem.name} 삭제 완료`);
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
    toast(`🎉 목록 추가 완료`);
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
        getIdolList({ pageSize: ITEM_COUNTS, keyword: '' });
      }
    } else {
      setStorage('IdolList', JSON.stringify(idolList));
      setCollection(check_collection(idolList));
    }
  }, [idolList]);

  return (
    <div className={style.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={style.container}
      >
        <main className={style.main}>
          <IdolFavoriteList
            onDelete={deleteFavorite}
            list={idolList.favoriteIdolList}
            windowWidth={windowWidth}
            isLoading={isLoading}
            loadingError={loadingError}
            collection={collection}
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
      </motion.div>
    </div>
  );
};

export default MyPage;

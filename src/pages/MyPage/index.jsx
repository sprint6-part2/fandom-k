import classNames from 'classnames';
import style from './styles.module.scss';
import { getData } from '@/api';

import { useEffect, useState } from 'react';

import IdolFavoriteList from './components/IdolFavoriteList';
import IdolSelectList from './components/IdolSelectList';

const ITEM_COUNTS = 100;

const MyPage = ({ pageSize = ITEM_COUNTS, keyword = '' }) => {
  const [idolList, setIdolList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [favoriteIdolList, setFavoriteIdolList] = useState([]);
  const [cursor, setCursor] = useState();

  const addFavorite = (selectedItem, clicked) => {
    if (clicked) {
      setFavoriteList((list) => [...list, selectedItem]);
    } else {
      setFavoriteList(
        favoriteList.filter((idol) => idol.id !== selectedItem.id),
      );
    }
  };

  const deleteFavorite = (id) => {
    setFavoriteIdolList(favoriteIdolList.filter((idol) => idol.id !== id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFavoriteIdolList((list) =>
      [
        ...new Set(
          [...list, ...favoriteList].map((idol) => JSON.stringify(idol)),
        ),
      ].map((idol) => JSON.parse(idol)),
    );
    setFavoriteList([]);
    // setIdolList([]);
  };

  const getIdolList = async (options) => {
    let result;
    result = await getData(options);
    const { list, nextCursor } = result;
    if (!options.cursor) {
      setIdolList(list);
    } else {
      setIdolList((prevList) => [...prevList, ...list]);
    }

    setCursor(nextCursor);
  };

  // 100개 이상의 데이터가 존재하는 경우, 더 불러오기 위한 함수
  const getMoreIdolList = () => {
    getIdolList({ pageSize, cursor, keyword });
  };

  useEffect(() => {
    getIdolList({ pageSize, keyword });
  }, []);

  return (
    <div className={style.container}>
      <IdolFavoriteList list={favoriteIdolList} onDelete={deleteFavorite} />
      <form onSubmit={onSubmit}>
        <IdolSelectList
          list={idolList}
          onClick={addFavorite}
          onNextData={getMoreIdolList}
        />
        <button>제출하기</button>
      </form>
    </div>
  );
};

export default MyPage;

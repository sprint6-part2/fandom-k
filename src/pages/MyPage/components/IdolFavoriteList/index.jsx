import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';

import { carouselSettings } from './carouselSettings';

import { useState } from 'react';
import style from './styles.module.scss';

const FavoriteIdol = ({ idol, onDelete }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className={style.idolItem}>
      <Profile
        imageUrl={idol.profilePicture}
        selected={selected}
        onClickProfile={() => {
          setSelected(!selected);
        }}
        onClickDelete={() => {
          onDelete(idol.id);
        }}
      />
      <div className={style.idolInfo}>
        <h2>{idol.name}</h2>
        <h3>{idol.group}</h3>
      </div>
    </div>
  );
};

const IdolFavoriteList = ({ list, onDelete, showItemCounts = 8 }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>내가 관심있는 아이돌</h2>
      {list.length > 0 ? (
        <Carousel
          className={style.idolList}
          customSettings={carouselSettings}
          isLongArrow={!!(list.length >= showItemCounts)}
        >
          {list.map((idol, index) => {
            return (
              <div className={style.idolItem} key={idol.id}>
                <FavoriteIdol idol={idol} onDelete={onDelete} />
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div style={{ color: 'white' }}>아무런 값이 없습니다.</div>
      )}
    </div>
  );
};

export default IdolFavoriteList;

import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';

import { carouselSettings } from './carouselSettings';
import { MOBILE_WIDTH } from '@/constants/screenSizes';
import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import { Nothing } from '../Nothing';
import { getStorage, setStorage } from '@/utils/localStorage';

const MOBILE_WIDTH_540 = MOBILE_WIDTH + 165;

setStorage("favoriteIdolList",  JSON.stringify([]));

const FavoriteIdol = ({ idol, onDelete, size }) => {
  return (
    <div className={style.idolItem}>
      <Profile
        imageUrl={idol.profilePicture}
        size={size}
        selected={true}
        onClickDelete={() => {
          onDelete(idol);
        }}
      />
      <div className={style.idolInfo}>
        <h2>{idol.name}</h2>
        <h3>{idol.group}</h3>
      </div>
    </div>
  );
};

const IdolFavoriteList = ({ onDelete, windowWidth }) => {
  const [size, setSize] = useState('md');
  const list = JSON.parse(getStorage("favoriteIdolList"));

  useEffect(() => {
    setSize(windowWidth > MOBILE_WIDTH_540  ? 'md' : 'sm');
  }, [windowWidth])

  return (
    <div className={style.container}>
      <h2 className={style.title}>내가 관심있는 아이돌</h2>
      <div className={style.list_box}>
        {list.length > 0 ? (
          <Carousel
            className={style.idolList}
            customSettings={carouselSettings}
          >
            {list.map((idol) => {
              return (
                <FavoriteIdol idol={idol} onDelete={onDelete} key={idol.id} size={size} />
              );
            })}
          </Carousel>
        ) : (
          <Nothing />
        )}
      </div>
    </div>
  );
};

export default IdolFavoriteList;

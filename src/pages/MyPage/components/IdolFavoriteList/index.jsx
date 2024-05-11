import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';

import { carouselSettings } from './carouselSettings';
import { MOBILE_WIDTH } from '@/constants/screenSizes';
import { useEffect, useState } from 'react';
import { debounce } from '@/utils/debounce';
import style from './styles.module.scss';
import { Nothing } from '../Nothing';

const MOBILE_WIDTH_540 = MOBILE_WIDTH + 165;

const FavoriteIdol = ({ idol, onDelete }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [size, setSize] = useState('md');

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
      setSize(windowWidth > MOBILE_WIDTH_540 ? 'md' : 'sm');
    };
  }, [windowWidth]);

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

const IdolFavoriteList = ({ list, onDelete }) => {
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
                <FavoriteIdol idol={idol} onDelete={onDelete} key={idol.id} />
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

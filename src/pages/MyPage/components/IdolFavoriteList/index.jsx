import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';

import { carouselSettings } from './carouselSettings';
import { MOBILE_WIDTH } from '@/constants/screenSizes';
import { useEffect, useState } from 'react';
import { debounce } from '@/utils/debounce';
import style from './styles.module.scss';
import { Nothing } from '../Nothing';

const FavoriteIdol = ({ idol, onDelete }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const debouncedResize = debounce(handleResize, 200);
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return (
    <div className={style.idolItem}>
      {windowWidth > MOBILE_WIDTH ? (
        <Profile
          imageUrl={idol.profilePicture}
          size="md"
          selected={true}
          onClickProfile={() => {
            setSelected(!selected);
          }}
          onClickDelete={() => {
            onDelete(idol.id);
          }}
        />
      ) : (
        <Profile
          imageUrl={idol.profilePicture}
          size="sm"
          selected={true}
          onClickProfile={() => {
            setSelected(!selected);
          }}
          onClickDelete={() => {
            onDelete(idol.id);
          }}
        />
      )}
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

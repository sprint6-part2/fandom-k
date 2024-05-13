import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';

import { carouselSettings } from './carouselSettings';
import { MOBILE_WIDTH } from '@/constants/screenSizes';
import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import { Nothing } from '../Nothing';
import LoadingError from '@/components/LoadingError';
import Spinner from '@/assets/icons/Spinner';

const MOBILE_WIDTH_540 = MOBILE_WIDTH + 165;

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

const IdolFavoriteList = ({
  onDelete,
  list,
  windowWidth,
  isLoading,
  loadingError,
}) => {
  const [size, setSize] = useState('md');

  useEffect(() => {
    setSize(windowWidth > MOBILE_WIDTH_540 ? 'md' : 'sm');
  }, [windowWidth]);

  return (
    <div className={style.container}>
      <h2 className={style.title}>내가 관심있는 아이돌</h2>
      {isLoading && (
        <div className={style.loading}>
          <Spinner />
        </div>
      )}

      {loadingError && (
        <div className={style.loading}>
          <LoadingError errorMessage={loadingError.message} />
        </div>
      )}
      {!loadingError && (
        <div className={style.list_box}>
          {list.length > 0 ? (
            <Carousel
              customSettings={{
                ...carouselSettings,
                touchMove: list.length > carouselSettings.slidesToShow,
                slidesToScroll:
                  list.length > carouselSettings.slidesToShow
                    ? carouselSettings.slidesToShow
                    : 1,
                infinite: list.length > carouselSettings.slidesToShow,
              }}
            >
              {list.map((idol) => {
                return (
                  <FavoriteIdol
                    idol={idol}
                    onDelete={onDelete}
                    key={idol.id}
                    size={size}
                  />
                );
              })}
            </Carousel>
          ) : (
            <Nothing />
          )}
        </div>
      )}
    </div>
  );
};

export default IdolFavoriteList;

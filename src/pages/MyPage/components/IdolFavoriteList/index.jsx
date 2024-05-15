import MyCarousel from '@/components/MyCarousel';
import Profile from '@/components/Profile';

import { carouselSettings } from './carouselSettings';
import { MOBILE_WIDTH } from '@/constants/screenSizes';
import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import { Nothing } from '../Nothing';
import LoadingError from '@/components/LoadingError';
import Spinner from '@/assets/icons/Spinner';

const MOBILE_WIDTH_540 = MOBILE_WIDTH + 165;

const SEVENTEEN_GROUP_IMAGE =
  'https://i.ytimg.com/vi/78mV3p24FDw/maxresdefault.jpg';

export const checkCondition = (width) => {
  const count =
    carouselSettings.responsive.length +
    1 -
    carouselSettings.responsive.filter((v) => v.breakpoint > width).length;
  return count > 3 ? count : 3;
};

const FavoriteIdol = ({ idol, onDelete, size, groupImage }) => {
  return (
    <div className={style.idolItem}>
      <Profile
        imageUrl={
          groupImage && idol.group === '세븐틴'
            ? groupImage
            : idol.profilePicture
        }
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
  collection,
}) => {
  const [size, setSize] = useState('md');
  const [showCount, setShowCount] = useState(carouselSettings.slidesToShow);
  const seventeen_group_image =
    collection?.includes('세븐틴') && SEVENTEEN_GROUP_IMAGE;

  useEffect(() => {
    setSize(windowWidth > MOBILE_WIDTH_540 ? 'md' : 'sm');
    setShowCount(checkCondition(windowWidth));
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
            <MyCarousel
              customSettings={{
                ...carouselSettings,
                infinite: list.length >= showCount,
                touchMove: list.length > showCount,
              }}
            >
              {list.map((idol) => {
                return (
                  <FavoriteIdol
                    idol={idol}
                    onDelete={onDelete}
                    key={idol.id}
                    size={size}
                    groupImage={seventeen_group_image}
                  />
                );
              })}
            </MyCarousel>
          ) : (
            <Nothing content="좋아하는 아이돌을 추가해주세요." />
          )}
        </div>
      )}
    </div>
  );
};

export default IdolFavoriteList;

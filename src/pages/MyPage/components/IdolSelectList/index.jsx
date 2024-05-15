import { useEffect, useRef, useState } from 'react';

import style from './styles.module.scss';

import { carouselSettings } from './carouselSettings';

import { MOBILE_WIDTH } from '@/constants/screenSizes';

import MyCarousel from '@/components/MyCarousel';
import Profile from '@/components/Profile';
import LoadingError from '@/components/LoadingError';
import CustomButton from '@/components/CustomButton';

import Spinner from '@/assets/icons/Spinner';
import Plus from '@/assets/icons/Plus';
import { Nothing } from '../Nothing';

const MOBILE_WIDTH_540 = MOBILE_WIDTH + 165;

export const checkCondition = (width) => {
  const count =
    carouselSettings.responsive.length +
    1 -
    carouselSettings.responsive.filter((v) => v.breakpoint > width).length;
  return count > 3 ? count : 3;
};

const Idol = ({ idol, onClick, checked, size }) => {
  return (
    <>
      <div className={style.idolItem}>
        <Profile
          imageUrl={idol.profilePicture}
          size={size}
          clicked={checked}
          onClickProfile={() => {
            onClick(idol, !checked);
          }}
        />
        <div className={style.idolInfo}>
          <h2>{idol.name}</h2>
          <h3>{idol.group}</h3>
        </div>
      </div>
    </>
  );
};

const IdolSelectList = ({
  list,
  favoriteList,
  windowWidth,
  onClick,
  isLoading,
  loadingError,
  onSubmit,
  onNext,
}) => {
  const [size, setSize] = useState('lg');
  const [showCount, setShowCount] = useState(carouselSettings.slidesToShow);

  useEffect(() => {
    setSize(windowWidth > MOBILE_WIDTH_540 ? 'lg' : 'md');
    setShowCount(checkCondition(windowWidth));
  }, [windowWidth]);

  return (
    <div className={style.container}>
      <h2 className={style.title}>관심 있는 아이돌을 추가해보세요.</h2>
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
                arrows: list.length >= showCount,
                rows: list.length > showCount * 2 ? 2 : 1,
                infinite: list.length > showCount * 2,
              }}
              isLongArrow
              getMoreData={onNext}
            >
              {list.map((idol) => {
                const checked = favoriteList.map((v) => v.id).includes(idol.id);
                return (
                  <Idol
                    idol={idol}
                    onClick={onClick}
                    key={idol.id}
                    checked={checked}
                    size={size}
                  />
                );
              })}
            </MyCarousel>
          ) : (
            <Nothing content="추가할 수 있는 아이돌이 없습니다." />
          )}
          {list.length > 0 && (
            <CustomButton
              btnText="제출하기"
              rounded={true}
              iconTextGap={4}
              onClick={onSubmit}
            >
              <Plus />
            </CustomButton>
          )}
        </div>
      )}
    </div>
  );
};

export default IdolSelectList;

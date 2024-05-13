import { useEffect, useRef, useState } from 'react';

import style from './styles.module.scss';

import { carouselSettings } from './carouselSettings';

import { MOBILE_WIDTH } from '@/constants/screenSizes';

import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';
import LoadingError from '@/components/LoadingError';
import CustomButton from '@/components/CustomButton';

import Spinner from '@/assets/icons/Spinner';
import Plus from '@/assets/icons/Plus';

const MOBILE_WIDTH_540 = MOBILE_WIDTH + 165;

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
}) => {
  const [size, setSize] = useState('lg');

  useEffect(() => {
    setSize(windowWidth > MOBILE_WIDTH_540 ? 'lg' : 'md');
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
          <Carousel customSettings={carouselSettings} isLongArrow>
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
          </Carousel>
          <CustomButton
            btnText="제출하기"
            rounded={true}
            iconTextGap={4}
            onClick={onSubmit}
          >
            <Plus />
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default IdolSelectList;

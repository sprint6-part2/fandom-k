import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';

import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import { MOBILE_WIDTH } from '@/constants/screenSizes';
import { carouselSettings } from './carouselSettings';

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

const IdolSelectList = ({ list, favoriteList, windowWidth, onClick }) => {
  const [size, setSize] = useState('lg');

  useEffect(() => {
    setSize(windowWidth > MOBILE_WIDTH_540  ? 'lg' : 'md');
  }, [windowWidth])

  return (
    <div className={style.container}>
      <h2 className={style.title}>관심 있는 아이돌을 추가해보세요.</h2>
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
      </div>
    </div>
  );
};

export default IdolSelectList;

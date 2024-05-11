import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';

import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import { debounce } from '@/utils/debounce';
import { MOBILE_WIDTH } from '@/constants/screenSizes';
import { carouselSettings } from './carouselSettings';

const MOBILE_WIDTH_540 = MOBILE_WIDTH + 165;

const Idol = ({ idol, onClick, checked }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [size, setSize] = useState('lg');

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
      setSize(windowWidth > MOBILE_WIDTH_540 ? 'lg' : 'md');
    };
  }, [windowWidth]);

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

const IdolSelectList = ({ list, favoriteList, onClick }) => {
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
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default IdolSelectList;

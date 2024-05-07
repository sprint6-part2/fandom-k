import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';

import { splitItems } from '@/utils/splitItems';

import { useState } from 'react';
import style from './styles.module.scss';
import { carouselSettings } from './carouselSettings';

const Idol = ({ idol, onClick }) => {
  const [clicked, setClicked] = useState(idol.selected);

  return (
    <div>
      <Profile
        imageUrl={idol.profilePicture}
        clicked={clicked}
        onClickProfile={() => {
          setClicked(!clicked);
          onClick(idol, !clicked);
        }}
      />
      <div className={style.idolInfo}>
        <h2>{idol.name}</h2>
        <h3>{idol.group}</h3>
      </div>
    </div>
  );
};

const IdolSelectList = ({ list, onClick, onNextData, showItemCounts = 16 }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>관심 있는 아이돌을 추가해보세요.</h2>

      <Carousel customSettings={carouselSettings} isLongArrow>
        <div className={style.idolList}>
          {list.map((idol) => {
            return <Idol idol={idol} onClick={onClick} key={idol.id} />;
          })}
        </div>
      </Carousel>
    </div>
  );
};

export default IdolSelectList;

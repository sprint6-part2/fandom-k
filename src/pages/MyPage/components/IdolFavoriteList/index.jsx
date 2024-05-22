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

/**
 * @param {object} idol 아이돌에 대한 정보
 * @param {function} onDelete x 아이콘을 클릭했을 때 실행되는 함수
 * @param {string} size 반응형에서 설정할 아이콘 크기
 * @param {string} groupImage 특정 조건에서 실행할 이미지 경로
 * @returns
 */

const FavoriteIdol = ({ idol, onDelete, size, groupImage }) => {
  return (
    <div className={style.idol_item}>
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
      <div className={style.idol_info}>
        <h2>{idol.name}</h2>
        <h3>{idol.group}</h3>
      </div>
    </div>
  );
};

/**
 * @param {function} onDelete x 아이콘을 클릭했을 때 실행되는 함수
 * @param {Object[]} list 아이돌에 대한 정보
 * @param {number} windowWidth 현재 윈도우의 크기
 * @param {boolean} isLoading 로딩 중인지 여부
 * @param {object} loadingError 발생한 에러에 대한 정보
 * @param {string[]} collection 멤버가 다 모인 아이돌의 그룹 이름 리스트
 * @returns
 */

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

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classNames from 'classnames';
import style from './styles.module.scss';
import CheckIcon from '@/assets/icons/Check';
import ProfileXIcon from '@/assets/icons/ProfileX';

/**
 * @param {imageUrl} 이미지 주소
 * @param {size} 프로필 사이즈 (lg, bg, md, sm)
 * @param {clicked} 프로필 클릭 유무 (핑크색)
 * @param {selected} 프로필 선택 유무 (상단 엑스)
 * @param {onClickProfile} 프로필 클릭 함수
 * @param {onClickDelete} 상단 엑스 클릭 함수
 * @returns
 */
const ProFile = ({
  imageUrl = 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
  size = 'lg',
  clicked = false,
  selected = false,
  onClickProfile = () => {},
  onClickDelete = () => {},
}) => {
  const profileClass = classNames(style.profile, style[size]);
  const imageClass = classNames(style.image, style[size]);
  const clickedClass = classNames(style.clicked, style[size]);
  const checkClass = classNames(style.check, style[size]);
  const selectedClass = classNames(style.selected, style[size]);

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onClickDelete();
  };

  return (
    <div className={profileClass} onClick={onClickProfile}>
      {selected && (
        <ProfileXIcon className={selectedClass} onClick={handleDeleteClick} />
      )}
      {clicked && (
        <>
          <div className={clickedClass} />
          <CheckIcon className={checkClass} />
        </>
      )}
      <img className={imageClass} src={imageUrl} alt="프로필 사진" />
    </div>
  );
};

export default ProFile;

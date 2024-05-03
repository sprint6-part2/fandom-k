import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './styles.module.scss';
import CheckIcon from '@/assets/icons/Check';
import ProfileXIcon from '@/assets/icons/ProfileX';

/**
 * 프로필 사진 컴포넌트
 * @param {string} imageUrl 이미지 주소
 * @param {'lg' | 'bg' | 'md' | 'sm'} size 프로필 사이즈
 * @param {boolean} clicked 프로필 클릭 유무 (핑크색)
 * @param {boolean} selected 프로필 선택 유무 (상단 엑스)
 * @param {()=>{}} onClickProfile 프로필 클릭 함수
 * @param {()=>{}} onClickDelete 상단 엑스 클릭 함수
 */
const Profile = ({
  imageUrl,
  size = 'lg',
  clicked = false,
  selected = false,
  onClickProfile,
  onClickDelete,
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

Profile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['lg', 'bg', 'md', 'sm']),
  clicked: PropTypes.bool,
  selected: PropTypes.bool,
  onClickProfile: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default Profile;

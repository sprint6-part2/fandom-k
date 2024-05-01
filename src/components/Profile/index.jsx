import React from 'react';
import classNames from 'classnames';
import style from './styles.module.scss';
import CheckIcon from '@/assets/icons/Check';

const ProFile = ({
  imageUrl = 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
  size = 'lg',
  selected = false,
}) => {
  const profileClass = classNames(style.profile, style[size]);
  const imageClass = classNames(style.image, style[size]);
  const selectClass = classNames(style.selected, style[size]);
  const iconClass = classNames(style.check, style[size]);

  return (
    <div className={profileClass}>
      {selected && (
        <>
          <div className={selectClass} />
          <CheckIcon className={iconClass} />
        </>
      )}
      <img className={imageClass} src={imageUrl} alt="프로필 사진" />
    </div>
  );
};

export default ProFile;

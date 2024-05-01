import React from 'react';
import classNames from 'classnames';
import style from './styles.module.scss';

const ProFile = ({
  imageUrl = 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
  size = 'lg',
}) => {
  const profileClass = classNames(style.profile, size);
  const imageClass = classNames(style.image, size);

  return (
    <div className={profileClass}>
      <img className={imageClass} src={imageUrl} alt="프로필 사진" />
    </div>
  );
};

export default ProFile;

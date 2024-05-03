import React from 'react';
import BackButton from '@/assets/icons/BackButton';
import style from '@/components/ModalMobileHeader/styles.module.scss';
import classNames from 'classnames';

const ModalMobileHeader = ({ title, onClose }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <BackButton className={style.backButton} onClick={onClose} />
    </div>
  );
};

export default ModalMobileHeader;

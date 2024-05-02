import React from 'react';
import BackButton from '@/assets/icons/BackButton';
import style from '@/components/ModalMobileHeader/styles.module.scss';
import classNames from 'classnames';

const ModalMobileHeader = ({ title, onClose }) => {
  return (
    <div className={style.Container}>
      <h2 className={style.Title}>{title}</h2>
      <BackButton className={style.BackButton} onClick={onClose} />
    </div>
  );
};

export default ModalMobileHeader;

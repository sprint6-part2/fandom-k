import React from 'react';
import ModalCloseButton from '@/assets/icons/ModalCloseButton';
import style from '@/components/ModalHeader/styles.module.scss';
import classNames from 'classnames';

const ModalHeader = ({ onClose, title }) => {
  return (
    <div
      className={classNames(style.container, {
        [style.titleActive]: !!title,
      })}
    >
      {title && <h2 className={style.title}>{title}</h2>}
      <ModalCloseButton className={style.closeButton} onClick={onClose} />
    </div>
  );
};

export default ModalHeader;

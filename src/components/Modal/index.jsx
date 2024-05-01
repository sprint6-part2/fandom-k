import React from 'react';
import style from '@/components/Modal/Modal.module.scss';
import ModalCloseButton from '@/assets/icons/ModalCloseButton';
import classNames from 'classnames';

const Modal = ({ isOpen, title, onClose, children, size }) => {
  // isBig은 임시로 둔 변수입니다.
  // 추후에 크기에 따른 값을 설정할 때, 사용할 예정입니다.
  const isBig = size === 'big';
  const isTitle = title !== null;

  return (
    <>
      {isOpen && (
        <div className={classNames(style.ModalBackDrop)} onClick={onClose}>
          <div
            className={classNames(style.ModalView, { [style.big]: isBig })}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={classNames(style.ModalViewHeader, {
                [style.titleActive]: isTitle,
              })}
            >
              {title && <h2>{title}</h2>}
              <ModalCloseButton
                className={classNames(style.ModalCloseButton)}
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

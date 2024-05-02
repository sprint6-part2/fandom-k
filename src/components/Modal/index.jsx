import React from 'react';
import style from '@/components/Modal/styles.module.scss';
import ModalCloseButton from '@/assets/icons/ModalCloseButton';
import BackButton from '@/assets/icons/BackButton';
import classNames from 'classnames';

const Modal = ({ isOpen, title, onClose, children, isFull = false }) => {
  // isBig은 임시로 둔 변수입니다.
  // 추후에 크기에 따른 값을 설정할 때, 사용할 예정입니다.
  const isTitle = title !== null;

  return (
    <div>
      {isOpen && (
        <div className={style.ModalBackDrop} onClick={onClose}>
          <div
            className={classNames(style.ModalView, {
              [style.fullActive]: isFull,
            })}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={classNames(style.ModalViewHeader, {
                [style.titleActive]: isTitle,
                [style.fullActive]: isFull,
              })}
            >
              {title && (
                <h2
                  className={classNames(style.HeaderTitle, {
                    [style.fullActive]: isFull,
                  })}
                >
                  {title}
                </h2>
              )}
              {isFull ? (
                <BackButton
                  className={style.HeaderBackButton}
                  onClick={onClose}
                />
              ) : (
                <ModalCloseButton
                  className={style.HeaderCloseButton}
                  onClick={onClose}
                />
              )}
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

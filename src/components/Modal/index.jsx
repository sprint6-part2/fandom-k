import React from 'react';
import style from '@/components/Modal/styles.module.scss';

const Modal = ({ isOpen, onClose, children }) => {
  // isBig은 임시로 둔 변수입니다.
  // 추후에 크기에 따른 값을 설정할 때, 사용할 예정입니다.

  return (
    <div>
      {isOpen && (
        <div className={style.modalBackDrop} onClick={onClose}>
          <div className={style.modalView} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

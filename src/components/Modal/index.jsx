import React from 'react';
import style from './Modal.module.scss';
import cn from 'classnames';

const Modal = ({ isOpen, title, onClose, children, size }) => {
  const isBig = size === 'big';
  return (
    <>
      {isOpen ? (
        <div className={cn(style.ModalBackDrop, { [style.big]: isBig })}>
          <div className={cn(style.ModalView)}>
            <div className={cn(style.ModalViewHeader)}>
              {title !== null ? <h2>{title}</h2> : null}
              <button onClick={onClose}>X</button>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;

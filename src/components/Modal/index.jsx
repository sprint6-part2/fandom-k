import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import style from '@/components/Modal/styles.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

/**
 * 프로필 사진 컴포넌트
 * @param {boolean} isOpen 모달 활성화 여부
 * @param {Event} onClose 모달 닫기 함수
 * @param {object} children 부모 컴포넌트로부터 받은 내용
 */
const Modal = ({ isOpen, onClose, children }) => {
  const Ref = useRef(null);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className={style.modalBackDrop}
          ref={Ref}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={style.modalView}
            onClick={(e) => e.target === Ref.current && onClose()}
          >
            {children}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>,
    document.body,
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

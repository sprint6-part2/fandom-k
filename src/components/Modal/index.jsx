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
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className={style.modal_back_drop}
          onClick={onClose}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <div
            className={style.modal_view}
            onClick={(e) => {
              return e.stopPropagation();
            }}
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

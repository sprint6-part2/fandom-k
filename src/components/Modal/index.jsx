import React from 'react';
import PropTypes from 'prop-types';
import style from '@/components/Modal/styles.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * 프로필 사진 컴포넌트
 * @param {boolean} isOpen 모달 활성화 여부
 * @param {Event} onClose 모달 닫기 함수
 * @param {object} children 부모 컴포넌트로부터 받은 내용
 */

const Modal = ({ isOpen, onClose, children }) => {
  // isBig은 임시로 둔 변수입니다.
  // 추후에 크기에 따른 값을 설정할 때, 사용할 예정입니다.

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={style.modalBackDrop}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={style.modalView}
            onClick={(e) => {
              return e.stopPropagation();
            }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

Modal.defaultProps = {
  isOpen: false,
};

export default Modal;

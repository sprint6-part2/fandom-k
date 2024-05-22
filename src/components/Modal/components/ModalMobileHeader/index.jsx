import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.module.scss';
import BackButton from '@/assets/icons/BackButton';

/**
 * 모달 헤더 컴포넌트 (특정 페이지용)
 * @param {string} title 헤더 타이틀 값
 * @param {Event} onClose 모달 닫기 함수
 */
const ModalMobileHeader = ({ title, onClose }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <BackButton className={style.back_button} onClick={onClose} />
    </div>
  );
};

ModalMobileHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalMobileHeader;

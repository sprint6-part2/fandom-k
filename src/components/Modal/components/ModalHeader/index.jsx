import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './styles.module.scss';
import ModalCloseButton from '@/assets/icons/ModalCloseButton';

/**
 * 모달 헤더 컴포넌트
 * @param {string} title 헤더 타이틀 값
 * @param {Event} onClose 모달 닫기 함수
 */
const ModalHeader = ({ title, onClose }) => {
  return (
    <div
      className={classNames(style.container, {
        [style.title_active]: !!title,
      })}
    >
      {title && <h2 className={style.title}>{title}</h2>}
      <ModalCloseButton className={style.close_button} onClick={onClose} />
    </div>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ModalHeader;

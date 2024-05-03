import React from 'react';
import ModalCloseButton from '@/assets/icons/ModalCloseButton';
import style from '@/components/ModalHeader/styles.module.scss';
import classNames from 'classnames';

/**
 * 모달 헤더 컴포넌트
 * @param {string} title 헤더 타이틀 값
 * @param {Event} onClose 모달 닫기 함수
 */
const ModalHeader = ({ title, onClose }) => {
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

ModalHeader.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.object.isRequired,
};

ModalHeader.defaultProps = {
  title: '모달',
};

export default ModalHeader;

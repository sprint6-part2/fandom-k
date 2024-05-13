import React from 'react';
import CustomButton from '../CustomButton';
import Logo from '@/assets/icons/Logo';
import PropTypes from 'prop-types';
import style from './styles.module.scss';

/**
 * @param {string} errorMessage 에러메시지 문구
 */
const LoadingError = ({ errorMessage }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={style.error}>
      <Logo />
      <h3>문제가 발생했습니다</h3>
      <p>{errorMessage}</p>
      <CustomButton rounded btnText="페이지 새로고침" onClick={handleRefresh} />
    </div>
  );
};

LoadingError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default LoadingError;

import React from 'react';
import CustomButton from '../CustomButton';
import Logo from '@/assets/icons/Logo';
import PropTypes from 'prop-types';
import style from './styles.module.scss';

/**
 * @param {string} errorMessage
 */
const LoadingError = ({ errorMessage }) => {
  return (
    <div className={style.error}>
      <Logo />
      <h3>문제가 발생했습니다</h3>
      <p>{errorMessage}</p>
      <div className={style.button}>
        <CustomButton rounded btnText="페이지 새로고침" />
      </div>
    </div>
  );
};

LoadingError.propTypes = {
  errorMessage: PropTypes.string,
};

export default LoadingError;

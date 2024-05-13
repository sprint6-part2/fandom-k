// TODO: remove this line after adding default props
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import s from './styles.module.scss';

/**
 * 커스텀 버튼 컴포넌트
 * @param {Event} onClick 클릭 이벤트
 * @param {number} textSize 텍스트 사이즈
 * @param {number} maxHeight 버튼 최대 높이
 * @param {4|8} iconTextGap 아이콘과 텍스트 사이 간격
 * @param {boolean} disabled 버튼 비활성화 여부
 * @param {boolean} rounded 둥근 모서리 여부
 * @param {string} btnText 버튼 내 텍스트 (필수)
 * @param {React.ReactNode} children SVG 아이콘 및 기타 자식 요소
 */
const CustomButton = ({
  onClick = () => {},
  textSize = 14,
  maxHeight = 40,
  iconTextGap = 4,
  disabled = false,
  rounded = false,
  btnText,
  children,
}) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={!disabled ? { scale: 0.9 } : { scale: 1 }}
      className={s.button}
      type="button"
      onClick={onClick}
      disabled={disabled}
      data-rounded={rounded.toString()}
      style={{ height: `${maxHeight}px`, fontSize: `${textSize}px` }}
    >
      {children && (
        <div className={s.icon} style={{ marginRight: `${iconTextGap}px` }}>
          {children}
        </div>
      )}
      {btnText}
    </motion.button>
  );
};

CustomButton.propTypes = {
  textSize: PropTypes.number,
  maxHeight: PropTypes.number,
  iconTextGap: PropTypes.oneOf([4, 8]),
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  btnText: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default CustomButton;

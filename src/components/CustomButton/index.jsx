import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.module.scss';

/**
 * 커스텀 버튼 컴포넌트
 * @param {Event} onClick 클릭 이벤트
 * @param {string} text 버튼 내 텍스트 (필수)
 * @param {number} textSize 텍스트 사이즈
 * @param {number} maxHeight 버튼 최대 높이
 * @param {boolean} hasIcon 아이콘 유무
 * @param {4|8} iconTextGap 아이콘과 텍스트 사이 간격
 * @param {boolean} disabled 버튼 비활성화 여부
 * @param {boolean} rounded 둥근 모서리 여부
 */
const CustomButton = ({
  onClick,
  text,
  textSize,
  maxHeight,
  hasIcon,
  iconSvg,
  iconTextGap,
  disabled,
  rounded,
}) => {
  return (
    <button
      className={s.button}
      type="button"
      onClick={onClick}
      disabled={disabled}
      data-rounded={rounded.toString()}
      style={{ height: `${maxHeight}px`, fontSize: `${textSize}px` }}
    >
      {hasIcon && (
        <div className={s.icon}>
          <img
            src={iconSvg}
            alt={`Button Icon + ${iconSvg}`}
            style={{ marginRight: `${iconTextGap}px` }}
          />
        </div>
      )}
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  textSize: PropTypes.number,
  maxHeight: PropTypes.number,
  hasIcon: PropTypes.bool,
  iconSvg: PropTypes.string,
  iconTextGap: PropTypes.oneOf([4, 8]),
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
};

CustomButton.defaultProps = {
  textSize: 14,
  maxHeight: 40,
  hasIcon: false,
  iconSvg: '',
  iconTextGap: 4,
  disabled: false,
  rounded: false,
};

export default CustomButton;

/* eslint-disable react/forbid-prop-types */
import { useState, Children } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Arrow from '@/assets/icons/Arrow';

const CarouselArrow = ({ onClick, longArrow, hidden }) => {
  const arrowClass = classNames(styles.arrow, {
    [styles.longArrow]: longArrow,
    [styles.hidden]: hidden && !longArrow,
  });
  return (
    <div className={arrowClass} onClick={onClick}>
      <Arrow />
    </div>
  );
};

/**
 * @param {children} children 캐러셀 안에 들어갈 내용
 * @param {object} customSettings 캐러셀 세팅 객체
 * @param {boolean} isLongArrow 캐러셀 화살표 길이 긴지 여부 (마이페이지에서 김)
 * @returns
 */
const Carousel = ({ children, customSettings, isLongArrow = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childCount = Children.count(children);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = childCount === currentIndex + customSettings.slidesToShow;

  const settings = {
    prevArrow: <CarouselArrow longArrow={isLongArrow} hidden={isFirstSlide} />,
    nextArrow: <CarouselArrow longArrow={isLongArrow} hidden={isLastSlide} />,
    ...customSettings,
    afterChange: handleSlideChange,
  };

  return (
    <Slider className={styles.carousel} {...settings}>
      {children}
    </Slider>
  );
};

Carousel.propTypes = {
  children: PropTypes.element.isRequired,
  customSettings: PropTypes.object,
  isLongArrow: PropTypes.bool,
};

Carousel.defaultProps = {
  customSettings: {},
  isLongArrow: false,
};

export default Carousel;

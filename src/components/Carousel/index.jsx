/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, Children } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames';
import styles from './style.module.scss';
import Arrow from '@/assets/icons/Arrow';

const CarouselArrow = ({ onClick, longArrow, hidden }) => {
  const prevArrowClasses = classNames(styles.arrow, {
    [styles.longArrow]: longArrow,
    [styles.hidden]: hidden && !longArrow,
  });
  return (
    <div className={prevArrowClasses} onClick={onClick}>
      <Arrow />
    </div>
  );
};

const Carousel = ({ children, customSettings, isLongArrow = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childCount = Children.count(children);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === childCount - customSettings.slidesToShow;

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

export default Carousel;

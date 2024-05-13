import {
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  MOBILE_WIDTH,
} from '@/constants/screenSizes';

const DESKTOP_WIDTH_1250 = DESKTOP_WIDTH - 670;
const DESKTOP_WIDTH_1075 = DESKTOP_WIDTH_1250 - 175;
const DESKTOP_WIDTH_900 = DESKTOP_WIDTH_1075 - 175;
const TABLET_WIDTH_660 = TABLET_WIDTH - 84;
const TABLET_WIDTH_540 = TABLET_WIDTH_660 - 120;

export const carouselSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 8,
  rows: 2,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 5000,
  initialSlide: -0.01,

  responsive: [
    {
      breakpoint: DESKTOP_WIDTH_1250,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      },
    },
    {
      breakpoint: DESKTOP_WIDTH_1075,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: DESKTOP_WIDTH_900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: TABLET_WIDTH,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: TABLET_WIDTH,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: TABLET_WIDTH_660,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: TABLET_WIDTH_540,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      },
    },
    {
      breakpoint: MOBILE_WIDTH,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      },
    },
  ],
};

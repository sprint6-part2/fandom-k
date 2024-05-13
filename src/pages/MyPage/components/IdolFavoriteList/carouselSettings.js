import {
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  MOBILE_WIDTH,
} from '@/constants/screenSizes';

const DESKTOP_WIDTH_1250 = DESKTOP_WIDTH - 670;
const DESKTOP_WIDTH_1075 = DESKTOP_WIDTH_1250 - 175;
const DESKTOP_WIDTH_900 = DESKTOP_WIDTH_1075 - 175;
const TABLET_WIDTH_660 = TABLET_WIDTH - 84;
const TABLET_WIDTH_580 = TABLET_WIDTH_660 - 80;

export const carouselSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000,
  initialSlide: -0.01,

  responsive: [
    {
      breakpoint: DESKTOP_WIDTH_1250,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: DESKTOP_WIDTH_1075,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: DESKTOP_WIDTH_900,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: TABLET_WIDTH,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: TABLET_WIDTH_660,
      settings: {
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: TABLET_WIDTH_580,
      settings: {
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: MOBILE_WIDTH,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
  ],
};

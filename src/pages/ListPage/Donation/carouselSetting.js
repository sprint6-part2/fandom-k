import { TABLET_WIDTH, MOBILE_WIDTH } from '@/constants/screenSizes';

export const carouselSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1.5,
      },
    },
    {
      breakpoint: TABLET_WIDTH,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
      },
    },
    {
      breakpoint: MOBILE_WIDTH,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
      },
    },
  ],
};

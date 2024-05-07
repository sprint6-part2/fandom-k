import { TABLET_WIDTH, MOBILE_WIDTH } from './screenSizes';

/**
 * 캐러셀 세팅옵션
 */
export const listPageSettings = {
  infinite: false, // 무한으로 넘길 수 있는지 여부
  speed: 500, // 넘기는 속도
  slidesToShow: 4, // 한 화면에 보이는 개수
  slidesToScroll: 2, // 한 번 넘길 때 넘겨지는 개수
  arrows: true, // 화살표 유무
  autoplay: true, // 자동 넘어감 유무
  autoplaySpeed: 5000, // 자동 넘어감 속도

  // 반응형
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

export const myPageSetting = {
  speed: 500,
  arrows: true,
  rows: 2,
  slidesToShow: 6,
  slidesToScroll: 6,

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        rows: 2,
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 800,
      settings: {
        arrows: true,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: TABLET_WIDTH,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: false,
      },
    },
  ],
};

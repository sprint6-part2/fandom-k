export const listPageSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
      },
    },
    {
      breakpoint: 375,
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
  infinite: true,
  speed: 500,
  arrows: true,

  responsive: [
    {
      breakpoint: 375,
      settings: {
        arrows: false,
      },
    },
  ],
};

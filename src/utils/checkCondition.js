import {
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  MOBILE_WIDTH,
} from '@/constants/screenSizes';

export const checkCondition = (width) => {
  return 8 - [1250, 1075, 900, 744, 660, 580].filter((v) => v > width).length;
};

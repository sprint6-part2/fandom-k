import { useEffect, useState } from 'react';
import { TABLET_WIDTH, MOBILE_WIDTH } from '@/constants/screenSizes';

const firstWindowSize = () => {
  if (window.innerWidth > TABLET_WIDTH) {
    return 0;
  } else if (window.innerWidth > MOBILE_WIDTH) {
    return 1;
  } else {
    return 2;
  }
};

const useSetNumOfItemsToShow = ({ desktop, tablet, mobile }) => {
  const numberOfItems = [desktop, tablet, mobile];
  const [numOfItemsToShow, setsNumOfItemsToShow] = useState(
    numberOfItems[firstWindowSize()],
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > TABLET_WIDTH) {
        setsNumOfItemsToShow(numberOfItems[0]);
      } else if (window.innerWidth > MOBILE_WIDTH) {
        setsNumOfItemsToShow(numberOfItems[1]);
      } else {
        setsNumOfItemsToShow(numberOfItems[2]);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return numOfItemsToShow;
};

export default useSetNumOfItemsToShow;

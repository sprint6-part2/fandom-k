import { useEffect, useState } from 'react';

export default function useSetNumOfItemsToShow({ desktop, tablet, mobile }) {
  const numberOfItems = [desktop, tablet, mobile];
  const [numOfItemsToShow, setsNumOfItemsToShow] = useState(numberOfItems[0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 744) {
        setsNumOfItemsToShow(numberOfItems[0]);
      } else if (window.innerWidth > 375) {
        setsNumOfItemsToShow(numberOfItems[1]);
      } else {
        setsNumOfItemsToShow(numberOfItems[2]);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return numOfItemsToShow;
}

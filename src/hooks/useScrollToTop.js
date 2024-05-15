import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    document.getElementById('root').scrollTo(0, 0);
  }, []);

  return null;
};

export default useScrollToTop;

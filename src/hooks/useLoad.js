import { useState } from 'react';


/**
 *
 * @param {func} getData api 요청 함수
 * 
 */
export default function useLoad(getData) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async (...arg) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getData(...arg);
      return result;
    } catch (error) {
      setLoadingError(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, loadingError, handleLoad];
}

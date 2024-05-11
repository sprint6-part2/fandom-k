import { createContext, useContext, useState, useEffect } from 'react';
import { getStorage, setStorage } from '@/utils/localStorage';

const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const [credit, setCredit] = useState(0);

  useEffect(() => {
    const currentCredit = getStorage('credit');
    if (currentCredit) {
      setCredit(parseInt(currentCredit));
    }
  }, []);

  const updateCredit = (newCredit) => {
    setStorage('credit', newCredit);
    setCredit(newCredit);
  };

  return (
    <CreditContext.Provider value={{ credit, updateCredit }}>
      {children}
    </CreditContext.Provider>
  );
};

// credit 값 가져오기
export const getCredit = () => {
  const context = useContext(CreditContext);

  if (!context) {
    throw new Error('반드시 CreditProvider 안에서 사용1');
  }

  return context.credit;
};

// updateCredit 값 가져오기
export const getUpdateCredit = () => {
  const context = useContext(CreditContext);

  if (!context) {
    throw new Error('반드시 CreditProvider 안에서 사용2');
  }

  return context.updateCredit;
};

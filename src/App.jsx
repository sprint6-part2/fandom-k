import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '@/components/Header';
import { Background } from '@/components/Background';

const App = () => {
  const location = useLocation();
  const regxr = /(\/list|\/myPage)/;

  return (
    <>
      <Background>
        {regxr.test(location.pathname) && <Header />}
        <Outlet />
      </Background>
    </>
  );
};

export default App;

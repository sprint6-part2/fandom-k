import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '@/components/Header';
import { Background } from '@/components/Background';

const App = () => {
  const location = useLocation();
  const regxr = /(\/list|\/myPage)/;

  return (
    <>
      {regxr.test(location.pathname) && <Header />}
      <Background>
        <Outlet />
      </Background>
    </>
  );
};

export default App;

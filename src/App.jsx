import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '@/components/Header';
import { Background } from '@/components/Background';

const App = () => {
  const location = useLocation();
  const isListOrMyPage =
    location.pathname.startsWith('/list') ||
    location.pathname.startsWith('/myPage');

  return (
    <Background>
      {isListOrMyPage && <Header />}
      <Outlet />
    </Background>
  );
};

export default App;

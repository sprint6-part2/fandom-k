import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '@/components/Header';
import { Background } from '@/components/Background';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  const isListOrMyPage =
    location.pathname.startsWith('/list') ||
    location.pathname.startsWith('/myPage');

  return (
    <Background>
      {isListOrMyPage && <Header />}
      <Outlet />
      <ToastContainer
        autoClose={1500}
        style={{
          margin: '50px 30px 0 0',
          padding: '0 16px',
        }}
        position="top-right"
      />
    </Background>
  );
};

export default App;

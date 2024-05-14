import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LadingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import MyPage from './pages/MyPage';
import TestPage from './pages/TestPage';
import NotFoundPage from './pages/NotFoundPage';
import { CreditProvider } from '@/contexts/CreditContext';
import { Background } from '@/components/Background';
import Header from '@/components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Background isGradient>
        <LadingPage />
      </Background>
    ),
  },
  {
    path: '/list',
    element: (
      <CreditProvider>
        <ListPage />
      </CreditProvider>
    ),
  },
  {
    path: '/myPage',
    element: (
      <>
        <MyPage />
      </>
    ),
  },
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '*',
    element: (
      <Background isGradient>
        <NotFoundPage />,
      </Background>
    ),
  },
]);

export default router;

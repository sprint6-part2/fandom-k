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

// const location = useLocation();
  

const router = createBrowserRouter([
  {
    path: '/',
    element: <LadingPage />
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
    element: <MyPage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;

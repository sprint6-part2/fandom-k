import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LadingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import MyPage from './pages/MyPage';
import TestPage from './pages/TestPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LadingPage />,
  },
  {
    path: '/list',
    element: <ListPage />,
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
    element: <p>존재하지 않는 페이지입니다.</p>,
  },
]);

export default router;

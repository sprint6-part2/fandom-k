import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import MyPage from './pages/MyPage';
import NotFoundPage from './pages/NotFoundPage';
import { CreditProvider } from '@/contexts/CreditContext';
import App from './App';
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AnimatePresence>
        <App />
      </AnimatePresence>
    ),
    children: [
      {
        path: '/',
        element: <LandingPage />,
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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;

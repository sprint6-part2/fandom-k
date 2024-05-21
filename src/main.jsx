import React from 'react';
import ReactDOM from 'react-dom/client';

import router from './router';

import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'reset-css';
import './styles/normalize.scss';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      autoClose={1500}
      style={{
        margin: '50px 8px 0 0',
        padding: '0 16px',
      }}
      position="top-right"
    />
  </React.StrictMode>,
);

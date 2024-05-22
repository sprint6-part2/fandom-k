import React from 'react';
import ReactDOM from 'react-dom/client';

import router from './router';

import { RouterProvider } from 'react-router-dom';

import 'reset-css';
import './styles/normalize.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

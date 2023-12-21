import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <header>
    <nav>
      <ul>
        <li>Accueil</li>
        <li>À Propos</li>
      </ul>
    </nav>
  </header>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </>
);


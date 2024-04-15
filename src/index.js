import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyRouter from './router/MyRouter.js'
import { BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart.jsx';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
      <Cart />
  </React.StrictMode>
);



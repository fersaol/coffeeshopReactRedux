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
      <div>
        <h1>Welcome to Delicious Coffee Shop</h1>
        <h3>In our coffee shop you will be able to come and enjoy drinking 
          the best coffee in the city while enjoying a great book, and if 
          you get hungry we will serve you a delicious food cooked with 
          lots of love.</h3>
        <h3>Visit us at O'Connell Street or order for taking away, now we also send orders to home!!!</h3>
      </div>


        <BrowserRouter>
          <MyRouter />
        </BrowserRouter>

        <Cart />

  </React.StrictMode>
);



import React from 'react';
import { render } from 'react-dom';

import './index.scss';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom/client'

import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from './contexts/products.context';

import { CartProvider } from './contexts/cart.context';
//const rootElement = document.getElementById('root');

// render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   rootElement
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App/>
          </CartProvider>
    
      </ProductsProvider>

    </UserProvider>




    
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

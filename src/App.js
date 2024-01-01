import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useContext } from 'react';
import { UserContext } from './contexts/user.context';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import Authentication from "./routes/authentication/authentication.component";

import Shop from './routes/shop/shop.comoponet'

import ShopIcon from  './components/cart-icon/cart-icon.component'

const App = () => {

  const  {currentUser} = useContext(UserContext)

  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={currentUser? <Navigation to='/' replace/> : <Authentication/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
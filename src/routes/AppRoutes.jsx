import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Basket from '../pages/Basket';
import NoMatch from '../pages/NoMatch';
import Product from '../pages/Product';
import Test from '../pages/Test';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default AppRoutes;

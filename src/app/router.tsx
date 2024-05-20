// app/RouterComponent.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShoppingCartPage from "../features/cart/ShoppingCartPage";
import { HomePage } from "../features/home/HomePage";
import NavBar from "../components/NavBar";
import { PizzaToppingPage } from "../features/pizza/PizzaToppingPage";

const RouterComponent: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/toppings" element={<PizzaToppingPage />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;

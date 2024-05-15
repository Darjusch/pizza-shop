// app/RouterComponent.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShoppingCartPage from "../features/cart/ShoppingCartPage";
import HomePage from "../features/home/HomePage";
import NavBar from "../features/NavBar";

const RouterComponent: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;

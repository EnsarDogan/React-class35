import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "../pages/Main";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import FavoritesPage from "../pages/FavoritesPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

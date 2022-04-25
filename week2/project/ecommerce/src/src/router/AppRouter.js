import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "../pages/Main";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

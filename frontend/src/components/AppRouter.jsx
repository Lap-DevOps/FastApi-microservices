import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProductsCreate from "./ProductsCreate";
import Product from "./Product";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/product/create" element={<ProductsCreate />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default AppRouter;

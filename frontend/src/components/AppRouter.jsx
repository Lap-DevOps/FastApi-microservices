import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProductsCreate from "./ProductsCreate";
import Product from "./Product";
import Orders from "./Orders";
import { routes } from "../routers/router";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            // key={route.path}
            element={<route.component/>}
            path={route.path}
            exact={route.exact}
          />
        ))}
      </Routes>
    </>
  );
};

export default AppRouter;

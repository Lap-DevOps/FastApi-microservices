import Dashboard from "../components/Dashboard";
import Products from "../components/Products";
import Orders from "../components/Orders";
import ProductsCreate from "../components/ProductsCreate";
import Product from "../components/Product";

export const routes = [
    { path: "/", component: Dashboard, exact: true },
    { path: "/product/create", component: {ProductsCreate}, exact: true },
    { path: "/product/:id", component: Product, exact: true },
    { path: "/orders", component: Orders, exact: true },
    { path: "/products", component: Products, exact: true },
    { path: "*", component: Dashboard, exact: true },
]

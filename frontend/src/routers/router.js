
import ProductsCreate from "../components/ProductsCreate";
import Dashboard from "../components/Dashboard";
export const routes = [
  { path: "/", component: Dashboard, exact: true },
  { path: "/product/create", component: ProductsCreate, exact: true },

];

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsCreate } from "./components/ProductsCreate";
import { Orders } from "./components/Orders";
import Products from "./components/Products";
import Wrapper from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <Navbar />
          </div>
          <div className="row">
            <div className="col-md-3 col-lg-2 p-0 ">
              <Sidebar />
            </div>
            <div className="col-md-9 ms-sm-auto col-lg-10  p-0">
              <AppRouter />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

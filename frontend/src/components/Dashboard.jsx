import React from "react";
import Products from "./Products";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <>
      <main className="col-md-9  col-lg-10 px-md-4 justify-content-between">
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3  border-bottom"
          bis_skin_checked="1"
        >
          <h1 className="h2">Welcome to Dashboard</h1>
          <div className="btn-toolbar mb-2 mb-md-0" bis_skin_checked="1">
            <div className="btn-group me-2" bis_skin_checked="1">
              <Link
                to="/product/create"
                className="btn btn-sm btn-outline-info"
              >
                Add product
              </Link>
            </div>
          </div>
        </div>


        {props.children}
        <Products />
      </main>
    </>
  );
};

export default Dashboard;

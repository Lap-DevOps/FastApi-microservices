import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary"
      bis_skin_checked="1"
    >
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"

        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
        bis_skin_checked="1"
      >
        <div className="offcanvas-header" bis_skin_checked="1">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Pappa pizza delivery service
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div
          className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto"
          bis_skin_checked="1"
        >
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 disabled" href="/">
                Customers
              </a>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Saved reports</span>
            <a
              className="link-secondary"
              href="/"
              aria-label="Add a new report"
            ></a>
          </h6>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 disabled" href="/">
                Current month
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 disabled" href="/">
                Last quarter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 disabled" href="/">
                Social engagement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 disabled" href="/">
                Year-end sale
              </a>
            </li>
          </ul>

          {/* <hr className="my-3"> </hr> */}

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 disabled" href="/">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 disabled" href="/">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

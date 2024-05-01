import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import OrderService from "../API/OrderService";

const Orders = () => {
  const [orders, setOrders] = React.useState([]);

  const fetchOrders = async () => {
    const response = await OrderService.getAll();
    setOrders(response.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h1 className="h2">Welcome to Orders</h1>

      <div className="btn-group me-2 " bis_skin_checked="1">
        <Link to="/product/create" className="btn btn-sm btn-outline-info">
          Add product
        </Link>
      </div>
      <div className="table-responsive small" bis_skin_checked="1">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col" className="col-1 text-center">
                #
              </th>
              <th scope="col" className="col-1 text-center">
                Order id
              </th>
              <th scope="col" className="col-1 text-center">
                Price
              </th>
              <th scope="col" className="col-1 text-center">
                Fee
              </th>
              <th scope="col" className=" col-1 text-center">
                Total
              </th>
              <th scope="col" className="col-1 text-center">
                Quantity
              </th>
              <th scope="col" className="col-1 text-center">
                Status
              </th>
              <th scope="col" className="col-1text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {orders.map((order, index) => (
              <tr key={order.id} onclick="window.location='#';">
                <td className="text-center">{index + 1}</td>
                <td className="text-left">
                  {/* <a href={`/product/${order.id}`}>{order.id}</a> */}
                  {order.id}
                </td>
                <td className="text-center">{order.price}</td>
                <td className="text-center">{order.fee}</td>
                <td className="text-center"> {order.total}</td>
                <td className="text-center"> {order.quantity}</td>
                <td className="text-center"> {order.status}</td>

                <a
                  href="/"
                  className="btn btn-sm btn-outline-danger text-center"
                  // onClick={(e) => (del(product.id))}
                >
                  Delete
                </a>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

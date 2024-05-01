import React, { useEffect } from "react";

import ProductsService from "../API/ProductService";

const Products = () => {
  const [products, setProducts] = React.useState([]);

  const fetchProducts = async () => {
    const response = await ProductsService.getAll();
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="table-responsive small" bis_skin_checked="1">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col" className="col-1 text-center">
                #
              </th>
              <th scope="col" className="col-1 text-center">
                ID
              </th>
              <th scope="col" className="col-7 text-center">
                Name
              </th>
              <th scope="col" className=" col-1 text-center">
                Price
              </th>
              <th scope="col" className="col-1 text-center">
                Quantity
              </th>
              <th scope="col" className="col-1text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {products.map((product, index) => (
              <tr key={product.id} onclick="window.location='#';">
                <td className="text-center">{index + 1}</td>
                <td className="text-left">
                  <a href={`/product/${product.id}`}>{product.id}</a>
                </td>
                <td className="text-center">{product.name}</td>
                <td className="text-center">{product.price}</td>
                <td className="text-center"> {product.quantity_available}</td>

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

export default Products;

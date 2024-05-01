import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import ProductsService from "../API/ProductService";

const ProductsCreate = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();


  const onClick = async () => {
    try {
      await ProductsService.create(name, price, quantity);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-light vh-100">
      <h1 className="text-center pt-4">Create new product</h1>
      <main>
        <div className="col-md-6 offset-md-3 pt-5">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputName"
              placeholder="Product name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInputName">Product name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputPrice"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="floatingInputPrice">Price</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputQuantity"
              placeholder="Quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label htmlFor="floatingInputQuantity">Quantity</label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary mt-5"
            type="submit"
            onClick={onClick}
          >
            Create
          </button>
        </div>
      </main>

    </div>
  );
};

export default ProductsCreate;

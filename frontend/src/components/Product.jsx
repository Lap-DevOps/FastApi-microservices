import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductService from "../API/ProductService";

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    const response = await ProductService.getById(id);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-light vh-100">
      <h1 className="text-center pt-4">Product {id} details:</h1>

      <main>
        <div className="col-md-6 offset-md-3 pt-5">
          <div className="form-floating mb-3">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control value={product.name} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control value={product.price} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control value={product.quantity_available} disabled />
            </Form.Group>
          </div>
          <Button variant="outline-danger" onClick={onClick}>
            Delete
          </Button>{" "}
        </div>
      </main>
    </div>
  );
};

export default Product;

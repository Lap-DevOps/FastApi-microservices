import axios from "axios";

export default class ProductService {
  static async getAll(limit = 15, page = 1) {
    const response = await axios.get("http://localhost:8000/products/", {});
    return response;
  }

  static async getById(id) {
    const response = await axios.get(
      "http://localhost:8000/products/" + id
    );
    return response;
  }

  static async create(name, price, quantity) {
    const response = await axios
      .post(
        "http://localhost:8000/products/",
        { name,price, quantity_available: quantity },
        {}
      )
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(response);
    return response;
  }
}

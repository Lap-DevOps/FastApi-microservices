import axios from "axios";

export default class OrderService {
  static async getAll() {
    const response = await axios.get("http://localhost:8001/orders/", {});
    return response;
  }


}

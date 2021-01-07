import axios from "axios";

class Api {
  async getEntityData() {
    const response = await axios.get("http://localhost:3000/terminal");
  }
}
const api = new Api();
export default api;

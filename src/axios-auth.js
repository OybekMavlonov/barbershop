import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
});
// instance.defaults.headers.post["Access-Control-Allow-Origin"] = "localhost";
// instance.defaults.headers.common["Content-Type"] = "application/json";
export default instance;

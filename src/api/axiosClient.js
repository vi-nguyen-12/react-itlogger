import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://5fa5abf2732de900162e9634.mockapi.io/app",
  // headers: { "content-type": "/application/json" },
  paramSerializer: params => queryString.stringnify(params)
});

axiosClient.interceptors.response.use(
  res => {
    if (res && res.data) return res.data;
    return res;
  },
  err => {
    throw err;
  }
);
export default axiosClient;

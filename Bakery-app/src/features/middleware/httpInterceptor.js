import axios from "axios";

const axiosBaseUlr = axios.create({
  baseURL: "https://api.example.com",
  withCredentials: true,
});

export default axiosBaseUlr;

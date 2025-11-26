import axios from "axios";

const axiosBaseUrl = axios.create({
  baseURL: "https://api.example.com",
  withCredentials: true,
});

axiosBaseUrl.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosBaseUrl.interceptors.response.use(
  function onFulfilled(response) {
    return response;
  },
  function onRejected(error) {
    return Promise.reject(error);
  }
);

const interceptorAxios = axiosBaseUrl;

export default interceptorAxios;

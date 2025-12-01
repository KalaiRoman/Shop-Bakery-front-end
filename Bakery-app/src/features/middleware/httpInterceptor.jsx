// import axios from "axios";

// const axiosBaseUrl = axios.create({
//   baseURL: "https://api.example.com",
//   withCredentials: true,
// });

// axiosBaseUrl.interceptors.request.use(
//   function (config) {
//     const tokens = sessionStorage.getItem("access-user-token");
//     config.url = `${process.env.REACT_APP_BASEURL}${config.url}`;
//     config.withCredentials = false;
//     if (tokens) {
//       config.headers = {
//         ...config.headers,
//         "Content-Type": "application/json",
//         token: "",
//       };
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosBaseUrl.interceptors.response.use(
//   function onFulfilled(response) {
//     return response;
//   },
//   function onRejected(error) {
//     return Promise.reject(error);
//   }
// );
// const interceptorAxios = axiosBaseUrl;
// export default interceptorAxios;

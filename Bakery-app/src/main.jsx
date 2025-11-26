import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MainMiddleware from "./features/middleware/MainMiddleware.jsx";

createRoot(document.getElementById("root")).render(
  <MainMiddleware>
    <App />
  </MainMiddleware>
);

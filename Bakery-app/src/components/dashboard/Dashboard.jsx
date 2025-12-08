import React from "react";
import Hoc from "../../HOC/Hoc";
import { Navigate } from "react-router-dom";
function Dashboard({ props }) {
  if (props?.token) {
    return <div>Dashboard</div>;
  } else {
    return <Navigate to="/" />;
  }
}

export default Hoc(Dashboard);

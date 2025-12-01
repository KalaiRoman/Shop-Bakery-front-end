import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouter() {
  const token = true;
  return token ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRouter;

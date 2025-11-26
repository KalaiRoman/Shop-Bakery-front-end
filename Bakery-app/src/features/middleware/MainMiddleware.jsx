import React from "react";
import ReduxProvider from "./ReduxProvider";

function MainMiddleware({ children }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}

export default MainMiddleware;

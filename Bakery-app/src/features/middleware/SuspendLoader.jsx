import React, { Suspense } from "react";
import Loader from "../uiComponents/Loader";

function SuspendLoader({ children }) {
  return <Suspense fallback={<div><Loader/></div>}>{children}</Suspense>;
}

export default SuspendLoader;

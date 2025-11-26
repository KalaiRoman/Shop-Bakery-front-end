import React, { useEffect } from "react";
import { findMethod, includesMethod } from "./helpers/methods/Methods";
function App() {
  const arr = [10, 20, 30];

  useEffect(() => {
    const check = findMethod(arr, "", 10);

    console.log("Includes Method Check:", check);
  }, []);
  return <div className="text-danger">

    {includesMethod(arr, 10)?"true":"false"}
  </div>;
}

export default App;

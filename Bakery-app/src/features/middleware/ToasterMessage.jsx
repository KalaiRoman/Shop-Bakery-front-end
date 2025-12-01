import React from "react";
import { Toaster } from "react-hot-toast";
function ToasterMessage() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default ToasterMessage;

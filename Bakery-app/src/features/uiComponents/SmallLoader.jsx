import React from "react";
import { ClockLoader } from "react-spinners";

function SmallLoader() {
  return (
    <div>
      <ClockLoader
        color={"white"}
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default SmallLoader;

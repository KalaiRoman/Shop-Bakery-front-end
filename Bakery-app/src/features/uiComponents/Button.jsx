import React from "react";
import SmallLoader from "./SmallLoader";

function Button({ title, className, onClick, loading }) {
  return (
    <div>
      {loading ? (
        <>
          <button className={"loader"} onClick={onClick}>
            <SmallLoader /> <span>{title}</span>
          </button>
        </>
      ) : (
        <>
          <button className={className} onClick={onClick}>
            {title}
          </button>
        </>
      )}
    </div>
  );
}

export default Button;

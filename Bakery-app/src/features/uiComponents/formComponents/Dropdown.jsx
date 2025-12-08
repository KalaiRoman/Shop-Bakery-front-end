import React from "react";
import Form from "react-bootstrap/Form";
function Dropdown({label,required,data}) {
  return (
    <div className="mt-4">
      <div className="mb-2">
        <label>
          {label}
          {required ? <span className="text-danger ms-1 xs">*</span> : ""}
        </label>
      </div>
      <div>
        <select aria-label="Default select example">
         {data?.map((item,index)=>{
          return(
            <option>{item?.category}</option>
          )
         })}
         
        </select>
      </div>
    </div>
  );
}

export default Dropdown;

import React from "react";
import Select from "react-select";

function InputDropdown(props) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <Select
        value={"chocolate"}
        onChange={""}
        options={options}
        placeholder={props.placeholder || "welcome"}
        styles={{ container: (base) => ({ ...base, width: "200px" }) }}
      />
    </div>
  );
}

export default InputDropdown;

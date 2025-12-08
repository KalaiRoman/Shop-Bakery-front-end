import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../helpers/tokens/Tokens";

function Hoc(WrappedComponent) {
  return (props) => {
    const token = getToken();
    const navigate = useNavigate();
    
    const paramsData = {
      navigate: navigate,
      token: token,
      ...props,
    };
    return <WrappedComponent props={paramsData} />;
  };
}

export default Hoc;

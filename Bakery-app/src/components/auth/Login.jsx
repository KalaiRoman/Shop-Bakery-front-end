import React, { useEffect, useState } from "react";
import { Loginimage } from "../../assets/images";
import InputForm from "../../features/uiComponents/formComponents/InputForm";
import icons_UI from "../../assets/icons/Icons";
import Button from "../../features/uiComponents/Button";
import { LoginFormInitialState } from "../../features/constants/InitialFormState";
import Hoc from "../../HOC/Hoc";
import { navigateMethod } from "../../helpers/functionMethods/Methods";
import { Navigate } from "react-router-dom";
import { setToken } from "../../helpers/tokens/Tokens";
import {
  CustomToasterOptions,
  ToastSaveMessage,
} from "../../helpers/ToasterMessages/ToaserMessage";
function Login({ props }) {
  // useEffect(() => {
  //   ToastMessageSucess("welcome");

  //   CustomToasterOptions("kalak");
  // }, []);

  const [user, setUser] = useState(LoginFormInitialState);
  const [loading, setLoading] = useState(false);
  const { email, password } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      setToken("kalai");
      CustomToasterOptions("Login Successfully...");
      setTimeout(() => {
        props.navigate("/dashboard");
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
  };

  const signupPage = () => {
    navigateMethod(props?.navigate, "/signup");
  };

  if (!props?.token) {
    return (
      <div className="main-login">
        <div className="inside-login">
          <div className="left-login">
            <img src={Loginimage} alt="Login Image" className="login-image" />
            <div className="circle-1"></div>
            <div className="circle-2"></div>
          </div>
          <div className="right-login">
            <div className="right-login-form">
              <div className="xxl fw-md mt-4 text-center">Login 👩🏻‍💻</div>
              <div>
                <InputForm
                  label={"Email ID"}
                  placeholder={"Enter your email ID"}
                  required={true}
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="password-input-icon">
                <InputForm
                  label={"Password"}
                  placeholder={"Enter your Password..."}
                  required={true}
                  value={password}
                  onChange={handleChange}
                />
                <div className="password-icon">{icons_UI?.eyeopen}</div>
              </div>

              <div className="mt-4">
                <Button
                  title="Login"
                  className="login-btn"
                  onClick={handlesubmit}
                  loading={loading}
                ></Button>
              </div>
              <div className="mt-4 text-center label">or Create an account</div>
              <div className="mt-4 text-center">
                Don't have an account?{" "}
                <span className="green-text fw-md cursor" onClick={signupPage}>
                  Sign up
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/dashboard" />;
  }
}

export default Hoc(Login);

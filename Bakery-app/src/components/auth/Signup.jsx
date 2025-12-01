import React, { useEffect, useState } from "react";
import { Signupimage } from "../../assets/images";
import InputForm from "../../features/uiComponents/formComponents/InputForm";
import icons_UI from "../../assets/icons/Icons";
import Button from "../../features/uiComponents/Button";
import { Col, Row } from "react-bootstrap";
import { registerFormInitialState } from "../../features/constants/InitialFormState";
import ImageUpload from "../../features/uiComponents/formComponents/ImageUpload";
import { navigateMethod } from "../../helpers/functionMethods/Methods";
import Hoc from "../../HOC/Hoc";
import { Navigate } from "react-router-dom";
function Signup({ props }) {
  // useEffect(() => {
  //   ToastMessageSucess("welcome");
  //   ToastSaveMessage(null, true, saveSettings("settings"));
  //   CustomToasterOptions("kalak");
  // }, []);

  const [user, setUser] = useState(registerFormInitialState);
  const { email, password, name, confirmPassword, avatar } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const loginPage = () => {
    navigateMethod(props?.navigate, "/");
  };

  if (!props.token) {
    return (
      <div className="main-signup">
        <div className="inside-signup">
          <div className="left-signup">
            <img
              src={Signupimage}
              alt="signup Image"
              className="signup-image"
            />
            <div className="circle-1"></div>
            <div className="circle-2"></div>
          </div>
          <div className="right-signup">
            <div className="right-signup-form">
              <div className="xxl fw-md mt-4 text-center">Signup 👩🏻‍💻</div>
              <Row>
                <Col>
                  <div>
                    <InputForm
                      label={"User Name"}
                      placeholder={"Enter your User Name"}
                      required={true}
                      value={name}
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                </Col>

                <Col>
                  <InputForm
                    label={"Email ID"}
                    placeholder={"Enter your Email ID"}
                    required={true}
                    value={email}
                    onChange={handleChange}
                  />
                </Col>
              </Row>

              <div>
                <Row>
                  <Col>
                    <div className="password-input-icon">
                      <InputForm
                        label={"Password"}
                        placeholder={"Enter your Password"}
                        required={true}
                        value={password}
                        name="password"
                        onChange={handleChange}
                      />
                      <div className="password-icon">{icons_UI?.eyeopen}</div>
                    </div>
                  </Col>

                  <Col>
                    <div className="password-input-icon">
                      <InputForm
                        label={"Confirm Password"}
                        placeholder={"Enter your confirm Password"}
                        required={true}
                        value={confirmPassword}
                        onChange={handleChange}
                      />
                      <div className="password-icon">{icons_UI?.eyeopen}</div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="mt-3">
                <ImageUpload label={"Upload Avatar"} />
              </div>

              <div className="mt-4">
                <Button title="Signup" className="login-btn"></Button>
              </div>
              <div className="mt-3 text-center label">or</div>
              <div className="mt-2 text-center">
                Already have an account?{" "}
                <span className="green-text fw-md cursor" onClick={loginPage}>
                  Login
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

export default Hoc(Signup);

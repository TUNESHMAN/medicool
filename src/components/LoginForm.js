import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, message, Spin } from "antd";
import "./form.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    props.form.validateFieldsAndScroll((error, values) => {
      const loginPayload = {
        email: values.email,
        password: values.password,
      };
      if (!error) {
        message.loading(`You are logging in...`, 1.5);
        axios
          .post(
            "https://drug-prescription-app.herokuapp.com/api/v1/users/login",
            loginPayload
          )
          .then((res) => {
            message.success(`Successful login attempt`, 1.5);
            setLoading(false);
            localStorage.setItem("token", res.data.user.token);
            props.history.push("/prescription");
          })
          .catch((err) => {
            setLoading(false);
            message.error(
              `Unsuccessful attempt, Please create an account or try again`,
              2.0
            );
          });
      }
    });
  };
  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched,
    validateFields,
  } = props.form;

  useEffect(() => {
    validateFields();
  }, [validateFields]);

  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some((field) => fieldsError[field]);
  }

  // Only show error after a field is touched.
  const emailError = isFieldTouched("email") && getFieldError("email");
  const passwordError = isFieldTouched("password") && getFieldError("password");
  return (
    <div className="form-container">
      <Navbar/>
      {/* <div
        className="form-component"
        style={{
          backgroundImage: `url(${loginBackground})`,
        }}
      ></div> */}
      <div className="form-div">
        <Spin spinning={loading}>
          <h1 className="register-header">Sign-in</h1>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
              name="email"
              validateStatus={emailError ? "error" : ""}
              hasFeedback
              help={emailError || ""}
            >
              {getFieldDecorator("email", {
                //rules are for the form validation
                rules: [
                  { required: true, message: "Please input a email!" },
                  {
                    type: "email",
                    message: "Invalid email",
                  },
                ],
              })(
                <Input
                  name="email"
                  //form icon in the email field, change type for different icons, see antdesign docs
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              )}
            </Form.Item>
            <Form.Item
              name="password"
              validateStatus={passwordError ? "error" : ""}
              hasFeedback
              help={passwordError || ""}
            >
              {getFieldDecorator("password", {
                //rules are for the form validation
                rules: [
                  { required: true, message: "Please input a password!" },
                  {
                    type: "string",
                    message: "Invalid password",
                  },
                ],
              })(
                <Input
                  name="password"
                  type="password"
                  //form icon in the email field, change type for different icons, see antdesign docs
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={hasErrors(getFieldsError())}
              >
                Login
              </Button>
              <span className="auth-text">Don't have an account?</span>
              <NavLink to="/register">
                <span className="auth-text2"> Sign-up here!</span>
              </NavLink>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  );
};
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(LoginForm);
export default WrappedNormalLoginForm;

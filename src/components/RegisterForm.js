import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, InputNumber, message, Spin } from "antd";
import "./form.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import registerBackground from "../images/registerbackground.jpg";

const RegisterForm = (props) => {
  const [formAge, setFormAge] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (value) => {
    setFormAge(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // make a post request to register endpoint
    props.form.validateFieldsAndScroll((error, values) => {
      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        age: formAge,
        email: values.email,
        password: values.password,
      };

      if (!error) {
        axios
          .post(
            `https://drug-prescription-app.herokuapp.com/api/v1/users/register`,
            payload
          )
          .then((res) => {
            setLoading(false);
            message.success(`Your registration attempt was successful`, 2.0);
            props.history.push(`/login`);
          })
          .catch((err) => {
            setLoading(false);
            message.error(
              `Your registration attempt was unsuccessful, please try again`,
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
  const firstNameError =
    isFieldTouched("firstName") && getFieldError("firstName");
  const lastNameError = isFieldTouched("lastName") && getFieldError("lastName");
  const ageError = isFieldTouched("age") && getFieldError("age");
  const emailError = isFieldTouched("email") && getFieldError("email");
  const passwordError = isFieldTouched("password") && getFieldError("password");
  return (
    <div>
      {/* <div
        className="form-component"
        style={{
          backgroundImage: `url(${registerBackground})`,
        }}
      ></div> */}
      <div className="form-div">
        <Spin spinning={loading}>
          <h1 className="register-header">Sign-up</h1>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
              name="firstName"
              validateStatus={firstNameError ? "error" : ""}
              hasFeedback
              help={firstNameError || ""}
            >
              {getFieldDecorator("firstName", {
                //rules are for the form validation
                rules: [
                  { required: true, message: "Please enter First name" },
                  {
                    type: "string",
                    message: "Enter a valid name",
                  },
                ],
              })(
                <Input
                  name="firstName"
                  //form icon in the email field, change type for different icons, see antdesign docs
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="First Name"
                />
              )}
            </Form.Item>
            <Form.Item
              name="lastName"
              validateStatus={lastNameError ? "error" : ""}
              hasFeedback
              help={lastNameError || ""}
            >
              {getFieldDecorator("lastName", {
                //rules are for the form validation
                rules: [
                  { required: true, message: "Please enter Last name" },
                  {
                    type: "string",
                    message: "Enter a valid name",
                  },
                ],
              })(
                <Input
                  name="lastName"
                  //form icon in the email field, change type for different icons, see antdesign docs
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Last Name"
                />
              )}
            </Form.Item>
            <Form.Item
              name="age"
              validateStatus={ageError ? "error" : ""}
              hasFeedback
              help={ageError || ""}
            >
              {getFieldDecorator("age", {
                //rules are for the form validation
                rules: [
                  { required: true, message: "How old are you?" },
                  {
                    type: "number",
                    message: "Age is not valid",
                  },
                ],
              })(
                <InputNumber
                  name="age"
                  min={1}
                  max={100}
                  setFieldsValue={formAge}
                  onChange={handleChange}
                  //form icon in the email field, change type for different icons, see antdesign docs
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Age"
                />
              )}
            </Form.Item>
            <Form.Item
              name="email"
              validateStatus={emailError ? "error" : ""}
              hasFeedback
              help={emailError || ""}
            >
              {getFieldDecorator("email", {
                //rules are for the form validation
                rules: [
                  { required: true, message: "Please input a valid email!" },
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
                  {
                    required: true,
                    message: "Please input a correct password!",
                  },
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
                Register
              </Button>
              <span className="auth-text"> Have an account?</span>

              <NavLink to="/login">
                <span className="auth-text2"> Sign-in here!</span>
              </NavLink>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  );
};
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  RegisterForm
);
export default WrappedNormalLoginForm;

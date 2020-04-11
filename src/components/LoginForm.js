import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button } from "antd";
import "./form.css";
import axios from "axios";

const LoginForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((error, values) => {
      const loginPayload = {
        email: values.email,
        password: values.password,
      };
      if (!error) {
        console.log(loginPayload);
        axios
          .post(
            "https://drug-prescription-app.herokuapp.com/api/v1/users/login",
            loginPayload
          )
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.user.token);
            props.history.push("/prescription");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
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
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
          />
        )}
      </Form.Item>
      <Form.Item>
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
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(LoginForm);
export default WrappedNormalLoginForm;

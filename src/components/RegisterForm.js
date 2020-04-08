import React, { useState } from "react";
import { Form, Icon, Input, Button } from "antd";
import "./form.css";
import axios from "axios";

const RegisterForm = props => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: ""
  });
  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  // make a post request to register endpoint
    axios
      .post(
        `https://drug-prescription-app.herokuapp.com/api/v1/users/register`,
        formValues
      )
      .then(res => {
        console.log(res);
        props.history.push(`/login`);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("firstName", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Please input First name" },
            {
              type: "string",
              message: "Enter a valid name"
            }
          ]
        })(
          <Input
            name="firstName"
            setFieldsValue={formValues.firstName}
            onChange={handleChange}
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="First Name"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("lastName", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Please enter your last name" },
            {
              type: "string",
              message: "Enter a valid name"
            }
          ]
        })(
          <Input
            name="lastName"
            setFieldsValue={formValues.lastName}
            onChange={handleChange}
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Last Name"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("age", {
          //rules are for the form validation
          rules: [
            { required: true, message: "How old are you?" },
            {
              type: "string",
              message: "Age is not valid"
            }
          ]
        })(
          <Input
            name="age"
            setFieldsValue={formValues.age}
            onChange={handleChange}
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Age"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("email", {
          //rules are for the form validation
          rules: [
            { required: true, message: "Please input a email!" },
            {
              type: "email",
              message: "Invalid email"
            }
          ]
        })(
          <Input
            name="email"
            setFieldsValue={formValues.email}
            onChange={handleChange}
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
              message: "Invalid password"
            }
          ]
        })(
          <Input
            name="password"
            type="password"
            setFieldsValue={formValues.password}
            onChange={handleChange}
            //form icon in the email field, change type for different icons, see antdesign docs
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  RegisterForm
);
export default WrappedNormalLoginForm;

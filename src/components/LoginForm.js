import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./form.css";

function LoginForm(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Make a post request to the Login endpoint
    axios
      .post(
        `https://drug-prescription-app.herokuapp.com/api/v1/users/login`,
        credentials
      )
      .then(res => {
        console.log(res);
        localStorage.setItem(`token`, res.data.user.token);
        props.history.push(`/prescription`);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1>
          <span className="font-weight-bold">Login</span>
        </h1>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" className="btn-lg btn-block" color="primary">
          Log in
        </Button>
        <div className="text-center pt3 p-2">
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;

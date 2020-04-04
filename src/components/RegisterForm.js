import React, {useState} from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./form.css";

function RegisterForm(props) {
  const [registerCredentials, setRegisterCredentials] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setRegisterCredentials({
      ...registerCredentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // make a post request to register endpoint
    axios
      .post(
        `https://drug-prescription-app.herokuapp.com/api/v1/users/register`,
        registerCredentials
      )
      .then(res => {
        console.log(res);
        props.history.push(`/login`);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1>
          <span className="font-weight-bold">Register</span>
        </h1>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            htmlFor="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            htmlFor="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Age</Label>
          <Input
            htmlFor="age"
            type="number"
            placeholder="Age"
            name="age"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            htmlFor="email"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            htmlFor="password"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" className="btn-lg btn-block" color="primary">
          Register
        </Button>
        <div className="text-center pt3 p-2">
          Have an account? <a href="#">Log in</a>
        </div>
      </Form>
    </div>
  );
}

export default RegisterForm;

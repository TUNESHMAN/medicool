// import React, { useState } from "react";
// import axios from "axios";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import "./form.css";

// function LoginForm(props) {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = e => {
//     setCredentials({
//       ...credentials,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     // Make a post request to the Login endpoint
//     axios
//       .post(
//         `https://drug-prescription-app.herokuapp.com/api/v1/users/login`,
//         credentials
//       )
//       .then(res => {
//         console.log(res);
//         localStorage.setItem(`token`, res.data.user.token);
//         props.history.push(`/prescription`);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
//   return (
//     <div>
//       <Form className="login-form" onSubmit={handleSubmit}>
//         <h1>
//           <span className="font-weight-bold">Login</span>
//         </h1>
//         <FormGroup>
//           <Label>Email</Label>
//           <Input
//             type="email"
//             placeholder="Email"
//             name="email"
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>Password</Label>
//           <Input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={handleChange}
//           />
//         </FormGroup>
//         <Button type="submit" className="btn-lg btn-block" color="primary">
//           Log in
//         </Button>
//         <div className="text-center pt3 p-2">
//           Don't have an account? <a href="#">Sign up</a>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default LoginForm;

import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button } from "antd";
import "./form.css";
import axios from "axios";

const LoginForm = props => {
  const [formValues, setFormValues] = useState({
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
    axios
      .post(
        "https://drug-prescription-app.herokuapp.com/api/v1/users/login",
        formValues
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.user.token);
        setFormValues({
          email: "",
          password: ""
        });
        props.history.push("/prescription");
      })
      .catch(err => {
        console.log(err);
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
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(LoginForm);
export default WrappedNormalLoginForm;

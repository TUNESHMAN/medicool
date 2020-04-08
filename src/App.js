import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import Prescription from "./components/Prescription";
import AddPrescription from "./components/AddPrescription"
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <PrivateRoute exact path="/prescription" component={Prescription} />
      <Route exact path="/addprescription" component={AddPrescription} />
    </div>
  );
}

export default App;
import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { Route, BrowserRouter as Router } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import Prescription from "./components/Prescription";
import AddPrescription from "./components/AddPrescription";
import AddFormula from "./components/AddFormula";
import PrivateRoute from "./components/PrivateRoute";
import Formula from "./components/Formula";
import About from "./components/About";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <PrivateRoute exact path="/prescription" component={Prescription} />
        <PrivateRoute exact path="/formula" component={Formula} />
        <PrivateRoute
          exact
          path="/addprescription"
          component={AddPrescription}
        />
        <PrivateRoute exact path="/addformula" component={AddFormula}   />
        </div>
    </Router>
    
  );
}

export default App;

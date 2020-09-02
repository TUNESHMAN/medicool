import React from "react";
import "./Styles.css";
// import LOGO from "../images/LOGO.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="logo-container">
        <h2 className="logo">MediCool</h2>
      </div>
      <nav className="nav-bar">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/register">SIGN UP</Link>
      </nav>
    </header>
  );
}

export default Navbar;

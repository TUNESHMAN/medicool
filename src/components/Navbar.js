import React from "react";
import "./Styles.css";
import LOGO from "../images/LOGO.png";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <header>
      <img className="logo" src={LOGO} alt="logo" />
      <nav className="nav-bar">
        <Link to="/">HOME</Link>
        <Link to="/about">
          ABOUT
        </Link>
        <Link to="/register">SIGN UP</Link>
        <Link to="/blog">BLOG</Link>
      </nav>
    </header>
  );
}

export default Navbar;

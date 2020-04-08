import React from "react";
import "./Styles.css";
import Newlogo from "../images/Newlogo.png";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <header>
      <img class="logo" src={Newlogo} />
      <nav class="nav-bar">
        <Link to="/">HOME</Link>
        <Link to="/about" target="_blank">
          ABOUT
        </Link>
        <Link to="/register">SIGN UP</Link>
        <Link to="/blog">BLOG</Link>
      </nav>
    </header>
  );
}

export default Navbar;

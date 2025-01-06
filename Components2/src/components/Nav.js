import React from "react";
import Logo from "./Logo";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <Logo />
      <div className="nav_links">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Gallery</a>
        <a href="/">Contact Us</a>
        <a href="/">
          <i className="fas fa-search"></i>
        </a>
      </div>
    </div>
  );
};

export default Nav;

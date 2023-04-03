import React from "react";
import "./header.css";
import Logo from "../../images/logo.png";

const header = () => {
  return (
    <div className="header">
      <img src={Logo} className="logo"alt=""/>

      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us?</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default header;

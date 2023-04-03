import React from "react";
import "./footer.css"
import Github from "../../images/github.png";
import Instagram from "../../images/instagram.png";
import LinkedIn from "../../images/linkedin.png";
import Logo from "../../images/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <hr />

      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>

    </div>
  );
}

export default Footer;

import React from "react";
import "./reasons.css";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import tick from "../../images/tick.png";
import nike from "../../images/nike.png";
import nb from "../../images/nb.png";
import adidas from "../../images/adidas.png";

function reasons() {
  return (
    <div className="reasons" id="Reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>

        <div>
          <span> Why </span>
          <span className="stroke-text"> Choose Us? </span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>over 140+ expert coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span> reliable partners</span>
          </div>
        </div>

        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
       
        <div className="partners">

         <img src={adidas} alt="" />
         <img src={nike} alt="" />
         <img src={nb} alt="" />

        </div>




      </div>
    </div>
  );
}

export default reasons;

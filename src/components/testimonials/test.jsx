import React from "react";
import { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images/rightArrow.png";
import "./test.css";

function Test() {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="test">
      <div className="test-l">
        <span>Testimonials</span>
        <span className="stroke-text"> What they</span>
        <span> Say About Us</span>

        <span>{testimonialsData[selected].review}</span>
        <span style={{ color: "var(--orange)" }}>
          <span>{testimonialsData[selected].name}</span>{" "}
          {testimonialsData[selected].status}
        </span>
      </div>
      <div className="test-r">
        <div></div>
        <div></div>

        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img 
          onClick={() => {
              selected === tLength -1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Test;

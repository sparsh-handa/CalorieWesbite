import React from "react";
import Header from "../header/header";
import "./hero.css";
import hero_image from "../../images/hero_image.png";
import hero_image_back from "../../images/hero_image_back.png";
import Heart from "../../images/heart.png";
import Calories from "../../images/calories.png";
import { motion } from "framer-motion";

const hero = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* AD COMPONENT */}
        <div className="ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in town</span>
        </div>

        {/* MIDDLE COMPONENT */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span> Your</span>
          </div>
          <div>
            <span> Ideal Body</span>
          </div>

          <div className="sub">
            <span>We will help you shape and build your ideal body</span>
          </div>
        </div>

        {/* FIGURES*/}

        <div className="figures">
          <div>
            {" "}
            <span className="numbers"> +140 </span>{" "}
            <span className="char"> EXPRERT COACHES</span>
          </div>
          <div>
            {" "}
            <span className="numbers"> +978 </span>{" "}
            <span className="char"> MEMBERS JOINED</span>
          </div>
          <div>
            {" "}
            <span className="numbers"> +50 </span>{" "}
            <span className="char"> FITNESS PROGRAMS</span>
          </div>
        </div>

        {/*BUTTONS*/}

        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/*Right Side*/}

      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>BPM</span>
        </div>

        {/*Images*/}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/*Calories */}

        <div className="calories">
          <img src={Calories} alt="" />

          <div>
            <span className="cal">Calories Burned</span>
            <span className="calNo">200kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;

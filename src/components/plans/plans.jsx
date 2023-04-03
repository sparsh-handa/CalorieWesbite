import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../images/whiteTick.png";
import "./plans.css";

function Plans() {
  return (
    <div className="plans-container">
    <div className="blur plans-blur-1"></div>
    <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span> Ready to Start Your </span>
        <span className="stroke-text"> Journey </span>
        <span> With Us </span>
        </div>
        {/* PLANS CARD */}

        <div className="plans">
          {plansData.map((plan, i) => (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span> $ {plan.price}</span>

              <div className="features">
                {plan.features.map((feature, i) => (
                  <div className="feature">
                    <img src={whiteTick} alt="" />
                    <span key={i}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div><span>See More Benefits -&gt;</span></div>
                  
                  <button className="btn">Join NOW</button>


            </div>
          ))}
        </div>
     
    </div>
  );
}

export default Plans;

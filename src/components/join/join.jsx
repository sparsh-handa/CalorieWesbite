import React from "react";
import "./join.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x7lzvrl', 'template_ij7xmm5', form.current, 'oj40yjViDDvZ4-aKL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (

    

    <div className="join" id="join-us">
      <div className="join-l">

      <hr />
        <div>
          <span> READY TO</span>
          <span className="stroke-text"> LEVEL UP</span>
        </div>
        <div>
          <span className="stroke-text"> YOUR BODY</span>
          <span> WITH US?</span>
        </div>
      </div>

      <div className="join-r">
      <hr />

        <form ref={form} className="email-id" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter your Email Address"id="" />
            <button className="btn btn-j">Join Now</button>
        </form>


      </div>
    </div>
  );
}

export default Join;

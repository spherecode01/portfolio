import React from "react";
import "./style.scss";
import hand from "../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
//import newedit from "../../images/newedit.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import girl from "../../images/girl.png";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} alt="" />
              </span>
              <span className="text">I am here</span>
            </span>
            <span className="big-text">My Portfolio</span>
          </h1>
          <p>
            It is simply dummy text of the printing and typesetting industry.
            When an unknown printer took a galley of type specimen book. It has
            survived not only five centuries. It was popularised recently with
            desktop publishing software like Aldus PageMaker including versions.
          </p>
          <CallToAction text="Contact me" />
        </div>
        <div className="right-col">
          <img src={girl} alt="" />
          { /*<div className="highlights horizontal">
             <div className="icon">
                       <BsAwardFill /> 
  </div> 
  <div className="text">Best Design Award</div> 
  </div> */ }
         { /*<div className="highlights verticle">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4k+</span>
              Happy Customers
            </div>
</div> */ }
        </div>
      </div>
    </div>
  );
};

export default IntroContent;

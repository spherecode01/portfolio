import React from "react";
import "./style.scss";
import Section from "../shared/section";
import techicons from "../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import {AiOutlineCloudDownload} from "react-icons/ai";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={techicons} alt="" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae blanditiis laudantium similique sunt, et aspernatur,
            adipisci ut quibusdam eius culpa fugit eos debitis optio cupiditate
            hic officiis assumenda corporis eligendi.
          </p>
          <CallToAction text="Download CV" icon={<AiOutlineCloudDownload />} />
        </div>
      </div>
    </Section>
  );
};

export default Skills;

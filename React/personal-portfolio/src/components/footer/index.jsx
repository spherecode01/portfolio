import React from 'react'
import {FaYoutube,
FaGithub,FaLinkedin,FaStackOverflow,FaInstagram,} from "react-icons/fa";
import "./style.scss";
import Section from "../shared/section";
import Logo from "../images/logo.png";
import SocialIcon from "./social-icons";
import {scrollToSection} from "../utils/helpers";


const Footer = () => {
  return (
    <Section
    background="dark"
    className="footer"
>
    <div className="footer-content-wrapper">
        <div className="footer-logo">
            <img
                src={Logo}
                alt="JS Dev Hindi"
            />
        </div>
        <ul className="footer-menu-items">
            <li
                className="footer-menu-item"
                onClick={() => scrollToSection("skills")}
            >
                Skills
            </li>
            <li
                className="footer-menu-item"
                onClick={() => scrollToSection("portfolio")}
            >
                Portfolio
            </li>
            <li
                className="footer-menu-item"
                onClick={() => scrollToSection("blogs")}
            >
                Blog & Articles
            </li>
            <li
                className="footer-menu-item"
                onClick={() => scrollToSection("contact")}
            >
                Contact me
            </li>
        </ul>
        <div className="social-icons">
            <SocialIcon
                color="#FF0000"
                icon={<FaYoutube />}
                link="https://www.youtube.com"
            />
            <SocialIcon
                color="#0D2636"
                icon={<FaGithub />}
            />
            <SocialIcon
                color="#0A66C2"
                icon={<FaLinkedin />}
            />
            <SocialIcon
                color="#f2740d"
                icon={<FaStackOverflow />}
            />
            <SocialIcon
                color="#E84C88"
                icon={<FaInstagram />}
            />
        </div>
        <div className="bottom-bar">
            <div className="copyright-text">
                Copyright 2022 JS Dev Hindi | All Rights Reserved
            </div>
        </div>
    </div>
</Section>
  )
}

export default Footer
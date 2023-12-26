import React, { useState } from "react";
import logo from "../../images/logo.png";
//import sphere from "../../images/spherelogo.png";
//import editsphere from "../../images/editsphere.png";
//import blueSphere from "../../images/bluesphere.png";
import "./style.scss";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";


const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItemClickHandler = (section) => {
    setMobileMenu(!mobileMenu);
    scrollToSection(section);
  };

  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="" />
      </div>
      <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                )}
            </div>
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("skills")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("portfolio")}
        >
          Portfolio
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("blogs")}
        >
          Blogs & Articles
        </span>
        <CallToAction
          text="Contact me"
          action={() => menuItemClickHandler("contact")}
        />
      </div>
    </div>
  );
};

export default Navigation;

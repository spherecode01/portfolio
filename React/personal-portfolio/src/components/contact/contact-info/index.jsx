import React from 'react';
import "./style.scss";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";



const ContactInfo = () => {
  return (
    <div className="contact-info-box">
        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore. Accusantium ducimus odit quae?</h4>
        <div className="contact-option">
            <FaPhoneAlt />
            <span className='text'>+91 8637195839</span>
        </div>
        <div className="contact-option">
            <MdEmail />
            <span className='text'>codasphere@gmail.com</span>
        </div>
    </div>
  )
}

export default ContactInfo;
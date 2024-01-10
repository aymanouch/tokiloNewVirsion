import React from 'react';
import "./contact.css";
import { FaWhatsapp, FaLongArrowAltRight } from "react-icons/fa";

function Contact() {
  let ecranSize = window.innerWidth;
  return (
    <div className="contact">
        <h3>heard <br />    enough ? {ecranSize> 720 ? <FaLongArrowAltRight /> : ""}</h3>
        <h2>contact </h2>
        <div className='whatsapp'>
            <div className='whatsapp_container'><FaWhatsapp size={"2rem"}/></div>
        </div>
    </div>
  )
}

export default Contact
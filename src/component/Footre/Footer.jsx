import React from 'react'
import "./footer.css";
import { FaFacebook, FaInstagram, FaTiktok  } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <h1>the Store for impatient brand &reg;</h1>
        <div className="location">
           <h4>Meknes</h4>
           <div className='gmail'>tokilo@gmail.com</div>
           <div className='phone'>Rue 41 sidi said mekenes </div>
           <div className='gmail'>+21225252525</div>
           <div className="seeMap">
            <a href='https://www.google.com/maps/place/Rue+41,+Mekn%C3%A8s/@33.8939495,-5.5885439,17z/data=!3m1!4b1!4m6!3m5!1s0xda05b1e24d7dd7d:0x8539a1db79989ac9!8m2!3d33.8939495!4d-5.585969!16s%2Fg%2F11h9l6yv3t?entry=ttu'>see map</a>
           </div>
        </div>
        <div className="location">
           <h4>Meknes</h4>
           <div className='gmail'>tokiloofficiel@gmail.com</div>
           <div className='gmail'> Ave Zitoune marjan   </div>
           <div className='phone'>21256532565</div>
           <div className='gmail'></div>
           <div className="seeMap">
            <a href='https://www.google.com/maps/place/8%C3%A8me+Arrondissement+Urbain/@33.858277,-5.5810803,17.25z/data=!4m6!3m5!1s0xda05b0f1ebc68b9:0xce0fc91a4a00dbaf!8m2!3d33.8589578!4d-5.575642!16s%2Fg%2F11fk8bc9n4?entry=ttu'>see map</a>
           </div>
        </div>
        <div className="social_media">
        <h4>want some beauty in your life.</h4>
        <h4>follow us in our social media.</h4>
        <div className='social-icon'>
            <ul>
                <li><a href="#"><FaFacebook /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaTiktok /></a></li>
            </ul>
        </div>
        </div>
    </footer>
  )
}

export default Footer
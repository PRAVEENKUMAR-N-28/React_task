import React from 'react'
import './Footer.css'
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
   
    <div id='contect'>
            <h3>Contect Us</h3>
            <div className="footer">
                <div className="address">
                    <address>
                        2/56 Near kumar books,<br />
                        JJ Road Karur-65421 <br />
                        ph:784512547
                    </address>
                </div>
                <div className='links'>
                    <div className="insta"><a href="#"><AiFillInstagram /></a></div>
                    <div className="face"><a href="#"><BsFacebook /></a></div>
                    <div className="yout"><a href="#"><AiFillYoutube /> </a></div>
                </div>

            </div>
    </div>
  )
}

export default Footer
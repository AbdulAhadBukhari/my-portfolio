import "./FooterStyles.css";
import React from 'react';
import { FaPhone, FaMailBulk, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
              <div className="phone">
                <h4>
                <FaPhone size = {20} style = {{
                  color: "white", marginRight: "2rem"
                }} /> +92 333 1661104
                </h4>
                

              </div>
              <div className="mail">
                <h4>
                <FaMailBulk size = {20} style = {{
                  color: "white", marginRight: "2rem"
                }} /> abdulahadbukhari911@gmail.com
                </h4>
              </div>
            </div>
            <div className="right">
              <h4>
                © 2024 Abdul Ahad Bukhari. All Rights Reserved.
              </h4>
              <p>This website also acts as a sample made purely using React.</p>
              <div className="social">
                <FaFacebook size = {30} style = {{
                  color: "white", marginRight: "2rem"
                }} />
                <FaLinkedin size = {30} style = {{
                  color: "white", marginRight: "2rem"
                }} />
              </div>
            </div>
        </div>  
    </div>
  )
}

export default Footer


import "./HeroStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import vid from "../assets/video.mp4";

const Hero = () => {
  return <div className="hero">
    <div className="mask">
      <video className = "video" src = {vid} alt = "vid" autoPlay loop muted/> 
    </div>
    <div className = "content" ><p>Abdul Ahad Bukhari</p>
    <h1>Software Developer</h1>
    <div><Link to = "/about" className = "button">About</Link>
    <Link to = "/contact" className = "button button-light">Contact</Link>
    </div>
    
    </div>
  </div>;
}

export default Hero

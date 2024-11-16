import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from 'react'
import img from "../assets/meter1.jpeg";
import img1 from "../assets/meter2.jpg";

const AboutContent = () => {
  return (
    <div className= "about">
        <div className= "left">
            <h1>Who Am I?</h1>
            <p>
                I am a Software Developer, who creates responsive websites using react.js, node.js, and other technologies. I am passionate about learning new technologies and creating new things, and is always looking for new opportunities to learn and grow. I am a hardworking and dedicated individual, who is always looking for new challenges to overcome. I am also a team player, who enjoys working with others to achieve a common goal.
            </p>
            <Link to = "/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src= {img} alt= "true"/>

                </div>
                <div className="img-stack-bottom">
                    <img src= {img1} alt= "true"/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent

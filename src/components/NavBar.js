import "./NavBarStyles.css";
import {Link} from "react-router-dom";
import React from 'react'
import{FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className="Header">
    <Link to="/">
        <h1>Portfolio</h1>
    </Link>
    <ul className={click ? "nav-menu active": "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Project">Project</Link>
        </li>
    </ul>
    <div className="burger" onClick={handleClick}>
        {click ? (<FaTimes size = {20} style = {{color:"#fff"}}/>
        ):(<FaBars size = {20} style = {{color:"#fff"}} />)}
    </div>
        </div>
  )
}

export default NavBar

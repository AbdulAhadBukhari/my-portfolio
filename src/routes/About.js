import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Heroproj from '../components/Heroproj';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
    <NavBar/>
    <Heroproj heading="About" text = "Hello, I am a Software developer" />
    <AboutContent />
    <Footer/>
    </div>
  )
}

export default About;
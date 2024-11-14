import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Heroproj from '../components/Heroproj';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>
      <NavBar/>
      <Heroproj heading = "PROJECTS" text = "Here are some of the projects I have worked on"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project;

import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Home = () =>{
  return (
    <div><NavBar/>
    <Hero/>
    <Skills/> 
    <Work/>
    <Footer/>
    </div>
  );
}

export default Home;

import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Heroproj from '../components/Heroproj';

const Contact = () => {
  return (
    <div>
    <NavBar/>
    <Heroproj heading="Contact" text = "Reach out to me below" />
    <Footer/>
    </div>
  )
}

export default Contact;
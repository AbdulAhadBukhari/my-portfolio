import "./Heroproj.css";
import React, { Component } from 'react'

class Heroproj extends Component{
    render(){
         return (
    <div className="proj-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  );
    }
 
};

export default Heroproj;

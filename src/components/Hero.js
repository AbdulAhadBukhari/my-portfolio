import "./HeroStyles.css";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from "react-router-dom";
import vid from "../assets/video.mp4";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [del, setDel] = useState(false);
  const [text, setText] = useState("");
  const period = 1500;
  const [delta, setDelta] = useState(200 - Math.random() * 50);

  const toRotate = useMemo(() => ["Software Developer", "Software Designer", "UI/UX Designer"], []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updated = del ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updated);
    if (del) {
      setDelta(prev => prev / 2);
    }
    if (!del && updated === fullText) {
      setDel(true);
      setDelta(period);
    } else if (del && updated === "") {
      setDel(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  }, [loopNum, del, text, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <div className="hero">
      <div className="mask">
        <video className="video" src={vid} alt="vid" autoPlay loop muted />
      </div>
      <div className="content">
        <p>Abdul Ahad Bukhari</p>
        <h1>
          Hi, I am a{" "}
          <span className="fixed-text">
            <span className="changing-text">{text}</span>
          </span>
        </h1>
        <div className="buttons">
          <Link to="/about" className="button">About</Link>
          <Link to="/contact" className="button button-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

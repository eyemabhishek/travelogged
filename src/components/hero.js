import React from "react";
import { Button } from "./Button";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="videos/video-3.mp4 " autoPlay loop muted />
      <h1>Adventure awaits</h1>
      <p>what are you waiting for</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH YOUTUBE<i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import "./AnimatedWave.css";
import waveImg from "../images/wave.svg";

const AnimatedWave = () => {
  return (
    <div className="wave-container">
      <div
        className="wave"
        style={{ backgroundImage: `url(${waveImg})` }}
      ></div>
    </div>
  );
};

export default AnimatedWave;

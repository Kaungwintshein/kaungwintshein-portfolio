import React from "react";
import "./About.css";
import reactSvg from "../images/react.svg";
import reduxSvg from "../images/redux.svg";
import sassSvg from "../images/sass.svg";
import redisSvg from "../images/redis.svg";
import mongodbSvg from "../images/mongodb.svg";
import expressSvg from "../images/express.svg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1>
          I Design & <br /> Build Web Apps
        </h1>
        <div className="about-text">
          <div className="left-container">
            <p>
              My name is Kaung Wint, a Front-End Developer who specializes in
              developing React web apps, but I also can develop your future
              beautiful and smooth website. I excel in working hard and smart in
              order to bring a high quality and beautiful web experience.
            </p>
            <p>
              It's my passion to hear my clients problems and successfully
              implement creative and performant solutions, along with a clean
              user interface converting it in a rich and useful web application
              with high conversion rate. I have always had an attraction toward
              puzzles and challenging projects, so feel free to contact me with
              your ingenious and ambitious idea!
            </p>
            <p>
              My development process starts with creating a layout with a
              prototype on Figma then translating it with high fidelity to HTML,
              CSS or Sass, and Javascript.
            </p>
          </div>
          <div className="right-container">
            <div className="languages-group">
              <span>
                <img src={reactSvg} alt="" />
              </span>
              <span>
                <img src={reduxSvg} alt="" />
              </span>
              <span>
                <img src={sassSvg} alt="" />
              </span>
            </div>
            <div className="languages-group">
              <span>
                <img src={redisSvg} alt="" />
              </span>
              <span>
                <img src={mongodbSvg} alt="" />
              </span>
              <span>
                <img src={expressSvg} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

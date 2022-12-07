import React from "react";
import { useLocation } from "react-router-dom";
import AnimatedWave from "../components/AnimatedWave";
import Card from "../components/Card";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "./Home.css";
const Home = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="">
      <div className="container">
        <div className="author-text">
          <h1 className="uppercase">Kaung Wint Shein</h1>
          <p>FRONT-END DEVELOPER</p>
        </div>
        <div className="">
          <AnimatedWave />
        </div>
      </div>
      <div className="project-section">
        <Card />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

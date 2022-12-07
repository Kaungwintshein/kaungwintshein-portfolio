import React from "react";
import "./Card.css";
import CardItem from "./CardItem";
// import mixcart from "../images/mixcart.png";
// import jetnet from "../images/jetnet.png";
// import studyPlanner from "../images/study_planner.png";
import tmovieImg from "../images/tmovie-project.png";
import entHubImg from "../images/entertainment-hub.png";
import jsAnimationImg from "../images/javascript-animation-project.png";
import appleWebImg from "../images/ultimate-animation.png";

const Card = () => {
  return (
    <div className="card">
      <div className="header-text">Projects.</div>
      {/* <CardItem
        img={appleWebImg}
        title="Animated Apple Website"
        desc="Apple Website with cool javascript animation."
      /> */}
      <CardItem
        img={entHubImg}
        title="Entertainment Hub Movie Website"
        desc="Movie Website with cool filtering and searching."
        link="https://entertainment-hub-tmovie.herokuapp.com/"
      />
      <div className="card-container">
        <CardItem
          img={jsAnimationImg}
          title="AGENCY Animated Website"
          desc="Javascript Animation Website."
          link="https://javascript-animation.herokuapp.com/"
        />
        <CardItem
          img={tmovieImg}
          title="The Movie Website"
          desc="A concept movie streaming website app"
          link="https://tmovie-project.herokuapp.com/"
        />
      </div>
    </div>
  );
};

export default Card;

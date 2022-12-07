import React from "react";
import "./CardItem.css";

const CardItem = ({ img, title, desc, link }) => {
  return (
    <a href={link}>
      <div className="card-item">
        <img src={img} alt="" />
        <div className="card-text">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </a>
  );
};

export default CardItem;

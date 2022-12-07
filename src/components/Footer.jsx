import React from "react";
import githubSvg from "../images/github.svg";
import hackerRankSvg from "../images/hackerrank.svg";
import devtoSvg from "../images/devto.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="links-group">
          <ul>
            <li>
              <Link to="/">blog</Link>
            </li>
          </ul>
        </div>
        <div className="links-group">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Porfolio</Link>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <span>
            <a href="https://github.com/Kaungwintshein/">
              <img src={githubSvg} alt="" />
            </a>
          </span>
          <span>
            <a href="https://www.hackerrank.com/k02817p">
              <img src={hackerRankSvg} alt="" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

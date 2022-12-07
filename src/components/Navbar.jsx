import React from "react";
import githubBlackSvg from "../images/githubBlack.svg";
import hackerRankSvg from "../images/hackerrank.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ active }) => {
  console.log(active);
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/" className={active === "/" ? "active" : ""}>
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={active === "/portfolio" ? "active" : ""}
            >
              Portfolio
            </Link>
          </li>

          <li className="breaker">
            <Link to="/about" className={active === "/about" ? "active" : ""}>
              About me
            </Link>
          </li>
          <li className="nav-icons">
            <a href="https://github.com/Kaungwintshein/">
              <img src={githubBlackSvg} alt="" />
            </a>
          </li>
          <li className="nav-icons">
            <a href="https://www.hackerrank.com/k02817p">
              <img src={hackerRankSvg} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

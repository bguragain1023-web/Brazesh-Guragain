import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [slideMenu, setSlideMenu] = useState(false);
  return (
    <nav>
      <div className=" navbar container d-flex ">
        <div className="name d-flex ">
          <div className="brazz">Brazesh</div>
          <div className="liness"></div>
          <div className="nav-job-title">Full Stack Developer</div>
        </div>
        <input className="hide-box" type="checkbox" id="hamburger" />
        <label
          htmlFor="hamburger"
          className="hamburger-icon"
          onClick={() => setSlideMenu(!slideMenu)}
        >
          <i className="fa-solid fa-bars"></i>
        </label>

        <div className={slideMenu ? "menu slide" : "menu"}>
          <ul
            className="d-flex  navigation"
            onCLinkick={() => setSlideMenu(slideMenu)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

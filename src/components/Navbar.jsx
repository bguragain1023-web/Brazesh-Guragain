import React from "react";
import { useState } from "react";

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
            onClick={() => setSlideMenu(!slideMenu)}
          >
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

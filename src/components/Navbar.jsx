import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className=" navbar container d-flex ">
        <div className="name d-flex ">
          <div className="brazz">Brazesh</div>
          <div className="liness"></div>
          <div className="nav-job-title">Full Stack Developer</div>
        </div>
        <input className="hide-box" type="checkbox" id="hamburger" />
        <label htmlFor="hamburger" className="hamburger-icon">
          <i className="fa-solid fa-bars"></i>
        </label>

        <div className="menu">
          <ul className="d-flex  navigation">
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

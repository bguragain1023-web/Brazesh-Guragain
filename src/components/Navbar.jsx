import React from "react";

export const Navbar = () => {
  return (
    <nav className="py-3">
      <div className="container d-flex justify-content-between align-items-center position-sticky">
        <div className="name d-flex flex-md-row gap-md-2">
          <div>Brazesh</div>
          <div className="line">Full Stack Developer</div>
        </div>
        <input type="checkbox" id="hamburger" />
        <label htmlFor="hamburger" className="hamburger-icon">
          <i className="fa-solid fa-bars"></i>
        </label>

        <div className="menu">
          <ul className="d-flex gap-3 fw-bold list-unstyled navigation">
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

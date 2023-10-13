import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-lightr custom-navbar ">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link custom-text-color me-5" href="#Intro">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-text-color me-5" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-text-color me-5" href="#about">Technical Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-text-color me-5" href="#AboutMe">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-text-color me-5" href="#ContactMe">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

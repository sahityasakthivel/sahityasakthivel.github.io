import React from "react";
import './Navbar.css'
const Navbar = ({scrollToSection}) => {
  return (
    <header className="sticky-header">
      <nav className="nav">
        <div className="logo" ></div>
        <ul className="nav-links">
          <li><a  onClick={() => scrollToSection('about')} className="link">About</a></li>
          <li><a  onClick={() => scrollToSection('experience')}className="link">Experiences</a></li>
          <li><a  onClick={() => scrollToSection('project')}className="link">Projects</a></li>

        </ul>
      </nav>
    </header>
  );
};



export default Navbar;
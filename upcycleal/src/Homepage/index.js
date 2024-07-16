

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './index.css';

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-logo">
          <img src="Image/blue.png" alt="Logo" />
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="close-icon" onClick={closeMenu}>×</div>
          <ul>
            <li><Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>About Us</Link></li>
            <li><Link to="roadmap" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Roadmap</Link></li>
            <li><Link to="team" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Team</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <div className="hero" id="home">
        <div className="hero-content">
          <p className="hero-text">
            Join the UpCycleIt and turn Used clothes <br /> into treasure with our gamified app.
          </p>
          <button className="cta-button">Join Now</button>
        </div>
        <img className="hero-image" src="Image/landing.png" alt="Landing image" />
      </div>
    </div>
  );
}

export default Homepage;

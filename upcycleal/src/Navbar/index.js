import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './index.css';

function Navbar() {
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
          <li className='hove'><Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Home</Link></li>
          <li className='hove'><Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>About Us</Link></li>
          <li className='hove'><Link to="road-map" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Roadmap</Link></li>
          <li className='hove'><Link to="team" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Team</Link></li>
          <li className='hove'><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
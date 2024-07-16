import React from 'react';
import Navbar from '../Navbar';
import './index.css';

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="hero" id="home">
        <div className="hero-content">
          <p className="hero-text">
            Join the UpCycleIt and turn Used clothes <br /> into treasure with our gamified app.
          </p>
          <button className="cta-button">Join Now</button>
        </div>
        <img className="hero-image" src="Image/landing.png" alt="Landing" />
      </div>
    </div>
  );
}

export default Homepage;
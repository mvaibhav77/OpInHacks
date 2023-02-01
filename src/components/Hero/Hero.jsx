import React from "react";
import "../Hero/Hero.css";
import spaceLines from "../../assets/space-lines.png";
import eye from "../../assets/eye.png";
import stairs from "../../assets/stairs.png";

export const Hero = () => {
  return (
    <section className="hero-section">
      <img className="space-lines" src={spaceLines} alt="" />
      <div className="hero-container">
        <div className="hero-title">
          <div className="opin-text">OPIN</div>
          <div className="hacks-text">HACKS</div>
        </div>
        <div className="hero-subtitle">16 April 2023 CHHATTISGARH</div>
        <div className="social-links">
          <button className="discord-btn">DISCORD</button>
          <button className="register-btn">REGISTER</button>
        </div>
      </div>
    </section>
  );
};

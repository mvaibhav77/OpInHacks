import React from "react";
import "../Hero/Hero.css";
import spaceLines from "../../assets/space-lines.png";
import eye from "../../assets/eye.png";
import stairs from "../../assets/stairs.png";
import pillar from "../../assets/intro-pillar.png";
import cube from "../../assets/intro-cube.png";
import cubes from "../../assets/intro-cubes.png";
import laptop from "../../assets/laptop.png";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";

export const Hero = () => {
  return (
    <section className="hero-section">
      <img src={stairs} className="stair-el elements" alt="" />
      <img src={pillar} className="pillar-el elements" alt="" />
      <img src={eye} className="eye-el elements" alt="" />
      <img src={laptop} className="laptop-el elements" alt="" />
      <img src={cube} className="cube-el elements" alt="" />
      <img src={cubes} className="cubes-el elements" alt="" />
      <img className="space-lines" src={spaceLines} alt="" />

      <div className="social-links-bottom">
        <a
          href="https://www.linkedin.com/company/opinhacks/"
          target="_blank"
          className="in-icon"
        >
          <FaLinkedinIn fontSize="1.6rem" />
        </a>
        <a
          href="https://twitter.com/opinhacks"
          target="_blank"
          className="twitter-icon"
        >
          <FaTwitter fontSize="1.5rem" />
        </a>
        <a
          href="https://www.instagram.com/opinhacks/"
          target="_blank"
          className="instagram-icon"
        >
          <FaInstagram fontSize="1.5rem" />
        </a>
      </div>
      <div className="down-arrow">
        <BsArrowDown fontSize="2.5rem" />
      </div>
      <div className="hero-container">
        <div className="hero-title">
          <div className="opin-text">OPIN</div>
          <div className="hacks-text">HACKS</div>
        </div>
        <div className="hero-subtitle">16 April 2023 &nbsp; CHHATTISGARH</div>
        <div className="social-links">
          <button className="discord-btn">DISCORD</button>
          <button className="register-btn">REGISTER</button>
        </div>
      </div>
    </section>
  );
};

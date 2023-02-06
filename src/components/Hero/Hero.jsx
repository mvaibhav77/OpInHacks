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
  // const parallax = (e) => {
  //   document.querySelectorALl(".elements").forEach(element => {
  //     const speed = element.getAttributte("data-speed");
  //     const x = (window.innerWidth - e.pageX*speed)/100
  //     const y = (window.innerHeight - e.pageY*speed)/100

  //     element.style.transform = `translateX(${x}px) translateY${y}px`

  //   })
  // }

  // document.addEventListener("mousemove", parallax);
  return (
    <section className="hero-section">
      <img src={stairs} data-speed="2" className="stair-el elements" alt="" />
      <img src={pillar} data-speed="-6" className="pillar-el elements" alt="" />
      <img src={eye} data-speed="7" className="eye-el elements" alt="" />
      <img src={laptop} data-speed="3" className="laptop-el elements" alt="" />
      <img src={cube} data-speed="-3" className="cube-el elements" alt="" />
      <img src={cubes} data-speed="-9" className="cubes-el elements" alt="" />
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

      <div className="hero-container">
        <div className="hero-title">
          <div className="opin-text">OPIN</div>
          <div className="hacks-text">HACKS</div>
        </div>
        <div className="hero-subtitle">22 - 23 April 2023   &nbsp; CHHATTISGARH</div>
        <div className="social-links">
          <button className="discord-btn">
            <a href="https://discord.gg/fmRR96uz" target="_blank">
              DISCORD
            </a>
          </button>
          <button className="register-btn">
            <a href="https://forms.gle/n5oUueJvNwwGip6E9" target="_blank">
              {" "}
              REGISTER
            </a>
          </button>
        </div>
      </div>
      <div className="down-arrow">
        <BsArrowDown fontSize="2.5rem" />
      </div>
    </section>
  );
};

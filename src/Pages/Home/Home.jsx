import React, { useEffect } from "react";
import { About } from "../../components/About/About";
import { Hero } from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import "../Home/Home.css";
import Footernew from "../../components/Footer/Footer";
import { Sponsors } from "../../components/Sponsors/Sponsors";
import { Faq } from "../../components/Faq/Faq";
import { Organizers } from "../../components/Organizers/Organizers";
import SponsorsList from "../../components/SponsorsList/SponsorsList";
import Themes from "../../components/Themes/Themes";
import mlhBadge from "../../assets/mlh-badge.png";

export const Home = () => {
  const handleScroll = () => {
    const homepage = document.getElementById("Homepage");
    const navbar = document.getElementById("Navbar");

    if (homepage.scrollTop >= 80) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  };
  return (
    <div id="Homepage" className="homepage-container" onScroll={handleScroll}>
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "80px",
          position: "fixed",
          right: "100px",
          top: "7px",
          width: "8%",
          zIndex: 10000,
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={mlhBadge}
          alt="Major League Hacking 2024 Hackathon Season"
          style={{ width: "100%",
  
        }}
        />
      </a>

      <Navbar />
      <Hero />
      <About />
      <Themes />
      {/* <Organizers /> */}
      <SponsorsList />
      <Sponsors />
      <Faq />
      <Footernew />
    </div>
  );
};

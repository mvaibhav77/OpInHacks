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
          minWidth: "60px",
          position: "fixed",
          right: "90px",
          top: "0",
          width: "10%",
          zIndex: 10000,
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
          alt="Major League Hacking 2024 Hackathon Season"
          style={{ width: "100%" }}
        />
      </a>

      <Navbar />
      <Hero />
      <About />
      <Organizers />
      <Sponsors />
      <SponsorsList />
      <Faq />
      <Footernew />
    </div>
  );
};

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const closeNavbar = () => {
    let navbar = document.querySelector(".navbar");
    console.log(navbar.classList.toggle);
    navbar.classList.remove("open");
  };

  return (
    <header id="Navbar" className="">
      <a href="#Hero" className="head-logo" onClick={closeNavbar}>
        <img src={logo} alt="Logo" className="nav-logo" />
      </a>

      <ul className="navbar">
        <li>
          <a href="#About" onClick={closeNavbar}>About</a>
        </li>
        <li>
          <a  onClick={closeNavbar} >Timeline</a>
        </li>
        <li>
          <a href="#Organisers" onClick={closeNavbar}>Organisers</a>
        </li>
        <li>
          <a href="#Sponsors" onClick={closeNavbar} >Sponsors</a>
        </li>
        <li>
          <a href="#Faq" onClick={closeNavbar} >FAQ</a>
        </li>
        <li>
          <a href="#Footer" onClick={closeNavbar}>
            Contact
          </a>
        </li>
      </ul>

      <div className="dropdown">
        <div className="bx bx-menu" id="menu-icon">
          <GiHamburgerMenu
            color="#00d54b"
            onClick={() => {
              let navbar = document.querySelector(".navbar");
              navbar.classList.toggle("open");
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const closeNavbar = () => {
    let navbar = document.querySelector(".navbar");

    navbar.classList.remove("open");
    setOpen(false);
  };

  return (
    <header id="Navbar" className="">
      <a href="#Hero" className="head-logo" onClick={closeNavbar}>
        <img src={logo} alt="Logo" width={150} className="nav-logo" />
      </a>

      <ul className="navbar">
        <li>
          <a href="#About" onClick={closeNavbar}>
            About
          </a>
        </li>
        {/* <li>
          <a href="#Hero" onClick={closeNavbar} >Timeline</a>
        </li> */}
        <li>
          <a href="#Themes" onClick={closeNavbar}>
            Themes
          </a>
        </li>
        <li>
          <a href="#Sponsors" onClick={closeNavbar}>
            Sponsors
          </a>
        </li>
        <li>
          <a href="#Faq" onClick={closeNavbar}>
            FAQ
          </a>
        </li>
        <li>
          <a href="#join" onClick={closeNavbar}>
            Join Us
          </a>
        </li>
        <li>
          <a href="#Footer" onClick={closeNavbar}>
            Contact
          </a>
        </li>
      </ul>

      <div className="dropdown">
        <div className="bx bx-menu" id="menu-icon">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#00d54b"
            size="25"
            onToggle={(toggle) => {
              if (toggle) {
                let navbar = document.querySelector(".navbar");
                let Navbar = document.querySelector("#Navbar");
                navbar.classList.toggle("open");
                Navbar.classList.toggle("z-[1000]");
              } else {
                let navbar = document.querySelector(".navbar");
                let Navbar = document.querySelector("#Navbar");
                Navbar.classList.remove("z-[1000]");
                navbar.classList.remove("open");
              }
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

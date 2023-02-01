import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  
  return (
    <header>
      <a href="{}" className="logo"> 
        <img src={logo} alt="Logo" />
       </a>

       <ul className='navbar'>
        <li><a href="{}" >About</a></li>
        <li><a href="{}" >Timeline</a></li>
        <li><a href="{}" >Prizes</a></li>
        <li><a href="{}" >Sponsors</a></li>
        <li><a href="{}" >FAQ</a></li>
        <li><a href="{}" >Contact</a></li>
       </ul>

       <div className="dropdown">
          <div className="bx bx-menu" id="menu-icon">
            
              <GrMenu color='green' onClick={() => {
                let navbar = document.querySelector('.navbar');
                navbar.classList.toggle('open');}}/>
          </div>
       </div>
    </header>
  )
}

export default Navbar
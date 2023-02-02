import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";


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
            
              <GiHamburgerMenu color='#00d54b' onClick={() => {
                let navbar = document.querySelector('.navbar');
                navbar.classList.toggle('open');}}/>
          </div>
       </div>
    </header>
  )
}

export default Navbar
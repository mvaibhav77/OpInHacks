import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"
// import car from "../../assets/car.png"
import { FaDiscord } from 'react-icons/fa';

const Footernew = () => {
  function discordlink() {
    window.open("https://discord.gg/fmRR96uz");
}
  return (
    <footer class="padding_4x">
    <div class="flex">
      <section class="flex-content padding_1x">
        <img src={logo} alt="Logo" className='logo'/>
        <p className='content-p'>A battle through time.</p>
        <div className='buttons'>
        <button className='btn register'>REGISTER</button>
        <button className='btn discord' onClick={discordlink}><FaDiscord color='black' size="1rem"/></button>
        <button className='btn sponsor'>SPONSORS</button>
        </div>
      </section>
      <section class="flex-content padding_1x">
        <h3>Site</h3>
        <a href="{}">Home</a>
        <a href="{}">About</a>
        <a href="{}">Organisers</a>
        <a href="{}">Sponsors</a>
        <a href="{}">FAQ</a>
      </section>
      <section class="flex-content padding_1x">
        <h3>Socials</h3>
        <a href="https://www.instagram.com/opinhacks/" target='_blank' rel="noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/company/opinhacks/" target='_blank' rel="noreferrer">Linkedin</a>
        <a href="https://twitter.com/opinhacks" target='_blank' rel="noreferrer">Twitter</a>
      </section>
      
    </div>
    <hr className='hr-tag'/>
    <div class="flex">
      <section class="flex-content padding_1x">
        <p>Made with &#10084;</p>
      </section>

    </div>
  </footer>
  )
}

export default Footernew
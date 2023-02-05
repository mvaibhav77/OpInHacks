import React from 'react'
import "./Organizers.css"

import Rectangle from "../../assets/Rectangle.png"
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import GDSC from "../../assets/gdsc.png"
import hackclub2 from "../../assets/hackclub2.png"
import opinco from "../../assets/opinco.png"
export const Organizers = () => {

  function gdsc_insta() {
    window.open("https://instagram.com/gdscbitd?igshid=YmMyMTA2M2Y=");
}
function gdsc_twitter() {
  window.open("https://twitter.com/gdscbitd?t=tRPkbvIxmQdZmlDb66-JvA&s=08");
}
function hack_insta() {
  window.open("https://www.instagram.com/hackclubbitdurg/");
}

function hack_twitter() {
  window.open("https://twitter.com/hackclubbitdurg?lang=en");
}
function opinco_insta() {
  window.open("https://www.instagram.com/opincocommunity/");
}
function opinco_twitter() {
  window.open("https://twitter.com/opincocommunity");
}
  return (
    <div className='entire'>
      <div className='organize-text'>ORGANISERS</div>
    <section className='organizers-conatainer'>
      <div className="organ-container">
        <div className='content-section'>
          <div className='card'>
            <div className=''>
              <img src={GDSC} alt="" className='img'/>
            </div>
            <div className='card-text'>
                <div className='text'>
                  <p className='organize-text-p'>Organiser</p>
                  <p className='org'>GDSC</p>
                </div>
                <div className='socials-buttons'>
                      <button className='insta' onClick={gdsc_insta}><FaInstagram size="1rem"/></button>
                      <button className='twitter' onClick={gdsc_twitter}><FaTwitter size="1rem"/></button>
                </div>
              </div>  
          </div>
          <div className='card'>  
          <div className=''>
              <img src={hackclub2} alt="" className='img'/>
            </div>
            <div className='card-text'>
                <div className='text'>
                  <p className='organize-text-p'>Organiser</p>
                  <p className='org'>HackClub</p>
                </div>
                <div className='socials-buttons'>
                      <button className='insta'  onClick={hack_insta}><FaInstagram size="1rem"/></button>
                      <button className='twitter'  onClick={hack_twitter}><FaTwitter size="1rem"/></button>
                </div>
              </div> 
          </div>
          <div className='card'>
          <div className='img-div'>
              <img src={opinco} alt="" className='img'/>
            </div>
            <div className='card-text'>
                <div className='text'>
                  <p className='organize-text-p'>Organiser</p>
                  <p className='org'>OpInCo</p>
                </div>
                <div className='socials-buttons'>
                      <button className='insta' onClick={opinco_insta}><FaInstagram size="1rem" /></button>
                      <button className='twitter' onClick={opinco_twitter}><FaTwitter size="1rem" /></button>
                </div>
              </div> 
          </div>
        </div>
      </div>
    </section>
    </div>
  )
};




import React from 'react'
<<<<<<< HEAD
import './Organizers.css'
import hole2 from '../../assets/hole2.png'
import greenmonster from '../../assets/greenmonster.png'
import column from '../../assets/column.png'
import ramp2 from '../../assets/ramp2.png'
import sidestairs from '../../assets/sidestairs.png'
import sidestairs2 from '../../assets/sidestairs2.png'
import staircubes from '../../assets/staircubes.png'
import track2 from '../../assets/track2.png'
import tube from '../../assets/tube.png'
import gdsc from '../../assets/gdsc.png'
import bitd from '../../assets/bitd.png'
import hackclub from '../../assets/hackclub.png'
import socials1 from '../../assets/socials1.png'
import socials2 from '../../assets/socials2.png'


=======
import "./Organizers.css"
>>>>>>> 4f43b87b06bcd141bf6e8f771614f6c485dcce21

import Rectangle from "../../assets/Rectangle.png"
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import GDSC from "../../assets/GDSC.png"
import hackclub from "../../assets/hackclub.png"
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
<<<<<<< HEAD

    <section className="Timeline">
      <p className='organisers'>ORGANISERS</p>
      <img className='hole21' src={hole2} alt="" />
      <img className='column' src={column} alt="" />
      <img className='greenmonster' src={greenmonster} alt="" />
      <img className='hole2' src={hole2} alt="" />
      <img className='ramp2' src={ramp2} alt="" />
      <img className='sidestairs' src={sidestairs} alt="" />
      <img className='sidestairs2' src={sidestairs2} alt="" />
      <img className='staircubes' src={staircubes} alt="" />
      <img className='track2' src={track2} alt="" />
      <img className='tube' src={tube} alt="" />

      <div className='cards'>
        <div className="card">
          <img src={gdsc} />
          <div className="card-body">
            <p>Organisers</p>
            <h2>HACKCLUB</h2>
            <div className="media-icons">
            <img className='socials-1a' src={socials1} alt="" />
            <img className='socials-2a' src={socials2} alt="" />
            </div>
          </div>
        </div>

        <div className="card">
          <img src={hackclub} />
          <div className="card-body">
            <p>Organisers</p>
            <h2>GDSC</h2>
            <div className="media-icons">
            <img className='socials-1b' src={socials1} alt="" />
            <img className='socials-2b' src={socials2} alt="" />
            </div>


          </div>
        </div>
        <div className="card">
          <img src={bitd} />
          <div className="card-body">
            <p>Organisers</p>
            <h2>BITD</h2>
            
            <div className="media-icons">
            <img className='socials-1c' src={socials1} alt="" href="instagram.com" />
            <img className='socials-2c' src={socials2} alt="" />
            </div>
            


          </div>
        </div>
      </div>



    </section >

=======
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
              <img src={hackclub} alt="" className='img'/>
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
>>>>>>> 4f43b87b06bcd141bf6e8f771614f6c485dcce21
  )
};




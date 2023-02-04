import React from 'react'
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
import gdsc from '../../assets/GDSC.png'
import opinco from '../../assets/opinco.png'
import hackclub from '../../assets/hackclub.png'
import socials1 from '../../assets/socials1.png'
import socials2 from '../../assets/socials2.png'



export const Organizers = () => {
  return (

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
          <img src={hackclub} />
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
          <img src={gdsc} />
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
          <img src={opinco} />
          <div className="card-body">
            <p>Organisers</p>
            <h2>Opinco</h2>
            
            <div className="media-icons">
            <img className='socials-1c' src={socials1} alt="" href="instagram.com" />
            <img className='socials-2c' src={socials2} alt="" />
            </div>
            


          </div>
        </div>
      </div>



    </section >

  )
};




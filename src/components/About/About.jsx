import React from 'react'
import "../About/About.css"
import Pillar from '../../assets/pillar.png'
import Pillarmed from '../../assets/pillar-medium.png'
import Pillarsmall from '../../assets/pillar-small.png'
import Pillarlarge from '../../assets/pillar-large.png'


export const About = () => {
  return (
    <section className='about-section'>
      <div className='text'>
       <h1 className="about">About Us</h1>
          <p className="para">Welcome to Opinhacks, the ultimate student hackathon where imagination and technology collide! We're a community of tech-savvy students who come together to push the limits of what's possible. Our mission is to provide a platform for students to bring their boldest and most innovative ideas to life. Get ready for a weekend of intense collaboration, coding, and creativity. Whether you're a seasoned programmer, a design wizard, or just someone with a passion for technology, Opinhacks is the perfect place to showcase your skills. Meet new friends, build a network of like-minded individuals, and be part of a community that's shaping the future of technology.</p>
        </div>   
            <div className="pillars">
              <img className="col" src={Pillar}/>
              <img className="col1" src={Pillarmed}/>
              <img className="col2" src={Pillarsmall}/>
              <img className="col7" src={Pillarmed}/>
              <img className="col8" src={Pillar}/>
              <img className="col5" src={Pillarlarge}/>
              <img className="col6" src={Pillar}/>
              <img className="col3" src={Pillarmed}/>
              <img className="col4" src={Pillarmed}/>
            </div>
    </section>
  )
}

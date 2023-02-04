import React from "react";
import "./Sponsors.css"
import booststairs1 from '../../assets/booststairs1.png'
import booststairs2 from '../../assets/booststairs2.png'
import Vector4 from '../../assets/Vector4.png'
import employment1 from '../../assets/employment1.png'
import talk1 from '../../assets/talk1.png'
import Line from '../../assets/Line.png'
export const Sponsors = () => {

    return (
        <section className="prize">
            <p className="sponsors"> WHY SPONSOR US?</p>
            <div className="sponsor-section">
            <div className="promotion">
            <img className="promotion-image" src={Vector4} alt="" />
               <p className="promotion-line">PROMOTION</p>
               <img className="line-1" src={Line} alt="" />
               <p className="promotion-text">sponsors will receive comprehensive promotion through all of our social media channels and during off-site events</p>
            </div>
            <div className="talent-pool">
                <img className="employment-image" src={employment1} alt="" />
                <p className="employment-line">TALENT POOL</p>
                <img className="line-2" src={Line} alt="" />
                <p className="employment-text">Sponsoring OpinHacks provides a unique opportunity for companies to access a diverse pool of talented individuals for employment considerations.</p>
            </div>
            <div className="talk">
                <img className="talk-image" src={talk1} alt="" />
                <p className="talk-line">BRAND AWARENESS</p>
                <img src={Line} alt="" className="line-3" />
                <p className="talk-text">Being part of OpinHacks will give valuable exposure and help a brand reach a large, engaged audience.</p>
            </div>

            </div>
           

            <div className="buttons">
                <button className="brochure">BROCHURE</button>
                <button className="sponsor-us">SPONSOR US</button>
            </div>
            
            <img className="boost-stairs-2" src={booststairs2} alt="boost-stairs-2" />
            <img className="boost-stairs-1" src={booststairs1} alt="boost-stairs-1" />
        </section>

    );
}



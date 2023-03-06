import React from "react";
import "./Sponsors.css";
import booststairs1 from "../../assets/booststairs1.png";
import booststairs2 from "../../assets/booststairs2.png";
import Vector4 from "../../assets/Vector4.png";
import employment1 from "../../assets/employment1.png";
import talk1 from "../../assets/talk1.png";

export const Sponsors = () => {
  return (



    <section id="Sponsors" className="prize">
      <div className="container">
        <h1 className="sponsors"> WHY SPONSORS US ??</h1>
        <div className="row">
          <div className="service">
            <img src={Vector4} className="fas fa-laptop-code" />
            <h2>PROMOTION</h2>
            <p>
              sponsors will receive comprehensive promotion through all of our
              social media channels and during off-site events
            </p>
          </div>

          <div className="service">
            <img src={employment1} className="fas fa-laptop-code" />
            <h2>TALENT POOL</h2>
            <p>
              Sponsoring OpinHacks provides a unique opportunity for companies
              to access a diverse pool of talented individuals for employment
              considerations.
            </p>
          </div>

          <div className="service">
            <img src={talk1} className="fas fa-laptop-code" />
            <h2>BRAND AWARENESS</h2>
            <p>
              Being part of OpinHacks will give valuable exposure and help a
              brand reach a large, engaged audience.
            </p>
          </div>
        </div>
        <div className="buttons">
          <a href="https://drive.google.com/file/d/1s0yKYg3_YvsVhHsgNje601Oab49JB5lt/view?usp=sharing" target="_blank">
        <button className="brochure">
          
            BROCHURE
        </button>
          </a> 
        <button className="sponsor-us">
          {" "}
          <a href="#"></a> SPONSOR US
        </button>
      </div>
      </div>



      <img className="boost-stairs-2" src={booststairs2} alt="boost-stairs-2" />
      <img className="boost-stairs-1" src={booststairs1} alt="boost-stairs-1" />
    </section>

  );
};

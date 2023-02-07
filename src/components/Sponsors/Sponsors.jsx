import React from "react";
import "./Sponsors.css";
import booststairs1 from "../../assets/booststairs1.png";
import booststairs2 from "../../assets/booststairs2.png";
import Vector4 from "../../assets/Vector4.png";
import employment1 from "../../assets/employment1.png";
import talk1 from "../../assets/talk1.png";
import Line from "../../assets/Line.png";
export const Sponsors = () => {
  return (
    <section id="Sponsors" className="prize">
      {/* <p className="sponsors"> WHY SPONSOR US?</p>
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

            </div> */}

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
      </div>

      <div className="buttons">
        <button className="brochure">
          {" "}
          <a href="#"></a> BROCHURE
        </button>
        <button className="sponsor-us">
          {" "}
          <a href="#"></a> SPONSOR US
        </button>
      </div>

      <img className="boost-stairs-2" src={booststairs2} alt="boost-stairs-2" />
      <img className="boost-stairs-1" src={booststairs1} alt="boost-stairs-1" />
    </section>

    //         <section className="sponsors">
    //             <div className="row">
    //         <h2 className="section-heading">Our Services</h2>
    //       </div>
    //       <div className="row">
    //         <div className="column">
    //           <div className="card">
    //             <div className="icon-wrapper">
    //               <i className="fas fa-hammer"></i>
    //             </div>
    //             <h3>Service Heading</h3>
    //             <p>
    //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //               consequatur necessitatibus eaque.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="column">
    //           <div className="card">
    //             <div className="icon-wrapper">
    //               <i className="fas fa-brush"></i>
    //             </div>
    //             <h3>Service Heading</h3>
    //             <p>
    //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //               consequatur necessitatibus eaque.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="column">
    //           <div className="card">
    //             <div className="icon-wrapper">
    //               <i className="fas fa-wrench"></i>
    //             </div>
    //             <h3>Service Heading</h3>
    //             <p>
    //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //               consequatur necessitatibus eaque.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="column">
    //           <div className="card">
    //             <div className="icon-wrapper">
    //               <i className="fas fa-truck-pickup"></i>
    //             </div>
    //             <h3>Service Heading</h3>
    //             <p>
    //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //               consequatur necessitatibus eaque.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="column">
    //           <div className="card">
    //             <div className="icon-wrapper">
    //               <i className="fas fa-broom"></i>
    //             </div>
    //             <h3>Service Heading</h3>
    //             <p>
    //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //               consequatur necessitatibus eaque.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="column">
    //           <div className="card">
    //             <div className="icon-wrapper">
    //               <i className="fas fa-plug"></i>
    //             </div>
    //             <h3>Service Heading</h3>
    //             <p>
    //               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
    //               consequatur necessitatibus eaque.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //         </section>
  );
};

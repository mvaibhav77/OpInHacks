import React from "react";
import "../Faq/Faq.css";
import spaceLines from "../../assets/space-lines.png";

export const Faq = () => {
  return (
    <section className="faq-section">
      <img className="space-lines" src={spaceLines} alt="" />
       
      <div className="faqs-container">
        <h1>FAQ's</h1>
        
        <div className="faq-tab">
          <input type="checkbox" name="faq" id="id1" />
          <label for="id1">
            <h2>Is pizza legal ?</h2>
          </label>
          <div className="faq-content">
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              minima est exercitationem recusandae odit reiciendis pariatur
              ducimus ipsum, veritatis deleniti.
            </h5>
          </div>
        </div>
        <div className="faq-tab">
          <input type="checkbox" name="faq" id="id2" />
          <label for="id2">
            <h2>Is pizza legal ?</h2>
          </label>
          <div className="faq-content">
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              minima est exercitationem recusandae odit reiciendis pariatur
              ducimus ipsum, veritatis deleniti.
            </h5>
          </div>
        </div>
        
      </div>
    </section>
  );
};

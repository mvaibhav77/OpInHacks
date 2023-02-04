import React, { useRef, useState } from "react";
import "../Faq/Faq.css";
import spaceLines from "../../assets/space-lines.png";

export const Faq = () => {
  const [inputCheck, setInputCheck] = useState();
  const handleCross = () => {
    const checkedInput = document.querySelector('input[name="faq"]:checked');
   
      if (inputCheck.id === checkedInput.id) {
        document.querySelector('input[name="faq"]:checked').checked = false;
        console.log("running");

    }
  };

  return (
    <section className="faq-section">
      <img className="space-lines" src={spaceLines} alt="" />

      <div className="faqs-container">
        <h1>FAQ's</h1>

        <div className="faq-tab">
          <input
            className="faq-input"
            type="radio"
            name="faq"
            id="id1"
            onChange={(e) => {
              setInputCheck(e.target);
            }}
            onClick={handleCross}
          />
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
          <input
            type="radio"
            name="faq"
            id="id2"
            onChange={(e) => {
              setInputCheck(e.target);
            }}
            onClick={handleCross}
          />
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

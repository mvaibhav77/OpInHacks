import React, { useRef, useState } from "react";
import "../Faq/Faq.css";
import spaceLines from "../../assets/space-lines.png";

export const Faq = () => {

  const faqTab = (index) => {
    return(
      <>
       <div className="faq-tab">
          <input
            className="faq-input"
            type="radio"
            name="faq"
            id={`id${index}`}
            // onChange={(e) => {
            //   setInputCheck(e.target);
            // }}
            // onClick={handleCross}
          />
          <label htmlFor={`id${index}`}>
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
      </>
    )
  }
  // const [inputCheck, setInputCheck] = useState();
  // const handleCross = () => {
  //   const checkedInput = document.querySelector('input[name="faq"]:checked');

  //     if (inputCheck && inputCheck.checked === checkedInput.checked) {

  //       document.querySelector('input[name="faq"]:checked').checked = false;
  //       console.log("running");

  //     }
  // };

  return (
    <section className="faq-section">
      
      <img className="space-lines" src={spaceLines} alt="" />
        <h1>FAQ's</h1>
      <div className="faqs-container">

        {/* <div className="faq-tab">
          <input
            className="faq-input"
            type="checkbox"
            name="faq"
            id="id1"
            // onChange={(e) => {
            //   setInputCheck(e.target);
            // }}
            // onClick={handleCross}
          />
          <label htmlFor="id1">
            <h2>Is pizza legal ?</h2>
          </label>
          <div className="faq-content">
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              minima est exercitationem recusandae odit reiciendis pariatur
              ducimus ipsum, veritatis deleniti.
            </h5>
          </div>
        </div> */}
        {faqTab(1)}
        {faqTab(2)}
        {faqTab(3)}
        {faqTab(4)}
        {faqTab(5)}
        {faqTab(6)}
        {faqTab(7)}
        {faqTab(8)}
        {faqTab(9)}
        {faqTab(10)}
        

      </div>
    </section>
  );
};

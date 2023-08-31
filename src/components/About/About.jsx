import React from "react";
import "../About/About.css";
import Pillar from "../../assets/pillar.png";
import Pillarmed from "../../assets/pillar-medium.png";
import Pillarsmall from "../../assets/pillar-small.png";
import Pillarlarge from "../../assets/pillar-large.png";

export const About = () => {
  const hackDetails = [
    {
      title: "200+",
      description: "Attendees",
    },
    {
      title: "36 Hours",
      description: "OF NONSTOP HACKING ",
    },
    {
      title: "₹1,00,000+",
      description: "worth of prizes",
    },
  ];

  return (
    <section
      id="About"
      className="about-section relative w-full min-h-full md:min-h-[50%]  overflow-hidden z-1 flex items-center justify-center"
    >
      {/* <img className="col3 absolute w-60.313 h-36.096 -left" src={Pillarmed} />
      <img className="col2 absolute" src={Pillarsmall} />
      <img className="col1 absolute" src={Pillarmed} />
      <img className="col8 absolute" src={Pillar} />
      <img className="col6 absolute" src={Pillar} />
      <img className="col4 absolute" src={Pillarmed} />
      <img className="col absolute" src={Pillar} /> */}
      {/* <div className="about-content w-100 p-4">
        <h1 className="about relative font-Hanson font-bold flex justify-center items-center text-center text-black uppercase tracking-wider pt-3 text-2xl">
          About Us
        </h1>
        <p className="para text-xs font-secondary font-medium leading-8 pb-8 flex tracking-wider text-black text-center px-16 pt-6">
          Whether you're a seasoned developer or just starting out, OpInHacks is
          the perfect platform to challenge yourself, develop new skills, and
          network with like-minded individuals. OpInHacks will be a thrilling
          and dynamic OFFLINE hackathon event designed to bring together coders
          from all backgrounds and levels of expertise. With a focus on
          fostering a competitive and inclusive environment, this 36-hour
          hackathon will feature multiple tracks, including both tech and
          non-tech, to cater to a diverse range of interests. With an emphasis
          on learning and growth, OpInHacks is not just about winning, but about
          the journey of becoming a better developer.
        </p>
      </div> */}
      <div className="flex gap-16 md:gap-8 md:flex-col font-primary">
        {hackDetails.map((hackDetails) => {
          return (
            <div className="text-white ">
              <h1
                className=" text-7xl md:text-5xl text-[#009133] text-center font-extrabold uppercase"
                style={{
                  textShadow: `
          1px 1px 1px #00d54b,
          1px 1px 1px #00d54b,
          1px 1px 1px #00d54b,
          1px 1px 1px #00d54b,
          1px 1px 1px #00d54b,
          1px 2px 1px #00d54b,
          1px 3px 1px #00d54b,
          1px 4px 1px #00d54b,
          1px 5px 1px #00d54b,
          1px 6px 1px #00d54b,
          1px 7px 1px #00d54b,
          1px 8px 1px #00d54b,

          1px 18px 6px rgba(0, 213, 75, 0.2), /* Adjusted opacity */
          1px 22px 10px rgba(0, 213, 75, 0.2), /* Adjusted opacity */
          1px 25px 35px rgba(0, 213, 75, 0.2), /* Adjusted opacity */
          1px 30px 60px rgba(0, 213, 75, 0.2)  /* Adjusted opacity */
        `,
                }}
              >
                {hackDetails.title}
              </h1>
              <p
                className=" text-2xl   text-center uppercase text-white font-extrabold tracking-wider font-Satoshi md:mt-1  "
                style={{
                //   textShadow: `
                //   1px 1px 1px white,
                //   1px 1px 1px white,
                //   1px 1px 1px white,
                //   1px 1px 1px white,
                //   1px 1px 1px white,
                //   1px 2px 1px white,
                //   1px 3px 1px white,

              
    
                //   1px 18px 6px rgba(255, 255, 255, 0.2), /* Adjusted opacity */
                //   1px 22px 10px rgba(255, 255, 255, 0.2), /* Adjusted opacity */
                //   1px 25px 35px rgba(255, 255, 255, 0.2), /* Adjusted opacity */
                //   1px 30px 60px rgba(255, 255, 255, 0.2)  /* Adjusted opacity */
                // `,
                }}
              >
                {hackDetails.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

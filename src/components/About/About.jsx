import React from "react";
import "../About/About.css";
import CardBackground from "../../assets/about/background-about.png";
import Discussion from "../../assets/about/about-discussion.png";
import Product from "../../assets/about/about-product.png";
import Community from "../../assets/about/about-community.png";
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

  const aboutInfo = [
    {
      id: 0,
      logo: Product,
      title: "CG’s Tech Revolution",
      description: "The very first MLH 36-hour hackathon of State",
    },
    {
      id: 1,
      logo: Community,
      title: "Hack the Present, Change the Future",
      description: "Theme: A battle through time!",
    },
    {
      id: 2,
      logo: Product,
      title: "Pre-Hack sessions & Mentorship",
      description: "Upskill through pre-hack sessions, workshops to polish your project",
    },
  ];

  const aboutInfoStyle = {
    backgroundImage: `url(${CardBackground})`,
  };

  return (
    <section
      id="About"
      className="about-section relative w-full min-h-full md:min-h-[50%] mt-48 md:mt-0 mb-28 md:mb-12 overflow-hidden z-1 flex flex-col items-center justify-center"
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
      <div className="flex gap-16 md:gap-8 md:flex-col font-primary my-20 md:my-10">
        {hackDetails.map((hackDetails) => {
          return (
            <div className="text-white ">
              <h1
                className=" text-7xl md:text-4xl text-[#009133] text-center font-extrabold uppercase"
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
      <h1 className="mt-20 mb-12 md:mt-8 md:mb-6 font-karrera text-primary text-center tracking-widest text-5xl md:text-3xl pb-10 md:py-6">
        ABOUT US
      </h1>
      <div className="main-about w-[90%] grid grid-cols-2 md:gap-12 md:grid-cols-1 items-center">
        <div className="about-body mx-auto">
          <p className="question mb-4 text-4xl text-white font-Satoshi">
          OpinHacks - What’s the deal?
          </p>
          <p className="answer text-base  font-secondary text-white opacity-60">
          Opinhacks is the brainchild of tech-savvy students on a mission. 
Our aim? To create a weekend of coding, creativity, and chaotic brilliance. Think of us as a stage for hackers from all corners to pioneer groundbreaking tech solutions and push limits, or, you know, discover them :)
          </p>
          <div className="stats flex flex-col gap-12 mt-12 justify-content-center">
            <div className="item flex flex-col md:items-center">
              <p className="font-Satoshi-Black text-primary text-7xl">60+</p>
              <p className="text-white font-secondary opacity-70">
              teams READY
              </p>
            </div>
            <div className="item flex flex-col md:items-center">
              <p className="font-Satoshi-Black text-primary text-7xl">3NITY</p>
              <p className="text-white font-secondary opacity-60">
              Organising Tech Communities
              </p>
            </div>
          </div>
        </div>

        <div className="about-info-card flex flex-col">
          <div
            className="about-info-body flex flex-col py-16 md:py-8 md:w-[90%] px-12 md:px-0 mx-auto text-white gap-24 md:gap-6 justify-center bg-center bg-no-repeat bg-cover max-w-[510px]"
            style={aboutInfoStyle}
          >
            {aboutInfo.map(({ id, title, description, logo }) => (
              <div
                className="item flex flex-row gap-6 items-center"
                key={id}
              >
                <img src={logo} alt={title} className="h-auto w-16" />
                <div className="flex flex-col gap-1 justify-center">
                  <p className="font-secondary text-xl font-bold">{title}</p>
                  <p className="font-secondary opacity-60">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

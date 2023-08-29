import React from "react";
import "../About/About.css";
import Pillar from "../../assets/pillar.png";
import Pillarmed from "../../assets/pillar-medium.png";
import Pillarsmall from "../../assets/pillar-small.png";
import Pillarlarge from "../../assets/pillar-large.png";

export const About = () => {
  return (
    <section
      id="About"
      className="about-section relative w-full min-h-full md:min-h-[50%] bg-light overflow-hidden z-1"
    >
      <img className="col3 absolute w-60.313 h-36.096 -left" src={Pillarmed} />
      <img className="col2 absolute" src={Pillarsmall} />
      <img className="col1 absolute" src={Pillarmed} />
      <img className="col8 absolute" src={Pillar} />
      <img className="col6 absolute" src={Pillar} />
      <img className="col4 absolute" src={Pillarmed} />
      <img className="col absolute" src={Pillar} />
      <div className="about-content w-100 p-4">
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
      </div>
    </section>
  );
};

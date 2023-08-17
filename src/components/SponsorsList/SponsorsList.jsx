import "./SponsorsList.css";
import MLH from "../../assets/mlh-logo-1.png";
import GitHub from "../../assets/GitHub-logo.png";
import Postman from "../../assets/pm-logo-1.png";

function SponsorsList() {
  const sponsors = [
    {
      name: "MLH",
      img: MLH,
    },
    {
      name: "GitHub",
      img: GitHub,
    },
    {
      name: "Postman",
      img: Postman,
    },
  ];

  return (
    <div id="sponsors-list" className="sponsors-container">
      <h1 className="header">MEET OUR INCREDIBLE SPONSORS</h1>
      <div className="s-row">
        {sponsors.map((sponsor) => (
          <button className="btn s-col" id={sponsor.name.toLowerCase()}>
            <img src={sponsor.img} alt={sponsor.name} srcset="" />
          </button>
        ))}
        {/* <button className="btn s-col" id="mlh">
          <img src={MLH} alt="MLH" srcset="" />
        </button>
        <button className="s-col" id="github">
          <img src={GitHub} alt="GitHub" srcset="" />
        </button>
        <button className="s-col" id="postman">
          <img src={Postman} alt="Postman" srcset="" />
        </button> */}
      </div>
    </div>
  );
}

export default SponsorsList;

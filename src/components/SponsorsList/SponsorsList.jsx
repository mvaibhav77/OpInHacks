import "./SponsorsList.css";
import MLH from "../../assets/mlh-logo-1.png";
import GitHub from "../../assets/github-logo.png";
import Postman from "../../assets/pm-logo-1.svg";

function SponsorsList() {
  const sponsors = [
    {
      name: "MLH",
      img: MLH,
      href: "https://mlh.io/",
    },
    {
      name: "GitHub",
      img: GitHub,
      href: "https://github.com/",
    },
    {
      name: "Postman",
      img: Postman,
      href: "https://www.postman.com/",
    },
  ];

  return (
    <div id="sponsors-list" className="sponsors-container">
      <h1 className="sponserslist-title">MEET OUR INCREDIBLE SPONSORS</h1>
      <div className="s-row">
        {sponsors.map(({ name, img, href }) => (
          <a
            target="blank"
            className="btn s-col"
            href={href}
            id={name.toLowerCase()}
          >
            <img src={img} alt={name} srcset="" />
          </a>
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

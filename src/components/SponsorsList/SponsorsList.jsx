import "./SponsorsList.css";
import MLH from "../../assets/mlh-logo-white.png";
import GitHub from "../../assets/github-logo-white.png";
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
    <div
      id="sponsors-list"
      className="sponsors-container mb-8 w-100 bg-dark m-auto grid grid-cols justify-center items-center"
    >
      <h1 className="sponserslist-title text-white text-center text-3xl md:text-2xl pt-14 font-primary">
        MEET OUR INCREDIBLE SPONSORS
      </h1>
      <div className="s-row grid grid-cols-3 md:grid-cols-1 w-4/5 mx-auto my-[4rem] md:my-[2.5rem]">
        {sponsors.map(({ name, img, href }) => (
          <a
            target="blank"
            className="s-col border-2 border-primary flex items-center justify-center p-[60px]"
            href={href}
            id={name.toLowerCase()}
          >
            <img src={img} className="w-full" alt={name} srcset="" />
            {/* img width has anomaly because of the css file Footer/Footer.css. It will be fixed after footer section is modified with tailwindCSS.*/}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SponsorsList;

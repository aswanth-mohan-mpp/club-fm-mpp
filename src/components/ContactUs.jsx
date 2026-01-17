import { useState } from "react";
import bottomBanner from "../assets/images/bottom-banner-web.png";
import logo from "../assets/images/fm-logo.png";
import youtubeIcon from "../assets/icons/youtube-yellow.svg";
import instaIcon from "../assets/icons/insta-yellow.svg";
import fbicon from "../assets/icons/fb-yellow.svg";
import xIcon from "../assets/icons/x-yellow.svg";

const locations = [
  {
    name: "TRIVANDRUM",
    address: "Mathrubhumi Buildings, Vanchiyoor, Thiruvanathapuram 695035",
    off: "0471 2520600",
    whatsapp: "917510555943",
  },
  {
    name: "ALAPPUZHA",
    address:
      "Mathrubhumi V.M. Nair Memorial Building, Church Road, V.M. Nair Memorial Building Alappuzha, Alappuzha 688011",
    off: "0477 2230864",
    whatsapp: "91906 105 1048",
  },
  {
    name: "KOZHIKODE",
    address:
      "CLUB FM 104.8, 4th Floor, MM Press Cherootty Road, Kozhikode 673001",
    off: "0495 2779444",
    whatsapp: "919061031048",
  },
  {
    name: "KANNUR",
    address:
      "CLUB FM 94.3, 4th floor, Mathrubhumi Building Nadal Bypass, Edakkad PO, Kannur 670663",
    off: "0497 2825330",
    whatsapp: "917510666943",
  },
  {
    name: "THRISSUR",
    address:
      "Mathrubhumi Buildings, 2nd Floor, Mathrubhumi, Veliyannur Road Thrissur, 680021",
    off: "0487 2455300",
    whatsapp: "917510551048",
  },
  {
    name: "COCHIN",
    address:
      "Mathrubhumi Press, Udyogamandal Manjummel North Janatha Road, Cochin 683501",
    off: "",
    whatsapp: "",
  },
];

export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="contact"
      className="container relative w-full mx-auto  bg-cover bg-center"
      style={{ backgroundImage: `url(${bottomBanner})` }}
    >
      <div className="flex justify-start">
        <span className="text-2xl font-normal text-black py-4 px-6 bg-white">
          CONTACT US
        </span>
      </div>

      <div className="container mx-auto relative z-10 p-4 md:p-6 flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="w-full lg:w-1/3 flex flex-col gap-1">
          <div className="flex justify-center items-center mb-4">
            <img src={logo} alt="logo" className="w-20" />
          </div>
          {locations.map((loc, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className={`w-full flex justify-between items-center px-4 py-3 text-2xl uppercase transition-colors bg-club-yellow text-black`}
              >
                <span>{loc.name}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#262626] text-white
                            ${
                              openIndex === index
                                ? "max-h-64 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
              >
                <div className="p-4 text-center text-sm font-medium">
                  <p className="mb-1">{loc.address}</p>
                  <p className="text-club-yellow">
                    OFF : <span className="text-white">{loc.off}</span> ,
                    WHATSAPP :{" "}
                    <span className="text-white">{loc.whatsapp}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/3">
          <div className="w-full h-full min-h-[300px] lg:min-h-[400px] bg-gray-300/80 backdrop-blur-sm shadow-xl"></div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 pb-4 md:pb-6 px-4 md:px-6">
        <button className="cursor-pointer focus:outline-none">
          <img src={youtubeIcon} alt="youtube" className="w-8 h-8" />
        </button>
        <button className="cursor-pointer focus:outline-none">
          <img src={instaIcon} alt="insta" className="w-8 h-8" />
        </button>
        <button className="cursor-pointer focus:outline-none">
          <img src={fbicon} alt="fb" className="w-8 h-8" />
        </button>
        <button className="cursor-pointer focus:outline-none">
          <img src={xIcon} alt="x" className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}

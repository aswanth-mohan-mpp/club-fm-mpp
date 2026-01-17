import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import bottomBanner from "../assets/images/bottom-banner-web.png";
import logo from "../assets/images/fm-logo.png";
import youtubeIcon from "../assets/icons/youtube-yellow.svg";
import instaIcon from "../assets/icons/insta-yellow.svg";
import fbicon from "../assets/icons/fb-yellow.svg";
import xIcon from "../assets/icons/x-yellow.svg";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const locations = [
  {
    name: "TRIVANDRUM",
    address: "Mathrubhumi Buildings, Vanchiyoor, Thiruvanathapuram 695035",
    off: "0471 2520600",
    whatsapp: "917510555943",
    lat: 8.497,
    lng: 76.941,
  },
  {
    name: "ALAPPUZHA",
    address:
      "Mathrubhumi V.M. Nair Memorial Building, Church Road, V.M. Nair Memorial Building Alappuzha, Alappuzha 688011",
    off: "0477 2230864",
    whatsapp: "91906 105 1048",
    lat: 9.493,
    lng: 76.333,
  },
  {
    name: "KOZHIKODE",
    address:
      "CLUB FM 104.8, 4th Floor, MM Press Cherootty Road, Kozhikode 673001",
    off: "0495 2779444",
    whatsapp: "919061031048",
    lat: 11.252,
    lng: 75.777,
  },
  {
    name: "KANNUR",
    address:
      "CLUB FM 94.3, 4th floor, Mathrubhumi Building Nadal Bypass, Edakkad PO, Kannur 670663",
    off: "0497 2825330",
    whatsapp: "917510666943",
    lat: 11.838,
    lng: 75.409,
  },
  {
    name: "THRISSUR",
    address:
      "Mathrubhumi Buildings, 2nd Floor, Mathrubhumi, Veliyannur Road Thrissur, 680021",
    off: "0487 2455300",
    whatsapp: "917510551048",
    lat: 10.518,
    lng: 76.216,
  },
  {
    name: "COCHIN",
    address:
      "Mathrubhumi Press, Udyogamandal Manjummel North Janatha Road, Cochin 683501",
    off: "",
    whatsapp: "",
    lat: 10.059,
    lng: 76.313,
  },
];

function MapUpdater({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState(-1);

  const defaultCenter = [10.5, 76.2];
  const defaultZoom = 7;

  const currentCenter =
    openIndex !== -1 && locations[openIndex]
      ? [locations[openIndex].lat, locations[openIndex].lng]
      : defaultCenter;
  const currentZoom = openIndex !== -1 ? 13 : defaultZoom;

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
                  className={`w-4 h-4 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
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
                            ${openIndex === index
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0"
                  }`}
              >
                <div className="p-4 text-center text-sm font-medium">
                  <p className="mb-1">{loc.address}</p>
                  <p className="text-club-yellow">
                    OFF : <span className="text-club-yellow">{loc.off}</span> ,
                    WHATSAPP :{" "}
                    <span className="text-club-yellow">{loc.whatsapp}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/3">
          <div className="w-full h-full min-h-[300px] lg:min-h-[400px] shadow-xl">
            <MapContainer
              center={defaultCenter}
              zoom={defaultZoom}
              scrollWheelZoom={false}
              className="w-full h-full min-h-[400px]"
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapUpdater center={currentCenter} zoom={currentZoom} />

              {locations.map((loc, index) => (
                <Marker
                  key={index}
                  position={[loc.lat, loc.lng]}
                  eventHandlers={{
                    click: () => {
                      setOpenIndex(index);
                    },
                  }}
                >
                  <Popup>
                    <strong className="text-club-yellow font-bold">{loc.name}</strong><br />
                    {loc.address}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
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

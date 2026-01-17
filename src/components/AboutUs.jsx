import bottomBanner from "../assets/images/bottom-banner-web.png";
import union from "../assets/icons/union.svg";
import wave from "../assets/images/wave.png";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="container relative w-full mx-auto bg-cover bg-center min-h-[600px] flex flex-col h-full"
      style={{ backgroundImage: `url(${bottomBanner})` }}
    >
        <div className="flex justify-start">
          <span className="text-2xl font-normal text-black py-4 px-6 bg-white">
            ABOUT US
          </span>
          <img src={union} alt="union" />
        </div>

        <div className="flex flex-col justify-between items-center flex-1 mx-auto p-4 md:py-10 md:px-6">
          <img
            src={wave}
            alt="wave"
            className="w-[329.617px] h-[58.962px] md:w-[678.4px] md:h-[152px] object-contain"
          />

          <div className="bg-club-background p-4">
            <p className="text-light-gray font-normal text-sm md:text-base leading-relaxed text-start">
              Club FM is a private FM radio station for the state of Kerala in
              India, operated by the Mathrubhumi in Kerala. Club FM, Kerala's
              No.1 FM, has been delivering tons of fun to Malayalee audiences
              for 14 years, living up to its popular tagline "Ton Kannakkinu
              Fun". Born from the house of Mathrubhumi in the year 2007 with its
              first station in Thrissur, Club FM soon expanded to Kannur,
              Trivandrum, Kochi, Dubai, Kozhikode and Alappuzha, capturing the
              hearts of millions through well-crafted shows, affable and vibrant
              RJs and unlimited music curated by experts in the field.
            </p>
          </div>
        </div>
    </section>
  );
}

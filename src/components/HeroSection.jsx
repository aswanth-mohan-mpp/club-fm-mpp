import topBannerWeb from "../assets/images/top-banner-web.jpg";
import topBannerMobile from "../assets/images/top-banner-mob.png";
import fmLogoOne from "../assets/images/fm-logo-one.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-club-background flex flex-col justify-center overflow-hidden"
    >
      <img
        src={topBannerWeb}
        alt="top banner"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-0" />

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="mt-20 md:mt-0 max-w-lg">
          <h1 className="text-4xl md:text-6xl font-condensed font-bold text-club-yellow leading-none mb-1">
            CLUB <span className="text-white">FM</span>
          </h1>
          <p className="text-sm md:text-xl text-white tracking-widest uppercase mb-10 border-l-4 border-club-yellow pl-3">
            Kerala’s No.1 <br /> FM Station
          </p>
        </div>

        <div className="absolute left-4 top-1/3 flex flex-col gap-4 text-gray-400 md:hidden"></div>
      </div>

      <div className="absolute bottom-32 left-0 w-full flex items-end justify-center gap-1 h-24 px-4 z-10 opacity-80">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`w-1md:w-2 bg-white/20 ${
              i % 2 === 0 ? "bg-club-yellow/80" : ""
            }`}
            style={{ height: `${Math.random() * 100}%`, width: "4px" }}
          />
        ))}
        <div className="w-2 h-full bg-club-yellow mx-1"></div>
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`w-1 md:w-2 bg-white/20 ${
              i % 2 !== 0 ? "bg-club-yellow/80" : ""
            }`}
            style={{ height: `${Math.random() * 100}%`, width: "4px" }}
          />
        ))}
      </div>

      <div className="absolute bottom-10 left-4 md:left-20 z-20">
        <div className="flex items-stretch shadow-lg">
          <div className="bg-club-yellow p-3 flex items-center justify-center text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M19.07 4.93L17.66 6.34C18.78 7.46 19.5 9 19.5 10.74c0 1.74-.72 3.28-1.84 4.4L19.07 16.57c1.55-1.55 2.5-3.63 2.5-5.83 0-2.2-1.02-4.28-2.5-5.81z" />
              <path d="M15.54 8.46l-1.41 1.41C14.56 10.29 14.88 10.9 14.88 11.5c0 .6-.32 1.21-.75 1.63l1.41 1.41c.85-1.02 1.34-2.14 1.34-3.04 0-1.12-.49-2.23-1.34-3.04z" />
            </svg>
          </div>
          <div className="bg-white px-4 py-2 flex items-center">
            <span className="text-black font-bold font-condensed uppercase tracking-wide">
              What is Trending Now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

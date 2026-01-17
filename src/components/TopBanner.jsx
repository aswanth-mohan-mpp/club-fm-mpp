import Navbar from "./Navbar";
import topBannerBg from "../assets/images/top-banner-web.jpg";
import fmLogo from "../assets/images/fm-logo-one.png";
import wave from "../assets/images/wave.png";

export default function TopBanner() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${topBannerBg})` }}
    >
      <div className="relative z-50">
        <Navbar />
      </div>

        <div className="absolute top-10 left-4 md:left-56 z-20">
          <img src={fmLogo} alt="logo" className="w-20" />
        </div>

      <div className="absolute -bottom-28 left-0 w-full z-30 flex justify-center pointer-events-none">
        <img
          src={wave}
          alt="wave"
          className="w-full max-w-5xl"
        />
      </div>
    </section>
  );
}

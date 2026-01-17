import AboutUs from "../components/AboutUs";
import ClubWonders from "../components/ClubWonders";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-club-background flex flex-col">
      <TopBanner />
      <div className="flex flex-col justify-center gap-6 md:gap-12">
        <ClubWonders />
        <AboutUs />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

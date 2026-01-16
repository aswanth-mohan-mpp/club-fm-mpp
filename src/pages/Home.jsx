import AboutUs from '../components/AboutUs';
import ClubWonders from '../components/ClubWonders';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const Home = () => {
return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <ClubWonders />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;

import { useState, useEffect } from "react";
import upArrow from "../assets/icons/up-arrow.svg";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gray text-white shadow-lg focus:outline-none"
          aria-label="Scroll to top"
        >
        <img src={upArrow} alt="up arrow" className="w-8 h-8" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

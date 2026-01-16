import { useState } from "react";
import menuIcon from "../assets/icons/menu.svg";
import closeicon from "../assets/icons/close.svg";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "CLUB WONDERS", id: "club-wonders" },
    { name: "ABOUT US", id: "about" },
    { name: "CONTACT US", id: "contact" },
  ];
const closeMobileMenu=()=>{
    setIsOpen(false);
}
  return (
    <nav className="relative w-full bg-transparent p-4">
      <div className="container flex justify-end items-center">
        <div className="hidden md:flex gap-4 bg-black p-2 rounded-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="cursor-pointer text-club-yellow text-base font-medium p-2 bg-club-background outline-none"
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <img src={menuIcon} alt="menu" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="">
          <div className="md:hidden absolute top-0 right-0 z-10 w-64 flex flex-col gap-4 bg-dark-gray px-6 py-10">
            <div className="flex justify-end mb-2">
              <button className="p-0 outline-none" onClick={closeMobileMenu}>
                <img src={closeicon} alt="close" className="w-8 h-8" />
              </button>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className="cursor-pointer text-club-yellow text-base font-medium p-2 bg-club-background outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

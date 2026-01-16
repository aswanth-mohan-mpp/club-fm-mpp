const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black z-50">
      <ul className="flex gap-6 text-yellow-400 p-4 justify-end">
        <li onClick={() => scrollToSection('home')} className="cursor-pointer">Home</li>
        <li onClick={() => scrollToSection('club-wonders')} className="cursor-pointer">Club Wonders</li>
        <li onClick={() => scrollToSection('about')} className="cursor-pointer">About Us</li>
        <li onClick={() => scrollToSection('contact')} className="cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  );
}

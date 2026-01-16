export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <img
        src="/hero-bg.jpg" 
        alt="Studio microphone"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
          CLUB FM
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Kerala’s No.1 FM Station
        </p>
      </div>
    </section>
  );
}

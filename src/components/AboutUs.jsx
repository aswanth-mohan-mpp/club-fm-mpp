export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-black w-full py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-8">
          <div className="h-8 w-2 bg-club-yellow mr-2"></div>
          <h2 className="text-black text-xl md:text-2xl font-condensed font-bold bg-white px-3 py-1 inline-block uppercase">
            ABOUT US
          </h2>
          <div className="h-8 w-2 bg-club-yellow ml-0"></div>
        </div>
        <div className="relative bg-gray-900/50 p-6 md:p-10 border border-gray-800 backdrop-blur-sm">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-1 h-12 bg-club-yellow mb-2"></div>
          </div>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify md:text-center mt-6">
            Club FM is a private FM radio station for the state of Kerala in
            India, operated by the Mathrubhumi in Kerala. Club FM, Kerala's No.1
            FM, has been delivering tons of fun to Malayalee audiences for 14
            years, living up to its popular tagline "Ton Kannakkinu Fun". Born
            from the house of Mathrubhumi in the year 2007 with its first
            station in Thrissur, Club FM soon expanded to Kannur, Trivandrum,
            Kochi, Dubai, Kozhikode and Alappuzha, capturing the hearts of
            millions through well-crafted shows, affable and vibrant RJs and
            unlimited music curated by experts in the field.
          </p>
        </div>
      </div>
    </section>
  );
}

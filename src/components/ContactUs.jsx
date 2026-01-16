import { useState } from 'react';

const locations = [
  { name: 'TRIVANDRUM', content: 'Address and details for Trivandrum studio...' },
  { name: 'ALAPPUZHA', content: 'Address and details for Alappuzha studio...' },
  { name: 'KOZHIKODE', content: 'Address and details for Kozhikode studio...' },
  { name: 'KANNUR', content: 'Address and details for Kannur studio...' },
  { name: 'THRISSUR', content: 'Address and details for Thrissur studio...' },
  { name: 'COCHIN', content: 'Address and details for Cochin studio...' },
];

export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="contact" className="relative bg-black w-full py-20">
      <div className="container mx-auto px-4">

        <div className="mb-8">
          <h2 className="text-black text-xl md:text-2xl font-condensed font-bold bg-white px-3 py-1 inline-block uppercase shadow-[4px_4px_0px_0px_rgba(255,221,0,1)]">
            CONTACT US
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
          <div className="w-full md:w-1/3 flex flex-col gap-1">
            {locations.map((loc, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => setOpenIndex(index)}
                  className={`w-full flex justify-between items-center px-4 py-3 font-condensed font-bold uppercase transition-colors ${openIndex === index ? 'bg-club-yellow text-black' : 'bg-club-yellow/80 hover:bg-club-yellow text-black'}`}
                >
                  <span>{loc.name}</span>
                  <svg className={`w-4 h-4 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="hidden md:block w-full md:w-2/3 bg-gray-200 h-[400px]">
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-black font-bold">{locations[openIndex].name} MAP/DETAILS VIEW</p>
            </div>
          </div>

          <div className="md:hidden w-full bg-gray-200 h-64 mt-2">
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-black font-bold">{locations[openIndex].name} DETAILS</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

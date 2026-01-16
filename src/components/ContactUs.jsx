import { useState } from 'react';
import bottomBanner from '../assets/images/bottom-banner-web.png';

const locations = [
  {
    name: 'TRIVANDRUM',
    address: 'Mathrubhumi Buildings, Vanchiyoor, Thiruvanathapuram 695035',
    off: '0471 2520600',
    whatsapp: '917510555943'
  },
  {
    name: 'ALAPPUZHA',
    address: 'Mathrubhumi Buildings, Alappuzha',
    off: '0477 22334455',
    whatsapp: '917510555944'
  },
  {
    name: 'KOZHIKODE',
    address: 'Mathrubhumi Buildings, Kozhikode',
    off: '0495 22334455',
    whatsapp: '917510555945'
  },
  {
    name: 'KANNUR',
    address: 'Mathrubhumi Buildings, Kannur',
    off: '0497 22334455',
    whatsapp: '917510555946'
  },
  {
    name: 'THRISSUR',
    address: 'Mathrubhumi Buildings, Thrissur',
    off: '0487 22334455',
    whatsapp: '917510555947'
  },
  {
    name: 'COCHIN',
    address: 'Mathrubhumi Buildings, Cochin',
    off: '0484 22334455',
    whatsapp: '917510555948'
  },
];

export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="contact"
      className="relative w-full py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bottomBanner})` }}
    >
      <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="mb-8">
          <h2 className="text-black text-xl md:text-2xl font-condensed font-bold bg-white px-3 py-1 inline-block uppercase shadow-[4px_4px_0px_0px_rgba(255,221,0,1)]">
            CONTACT US
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="w-full lg:w-1/3 flex flex-col gap-1">
            {locations.map((loc, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  className={`w-full flex justify-between items-center px-4 py-3 font-condensed font-bold uppercase transition-colors bg-club-yellow text-black`}
                >
                  <span>{loc.name}</span>
                  <svg className={`w-4 h-4 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#262626] text-white
                            ${openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-4 text-center text-sm font-medium">
                    <p className="mb-1">{loc.address}</p>
                    <p className="text-club-yellow">
                      OFF : <span className="text-white">{loc.off}</span> ,
                      WHATSAPP : <span className="text-white">{loc.whatsapp}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-2/3">
            <div className="w-full h-full min-h-[300px] lg:min-h-[400px] bg-gray-300/80 backdrop-blur-sm shadow-xl">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

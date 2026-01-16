import { useEffect, useState } from 'react';

const videos = [
  { id: 1, title: 'INTERVIEW WITH DIRECTOR', image: '/video-thumb-1.jpg' },
  { id: 2, title: 'MUSIC LAUNCH EVENT', image: '/video-thumb-2.jpg' },
  { id: 3, title: 'RJ TALK SHOW', image: '/video-thumb-3.jpg' }
];

export default function ClubWonders() {
  const [active, setActive] = useState(0);

  return (
    <section id="club-wonders" className="bg-black/90 py-10 relative">
      <div className="container mx-auto px-4">

        <div className="flex items-center mb-6">
          <div className="h-8 w-2 bg-club-yellow mr-2"></div>
          <h2 className="text-white text-xl md:text-2xl font-condensed font-bold bg-white px-3 py-1 text-black inline-block uppercase">
            CLUB WONDERS
          </h2>
          <div className="h-8 w-2 bg-club-yellow ml-0"></div>
        </div>

        <div className="relative w-full aspect-video md:aspect-[21/9] bg-gray-800 overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500">Video Placeholder {active + 1}</span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

          <div className="absolute bottom-8 left-0 w-full text-center">
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">CLUB FM</p>
            <h3 className="text-white text-2xl md:text-4xl font-condensed font-bold uppercase">{videos[active].title}</h3>
            <div className="mt-4 flex justify-center">
              <button className="text-white hover:text-club-yellow transition-colors">
                <svg className="w-8 h-8 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>

          <div className="absolute right-4 bottom-10 flex flex-col gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2 h-2 rounded-sm ${active === index ? 'bg-white' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

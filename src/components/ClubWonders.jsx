import { useEffect, useState } from 'react';

const videos = [
  "https://www.youtube.com/embed/VIDEO_ID_1",
  "https://www.youtube.com/embed/VIDEO_ID_2",
  "https://www.youtube.com/embed/VIDEO_ID_3"
];

export default function ClubWonders() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="club-wonders" className="bg-black py-20">
      <div className="flex flex-col lg:flex-row gap-6 items-center max-w-6xl mx-auto">

        <div className="w-full lg:w-3/4 aspect-video">
          <iframe
            src={videos[active]}
            className="w-full h-full"
            allowFullScreen
          />
        </div>

        <div className="flex lg:flex-col gap-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-10 h-10 font-bold ${
                active === index ? 'bg-yellow-400' : 'bg-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

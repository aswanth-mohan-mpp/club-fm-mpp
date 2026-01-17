import { useEffect, useState, useRef } from "react";
import union from "../assets/icons/union.svg";
import share from "../assets/icons/share.svg";

const ClubWonders = () => {
  const [videos, setVideos] = useState([]);
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://www.youtube.com/feeds/videos.xml?channel_id=UCiCzK8JvuBSATbBa4FFaf7w"
        );
        console.log("YouTube feed response:", response);
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const entries = xmlDoc.querySelectorAll("entry");

        const videoData = Array.from(entries)
          .slice(0, 3)
          .map((entry) => {
            const videoId = entry.querySelector("videoId")?.textContent;
            const title = entry.querySelector("title")?.textContent;

            return {
              id: videoId,
              title: title,
              thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
              videoUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
            };
          });

        if (videoData.length > 0) {
          setVideos(videoData);
        }
      } catch (error) {
        console.error("Error fetching YouTube feed:", error);

        setVideos([
          { id: "1", title: "Loading...", thumbnail: "", videoUrl: "" },
        ]);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length === 0 || isPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [videos, isPlaying]);

  const handleManualSwitch = (index) => {
    setActive(index);
    setIsPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const currentVideo = videos[active];

  if (videos.length === 0) return null;

  return (
    <section
      id="club-wonders"
      className="container mx-auto relative w-full py-10 mt-12"
    >
      <div className="relative w-full aspect-video md:aspect-[21/9] bg-black overflow-hidden shadow-2xl group flex flex-col">
        <div className="absolute top-0 left-0 z-30 flex justify-start">
          <span className="text-2xl font-normal text-black py-4 px-6 bg-white">
            CLUB WONDERS
          </span>
          <img src={union} alt="union" />
        </div>

        <div className="relative flex-grow w-full h-full">
          {!isPlaying ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${currentVideo?.thumbnail})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              <button
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform duration-300"
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55 40L30 55V25L55 40Z"
                    fill="white"
                    className="opacity-90"
                  />
                </svg>
              </button>
            </>
          ) : (
            <iframe
              src={currentVideo?.videoUrl}
              title={currentVideo?.title}
              className="w-full h-full absolute inset-0 z-10"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20 flex justify-between items-center py-2 px-10 bg-#0C0C0C26">
          <div />
          <h3 className="text-white text-xl md:text-3xl font-normal uppercase truncate max-w-md md:max-w-2xl">
            {currentVideo?.title}
          </h3>

          <button className="flex items-center justify-center w-12 h-12 hover:bg-white/10 rounded-full transition-colors">
            <img src={share} alt="share" className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute right-8 bottom-24 z-30 flex flex-col gap-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualSwitch(index)}
              className="flex items-center gap-3 group/btn"
            >
              <div
                className={`w-3 h-3 transition-colors duration-300 ${
                  active === index ? "bg-white" : "bg-[#757575]"
                }`}
              ></div>
              <span
                className={`text-sm font-bold transition-colors duration-300 ${
                  active === index ? "text-white" : "text-[#757575]"
                }`}
              >
                0{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubWonders;

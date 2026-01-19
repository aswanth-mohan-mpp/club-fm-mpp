import trending from "../assets/icons/trending.svg";

const TrendingLabel = () => {
  return (
    <div className="container mx-auto relative w-full flex justify-start mt-6 md:mt-12">
      <div className="flex items-center py-1 px-4 bg-club-yellow">
        <img src={trending} alt="trending" />
      </div>
      <span className="text-2xl font-normal text-black py-4 px-6 bg-white">
        What is Trending Now
      </span>
    </div>
  );
};

export default TrendingLabel;

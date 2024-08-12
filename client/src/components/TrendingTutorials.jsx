import CustomCarousel from './CustomCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TrendingTutorials = () => {
  return (
    <div className="w-[90%] mx-auto my-60 mt-60 bg-deepBlue border-2 border-royalBlue-dark shadow-lg rounded-lg p-8">
      <div className="flex justify-center">
        <h2 className="text-5xl font-bold mb-8 text-white relative inline-flex items-center">
          <span className="mr-4 animate-pulse">✨</span>
          <span className="bg-gradient-to-r from-tealBlue via-brightPeach to-royalBlurp bg-clip-text text-transparent">
            Trending Tutorials
          </span>
          <span className="ml-4 animate-pulse">✨</span>
        </h2>
      </div>
      <CustomCarousel />
    </div>
  );
};

export default TrendingTutorials;




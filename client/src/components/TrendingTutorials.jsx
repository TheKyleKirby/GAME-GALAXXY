import CustomCarousel from './CustomCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TrendingTutorials = () => {
  return (
    <div id="trending-tutorials" className="w-[90%] mx-auto my-60 mt-60 bg-deepBlue border-2 border-royalBlue-dark shadow-lg rounded-lg p-8">
      <div className="flex justify-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-white relative flex items-center justify-center">
          <span className="mr-1 sm:mr-2 md:mr-3 lg:mr-4 animate-pulse text-sm sm:text-base md:text-lg lg:text-2xl">✨</span>
          <span className="bg-gradient-to-r from-tealBlue via-brightPeach to-royalBlurp bg-clip-text text-transparent m-auto custom-heading leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
            Trending Tutorials
          </span>
          <span className="ml-1 sm:ml-2 md:ml-3 lg:ml-4 animate-pulse text-sm sm:text-base md:text-lg lg:text-2xl">✨</span>
        </h2>
      </div>
      <CustomCarousel />
    </div>
  );
};

export default TrendingTutorials;
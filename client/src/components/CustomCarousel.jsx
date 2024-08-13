import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TUTORIALS } from '../utils/queries';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { loading, error, data } = useQuery(GET_TUTORIALS);
  const [trendingTutorials, setTrendingTutorials] = useState([]);
  const [isSingleSlide, setIsSingleSlide] = useState(window.innerWidth <= 1024);

  const navigate = useNavigate()



  useEffect(() => {
    if (data) {
      setTrendingTutorials(data.allTutorials);
    } else {
      console.log('Loading...');
    }
  }, [data]);


  useEffect(() => {
    const handleResize = () => {
      setIsSingleSlide(window.innerWidth <= 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error.message}</p>;

  const handleReadTutorial = (id) => {
    navigate(`/tutorial/${id}`)
  }

  // Handle previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(trendingTutorials.length / (isSingleSlide ? 1 : 2)) - 1 : prevIndex - 1
    );
  };

  // Handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(trendingTutorials.length / (isSingleSlide ? 1 : 2)) - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the current slides to display
  const getCurrentSlides = () => {
    const startIndex = currentIndex * (isSingleSlide ? 1 : 2);
    return trendingTutorials.slice(startIndex, startIndex + (isSingleSlide ? 1 : 2));
  };
  

  return (
    <div className="relative w-[95%] mx-auto mt-8 mb-8">
  <div className="relative flex flex-col sm:flex-row items-center justify-center">
    {getCurrentSlides().map((tutorial, index) => (
      <div
        key={index}
        className={`w-full ${isSingleSlide ? 'w-[90%] mb-6' : 'w-[45%] mb-0'} sm:mb-0 h-[400px] transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-xl hover:shadow-brightPeach`}
      >
        <div className="bg-darkPurple-dark shadow-lg rounded-lg p-6 sm:mx-4 h-full flex flex-col justify-between border-4 border-gradient-to-r from-pinkyPink-dark to-brightPeach">
          <div>
          <div className="font-bold text-goldenOrange text-2xl mb-2 truncate">{tutorial.title}</div>
              {/* dummy styling to display game. will show title. not id. */}
              <div className="font-semibold text-white text-xl mb-2 truncate">{tutorial.game}</div>

              <div className="font-light text-notWhite text-lg mb-2 truncate">{tutorial.console}</div>

            <div className="font-light text-brightPeach text-lg mb-2">{tutorial.rating}</div>

            <p className="text-gray-500 text-base lg:text-lg mb-4 line-clamp-3">{tutorial.content}</p>

          </div>
          {tutorial.author?.username && (
            <span className="text-white text-base lg:text-lg block mb-4 truncate">
                {/* make author username clickable to see their profile */}
                Author: {tutorial.author.username}
              </span>
            )}
              {/* <Link to="tutorial/{tutorial._id}" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read Tutorial</Link>... when detailed tutorial page done.*/}
                <button
            onClick={() => handleReadTutorial(tutorial._id)}
            className="bg-[#814C75] hover:bg-gradient-to-r hover:from-pinkyPink hover:to-brightPeach text-white font-bold py-2 px-4 rounded transition-all duration-300"
          >
            Read Tutorial
          </button>
        </div>
      </div>
    ))}
  </div>

  <button
    onClick={handlePrev}
    className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-lightLavender text-3xl hover:text-white transition-colors duration-300 rotate-180"
  >
    &#x27A4;
  </button>

  <button
    onClick={handleNext}
    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-lightLavender text-3xl hover:text-white transition-colors duration-300"
  >
    &#x27A4;
  </button>

  <div className="absolute bottom-[-40px] w-full flex justify-center space-x-2">
    {Array.from({ length: Math.ceil(trendingTutorials.length / 2) }).map((_, index) => (
      <span
        key={index}
        className={`inline-block w-4 h-1 ${currentIndex === index ? 'bg-white' : 'bg-gray-500'} rounded-full`}
      />
    ))}
  </div>
</div>
  );
};

export default CustomCarousel;
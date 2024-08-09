import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { GET_TUTORIALS } from '../utils/queries'
import { Link } from 'react-router-dom';


// const tutorials = [
//   {
//     name: 'Tutorial 1',
//     author: 'Author 1',
//     description: 'Brief description of Tutorial 1.',
//     link: '/tutorial1',
//   },
//   {
//     name: 'Tutorial 2',
//     author: 'Author 2',
//     description: 'Brief description of Tutorial 2.',
//     link: '/tutorial2',
//   },
//   {
//     name: 'Tutorial 3',
//     author: 'Author 3',
//     description: 'Brief description of Tutorial 3.',
//     link: '/tutorial3',
//   },
//   {
//     name: 'Tutorial 4',
//     author: 'Author 4',
//     description: 'Brief description of Tutorial 4.',
//     link: '/tutorial4',
//   },
//   // Add more tutorial objects here
// ];


const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {loading, error, data} = useQuery(GET_TUTORIALS)
  const [trendingTutorials, setTrendingTutorials] = useState([])
  useEffect(() => {
    console.log('Query data:', data); // Log the entire data object to see the object tree.
    if (data) {
      setTrendingTutorials(data.allTutorials);
    }else{
      console.log('error in getting tutorial data')
    }
  }, [data]);
  if (loading) return <p>Loading...</p>//can make spinner with react-spinner package
  if (error) return <p>Error: {error.message}</p>

  // todo create function to findGameById(tutorial.game) then call that function in card in game spot.


  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(trendingTutorials.length / 2) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(trendingTutorials.length / 2) - 1 ? 0 : prevIndex + 1
    );
  };

  const getCurrentSlides = () => {
    const startIndex = currentIndex * 2;
    return trendingTutorials.slice(startIndex, startIndex + 2);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <div className="relative flex items-center justify-center">
        {getCurrentSlides().map((tutorial, index) => (
          <div
            key={index}
            className={`w-1/2 transition-opacity duration-500 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="bg-darkPurple-dark shadow-lg rounded-lg p-6 mx-4">
              <div className="font-bold  text-goldenOrange text-xl mb-2">{tutorial.title}</div>
              {/* dummy styling to display game. will show title. not id. */}
              <div className="font-semibold text-white text-md mb-2">{tutorial.game}</div>
              <div className="font-light text-notWhite text-xs mb-2">{tutorial.console}</div>
              <div className="font-light text-brightPeach text-xs mb-2">{tutorial.rating}</div>
              <p className="text-gray-700 text-base mb-4">{tutorial.content}</p>
              <span className="text-white text-sm block mb-4">
                {/* make author username clickable to see their profile */}
                Author: {tutorial.author.username}
              </span>
              {/* <Link to="tutorial/{tutorial._id}" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read Tutorial</Link>... when detailed tutorial page done.*/}
              <Link
                to="/tutorial"
                className="bg-[#814C75] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Read Tutorial
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-lg -ml-6"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-lg -mr-6"
      >
        &#8594;
      </button>
    </div>
  );
};

export default CustomCarousel;

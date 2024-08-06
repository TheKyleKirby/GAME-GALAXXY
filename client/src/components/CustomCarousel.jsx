import React, { useState } from 'react';
// import { useQuery } from '@apollo/client'
// import { GET_TUTORIALS } from '../utils/queries'


const guides = [
  {
    name: 'Guide 1',
    author: 'Author 1',
    description: 'Brief description of Guide 1.',
    link: '/guide1',
  },
  {
    name: 'Guide 2',
    author: 'Author 2',
    description: 'Brief description of Guide 2.',
    link: '/guide2',
  },
  {
    name: 'Guide 3',
    author: 'Author 3',
    description: 'Brief description of Guide 3.',
    link: '/guide3',
  },
  {
    name: 'Guide 4',
    author: 'Author 4',
    description: 'Brief description of Guide 4.',
    link: '/guide4',
  },
  // Add more guide objects here
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const {loading, error, data} = useQuery(GET_TUTORIALS)
  // if (loading) return <p>Loading...</p>//can make spinner with react-spinner package
  // if (error) return <p>Error: {error.message}</p>

  // const guides = data.allGuides

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(guides.length / 2) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(guides.length / 2) - 1 ? 0 : prevIndex + 1
    );
  };

  const getCurrentSlides = () => {
    const startIndex = currentIndex * 2;
    return guides.slice(startIndex, startIndex + 2);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <div className="overflow-hidden relative flex items-center justify-center">
        {getCurrentSlides().map((guide, index) => (
          <div
            key={index}
            className={`w-1/2 transition-opacity duration-500 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="bg-white shadow-lg rounded-lg p-6 mx-4">
              <div className="font-bold text-xl mb-2">{guide.name}</div>
              <p className="text-gray-700 text-base mb-4">{guide.description}</p>
              <span className="text-gray-600 text-sm block mb-4">
                Author: {guide.author}
              </span>
              <a
                href={guide.link}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Read Guide
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default CustomCarousel;

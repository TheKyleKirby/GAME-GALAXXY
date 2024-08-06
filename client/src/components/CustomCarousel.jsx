import React, { useState } from 'react';

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
  // Add more guide objects here
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? guides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === guides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative h-64">
        {guides.map((guide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-white shadow-lg rounded-lg p-6">
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default CustomCarousel;

// src/pages/Homepage.jsx

import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Hero from '../components/Hero'


//import staffMembers images
import image1 from '/images/about/tish.jpg';
import image2 from '/images/about/kyle.jpg';
import image3 from '/images/about/beth.jpg';
import image4 from '/images/about/karina.png';
import image5 from '/images/about/tristan.png';
import image6 from '/images/about/betzy.jpg';

const staffMembers = [
    {name: 'Tish Sirface A.K.A. ThisTish', image: image1, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Kyle Kirby A.K.A. Kirbsteroonie', image: image2, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Beth McKinney A.K.A. Corgilicious', image: image3, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Karina Gonzalez A.K.A. Aimee_kgl', image: image4, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Tristan Smith A.K.A. ', image: image5, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Betzaida Taylor A.K.A. Nyxie96', image: image6, level:'Level 1 developer', bio: '(insert bio here)'},

];

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col ">

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="bg-gray-100 p-8">
        {/* Trending Tutorials Section */}
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-bold mb-4">Trending Tutorials</h2>
          <CustomCarousel />
        </div>

        {/* Meet the staff */}
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Meet Our Staff</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {staffMembers.map((member, index) =>(
                    <div key={index} className="bg-purple-600 shadow-lg rounded-lg p-6">
                      <div className="w-full h-96 relative mb-4">
                        <img src={member.image}
                             alt={member.name}
                             className="absolute inset-0 w-full object-contain rounded-t-lg"
                             style={{maxHeight:'100%'}}/>
                             </div>
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-white mb-2">{member.level}</p>
                        <p className="text-white">{member.bio}</p>
                      </div> 
                ))}
          </div>
        </div>
      </main>

    </div>
  );
};

export default Homepage;
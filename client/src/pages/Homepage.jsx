// src/pages/Homepage.jsx

import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hero from '../assets/images/hero';

//import staffMembers images
import image1 from '../assets/images/about/tish.jpg';
import image2 from '../assets/images/about/kyle.jpg';
import image3 from '../assets/images/about/beth.JPG';
import image4 from '../assets/images/about/karina.png';
import image5 from '../assets/images/about/';
import image6 from '../assets/images/about/betzy.JPG';

const staffMembers = [
    {name: 'Tish Sirface A.KA ThisTish', image: image1, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Kyle Kirby A.KA Kirbsteroonie', image: image2, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Beth McKinney A.KA Corgilicious', image: image3, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Karina Gonzalez A.KA Aimee_kgl', image: image4, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Tristan Smith A.KA ', image: image5, level:'Level 1 developer', bio: '(insert bio here)'},
    {name: 'Betzaida Taylor A.KA Nyxie96', image: image6, level:'Level 1 developer', bio: '(insert bio here)'},

];

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url("/path-to-your-hero-image.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">GVM3 GVLVXXY</h1>
          <p className="text-lg md:text-xl mb-4">A universe of gaming, guides, and greatness at your fingertips!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore the Galaxxy!</button>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gray-100 p-8">
        {/* Trending Guides Section */}
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-bold mb-4">Trending Guides</h2>
          <CustomCarousel />
        </div>

        {/* Meet the staff */}
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Meet Our Staff</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {staffMembers.map((member, index) =>(
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                        <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg mb-4"/>
                        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                        <p className="text-gray-600 mb-2">{member.level}</p>
                        <p className="text-gray-600">{member.bio}</p>
                       </div> 
                ))}
          </div>
        </div>
      </main>

    </div>
  );
};

export default Homepage;

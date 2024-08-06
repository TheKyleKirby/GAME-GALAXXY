// src/pages/Homepage.jsx

import React from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import CustomCarousel from '../components/CustomCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

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
        <div className="flex justify-center mt-8">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Staff</h2>
            <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis similique eaque praesentium odio consequatur repellendus quos totam at laudantium quaerat a assumenda rerum deserunt molestias, vel obcaecati ad impedit dignissimos!</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;

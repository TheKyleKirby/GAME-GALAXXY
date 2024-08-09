// src/pages/Homepage.jsx

import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Hero from '../components/Hero'
import StaffMembers from '../components/staffMembers';


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
      <StaffMembers/>

      </main>

    </div>
  );
};

export default Homepage;
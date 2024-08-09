// src/pages/Homepage.jsx

import React from 'react';
import Hero from '../components/Hero'
import StaffMembers from '../components/staffMembers';
import TrendingTutorials from '../components/TrendingTutorials';


const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="bg-deepBlue-dark p-8">
        {/* Trending Tutorials Section */}
      <TrendingTutorials/>

      {/* Meet the staff */}
      <StaffMembers/>

      </main>

    </div>
  );
};

export default Homepage;
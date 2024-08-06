// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Hamburger Menu */}
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Search Bar */}
                <div className="flex-1 mx-4">
                    <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Login and My Account Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="text-white">Login</button>
                    <button className="text-white">My Account</button>
                </div>
            </div>

            {/* Hamburger Menu Items */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white p-4">
                    <ul>
                        <li className="py-2"><a href="#">Sign up</a></li>
                        <li className="py-2"><a href="#">Login</a></li>
                        <li className="py-2"><a href="#">Logout</a></li>
                        <li className="py-2"><a href="#">Dashboard</a></li>
                        <li className="py-2"><a href="#">Create New Guide</a></li>
                        <li className="py-2"><a href="#">Trending Guides</a></li>
                        <li className="py-2"><a href="#">About Us</a></li>
                    </ul>
                </div>
            )}

            {/* Login Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
                        <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            &times;
                        </button>
                        <h2 className="text-xl mb-4">Login</h2>
                        <input type="text" placeholder="Username" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <div className="flex justify-between items-center">
                            <button className="text-blue-500">Sign Up</button>
                            <button onClick={toggleModal} className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
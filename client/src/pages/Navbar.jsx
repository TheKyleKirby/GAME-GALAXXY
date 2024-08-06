// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                    <Link to='/profile' className="text-white">My Account</Link>
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
        </nav>
    );
};

export default Navbar;
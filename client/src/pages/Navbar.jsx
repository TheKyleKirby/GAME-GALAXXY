// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import SignUpModal from '../components/SignupModal'

import { useMutation } from '@apollo/client';
import { LOG_IN } from '../utils/mutations';
import Auth from '../utils/auth';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const location = useLocation()

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const toggleSignUpModal = () => {
        setIsSignUpModalOpen(!isSignUpModalOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    //-----------------------------------------------------

    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });

    const [login] = useMutation(LOG_IN);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log(data);

            Auth.login(data.login.token);

            setIsLoggedIn(true)
            console.log(isLoggedIn);


        } catch (e) {
            console.error(e);
        }
    };

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        setIsLoggedIn(false)
    };


    // ---------------------------------------------------------------

    return (
        <>
            <nav className="border-gray-200  bg-tealBlue-dark">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Game Galaxxy</span>
                    </Link>
                    <div className="flex-1 mx-4">
                        <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-hamburger"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {isLoggedIn ?
                        <button className="text-white bg-blue-500 px-4 py-2 rounded-md" onClick={logout}>Logout</button>
                        :
                        <button onClick={toggleLoginModal} className="text-white bg-blue-500 px-4 py-2 rounded-md">Login</button>
                    }
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full`} id="navbar-hamburger">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</Link>
                        </li>
                        <li>

                            <Link to="/Profile" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-700">Profile</Link>
                        </li>
                        <li>
                            <Link to="/Results" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-700">Results</Link>
                        </li>
                        <li>
                            <Link to="/Blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-700">Blog</Link>
                        </li>
                        <li>
                            <Link to="/Tutorial" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-700">Game Tutorials</Link>

                        </li>
                    </ul>
                </div>
            </nav>

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
                        <button
                            onClick={toggleLoginModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">&times;
                        </button>
                        <h2 className="text-xl mb-4">Login</h2>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="username"
                            value={formState.username}
                            placeholder="Username"
                            // type="text" 
                            // placeholder="Username" 
                            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            value={formState.password}
                            placeholder="Password"
                            // type="password" 
                            // placeholder="Password" 
                            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex justify-between items-center">
                            <button onClick={toggleSignUpModal} className="text-blue-500">Sign Up</button>
                            <button onClick={handleFormSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Sign Up Modal */}
            {isSignUpModalOpen && (
                <SignUpModal />
                // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
                //     <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
                //         <button onClick={toggleSignUpModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                //             &times;
                //         </button>
                //         <h2 className="text-xl mb-4">Sign Up</h2>
                //         <input type="text" placeholder="Username" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                //         <input type="email" placeholder="Email" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                //         <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                //         <div className="flex justify-between items-center">
                //             <button onClick={toggleLoginModal} className="text-blue-500">Login</button>
                //             <button onClick={toggleSignUpModal} className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
                //         </div>
                //     </div>
                // </div>

            )}
        </>
    );
};

export default Navbar;
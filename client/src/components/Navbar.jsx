import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignUpModal from './SignupModal';
import SearchBar from './SearchBar';
import { useMutation } from '@apollo/client';
import { LOG_IN } from '../utils/mutations';
import Auth from '../utils/auth';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const location = useLocation();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(Auth.loggedIn());
    }, []);

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

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
            setIsLoggedIn(true);

        } catch (e) {
            console.error(e);
        }
    };

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        setIsLoggedIn(false);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 bg-tealBlue-dark items-center flex flex-col md:flex-row md:flex-wrap md:justify-between w-full p-4">
                <div className="flex flex-col items-center space-y-5 md:justify-between lg:flex-row lg:items-center w-full">
                    <Link to="/" className="flex items-center ">
                        <div 
                            className="px-2 py-1 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out relative"
                            style={{
                                background: 'linear-gradient(45deg, #F687B3, #805AD5, #4299E1)'
                            }}
                        >
                            <span 
                                className="text-sm font-bold tracking-widest text-transparent z-20 text-nowrap relative md:text-xl"
                                style={{
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    backgroundImage: 'linear-gradient(45deg, #F687B3, #805AD5, #4299E1)',
                                    textShadow: '0px 1px 1px rgba(255, 255, 255, 0.5), 0px 4px 6px rgba(0, 0, 0, 0.4)', 
                                    fontFamily: '"Press Start 2P", cursive',
                                }}
                            >
                                GVM3 GVLVXXY
                            </span>
                            <span className='absolute top-1/2 left-1/2 w-full h-full rounded-full z-0'
                                style={{
                                    transform: 'translate(-50%, -50%)',
                                    boxShadow: 'inset 0px 4px 6px rgba(0, 0, 0, 0.4)',
                                }}
                            ></span>
                        </div>
                    </Link>

                    <div className="hidden md:flex lg:justify-center md:mt-0 lg:flex-grow">
                        <SearchBar />
                        </div>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="flex items-center justify-center mx-3 px-1 w-10 h-10 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-pinkyPink-dark"
                            aria-controls="navbar-hamburger"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    

                    <div className="flex pb-4 ">
                        {isLoggedIn ? (
                            <button className="text-white bg-royalBlurp-dark  font-semibold px-2 text-sm lg:text-base py-2 md:py-1 md:px-3 rounded" onClick={logout}>Logout</button>
                        ) : (
                            <button onClick={toggleLoginModal} className="text-white bg-royalBlurp-dark px-2 font-semibold text-sm lg:text-base py-2 md:py-1 md:px-3 rounded">Login</button>
                        )}
                    </div>
                </div>

                <div className={`${isMenuOpen ? 'block' : 'hidden'}  absolute top-20 lg:top-16 left-0 w-full z-50`} id="navbar-hamburger">
                    <ul className="flex flex-col items-center justify-around font-medium mt-7 pb-7 rounded-bl-lg rounded-br-lg bg-tealBlue-dark h-96 md:h-full dark:border-royalBlurp-dark">
                        <li>
                            <Link to="/" className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:text-pinkyPink-dark" aria-current="page">Home</Link>
                        </li>
                            {isLoggedIn && (
                        <li>
                                <Link to="/Profile" className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:text-pinkyPink-dark">Profile</Link>
                        </li>
                            )}
                        {/* <li>
                            <Link to="/Results" className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:text-pinkyPink-dark">Results</Link>
                        </li> */}
                        <li>
                            <Link to="/Blog" className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:text-pinkyPink-dark">Blog</Link>
                        </li>
                        <li>
                            <Link to="/CreateTutorial" className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:text-pinkyPink-dark">Create Tutorial</Link>
                        </li>
                        <li className='md:hidden pb-10'>
                            <SearchBar />
                        </li>
                    </ul>
                </div>
            </nav>

            {isLoginModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
                        <button
                            onClick={toggleLoginModal} className="absolute top-2 right-4 text-gray-500 hover:text-gray-700">&times;
                        </button>
                        <h2 className="text-xl mb-4">Login</h2>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="username"
                            value={formState.username}
                            placeholder="Username"
                            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            value={formState.password}
                            placeholder="Password"
                            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex justify-between items-center">
                            <button onClick={toggleSignUpModal} className="text-royalBlurp-dark">Sign Up</button>
                            <button onClick={handleFormSubmit} className="bg-royalBlurp-dark text-white px-4 py-2 rounded-md">Login</button>
                        </div>
                    </div>
                </div>
            )}

            {isSignUpModalOpen && (
                <SignUpModal />
            )}
        </>
    );
};

export default Navbar;
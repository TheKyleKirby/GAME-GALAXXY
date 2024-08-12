// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import SignUpModal from './SignupModal'
import SearchBar from './SearchBar'
import { useMutation } from '@apollo/client';
import { LOG_IN } from '../utils/mutations';
import Auth from '../utils/auth';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const location = useLocation()

    const [isLoggedIn, setIsLoggedIn] = useState(false)

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

    useEffect(() => {
    }, [isLoggedIn]);
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);

            setIsLoggedIn(true)

        } catch (e) {
            console.error(e);
        }
    };

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
        setIsLoggedIn(false)

    };

    return (
        <>
            <nav className="border-gray-200  bg-tealBlue-dark flex flex-col items-center md:flex-wrap">
                <div className="flex flex-wrap items-center justify-center md:justify-between mx-2 p-4">
                    
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span 
                        className="self-center text-3xl font-bold tracking-wide px-2"
                        style={{
                            color: '#E5E7EB',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.2)', 
                            boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.7), inset -2px -2px 5px rgba(255, 255, 255, 0.3)',
                            background: 'rgba(37, 99, 235, 0.2)', 
                            borderRadius: '0.375rem',
                            padding: '0.5rem', 
                        }}
                    >
                        GVM3 GVLVXXY
                    </span>
                </Link>


                    <SearchBar />
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center justify-center p-1 w-10 h-10 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-royalBlurp-dark mr-9"
                        aria-controls="navbar-hamburger"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {isLoggedIn ?
                        <button className="text-white bg-royalBlurp-dark px-4 py-2 rounded-md" onClick={logout}>Logout</button>
                        :
                        <button onClick={toggleLoginModal} className=" text-white bg-royalBlurp-dark px-4 py-2 rounded-md">Login</button>
                    }
                </div>
                {/* transitions & ease-in-out for smooth drop down? */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full`} id="navbar-hamburger">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-tealBlue-dark dark:border-royalBlurp-dark">
                        <li>
                            <Link to="/" className="block py-2 px-3 text-white rounded  hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-pinkyPink-dark" aria-current="page">Home</Link>
                        </li>
                        <li>

                            <Link to="/Profile" className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-pinkyPink-dark">Profile</Link>
                        </li>
                        <li>
                            <Link to="/Results" className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-pinkyPink-dark">Results</Link>
                        </li>
                        <li>
                            <Link to="/Blog" className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-pinkyPink-dark">Blog</Link>
                        </li>
                        <li>
                            <Link to="/Tutorial" className="block py-2 px-3 text-white rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-pinkyPink-dark">Game Tutorial</Link>

                        </li>
                    </ul>
                </div>
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
                            <button onClick={toggleSignUpModal} className="text-royalBlurp-dark">Sign Up</button>
                            <button onClick={handleFormSubmit} className="bg-royalBlurp-dark text-white px-4 py-2 rounded-md">Login</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Sign Up Modal */}
            {isSignUpModalOpen && (
                <SignUpModal />

            )}
        </>
    );
};

export default Navbar;
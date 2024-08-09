import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOG_IN } from '../utils/mutations';
import Auth from '../utils/auth';

import { useNavigate } from 'react-router-dom';


const LoginModal = () => {


  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  
  const [loginUser] = useMutation(LOG_IN);

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
      const { data } = await loginUser({
        variables: { ...formState },
      });

      Auth.login(data.login.token);


    } catch (e) {
      console.error(e);
    }
  };

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleSignUpModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  return (
    <>
    {isLoginModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
        <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
          <button onClick={toggleLoginModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            &times;
          </button>
          <h2 className="text-xl mb-4">Login</h2>
          <input 
          onChange={handleChange} 
          type="text" 
          name="username" 
          value={formState.username}
          placeholder="Username" 
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input 
          onChange={handleChange} 
          type="password" 
          name="password" 
          value={formState.password}
          placeholder="Password" 
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="flex justify-between items-center">
            <button 
            onClick={toggleSignUpModal} 
            className="text-blue-500">Sign Up</button>
            <button 
              onClick={handleFormSubmit} 
              className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default LoginModal;
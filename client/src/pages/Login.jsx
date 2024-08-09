import { LOGIN_USER } from '../utils/mutations'
import { useMutation } from '@apollo/client'
import { useState } from 'react';

import Auth from '../utils/auth'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login ] = useMutation(LOGIN_USER);
  
// updates the state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

// update the application state to reflect that the user is logged in.
      Auth.login(data.login.token);

  // redirect
      navigate('/profile')
      
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
        <button 
        // onClick={toggleLoginModal} 
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <h2 className="text-xl mb-4">Login</h2>
        {/* <form onSubmit={handleFormSubmit}> */}
          <input
            type="text"
            name="username"
            value={formState.username}
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formState.password}
            onChange={handleChange}
          />
          <div className="flex justify-between items-center">
            <button 
            type="button" 
            // onClick={toggleSignUpModal} 
            className="text-blue-500">
              Sign Up
            </button>
            <button 
            type="submit" 
            onClick={handleFormSubmit} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Login
            </button>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Login;
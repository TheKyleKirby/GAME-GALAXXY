import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../utils/mutations';
import Auth from '../utils/auth';
// import { useNavigate } from 'react-router-dom';

const SignupModal = () => {

  // const navigate = useNavigate();


  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  const [signUp] = useMutation(SIGN_UP);

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
      const { data } = await signUp({
        variables: { ...formState },
      });
console.log(data);
      

      Auth.login(data.signUp.token);

  // redirect to homepage once signed up 
    // navigate('/results')


    } catch (error) {
      console.error('ERROR:', error);
    }
  };

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(true); // Initially set to true to show the modal

  // const toggleLoginModal = () => {
  //   setIsLoginModalOpen(!isLoginModalOpen);
  // };

  const toggleSignUpModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  const toggleBothModals = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
    if (!isSignUpModalOpen) {
      setIsLoginModalOpen(!isLoginModalOpen);
      
    }
  }

  return (
    <>
      {isSignUpModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
            <button onClick={toggleBothModals} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              &times;
            </button>
            <h2 className="text-xl mb-4">Sign Up</h2>
            <input 
            onChange={handleChange} 
            type="text" 
            name="username" 
            placeholder="Username" 
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
            onChange={handleChange} 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <input 
            onChange={handleChange} 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <div className="flex justify-between items-center">
              <button onClick={toggleSignUpModal} className="text-blue-500">Login</button>
              <button 
                onClick={handleFormSubmit} 
                className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupModal;
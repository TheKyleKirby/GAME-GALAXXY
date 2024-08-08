import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  const [addUser] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
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

    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
                    <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
                        <button onClick={toggleSignUpModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            &times;
                        </button>
                        <h2 className="text-xl mb-4">Sign Up</h2>
                        <input onChange={handleChange} type="text" placeholder="Username" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input onChange={handleChange} type="email" placeholder="Email" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input onChange={handleChange} type="password" placeholder="Password" className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <div className="flex justify-between items-center">
                            <button onClick={toggleLoginModal} className="text-blue-500">Login</button>
                            <button 
                            onClick={handleFormSubmit} 
                            className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
                        </div>
                    </div>
                </div>
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
    //   <div className="bg-white p-6 rounded-md shadow-md w-96 relative">
    //     <button onClick={toggleLoginModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
    //       &times;
    //     </button>
    //     <h2 className="text-xl mb-4">Sign Up</h2>
    //     <form onSubmit={handleFormSubmit}>
    //       <input
    //         type="text"
    //         name="username"
    //         placeholder="Username"
    //         className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         value={formState.username}
    //         onChange={handleChange}
    //       />
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Email"
    //         className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         value={formState.email}
    //         onChange={handleChange}
    //       />
    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         value={formState.password}
    //         onChange={handleChange}
    //       />
    //       <div className="flex justify-between items-center">
    //       <button onClick={toggleLoginModal} className="text-blue-500">Login</button>
    //         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>

  )
};

export default Signup;
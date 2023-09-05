import React, { createContext, useContext, useState } from 'react';
import axios from 'axios'; // Import Axios

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password) => {
    try {
      // Make an API request to your backend for authentication using Axios.
      const response = await axios.post('http://localhost:3000/login', {
        user:{
        email,
        password,
        }
      });

      if (response.status === 200) {
        // If authentication is successful, set the user data.
        const user = response.data;
        setCurrentUser(user);
        return user;
      } else {
        // If authentication fails, handle the error.
        throw new Error('Authentication failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions.
      console.error('Login error:', error);
      throw error;
    }
  };
  
  // You can add functions to update the current user as needed, e.g., for login/logout.

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

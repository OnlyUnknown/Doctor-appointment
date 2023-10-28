import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

function Logout() {
  const { currentUser } = useUser();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogout = () => {
    // Perform logout actions here
    sessionStorage.removeItem('currentUser');

    // Redirect to another page (e.g., the home page)
    navigate('/sign_in');
    window.location.reload();
  };
  return (
    <div className="w-full flex justify-center pt-32">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-blue-500">{currentUser.name}</h1>
        <p className="text-black">{currentUser.email}</p>
        <button
          onClick={handleLogout}
          type="submit"
          className="text-white bg-red-500 border border-1 border-red-600 p-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;

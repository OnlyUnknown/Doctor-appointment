import React, { useState } from 'react';
import '../css/home.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import doc5 from './doc5.jpg';
import { useUser } from './UserContext';

function SignIn() {
  const { setCurrentUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Move it here

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to your Rails backend to authenticate the user
      const response = await axios.post('http://localhost:3000/login', { user: { email, password } });

      // Handle success or failure
      if (response.status === 200) {
        // Set the current user in the context
        setCurrentUser(response.data.user);
        // Redirect to a protected route or update the UI
        navigate('/'); // Redirect example
      } else {
        // Handle authentication failure, show an error message, etc.
        <div>{response}</div>;
      }
    } catch (error) {
      <div>{error}</div>;
      // Handle network errors or other exceptions
    }
  };
  return (
    <div className="register h-screen reservation-container" style={{ backgroundImage: `url(${doc5})`, backgroundSize: 'cover' }}>
      <div className="relative flex h-screen w-full flex-col items-center justify-center text-white reservation">
        <h1 className="mb-6 text-3xl font-bold tracking-2xl space-x-1">Sign IN</h1>
        <hr className="w-1/2 text-white" />
        <form onSubmit={handleSubmit} className="mx-auto mt-3 w-full max-w-sm grid-cols-2 sm:grid">
          <div className="relative mb-4 flex items-center justify-center">
            <input
              id="email"
              name="email"
              value={email}
              placeholder="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="whiteInp w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="whiteInp w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-white  text-[#97bf0f] font-bold sm: p-2 rounded-full mt-3 focus:outline-none focus:shadow-outline"
          >
            Sign IN now
          </button>
        </form>
        <Link to="/">
          <button
            type="button"
            className="absolute bottom-4 left-0 w-16 h-10 flex invisible sm:visible  justify-center items-center rounded-tr-full rounded-br-full border border-amber-50 focus:bg-[#97bf0f] shadow-md"
            aria-label="B"
          />
        </Link>
      </div>
    </div>
  );
}

export default SignIn;

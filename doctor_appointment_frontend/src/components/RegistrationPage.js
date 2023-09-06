import React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import doc5 from './doc5.jpg';

function RegisterPage() {
  return (
    <div className="register h-screen reservation-container" style={{ backgroundImage: `url(${doc5})`, backgroundSize: 'cover' }}>
      <div className="relative flex h-screen w-full flex-col items-center justify-center text-white reservation">
        <h1 className="mb-6 text-3xl font-bold tracking-2xl space-x-1">DOCTOR APPOITNMENT APP</h1>
        <hr className="w-1/2 text-white" />
        <form className="mx-auto mt-3 w-full max-w-sm grid-cols-2 sm:grid">
          <Link to="/register">
            <button
              type="button"
              className="bg-white  text-[#97bf0f] font-bold sm: p-2 rounded-full mt-3 focus:outline-none focus:shadow-outline"
            >
              Sign UP
            </button>
          </Link>
          <Link to="/sign_in">
            <button
              type="button"
              className="bg-white  text-[#97bf0f] font-bold sm: p-2 rounded-full mt-3 mr:1 focus:outline-none focus:shadow-outline"
            >
              Sign IN
            </button>
          </Link>
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

export default RegisterPage;

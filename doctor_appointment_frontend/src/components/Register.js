import React, { useState } from 'react';
import '../css/home.css';
import { Link, useNavigate } from 'react-router-dom';
import doc5 from './doc5.jpg';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirmation, setPasswordConfirmation] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
    setData({ ...data, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setData({ ...data, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setData({ ...data, password: event.target.value });
  };
  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
    setData({ ...data, password_confirmation: event.target.value });
  };
  const reserve = (data) => {
    fetch('http://localhost:3000/api/v1/users/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log('Success:', data);
        // eslint-disable-next-line no-alert
        alert('Appointment booked successfully');
        navigate('/');
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    reserve(data);
  };
  return (
    <div className="register h-screen reservation-container" style={{ backgroundImage: `url(${doc5})`, backgroundSize: 'cover' }}>
      <div className="relative flex h-screen w-full flex-col items-center justify-center text-white reservation">
        <h1 className="mb-6 text-3xl font-bold tracking-2xl space-x-1">Sign UP</h1>
        <hr className="w-1/2 text-white" />
        <form onSubmit={handleSubmit} className="mx-auto mt-3 w-full max-w-sm grid-cols-2 sm:grid">
          <div className="relative mb-4 flex items-center justify-center">
            <input
              id="name"
              name="name"
              value={name}
              required
              placeholder="Name"
              onChange={handleNameChange}
              className="whiteInp w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>

          <div className="relative mb-4 flex items-center justify-center">
            <input
              id="email"
              name="email"
              value={email}
              placeholder="email"
              required
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
              className="whiteInp w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <input
              type="password"
              id="passwordC"
              name="passwordC"
              value={passwordconfirmation}
              placeholder="pass Confirmation"
              onChange={handlePasswordConfirmationChange}
              className="whiteInp w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-white  text-[#97bf0f] font-bold sm: p-2 rounded-full mt-3 focus:outline-none focus:shadow-outline"
          >
            Sign UP now
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

export default Register;

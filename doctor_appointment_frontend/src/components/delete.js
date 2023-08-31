import React, { useState } from 'react';
import '../css/home.css';
import axios from 'axios';
import doc5 from './doc5.jpg';

function Reservation() {
  const doctors = ['Docteur A', 'Docteur B', 'Docteur C'];
  const [doctor, setDoctor] = useState('');
  const [data, setData] = useState({
    doctor: '',
  });
  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
    setData({ ...data, doctor: event.target.value });
  };
  const reserve = () => {
    axios
      .delete('http://localhost:3000/id', {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        console.log('Success:', response.data);
        alert('Appointment deleted successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while deleting the appointment');
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    reserve(data);
  };
  return (
    <div
      className="h-screen reservation-container"
      style={{ backgroundImage: `url(${doc5})`, backgroundSize: 'cover' }}
    >
      <div className="relative flex h-screen w-full flex-col items-center justify-center text-white reservation">
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-3 w-full flex justify-end max-w-sm grid-cols-2 sm:grid"
        >
          <div className="relative flex items-center justify-center">
            <select
              id="doctor"
              name="doctor"
              value={doctor}
              placeholder="Select a doctor"
              required
              onChange={handleDoctorChange}
              className=" appearance-none mr-1 text-xl font-bold h-full rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            >
              <option value="" className="text-black">
                Select a doctor
              </option>
              {doctors.map((doctor) => (
                <option key={doctor} className="text-black" value={doctor}>
                  {doctor}
                </option>
              ))}
            </select>
            <svg
              className="absolute  h-3 w-3 text-black top-1/2 dark:text-white sm:left-40"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          </div>
          <button
            type="submit"
            className="bg-red-400 font-bold text-xl w-1/2 text-black rounded-md p-4"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;

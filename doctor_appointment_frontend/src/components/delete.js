import React, { useEffect, useState } from 'react';
import '../css/home.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import doc5 from './doc5.jpg';
import { fetchDoctors } from '../Redux/feature/doctorSlice';

function Delete() {
  const doctors = useSelector((state) => state.doctor.doctors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const deleteDoctor = () => {
    if (!selectedDoctor) {
      <div>error</div>;
      return;
    }

    axios
      .delete(`http://localhost:3000/api/v1/doctors/${selectedDoctor}`)
      .then(() => {
        setSelectedDoctor('');
        dispatch(fetchDoctors());
      })
      .catch(() => {
        /* empty */
      });
  };

  return (
    <div
      className="h-screen reservation-container"
      style={{ backgroundImage: `url(${doc5})`, backgroundSize: 'cover' }}
    >
      <div className="relative flex h-screen w-full flex-col items-center justify-center text-white reservation">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            deleteDoctor();
          }}
          className="mx-auto mt-3 w-full flex justify-end max-w-sm grid-cols-2 sm:grid"
        >
          <div className="relative flex items-center justify-center">
            <select
              id="doctor"
              name="doctor"
              value={selectedDoctor}
              placeholder="Select a doctor"
              required
              onChange={handleDoctorChange}
              className="appearance-none mr-1 text-xl text-black font-bold h-full rounded border bg-transparent p-4 py-2 leading-tight focus:shadow-outline focus:outline-none"
            >
              <option value="">Select a doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </select>
            <svg
              className="absolute h-3 w-3 text-black top-1/2 dark:text-white sm:left-40"
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

export default Delete;

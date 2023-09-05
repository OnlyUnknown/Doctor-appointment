import React, { useEffect, useState } from 'react';
import '../css/home.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import doc5 from './doc5.jpg';
import { fetchDoctors } from '../Redux/feature/doctorSlice';
import { useUser } from './UserContext';

function Reservation() {
  const doctors = useSelector((state) => state.doctor.doctors);
  // const [doctor, setDoctor] = React.useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  
  const { currentUser } = useUser();
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const cities = ['Bamako', 'Dakar', 'Yaounde', 'Cairo', 'Alger'];
  const { id } = useParams();
  
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [data, setData] = useState({
    city: '',
    doctor_id: '',
    appontment_date: '',
    user_id: currentUser.id,
  });

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setData({ ...data, city: event.target.value });
  };

  const handleDoctorChange = (event) => {
    if(id) {
      setSelectedDoctor(doctors.find((doc) => doc.id === parseInt(id, 10)));
      setData({ ...data, doctor_id: id });
      } else{
        setSelectedDoctor(event.target.value);
        setData({ ...data, doctor_id: event.target.value });
    }
    
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    setData({ ...data, appontment_date: event.target.value });
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    // setData({ ...data, selectedTime: event.target.value });
  };
  const reserve = (data) => {
    axios
      .post('http://localhost:3000/api/v1/doctors_users', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log('Success:', response.data);
        // eslint-disable-next-line no-alert
        alert('Appointment booked successfully');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error:', error);
        // eslint-disable-next-line no-alert
        alert('An error occurred while booking the appointment');
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
        <h1 className="mb-6 text-3xl font-bold tracking-2xl space-x-1">
          MAKE AN APPOINTMENT WITH A DOCTOR
          {' '}
        </h1>
        <hr className="w-1/2 text-white" />
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-3 w-full max-w-sm grid-cols-2 sm:grid"
        >
          <div className="relative mb-4 flex items-center justify-center">
            <select
              id="city"
              name="city"
              value={city}
              required
              placeholder="Select a city"
              onChange={handleCityChange}
              className="w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            >
              <option value="" className="bg-[#97bf0f]">
                Select a city
              </option>
              {cities.map((city) => (
                <option key={city} className="text-black" value={city}>
                  {city}
                </option>
              ))}
            </select>
            <svg
              className="absolute left-40 h-3 w-3 text-white top-3.5 dark:text-white sm:left-32"
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
          {!id && (
            <div className="relative mb-4 flex items-center justify-center">
              <select
                id="doctor"
                name="doctor"
                value={selectedDoctor}
                placeholder="Select a doctor"
                required
                onChange={handleDoctorChange}
                className="w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
              >
                <option value="" className="text-black">
                  Select a doctor
                </option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} className="text-black" value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
              <svg
                className="absolute left-48 h-3 w-3 text-white top-3.5 dark:text-white sm:left-36 sm:ml-2"
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
          )}
          <div className="mb-4 flex items-center justify-center">
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              required
              onChange={handleDateChange}
              className="w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <input
              type="time"
              id="appointment-time"
              name="appointment-time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-white  text-[#97bf0f] font-bold sm: p-2 rounded-full mt-3 focus:outline-none focus:shadow-outline"
          >
            Reserve Now
          </button>
        </form>
        <Link to="/">
          <button
            type="button"
            className="absolute bottom-4 left-0 w-16 h-10 flex invisible sm:visible  justify-center items-center rounded-tr-full rounded-br-full border border-amber-50 focus:bg-[#97bf0f] shadow-md"
          >
            <svg
              className="h-4 w-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 10 16"
            >
              <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Reservation;

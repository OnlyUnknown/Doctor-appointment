import React, {useState} from 'react';
import '../css/home.css'
import doc5 from './doc5.jpg'
import {useParams} from "react-router-dom";
import list from './doctors';

const Reservation = () => {
  const cities = ['Ville A', 'Ville B', 'Ville C'];
  const doctors = ['Docteur A', 'Docteur B', 'Docteur C'];
  const { id } = useParams();
  const [city, setCity] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [data, setData] = useState({
    city: '',
    doctor: '',
    date: '',
    selectedTime: '',
  });


  const handleCityChange = (event) => {
    setCity(event.target.value);
    setData({...data, city: event.target.value});
  };

  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
    setData({...data, doctor: event.target.value});
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    setData({...data, date: event.target.value});
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    setData({...data, selectedTime: event.target.value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    reserve(data);
  };

  const reserve = (data) => {
    fetch('http://localhost:3000/reservation', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('Appointment booked successfully');
      })
  }

  return (
    <div className="reservation-container h-screen" style={{backgroundImage: `url(${doc5})`, backgroundSize: 'cover'}}>
      <div className="w-full h-screen reservation flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl tracking-2xl font-bold space-x-1 mb-6">MAKE AN APPOINTMENT WITH A DOCTOR </h1>
        <hr className="text-white w-1/2" />
        <form onSubmit={handleSubmit} className="w-full sm:grid grid-cols-2 max-w-sm mx-auto mt-3">
          <div className="mb-4 relative">
            <select
              id="city"
              name="city"
              value={city}
              required={true}
              placeholder={'Select a city'}
              onChange={handleCityChange}
              className="appearance-none border rounded bg-transparent w-3/4 py-2 p-4 text-white leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" className="bg-[#97bf0f]">Select a city</option>
              {cities.map((city) => (
                <option key={city} className="text-black" value={city}>
                  {city}
                </option>
              ))}
            </select>
            <svg className="w-3 h-3 absolute top-3.5 left-28 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
            </svg>
          </div>
          {!id && (
            <div className="mb-4 relative">
              <select
                id="doctor"
                name="doctor"
                value={doctor}
                placeholder={'Select a doctor'}
                required={true}
                onChange={handleDoctorChange}
                className="appearance-none border rounded bg-transparent w-3/4 py-2 p-4 text-white leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" className="text-black">Select a doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor} className="text-black" value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>
              <svg className="w-3 h-3 absolute top-3.5 left-32 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
              </svg>
            </div>
          )}
          <div className="mb-4">
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              required={true}
              onChange={handleDateChange}
              className="appearance-none border rounded bg-transparent w-3/4 py-2 p-4 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              type="time"
              id="appointment-time"
              name="appointment-time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="appearance-none border rounded bg-transparent w-3/4 py-2 p-4 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-white  text-[#97bf0f] font-bold sm: p-2 rounded-full mt-3 focus:outline-none focus:shadow-outline"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
};
export default Reservation;

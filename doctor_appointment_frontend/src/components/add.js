import React, { useState } from 'react';
import '../css/home.css';
import { Link, useParams } from 'react-router-dom';
import doc5 from './doc5.jpg';

function DoctorForm() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [data, setData] = useState({
    name: '',
    speciality: '',
    description: '',
    consultation_fees: '',
    years_of_experience: ''
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
    setData({ ...data, name: event.target.value });
  };

  const handleSpecialityChange = (event) => {
    setSpeciality(event.target.value);
    setData({ ...data, speciality: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setData({ ...data, description: event.target.value });
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
    setData({ ...data, experience: event.target.value });
  };

  const handleFeesChange = (event) => {
    setFees(event.target.value);
    setData({ ...data, consultation_fees: event.target.value });
  };
  const reserve = (data) => {
    fetch('http://localhost:3000/reservation', {
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
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    reserve(data);
  };
  return (
    <div className="h-screen reservation-container" style={{ backgroundImage: `url(${doc5})`, backgroundSize: 'cover' }}>
      <div className="relative flex h-screen w-full flex-col items-center justify-center text-white reservation">
        <h1 className="mb-6 text-3xl font-bold tracking-2xl space-x-1">ADD A DOCTOR </h1>
        <hr className="w-1/2 text-white" />
        <form onSubmit={handleSubmit} className="mx-auto mt-3 w-full max-w-sm grid-cols-2 sm:grid">
          <div className="relative mb-4 flex items-center justify-center">
            <input
              id="name"
              name="name"
              required
              placeholder="Name"
              onChange={handleNameChange}
              className="whiteInp w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>

            <div className="relative mb-4 flex items-center justify-center">
              <input
                id="speciality"
                name="speciality"

                placeholder="Speciality"
                required
                onChange={handleSpecialityChange}
                className="whiteInp w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
              />
            </div>
          <div className="mb-4 flex items-center justify-center">
            <input
              type="number"
              id="experience"
              name="experience"
              required
              placeholder='Experience'
              onChange={handleExperienceChange}
              className="whiteInp w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <input
              type="number"
              id="Fees"
              name="Fees"
              placeholder='Fees'
              onChange={handleFeesChange}
              className="whiteInp w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <textarea
              id="disciption"
              name="disciption"
              placeholder='Discription'
              onChange={handleDescriptionChange}
              className="whiteInp w-3/4 appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-white  text-[#97bf0f] font-bold sm: p-2 rounded-full mt-3 focus:outline-none focus:shadow-outline"
          >
            Add a doctor
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
              <path
                d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DoctorForm;

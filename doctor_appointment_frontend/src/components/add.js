import React, { useState } from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import doc5 from './doc5.jpg';

function DoctorForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [description, setDescription] = useState('');
  const [fees, setFees] = useState('');
  const [experience, setExperience] = useState('');
  const [data, setData] = useState({
    name: '',
    speciality: '',
    description: '',
    consultation_fees: '',
    years_of_experience: '',
  });

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setData({ ...data, image: selectedFile });
  };

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
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile instanceof File) {
      const formData = new FormData();
      formData.append('doctor[name]', name);
      formData.append('doctor[speciality]', speciality);
      formData.append('doctor[description]', description);
      formData.append('doctor[consultation_fees]', fees);
      formData.append('doctor[years_of_experience]', experience);
      formData.append('doctor[image]', selectedFile, selectedFile.name);

      try {
        await axios.post(
          'http://localhost:3000/api/v1/doctors',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Origin': 'http://localhost:3000',
            },
          },
        );
      } catch (error) {
        /* empty */
      }
    }
  };

  return (
    <div
      className="h-screen reservation-container"
      style={{ backgroundImage: `url(${doc5})`, backgroundSize: 'cover' }}
    >
      <div className="relative flex h-screen w-full flex-col items-center justify-center text-white reservation">
        <h1 className="mb-6 text-3xl font-bold tracking-2xl space-x-1">
          ADD A DOCTOR
          {' '}
        </h1>
        <hr className="w-1/2 text-white" />
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-3 w-full max-w-sm grid-cols-2 sm:grid"
        >
          <div className="relative mb-4 flex items-center justify-center">
            <input
              id="name"
              name="name"
              value={name}
              required
              placeholder="Name"
              onChange={handleNameChange}
              className="whiteInp w-3/4 placeholder:text-white appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>

          <div className="relative mb-4 flex text-white items-center justify-center">
            <input
              id="speciality"
              name="speciality"
              value={speciality}
              placeholder="Speciality"
              required
              onChange={handleSpecialityChange}
              className="whiteInp w-3/4 placeholder:text-white appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <input
              type="number"
              id="experience"
              name="experience"
              value={experience}
              required
              placeholder="Experience"
              onChange={handleExperienceChange}
              className="whiteInp w-3/4 placeholder:text-white appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <input
              type="number"
              id="Fees"
              name="Fees"
              value={fees}
              placeholder="Fees"
              onChange={handleFeesChange}
              className="whiteInp w-3/4 placeholder:text-white appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <textarea
              id="desciption"
              name="desciption"
              value={description}
              placeholder="Description"
              onChange={handleDescriptionChange}
              className="whiteInp w-3/4 placeholder:text-white appearance-none rounded border bg-transparent p-4 py-2 leading-tight text-white focus:shadow-outline focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <input
              type="file"
              accept="image/*"
              id="image"
              name="image"
              placeholder="File choose"
              onChange={fileSelectedHandler}
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

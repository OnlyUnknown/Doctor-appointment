import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../Redux/feature/doctorSlice';
// import list from './doctors';

export default function Detail() {
  const { id } = useParams();
  const doctors = useSelector((state) => state.doctor.doctors);
  const [doctor, setDoctor] = React.useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
    setDoctor(doctors.find((doctor) => doctor.id.toString() === id));
    console.log(doctor);
  }, [dispatch]);
  return (
    <div className="relative h-screen justify-around pr-[12px] sm:pt-[50px] sm:flex sm:pr-0">
      <div className="sm-[300px]h-full">
        <img
          className="h-[332px] md:h-[470px] details-img"
          src={doctor.image?.url}
          alt={doctor.name}
        />
        <Link to="/">
          <button
            type="button"
            className="absolute
            bottom-4 w-16 h-10
            flex invisible sm:visible
            justify-center items-center
            rounded-tr-full rounded-br-full
            bg-[#97bf0f] focus:bg-[#97bf0f] shadow-md"
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
      <div className="flex flex-col gap-2 px-2 other-details">
        <h1 className="text-end text-3xl font-bold">{doctor.name}</h1>
        <p className="text-end font-bold text-black">{doctor.speciality}</p>
        <div className="flex flex-row items-center justify-center gap-6 bg-gray-200 p-2">
          <p className="text-gray-600">Consultation fees</p>
          <p className="text-gray-600">
            $
            {doctor.consultation_fees}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-6 p-2">
          <p className="text-gray-600">Total appointment</p>
          <p className="text-gray-600">12</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-6 bg-gray-200 p-2">
          <p className="text-gray-600">
            {doctor.years_of_experience}
            {' '}
            years
          </p>
          <p className="text-gray-600">of experience</p>
        </div>
        <Link to={`/Reservation/${doctor.id}`}>
          <button
            type="button"
            className="flex justify-between
            items-center gap-4 bg-[#97bf0f]
            mb-3 p-2 rounded-full
            focus:bg-[#97bf0f] shadow-md
            sm:absolute bottom-12  "
          >
            <svg
              className="h-4 w-4 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"
              />
            </svg>
            <p className="text-2xl text-white">Reserve</p>
            <div className="flex items-center justify-center rounded-full border-2 border-white p-1">
              <svg
                className="h-4 w-4 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

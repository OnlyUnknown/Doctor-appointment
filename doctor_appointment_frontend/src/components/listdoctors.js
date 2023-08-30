import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/* eslint-enable import/no-extraneous-dependencies */
import '../css/home.css';

export default function ListDoctors({ list }) {
  return (
    <div className="flex flex-wrap justify-center">
      {list.map((doctor) => (
        <Link to={`/Detail/${doctor.id}`} key={doctor.name}>
          <div
            key={doctor.id}
            className="m-4 flex h-64 w-64
            flex-col items-center justify-center
             gap-4 rounded-lg bg-white p-2 shadow-md"
          >
            <img className="w-32 h-[232px] home-img" src={doctor.image} alt={doctor.name} />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{doctor.name}</h1>
              <p className="text-gray-600">{doctor.speciality}</p>
            </div>
            <div className="h-1 w-3/4 border border-dotted border-gray-400" />
            <p className="text-center text-gray-400">{doctor.description}</p>
            <div className="flex flex-row items-center justify-center gap-3">
              <svg
                className="h-6 w-6 rounded-full
                border-2 border-gray-500 p-1
                text-gray-600 hover:bg-blue-400
                hover:text-white dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="h-6 w-6 rounded-full
                border-2 border-gray-500 p-1
                text-gray-600 hover:bg-blue-400
                hover:text-white dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="h-6 w-6 rounded-full
                border-2 border-gray-500 p-1
                text-gray-600 hover:bg-blue-400
                dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                viewBox="0 0 15 15"
              >
                <path
                  fillRule="evenodd"
                  d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  clipRule="evenodd"
                />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

ListDoctors.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      speciality: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/home.css';
import ListDoctors from './listdoctors';
import { fetchDoctors } from '../Redux/feature/doctorSlice';

export default function Home() {
  const [index, setIndex] = useState(0);

  const doctors = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const [showList, setShowList] = useState(doctors.doctors.slice(0, 3));
  useEffect(() => {
    if (doctors.doctors.length > 0) {
      setShowList(doctors.doctors.slice(index, index + 3));
    }
  }, [doctors.doctors, index]);
  const onRightClick = () => {
    if (index < doctors.doctors.length - 3) {
      setShowList(doctors.doctors.slice(index + 1, index + 4));
      setIndex(index + 1);
    }
  };
  const onLeftClick = () => {
    if (index > 0) {
      setShowList(doctors.doctors.slice(index - 1, index + 2));
      setIndex(index - 1);
    }
  };

  return (
    <div className="sm-[700px]:pt-[100px] pt-10 h-full overflow-y-scroll">
      <div className="relative flex w-full flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
          LATEST DOCTORS
        </h1>
        <p className="text-gray-400">
          Please select a doctor
        </p>
        <div className="relative w-full h-full flex flex-row items-center">
          <button
            type="button"
            onClick={onLeftClick}
            className="w-16 h-10 flex on-right
             justify-center items-center
             bg-gray-200 rounded-tr-full
             absolute left-0 top-[50%] bottom-0
             rounded-br-full hover:bg-[#97bf0f]
              shadow-md"
          >
            <svg
              className="h-4 w-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
            >
              <path
                d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"
              />
            </svg>
          </button>
          {doctors.loading && <div className="relative flex w-full flex-col items-center justify-center">Loading...</div>}
          {!doctors.loading && doctors.error ? (
            <p>
              Error
              {doctors.error}
            </p>
          ) : null}
          {!doctors.loading && doctors.doctors.length > 0 ? (
            <div className="wide relative left-[10%] h-full right-[10%] top-0 bottom-0">
              <ListDoctors doctors={showList} />
            </div>
          ) : null}
          {!doctors.loading && doctors.doctors.length > 0 ? (
            <div className="small">
              <ListDoctors doctors={doctors.doctors} />
            </div>
          ) : null }
          <button
            type="button"
            onClick={onRightClick}
            className="w-16 h-10 on-right
            flex justify-center items-center
            absolute right-0 top-[50%] bottom-0
             bg-gray-200 rounded-tl-full
             rounded-bl-full hover:bg-[#97bf0f]
              shadow-md"
          >
            <svg
              className="h-4 w-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
            >
              <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

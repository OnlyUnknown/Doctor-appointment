import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/home.css';
import ListDoctors from './listdoctors';
import list from './doctors';
import { fetchDoctors } from '../Redux/feature/doctorSlice';

export default function Home() {
  const [index, setIndex] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const doctors = useSelector((state) => state.doctor.doctors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  });
  const [showList, setShowList] = useState(list.doctors.slice(0, 3));
  // when data from database is fetched, we can use this
  // const [showList, setShowList] = useState(doctors.slice(0, 3));

  const onRightClick = () => {
    if (index < list.doctors.length - 3) {
      setShowList(list.doctors.slice(index + 1, index + 4));
      setIndex(index + 1);
    }
  };
  const onLeftClick = () => {
    if (index > 0) {
      setShowList(list.doctors.slice(index - 1, index + 2));
      setIndex(index - 1);
    }
  };

  return (
    <div className="flex justify-end item-end ml-[250px]">
      <div className="relative flex h-fit w-full flex-col items-center justify-center">
        <h1 className="absolute text-3xl font-bold top-[70px]">
          LATEST DOCTORS
        </h1>
        <p className="absolute text-gray-400 top-[100px]">
          Please select a doctor
        </p>
        <div className="absolute flex flex-row items-center justify-center top-[150px]">
          <button
            type="button"
            onClick={onLeftClick}
            className="w-16 h-10 flex on-right
             justify-center items-center
             bg-gray-200 rounded-tr-full
             rounded-br-full focus:bg-[#97bf0f]
              shadow-md"
          >
            <svg
              className="h-4 w-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
            >
              <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
            </svg>
          </button>
          <div className="wide">
            <ListDoctors list={showList} />
          </div>
          <div className="small">
            <ListDoctors list={list.doctors} />
          </div>
          <button
            type="button"
            onClick={onRightClick}
            className="w-16 h-10 on-right
            flex justify-center items-center
             bg-gray-200 rounded-tl-full
             rounded-bl-full focus:bg-[#97bf0f]
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

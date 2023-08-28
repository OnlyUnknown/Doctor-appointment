import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { CSSTransition, TransitionGroup } from 'react-transition-group';
/* eslint-enable import/no-extraneous-dependencies */
import ListDoctors from './listdoctors';
import '../css/home.css';

export default function Home() {
  const list = {
    doctors: [
      {
        id: 1,
        name: 'Dr. John Doe',
        speciality: 'Dentist',
        image: '../assets/images/doc1.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      },
      {
        id: 2,
        name: 'Dr. Alec Patel',
        speciality: 'Pediatrician',
        image: '../assets/images/doc2.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      },
      {
        id: 3,
        name: 'Dr. Jean mac',
        speciality: 'Neurologist',
        image: '../assets/images/doc3.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      },
      {
        id: 4,
        name: 'Dr. Mary Jane',
        speciality: 'Cardiologist',
        image: '../assets/images/doc4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      },
    ],
  };

  const [showList, setShowList] = useState(list.doctors.slice(0, 3));
  const [index, setIndex] = useState(0);
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
    <div className="relative h-fit flex flex-col items-center justify-center">
      <h1 className="text-3xl absolute top-[70px] font-bold">LATEST DOCTORS</h1>
      <p className="text-gray-400 absolute top-[100px]">Please select a doctor</p>
      <div className="flex absolute top-[150px] justify-center flex-row items-center">
        <button type="button" onClick={onLeftClick} className="w-16 h-10 flex on-right justify-center items-center bg-gray-200 rounded-tr-full rounded-br-full focus:bg-green-500 shadow-md">
          <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
          </svg>
        </button>
        <div className="wide"><ListDoctors list={showList} /></div>
        <div className="small"><ListDoctors list={list.doctors} /></div>
        <button type='button' onClick={onRightClick} className="w-16 h-10 on-right flex justify-center items-center bg-gray-200 rounded-tl-full rounded-bl-full focus:bg-green-500 shadow-md">
          <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

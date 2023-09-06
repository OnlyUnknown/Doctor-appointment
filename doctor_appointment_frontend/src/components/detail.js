import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../Redux/feature/doctorSlice';
import CustomSVG from './svgs/svgArrow';
import ArrowIcon from './svgs/Arrowicon';
import CustomSVG2 from './svgs/CustomeSVG2';
// import list from './doctors';

export default function Detail() {
  const { id } = useParams();
  const doctors = useSelector((state) => state.doctor.doctors);
  const [doctor, setDoctor] = React.useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
    setDoctor(doctors.find((doctor) => doctor.id.toString() === id));
  }, [dispatch, doctors, id]);
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
            <ArrowIcon />
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
            <CustomSVG2 />
            <p className="text-2xl text-white">Reserve</p>
            <div className="flex items-center justify-center rounded-full border-2 border-white p-1">
              <CustomSVG />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

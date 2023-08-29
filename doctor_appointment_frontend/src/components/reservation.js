import  React from 'react';
import '../css/home.css'
import doc5 from './doc5.jpg'

const Reservation = () => {
    return (
        <div className="reservation-container h-screen" style={{backgroundImage: `url(${doc5})`, backgroundSize: 'cover'}}>
          <div className="w-full h-screen reservation flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl tracking-2xl font-bold space-x-1 mb-6">MAKE AN APPOINTMENT WITH A DOCTOR </h1>
            <hr className="text-white w-3/4" />
          </div>
        </div>
    );
}

export default Reservation;

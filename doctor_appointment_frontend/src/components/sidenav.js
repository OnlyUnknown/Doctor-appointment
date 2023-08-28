import '../Styling/sidenav.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function SideNav() {
    const [navOpen, setNavOpen] = useState(false);
    const openNav = () => {

      if (!navOpen) {
        document.getElementById("mySidenav").style.width = "250px";

      } else {
        document.getElementById("mySidenav").style.width = "0";

      }
      setNavOpen(!navOpen);
    };
  return (
<section>
<div id="mySidenav" className="sidenav">
<NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'none')}>Doctors</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/reserve">Appoint</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/my_reservation">My Appointment</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/add_doctor">Add a Doctor</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/delete">Delete a Doctor</NavLink>
        
  <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/reserve">About</NavLink>

</div>
<div>
    
<button onClick={openNav}>Toggle Nav</button>
</div>
</section>
  );
}


export default SideNav;

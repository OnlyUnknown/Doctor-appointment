/* eslint-disable no-console */
import '../Styling/sidenav.css';
import { NavLink } from 'react-router-dom';

function SideNav() {
  const openNav = () => {
    if (document.getElementById('mySidenav').style.width === '250px') {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('main').style.marginLeft = '0px';
      document.getElementsByClassName('toggle-button')[0].style.marginLeft = '0px';
      document.getElementsByClassName('toggle-button2')[0].style.marginLeft = '0px';
      document.getElementsByClassName('toggle-button3')[0].style.marginLeft = '0px';
      document.getElementsByClassName('toggle-button3')[0].style.transform = 'rotateY(180deg)';
    } else {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
      document.getElementsByClassName('toggle-button')[0].style.marginLeft = '250px';
      document.getElementsByClassName('toggle-button2')[0].style.marginLeft = '250px';
      document.getElementsByClassName('toggle-button3')[0].style.marginLeft = '250px';
      document.getElementsByClassName('toggle-button3')[0].style.transform = 'rotateY(0deg)';
    }
  };
  return (
    <section>
      <div id="mySidenav" className="sidenav fixed">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'none')}>Doctors</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/reservation">Appoint</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/my_reservation">My Appointment</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/add_doctor">Add a Doctor</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/delete">Delete a Doctor</NavLink>
      </div>
      <div>

        <button
          type="button"
          className="visually-hidden"
          tabIndex="0"
          onClick={openNav}
        >
          <img alt="togglebutton1" src={`${process.env.PUBLIC_URL}/icons8-semi-circle-64.png`} className="toggle-button" />
        </button>
        <button
          type="button"
          className="visually-hidden"
          tabIndex="0"
          onClick={openNav}
        >
          <img alt="togglebutton1" src={`${process.env.PUBLIC_URL}/icons8-square-50.png`} className="toggle-button2" />
        </button>
        <button
          type="button"
          className="visually-hidden"
          tabIndex="0"
          onClick={openNav}
        >
          <img alt="togglebutton1" src={`${process.env.PUBLIC_URL}/icons8-arrow-100.png`} className="toggle-button3" />
        </button>
      </div>
    </section>
  );
}

export default SideNav;

import '../Styling/sidenav.css';
import { NavLink } from 'react-router-dom';

function SideNav() {
  const openNav = () => {
    if (document.getElementById('mySidenav').style.width === '100%') {
      document.getElementById('mySidenav').style.width = '0%';
      document.getElementsByClassName('toggle-button')[0].style.transform = 'rotate(0deg)';
    } else {
      document.getElementById('mySidenav').style.width = '100%';
      document.getElementsByClassName('toggle-button')[0].style.transform = 'rotate(180deg)';
    }
  };
  return (
    <section>
      <button
        type="button"
        onClick={openNav}
      >
        <img alt="togglebutton1" src={`${process.env.PUBLIC_URL}/menu.png`} className="toggle-button" />
      </button>
      <div id="mySidenav" className="sidenav fixed">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'none')}>Doctors</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/my_appointment">My Appointment</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/reservation">Appoint</NavLink>
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

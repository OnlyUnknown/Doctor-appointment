import '../Styling/sidenav.css';
import { NavLink } from 'react-router-dom';
import { useUser } from './UserContext';
import LogDoc from '../Styling/log_doc.png';

function SideNav() {
  const { currentUser } = useUser();
  const openNav = () => {
    if (
      document.getElementById('my-sidenav').style.width === '100%'
      && window.innerWidth < 700
    ) {
      document.getElementById('my-sidenav').style.width = '0%';
      document.getElementsByClassName('toggle-button')[0].style.transform = 'rotate(0deg)';
    } else if (window.innerWidth < 700) {
      document.getElementById('my-sidenav').style.width = '100%';
      document.getElementsByClassName('toggle-button')[0].style.transform = 'rotate(180deg)';
    }
  };
  return (
    <section className="sm:h-screen side-border">
      <button type="button" className="hidden" onClick={openNav}>
        <img
          alt="togglebutton1"
          src={`${process.env.PUBLIC_URL}/menu.png`}
          className="toggle-button"
        />
      </button>

      <div id="my-sidenav" className="sidenav fixed">
        <div className="logo relative top-0 left-[0%] sm:mb-16">
          <img
            alt="logo"
            src={LogDoc}
            className="logo-image w-28 h-28 m-auto"
          />
        </div>
        {currentUser === null ? (
          <NavLink
            onClick={openNav}
            className={({ isActive }) => (isActive ? 'active-link' : 'none')}
            to="/registration_page"
          >
            Registration
          </NavLink>
        ) : (
          // Render something else when currentUser is not null
          // For example, a different link or a message
          <NavLink to="/logout">{currentUser.name}</NavLink>
        )}

        <NavLink
          onClick={openNav}
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : 'none')}
        >
          Doctors
        </NavLink>
        {currentUser !== null ? (
          <NavLink
            onClick={openNav}
            className={({ isActive }) => (isActive ? 'active-link' : 'none')}
            to="/my_appointment"
          >
            My Appointment
          </NavLink>
        ) : null}

        <NavLink
          onClick={openNav}
          className={({ isActive }) => (isActive ? 'active-link' : 'none')}
          to="/reservation"
        >
          Appoint
        </NavLink>
        <NavLink
          onClick={openNav}
          className={({ isActive }) => (isActive ? 'active-link' : 'none')}
          to="/add_doctor"
        >
          Add a Doctor
        </NavLink>
        <NavLink
          onClick={openNav}
          className={({ isActive }) => (isActive ? 'active-link' : 'none')}
          to="/delete"
        >
          Delete a Doctor
        </NavLink>
      </div>
    </section>
  );
}

export default SideNav;

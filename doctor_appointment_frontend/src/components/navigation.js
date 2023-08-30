import '../Styling/nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <section>
      <nav className="blend">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'none')}>Doctors</NavLink></li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : 'none')}
              to="/reservation"
            >
              Reserve
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/my_reservation">
              My
              reservations
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/add_doctor">
              Add a
              Doctor
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'none')} to="/delete">
              Delete a
              Doctor
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;

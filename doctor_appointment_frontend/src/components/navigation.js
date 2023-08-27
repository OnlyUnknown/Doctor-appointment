import "../Styling/nav.css"
function Nav() {
    return <section>
    <nav className="blend">
      <ul>
        <li><a href="/">Doctors</a></li>
        <li><a href="reserve">Reserve</a></li>
        <li><a href="my_reservation">My reservations</a></li>
        <li><a href="add_doctor">Add a Doctor</a></li>
        <li><a href="delete">Delete a Doctor</a></li>
      </ul>
    </nav>
  </section>;
  }
  
  export default Nav;
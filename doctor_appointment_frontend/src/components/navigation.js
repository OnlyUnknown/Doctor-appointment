import "../Styling/nav.css"

function Nav() {
    return <section>
    <nav className="blend">
      <ul>
        <li><a href="#">Doctors</a></li>
        <li><a href="#">Reserve</a></li>
        <li><a href="#">My reservations</a></li>
        <li><a href="#">Add a Doctor</a></li>
        <li><a href="#">Delete a Doctor</a></li>
      </ul>
    </nav>
  </section>;
  }
  
  export default Nav;
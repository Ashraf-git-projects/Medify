import React from "react";
import { Link } from 'react-router-dom';
import logoimg from '../assets/Group 7.png';

function NavBar() {
  return (
    <nav>
      <div className="announcement">
        <p>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow best practices for cleanliness.
        </p>
      </div>
      <div className="navbar">
        <img className="logo" src={logoimg} alt="Medify Logo" />

        {/* Use Link or button for accessibility */}
        <Link to="/find-doctors" className="nav-link">Find Doctors</Link>
        <Link to="/hospitals" className="nav-link">Hospitals</Link>
        <Link to="/medicines" className="nav-link">Medicines</Link>
        <Link to="/surgeries" className="nav-link">Surgeries</Link>
        <Link to="/providers" className="nav-link">Software for Provider</Link>
        <Link to="/facilities" className="nav-link">Facilities</Link>

        <Link to="/my-bookings">
          <button className="book_btn">My Bookings</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

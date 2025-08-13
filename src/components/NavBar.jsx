import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoimg from "../assets/Group 7.png";
function NavBar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="announcement">
        <p>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow best practices for
          cleanliness.
        </p>
      </div>
      <div className="navbar">
        <img className="logo" src={logoimg} alt="Medify Logo" />

        {/* Use Link or button for accessibility */}
        <NavLink
  to="/find-doctors"
  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
> Find Doctors
</NavLink>
        <Link to="/hospitals" className="nav-link">
          Hospitals
        </Link>
        <Link to="/medicines" className="nav-link">
          Medicines
        </Link>
        <Link to="/surgeries" className="nav-link">
          Surgeries
        </Link>
        <Link to="/providers" className="nav-link">
          Software for Provider
        </Link>
        <Link to="/facilities" className="nav-link">
          Facilities
        </Link>

        <button onClick={() => navigate("my-bookings")} className="book_btn">
          My Bookings
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

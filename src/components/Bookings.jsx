import React, { useEffect, useState } from "react";
import "./Bookings.css";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  const filteredBookings = bookings.filter((b) =>
    (b?.hospitalName || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission page reload
  };

  return (
    <div className="bookings-page">
      <h1 className="bookings-title">My Bookings</h1>

      {/* Search bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search By Hospital"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          id="searchBtn"
          type="submit"
          aria-label="Search"
        >
          🔍 Search
        </button>
      </form>

      <div className="bookings-layout">
        {/* Left: Booking list */}
        <div className="bookings-list">
          {filteredBookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            filteredBookings.map((booking, index) => (
              <div key={index} className="booking-card">
                <div className="booking-left">
                  <div className="hospital-icon">🏥</div>
                  <div className="booking-info">
                    <h3 className="hospital-name">{booking.hospitalName}</h3>
                    <p className="location">{booking.location}</p>
                    <p className="hospital-type">{booking.hospitalType}</p>
                  </div>
                </div>
                <div className="booking-right">
                  <span className="time-badge">{booking.time}</span>
                  <span className="date-badge">{booking.date}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right: Promo card */}
        <div className="promo-card">
          <h3>
            This World Oral Health Day, <br /> Get a{" "}
            <span className="highlight">FREE Appointment*</span> <br /> with
            Top Dentists.
          </h3>
          <p className="promo-sub">LIMITED PERIOD OFFER</p>
          <p className="promo-footer">
            *T&C Apply - only consultation fee. Procedures / surgeries not
            covered
          </p>
        </div>
      </div>
    </div>
  );
}

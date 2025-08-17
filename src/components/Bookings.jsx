import React, { useEffect, useState } from "react";
import "./Bookings.css";

export default function Bookings() {
  const [bookings, setBookings] = useState(null); // null until loaded
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  if (bookings === null) {
    return <div>Loading...</div>; // ensures Cypress waits
  }

  const filteredBookings = bookings.filter((b) =>
    b.hospitalName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bookings-page">
      <h1 className="bookings-title">My Bookings</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search By Hospital"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍 Search</button>
      </div>

      <div className="bookings-layout">
        <div className="bookings-list">
          {filteredBookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            filteredBookings.map((booking, index) => (
              <div key={index} className="booking-card">
                <div className="booking-left">
                  <div className="hospital-icon">🏥</div>
                  <div className="booking-info">
                    <h3 className="hospital-name">
                      {booking.hospitalName?.toLowerCase()}
                    </h3>
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

        <div className="promo-card">
          <h3>
            This World Oral Health Day, <br /> Get a{" "}
            <span className="highlight">FREE Appointment*</span> <br /> with
            Top Dentists.
          </h3>
          <p className="promo-sub">LIMITED PERIOD OFFER</p>
          <p className="promo-footer">
            *T & C Apply - only consultation fee. Procedures / surgeries not
            covered
          </p>
        </div>
      </div>
    </div>
  );
}

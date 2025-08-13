import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./FindDoctors.css";

export default function FindDoctors() {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const city = searchParams.get("city");

  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedDay, setSelectedDay] = useState("Today");

  const slotData = {
    Morning: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM"],
    Evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
  };

  const getNextDays = () => {
    const days = ["Today", "Tomorrow"];
    for (let i = 2; i < 4; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date.toLocaleDateString("en-US", { weekday: "long" }));
    }
    return days;
  };

  const saveBooking = (center, day, time) => {
    const newBooking = {
      hospitalName: center["Hospital Name"],
      hospitalType: center["Hospital Type"],
      location: `${center.City}, ${center.State}`,
      date: day,
      time: time,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    alert(
      `✅ Appointment booked for ${time} on ${day} at ${center["Hospital Name"]}`
    );
  };

  // ✅ Load saved selected day on mount
  useEffect(() => {
    const savedDay = localStorage.getItem("selectedDay");
    if (savedDay) {
      setSelectedDay(savedDay);
    }
  }, []);

  // ✅ Save selected day whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedDay", selectedDay);
  }, [selectedDay]);

  // ✅ Fetch hospital data
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(
            state
          )}&city=${encodeURIComponent(city)}`
        );
        const data = await res.json();
        setCenters(data);
      } catch (err) {
        console.error("Error fetching centers", err);
      } finally {
        setLoading(false);
      }
    }

    if (state && city) {
      fetchData();
    }
  }, [state, city]);

  if (loading) return <p className="loading-text">Loading...</p>;

  return (
    <div className="find-doctors-page">
      <h1 className="results-title">
        {centers.length} medical centers available in {city?.toLowerCase()}
      </h1>
      <div className="doctors-grid">
        {centers.map((center, idx) => (
          <div className="doctor-card" key={idx}>
            <div className="card-header">
              <div className="hospital-icon">🏥</div>
              <div>
                <h3 className="doctor-name">{center["Hospital Name"]}</h3>
                <p className="doctor-location">
                  {center.City}, {center.State}
                </p>
              </div>
            </div>
            <p className="doctor-type">{center["Hospital Type"]}</p>

            <button
              aria-label="Book FREE Center Visit"
              className="book-btn"
              onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
            >
              Book FREE Center Visit
            </button>

            {openDropdown === idx && (
              <div className="slot-dropdown">
                <div className="day-tabs">
                  {getNextDays().map((day) => (
                    <button
                      key={day}
                      className={`day-tab ${
                        selectedDay === day ? "active" : ""
                      }`}
                      onClick={() => setSelectedDay(day)}
                    >
                      <p>{day}</p>
                    </button>
                  ))}
                </div>

                <div className="slot-sections">
                  {Object.keys(slotData).map((session) => (
                    <div className="slot-section" key={session}>
                      <p className="session-title">{session}</p>
                      <div className="slot-times">
                        {slotData[session].map((time) => (
                          <button
                            key={time}
                            className="time-btn"
                            onClick={() =>
                              saveBooking(center, selectedDay, time)
                            }
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import {
  Person,
  DomainAdd,
  NightShelter,
  LocalHospital,
  AirportShuttle,
  Search,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function LocationSearch() {
  const [statesData, setStatesData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCard, setSelectedCard] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");
  // Fetch states when user focuses state input
  const handleStateFocus = async () => {
    if (statesData.length === 0) {
      try {
        const res = await fetch("https://meddata-backend.onrender.com/states");
        const states = await res.json();
        setStatesData(states);
      } catch (err) {
        console.error("Unable to fetch states data", err);
      }
    }
  };
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!selectedState || !selectedCity) {
      alert("Please select both state and city");
      return;
    }
    navigate(
      `/find-doctors?state=${encodeURIComponent(
        selectedState
      )}&city=${encodeURIComponent(selectedCity)}`
    );
  };

  // Track selected state from input
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setCityData([]); // reset cities if state changes
  };

  // Fetch cities when user focuses city input
  const handleCityFocus = async () => {
    if (!selectedState) return; // no need for alert now
    if (cityData.length === 0) {
      try {
        const res = await fetch(
          `https://meddata-backend.onrender.com/cities/${encodeURIComponent(
            selectedState
          )}`
        );
        const cities = await res.json();
        setCityData(cities);
      } catch (err) {
        console.error("Unable to fetch cities data", err);
      }
    }
  };

  const cards = [
    { id: 1, title: "Doctors", icon: Person },
    { id: 2, title: "Labs", icon: DomainAdd },
    { id: 3, title: "Hospitals", icon: NightShelter },
    { id: 4, title: "Medical Store", icon: LocalHospital },
    { id: 5, title: "Ambulance", icon: AirportShuttle },
  ];

  return (
    <div className="location_content">
      <div className="search-box">
        {/* STATE INPUT */}
        <div id="state">
          <input
            list="statesList"
            placeholder="Search State"
            onFocus={handleStateFocus}
            onChange={handleStateChange}
          />
          <datalist id="statesList">
            {statesData.map((state, idx) => (
              <option key={idx} value={state} />
            ))}
          </datalist>
        </div>

        {/* CITY INPUT */}
        <div id="city">
          <input
            list="citiesList"
            disabled={!selectedState} // disables until state selected
            onFocus={handleCityFocus}
            onChange={(e) => setSelectedCity(e.target.value)}
            placeholder={selectedState ? "Search City" : "Select state first"}
          />
          <datalist id="citiesList">
            {cityData.map((city, idx) => (
              <option key={idx} value={city} />
            ))}
          </datalist>
        </div>

        <button id="searchBtn" type="submit" aria-label="Search" onClick={handleSearch}>
          <Search fontSize="medium" /> Search
        </button>
      </div>

      <p className="search-label">You may be looking for</p>
      <Box className="category-box">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card className="category-card" key={card.id}>
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? "" : undefined}
                sx={{
                  "&[data-active]": {
                    backgroundColor: "#E8F1FF",
                    border: "1px solid #2AA7FF",
                    "& svg": { color: "#2AA7FF" },
                    "& h6": { color: "#2AA7FF" },
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    padding: 2,
                  }}
                >
                  <Icon fontSize="large" />
                  <Typography variant="h6">{card.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </div>
  );
}

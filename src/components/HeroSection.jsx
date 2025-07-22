import React from "react";
import { Link } from 'react-router-dom';
import LocationSearch from "./LocationSearch";
import heroimg from "../assets/hero_image.png";

export default function HeroSection() {
  return (
    <div className="hero_section">
      <div className="hero_flex">
        <div className="hero_text">
          <h1>
            Skip the travel! Find Online <br />
            <span className="highlight">Medical</span>{" "}
            <span className="highlight blue">Centers</span>
          </h1>
          <p>
            Connect instantly with a 24x7 specialist or choose to
            <br /> video visit a particular doctor.
          </p>
          <Link to="/find-centers">
            <button className="centers_btn">Find Centers</button>
          </Link>
        </div>
        <div className="hero_image">
          <img src={heroimg} alt="Doctor Illustration" />
        </div>
      </div>
      <div className="location_wrapper">
        <LocationSearch />
      </div> 
    </div>
  );
}

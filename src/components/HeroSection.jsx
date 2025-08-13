import React from "react";
import { Link } from "react-router-dom";
import LocationSearch from "./LocationSearch";
import heroimg from "../assets/hero_image.png";
import PromoBanner from "./PromoBanner";
import SearchSpecial from "./SearchSpecial";
import Doctors from "./Doctors";
import Patients from "./Patients";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";

export default function HeroSection() {
  return (
    <>
      {/* Hero Area */}
      <div className="hero_section">
        <div className="hero_flex">
          {/* Text Area */}
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
            <Link to="/find-doctors">
              <button className="centers_btn">Find Centers</button>
            </Link>
          </div>

          {/* Image Area */}
          <div className="hero_image">
            <img src={heroimg} alt="Doctor Illustration" />
          </div>
        </div>

        {/* Location Search */}
        <div className="location_wrapper">
          <LocationSearch />
        </div>
      </div>

      {/* Homepage-only sections */}
      <section className="home_sections">
        <PromoBanner />
        <SearchSpecial />
        <Doctors />
        <Patients />
        <Blogs />
        <Testimonials />
      </section>
    </>
  );
}

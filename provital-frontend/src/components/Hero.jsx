import React from "react";
import "./Hero.css";
// Import your actual images
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";
import Rectangle4 from "../assets/Rectangle4.png";
import Rectangle5 from "../assets/Rectangle5.png";
import Rectangle6 from "../assets/Rectangle6.png";
import Rectangle7 from "../assets/Rectangle7.png";
import Rectangle8 from "../assets/Rectangle8.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__left">
          <div className="hero__column hero__column--1">
            <div className="hero__image">
              <img src={Rectangle1} alt="Health lifestyle" />
            </div>
            <div className="hero__image">
              <img src={Rectangle3} alt="Nutrition" />
            </div>
            <div className="hero__image">
              <img src={Rectangle5} alt="Medical care" />
            </div>
            <div className="hero__image">
              <img src={Rectangle7} alt="Wellness" />
            </div>
            {/* Duplicates for looping */}
            <div className="hero__image">
              <img src={Rectangle1} alt="Health lifestyle" />
            </div>
            <div className="hero__image">
              <img src={Rectangle3} alt="Nutrition" />
            </div>
            <div className="hero__image">
              <img src={Rectangle5} alt="Medical care" />
            </div>
            <div className="hero__image">
              <img src={Rectangle7} alt="Wellness" />
            </div>
          </div>

          <div className="hero__column hero__column--2">
            <div className="hero__image">
              <img src={Rectangle2} alt="Wellness" />
            </div>
            <div className="hero__image">
              <img src={Rectangle4} alt="Medical care" />
            </div>
            <div className="hero__image">
              <img src={Rectangle6} alt="Health lifestyle" />
            </div>
            <div className="hero__image">
              <img src={Rectangle8} alt="Medical care" />
            </div>
            {/* Duplicates for looping */}
            <div className="hero__image">
              <img src={Rectangle2} alt="Wellness" />
            </div>
            <div className="hero__image">
              <img src={Rectangle4} alt="Medical care" />
            </div>
            <div className="hero__image">
              <img src={Rectangle6} alt="Health lifestyle" />
            </div>
            <div className="hero__image">
              <img src={Rectangle8} alt="Medical care" />
            </div>
          </div>
        </div>

        <div className="hero__right">
          <h1>
            Book an appointment with{" "}
            <span className="highlight">lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>
      </div>

      {/* Search bar moved outside the grid container */}
      <div className="hero__search-container">
        <div className="hero__search">
          <div className="search-field">
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Condition, procedure, specialty..."
            />
          </div>

          <div className="search-field">
            <svg
              className="location-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21C16 17 20 13 20 8C20 4 16 0 12 0C8 0 4 4 4 8C4 13 8 17 12 21Z"
                fill="currentColor"
              />
              <circle cx="12" cy="8" r="3" fill="white" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="City, state, or zipcode"
            />
          </div>

          <div className="search-field">
            <svg
              className="insurance-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2L4 7V10C4 16 8 21.5 12 23C16 21.5 20 16 20 10V7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Insurance carrier"
            />
          </div>

          <button type="button" className="search-btn">
            <svg
              className="search-btn-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Find now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

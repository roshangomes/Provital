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
          <div className="hero__image">
            <img src={Rectangle1} alt="Health lifestyle" />
          </div>
          <div className="hero__image">
            <img src={Rectangle2} alt="Wellness" />
          </div>
          <div className="hero__image hero__image--large">
            <img src={Rectangle8} alt="Physical activity" />
          </div>
          <div className="hero__image">
            <img src={Rectangle3} alt="Nutrition" />
          </div>
          <div className="hero__image">
            <img src={Rectangle4} alt="Medical care" />
          </div>
          <div className="hero__image">
            <img src={Rectangle5} alt="Medical care" />
          </div>
          <div className="hero__image">
            <img src={Rectangle6} alt="Medical care" />
          </div>
          <div className="hero__image">
            <img src={Rectangle7} alt="Medical care" />
          </div>
        </div>

        <div className="hero__right">
          <h1>
            Book an appointment with{" "}
            <span className="highlight">lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>

          <div className="hero__search">
            <select className="search-input">
              <option>Condition, procedure, specialty...</option>
              <option>Diabetes</option>
              <option>Heart Disease</option>
              <option>Weight Management</option>
              <option>Nutrition Counseling</option>
              <option>Stress Management</option>
            </select>

            <select className="search-input">
              <option>City, state, or zipcode</option>
              <option>New York, NY</option>
              <option>Los Angeles, CA</option>
              <option>Chicago, IL</option>
              <option>Houston, TX</option>
            </select>

            <select className="search-input">
              <option>Insurance carrier</option>
              <option>Blue Cross Blue Shield</option>
              <option>Aetna</option>
              <option>UnitedHealth</option>
              <option>Cigna</option>
              <option>Humana</option>
            </select>

            <button type="button" className="search-btn">
              Find now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

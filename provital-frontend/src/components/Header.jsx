import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png"; // Ensure this path is correct

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent the default navigation behavior
    console.log("Toggling dropdown. Current state:", isDropdownOpen);
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo-container">
          <img src={logo} alt="ProVital" className="header__logo" />
          <span className="header__logo-text">ProVital</span>
        </div>
        <nav className={`header__nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            <li>
              <a>List your practice</a>
            </li>
            <li>
              <a>For Employers</a>
            </li>
            <li>
              <a>Courses</a>
            </li>
            <li>
              <a>Books</a>
            </li>
            <li>
              <a>Speakers</a>
            </li>
            <li>
              <a>Doctors</a>
            </li>
            <li className={`dropdown ${isDropdownOpen ? "dropdown-open" : ""}`}>
              <span className="dropdown-toggle" onClick={toggleDropdown}>
                Login / Sign up
              </span>
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <span>Doctor</span>
                  <div className="dropdown-buttons">
                    <a href="/login/doctor" className="dropdown-button">
                      Login
                    </a>
                    <a href="/signup/doctor" className="dropdown-button">
                      Sign up
                    </a>
                  </div>
                </div>
                <div className="dropdown-item">
                  <span>Patient</span>
                  <div className="dropdown-buttons">
                    <a href="/login/patient" className="dropdown-button">
                      Login
                    </a>
                    <a href="/signup/patient" className="dropdown-button">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="header__mobile" onClick={toggleMobileMenu}>
          <span>{isMobileMenuOpen ? "✖" : "☰"}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png"; // Ensure this path is correct

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="ProVital" className="header__logo" />
        <span className="header__logo-text">ProVital</span>
        <nav className={`header__nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            <li>
              <a href="/list-your-practice">List your practice</a>{" "}
              {/* Updated href */}
            </li>
            <li>
              <a href="/for-employers">For Employers</a> {/* Updated href */}
            </li>
            <li>
              <a href="/courses">Courses</a> {/* Updated href */}
            </li>
            <li>
              <a href="/books">Books</a> {/* Updated href */}
            </li>
            <li>
              <a href="/speakers">Speakers</a> {/* Updated href */}
            </li>
            <li>
              <a href="/doctors" className="highlighted">
                Doctors
              </a>{" "}
              {/* Updated href */}
            </li>
            <li className="dropdown">
              <a href="/login">Login / Sign up</a> {/* Updated href */}
              <div className="dropdown-content">
                <a href="/login/doctor">Doctor</a> {/* Updated href */}
                <a href="/login/patient">Patient</a> {/* Updated href */}
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

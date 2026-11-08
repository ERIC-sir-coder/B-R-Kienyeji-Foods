
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* B&R KIENYEJI DOUBLE-CIRCLE LOGO */}
        <a
          href="#home"
          className="logo"
          aria-label="Big and Ready Kienyeji Foods"
        >
          <svg
            className="logo-image"
            viewBox="0 0 140 140"
            role="img"
            aria-labelledby="logo-title"
          >
            <title id="logo-title">
              Big and Ready Kienyeji Foods
            </title>

            <defs>
              {/* Top curved text */}
              <path
                id="logo-top-curve"
                d="M 21,70 A 49,49 0 0,1 119,70"
              />

              {/* Bottom curved text */}
              <path
                id="logo-bottom-curve"
                d="M 21,70 A 49,49 0 0,0 119,70"
              />
            </defs>

            {/* Outer circle */}
            <circle
              cx="70"
              cy="70"
              r="66"
              className="logo-outer-circle"
            />

            {/* Inner circle */}
            <circle
              cx="70"
              cy="70"
              r="39"
              className="logo-inner-circle"
            />

            {/* B&R top text */}
            <text className="logo-top-text">
              <textPath
                href="#logo-top-curve"
                startOffset="50%"
                textAnchor="middle"
              >
                B&amp;R
              </textPath>
            </text>

            {/* KIENYEJI bottom text */}
            <text className="logo-bottom-text">
              <textPath
                href="#logo-bottom-curve"
                startOffset="50%"
                textAnchor="middle"
              >
                KIENYEJI
              </textPath>
            </text>
          </svg>
        </a>

        {/* NAVIGATION LINKS */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* CALL BUTTON */}
        <a
          href="tel:0703762387"
          className="nav-button"
        >
          Call Us
        </a>

      </div>
    </nav>
  )
}

export default Navbar

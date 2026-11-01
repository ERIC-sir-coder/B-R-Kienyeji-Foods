
import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#home" className="logo">
          B&R <span>KIENYEJI FOODS</span>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="tel:0703762387" className="nav-button">
          Call Us
        </a>

      </div>
    </nav>
  )
}

export default Navbar

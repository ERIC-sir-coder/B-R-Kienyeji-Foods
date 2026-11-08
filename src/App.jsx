
import Navbar from './components/Navbar'
import './App.css'

const dishes = [
  { image: '/images/dish1.jpg' },
  { image: '/images/dish2.jpg' },
  { image: '/images/dish3.jpg' },
  { image: '/images/dish4.jpg' },
  { image: '/images/dish5.jpg' },
]

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-tagline">
              AUTHENTIC EAST AFRICAN FOOD
            </p>

            <h1>
              Welcome to <span>B&R Kienyeji Foods</span>
            </h1>

            <p className="hero-description">
              Enjoy a welcoming dining experience with authentic
              East African food, freshly prepared for you.
            </p>

            <div className="hero-buttons">
              <a href="tel:0703762387" className="hero-call">
                Call Us
              </a>

              <a href="#about" className="hero-explore">
                Explore More
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className="about-section" id="about">
          <div className="about-container">
            <div className="about-heading">
              <p className="section-tagline">GET TO KNOW US</p>
              <h2>About B&R Kienyeji Foods</h2>
            </div>

            <div className="about-content">
              <p>
                B&R Kienyeji Foods is an East African restaurant
                located along Dunga Road in Nairobi.
              </p>

              <p>
                Whether you are looking for a place to enjoy a meal
                or prefer to take your food away, we welcome you.
              </p>

              <div className="about-details">
                <div className="about-detail">
                  <h3>Our Location</h3>
                  <p>Dunga Road, Nairobi</p>
                </div>

                <div className="about-detail">
                  <h3>Our Services</h3>
                  <p>Dine-in and Takeaway</p>
                </div>

                <div className="about-detail">
                  <h3>Dining Options</h3>
                  <p>Lunch and Dinner</p>
                </div>
              </div>

              <a href="tel:0703762387" className="about-button">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="services-section" id="services">
          <div className="services-container">
            <div className="services-heading">
              <p className="section-tagline">WHAT WE OFFER</p>
              <h2>Our Services</h2>

              <p>
                Enjoy convenient dining options at B&R Kienyeji Foods.
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Dine-In</h3>
                <p>
                  Enjoy your meal at our restaurant in a welcoming
                  dining environment.
                </p>
              </div>

              <div className="service-card">
                <h3>Takeaway</h3>
                <p>
                  Prefer to enjoy your meal elsewhere?
                  Takeaway service is available.
                </p>
              </div>

              <div className="service-card">
                <h3>Lunch</h3>
                <p>
                  Visit us for your lunch dining experience.
                </p>
              </div>

              <div className="service-card">
                <h3>Dinner</h3>
                <p>
                  Enjoy an evening dining experience with us.
                </p>
              </div>

              <div className="service-card">
                <h3>Solo Dining</h3>
                <p>
                  A dining option for customers visiting on their own.
                </p>
              </div>

              <div className="service-card">
                <h3>Quick Bites</h3>
                <p>
                  Quick-bite and small-plate offerings are available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section className="menu-section" id="menu">
          <div className="menu-container">
            <div className="menu-heading">
              <p className="section-tagline">
                TIME TO EXPLORE OUR FOOD
              </p>

              <h2>Our Menu</h2>

              <p>
                Discover what B&R Kienyeji Foods has to offer.
              </p>
            </div>

            {/* FOOD IMAGE GALLERY */}
            <div className="menu-grid">
              {dishes.map((dish, index) => (
                <div className="menu-card" key={dish.image}>
                  <div className="menu-image">
                    <img
                      src={dish.image}
                      alt={`B&R Kienyeji Foods meal ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section" id="contact">
          <div className="contact-container">
            <div className="contact-heading">
              <p className="section-tagline">GET IN TOUCH</p>
              <h2>Contact Us</h2>

              <p>
                We welcome you to B&R Kienyeji Foods.
                Get in touch or visit our restaurant.
              </p>
            </div>

            <div className="contact-grid">

              {/* PHONE CARD */}
              <div className="contact-card truecaller-card">
                <div className="truecaller-logo">
                  <svg
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Phone app icon"
                  >
                    <rect
                      width="48"
                      height="48"
                      rx="12"
                      fill="#1689E8"
                    />

                    <path
                      d="M24 8
                         C15.16 8 8 14.94 8 23.5
                         C8 32.06 15.16 39 24 39
                         C27.15 39 30.07 38.12 32.51 36.6
                         L39 39
                         L36.6 32.5
                         C38.75 30.06 40 26.94 40 23.5
                         C40 14.94 32.84 8 24 8Z"
                      fill="#FFFFFF"
                    />

                    <path
                      d="M17 16
                         C15.9 16 15 16.9 15 18
                         C15 26.28 21.72 33 30 33
                         C31.1 33 32 32.1 32 31
                         V27.5
                         L26.8 25.8
                         L24.5 28.1
                         C21.9 26.9 21.1 26.1 19.9 23.5
                         L22.2 21.2
                         L20.5 16Z"
                      fill="#1689E8"
                    />
                  </svg>
                </div>

                <h3>Call Us</h3>

                <p>
                  Speak to B&R Kienyeji Foods directly.
                </p>

                <a href="tel:0703762387">
                  0703 762387
                </a>
              </div>

              {/* WHATSAPP CARD */}
              <div className="contact-card whatsapp-card">
                <div className="whatsapp-logo">
                  <img
                    src="https://cdn.simpleicons.org/whatsapp/25D366"
                    alt="WhatsApp logo"
                    loading="lazy"
                  />
                </div>

                <h3>WhatsApp</h3>

                <p>
                  Chat with B&R Kienyeji Foods.
                </p>

                <a
                  href="https://wa.me/254703762387"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message Us →
                </a>
              </div>

              {/* LOCATION CARD */}
              <div className="contact-card">
                <h3>Visit Us</h3>
                <p>Find us at:</p>
                <p>Dunga Road, Nairobi</p>
              </div>

            </div>

            {/* OPENING HOURS - CONTACT SECTION */}
            <div className="opening-hours">
              <h3>Opening Hours</h3>

              <div className="hours-row">
                <span>Monday – Friday</span>
                <span>6:30 AM – 8:00 PM</span>
              </div>

              <div className="hours-row">
                <span>Saturday</span>
                <span>8:00 AM – 4:00 PM</span>
              </div>

              <div className="hours-row">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              B&R
              <span>KIENYEJI FOODS</span>
            </a>

            <p>
              Your East African dining destination
              along Dunga Road, Nairobi.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#menu">Our Menu</a>
            <a href="#contact">Contact</a>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="footer-contact">
            <h3>Contact Information</h3>

            <p>Dunga Road, Nairobi</p>

            <a href="tel:0703762387">
              0703 762387
            </a>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} B&R Kienyeji Foods.
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App

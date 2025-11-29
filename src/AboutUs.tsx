import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "../assets/logo.png";
import whoWeAreImage from "../assets/who_we_are.jpg";
import ourJourneyImage from "../assets/our_journey.jpg";
import intelligentControlIcon from "../assets/intelligent_control_system.png";
import energyEfficientIcon from "../assets/energy_efficient_icon.png";
import ecoIcon from "../assets/eco_friendly_icon.png";
import energySavingsIcon from "../assets/energy_cost_savings.png";
import safetyFirstIcon from "../assets/safety_first_card_icon.png";
import certificationIcon from "../assets/certification_card_icon.png";
import sushilkumarImage from "../assets/Sushilkumar_Ramchandra_Patil.jpg";
import anilMoreImage from "../assets/Anil_Ashok_More.jpg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
];

const coreValues = [
  {
    icon: intelligentControlIcon,
    alt: "Innovation icon",
    title: "Innovation",
    description:
      "We continuously push boundaries to create smarter, more efficient solutions that meet evolving energy needs.",
  },
  {
    icon: safetyFirstIcon,
    alt: "Integrity icon",
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and reliability in every interaction and transaction.",
  },
  {
    icon: energyEfficientIcon,
    alt: "Customer commitment icon",
    title: "Customer Commitment",
    description:
      "Our customers are at the heart of everything we do. We are dedicated to delivering exceptional value and service.",
  },
  {
    icon: ecoIcon,
    alt: "Sustainability icon",
    title: "Sustainability",
    description:
      "We are committed to protecting the environment and promoting responsible energy use for future generations.",
  },
  {
    icon: certificationIcon,
    alt: "Quality excellence icon",
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in design, manufacturing, and service delivery across all our operations.",
  },
  {
    icon: energySavingsIcon,
    alt: "Continuous improvement icon",
    title: "Continuous Improvement",
    description:
      "We embrace change, seek new opportunities, and constantly evolve to better serve our customers and the planet.",
  },
];

const leadership = [
  {
    image: sushilkumarImage,
    alt: "Mr. Sushilkumar Ramchandra Patil",
    name: "Mr. Sushilkumar Ramchandra Patil",
    title: "Managing Director – Ondo Solutions Private Limited",
  },
  {
    image: anilMoreImage,
    alt: "Mr. Anil Ashok More",
    name: "Mr. Anil Ashok More",
    title: "Technical Director – Ondo Solutions Private Limited",
  },
];

function AboutUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`about-us__header ${isMenuOpen ? "about-us__header--open" : ""}`}>
        <div className="about-us__header-top-border"></div>
        <div className="about-us__header-content">
          <Link className="about-us__header-brand" to="/">
            <img src={logo} alt="Ondo logo" />
          </Link>
          <button
            type="button"
            className="about-us__menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className="about-us__header-links">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a key={link.label} href={link.href} onClick={handleNavItemClick}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.href} onClick={handleNavItemClick}>
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="about-us__header-actions">
            <Link to="/contact" className="btn btn--primary" onClick={handleNavItemClick}>Contact Us</Link>
            <button className="btn btn--ghost btn--ghost-dark">Login</button>
          </div>
        </div>
      </header>

      {/* Who we are Section */}
      <section className="about-us__section about-us__who-we-are">
        <div className="about-us__wrapper">
          <div className="about-us__who-content">
            <div className="about-us__who-text-content">
              <h2 className="about-us__heading about-us__heading--who-we-are">
                Who we are
              </h2>
              <p className="about-us__description">
                Ondo Solutions Private Limited is a technology-driven company
                specializing in innovative energy-saving solutions for homes,
                offices, and industries.
              </p>
              <p className="about-us__description">
                With over a decade of expertise in electrical and electronic
                engineering, we design and manufacture intelligent, reliable,
                and sustainable technologies that make energy efficiency a way
                of life.
              </p>
              <p className="about-us__description">
                Our flagship product, the Intelligent Energy Management System
                (IEMS), optimizes power usage, reduces wastage, and enhances the
                performance and lifespan of electrical systems.
              </p>
              <p className="about-us__description">
                At Ondo, we believe every unit of electricity saved is a step
                toward a greener future. Our commitment to innovation, quality,
                and customer satisfaction drives us to create solutions that
                deliver real-world impact and lasting value.
              </p>
              <Link to="/contact" className="btn btn--primary about-us__cta">
                Contact Us
              </Link>
            </div>
            <div className="about-us__who-image">
              <img
                src={whoWeAreImage}
                alt="Smart technology network"
                className="about-us__who-image-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="about-us__section about-us__mission">
        <div className="about-us__wrapper">
          <div className="about-us__mission-content">
            <h2 className="about-us__heading">Our Mission</h2>
            <p className="about-us__description">
              To design and deliver intelligent, reliable, and eco-conscious
              energy management solutions that help individuals and
              organizations reduce electricity costs, protect electrical
              systems, and contribute to a sustainable future. We strive to make
              energy efficiency simple, accessible, and impactful through
              continuous innovation and customer-focused technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="about-us__section about-us__vision">
        <div className="about-us__wrapper">
          <div className="about-us__vision-content">
            <h2 className="about-us__heading">Our Vision</h2>
            <p className="about-us__description">
              To become a trusted global leader in intelligent energy
              management, empowering every home, business, and industry to
              achieve maximum energy efficiency and sustainability. We envision
              a world where smart technology and conscious energy use go hand in
              hand to create a cleaner, more prosperous planet for future
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="about-us__section about-us__values">
        <div className="about-us__wrapper">
          <h2 className="about-us__heading about-us__heading--centered">
            Our Core Values
          </h2>
          <div className="about-us__values-grid">
            {coreValues.map((value, index) => (
              <article className="about-us__value-card" key={index}>
                <img
                  className="about-us__value-icon"
                  src={value.icon}
                  alt={value.alt}
                />
                <h3 className="about-us__value-title">{value.title}</h3>
                <p className="about-us__value-description">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="about-us__section about-us__journey">
        <div className="about-us__wrapper">
          <div className="about-us__journey-content">
            <div className="about-us__journey-text">
              <h2 className="about-us__heading about-us__heading--journey">
                Our Journey
              </h2>
              <p className="about-us__journey-subtitle">
                12 Years of Innovation and Impact
              </p>
              <p className="about-us__description about-us__description--journey">
                Twelve years ago, a vision was born — to save electricity and
                reduce energy costs through intelligent technology. That vision
                led to our flagship creation: the Intelligent Energy Management
                System (IEMS).
              </p>
              <p className="about-us__description about-us__description--journey">
                Founded with a passion for energy efficiency and sustainability,
                Amber began as a small proprietorship where the first IEMS
                device was developed. Designed to optimize power usage and lower
                electricity bills, it quickly gained recognition among
                businesses and households.
              </p>
              <p className="about-us__description about-us__description--journey">
                Customer feedback fueled continuous improvement, leading to over
                100,000 successful installations across industries and homes.
                The IEMS device proved its reliability, delivering real savings
                and earning trust nationwide.
              </p>
              <p className="about-us__description about-us__description--journey">
                Driven by this success, Amber evolved into Ondo Solutions
                Private Limited, marking a new era of growth and innovation.
                This transformation enabled larger collaborations with
                government bodies and corporations, strengthening our mission to
                make energy-saving accessible for all.
              </p>
              <p className="about-us__description about-us__description--journey">
                Today, Ondo Solutions continues to create intelligent,
                sustainable solutions that help users save electricity, cut
                costs, and protect the planet. From our humble beginnings as
                Amber to our present as ONDO, our journey stands for innovation,
                sustainability, and a lasting commitment to a brighter,
                energy-smart future.
              </p>
            </div>
            <div className="about-us__journey-image">
              <img
                src={ourJourneyImage}
                alt="Team collaboration"
                className="about-us__journey-image-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="about-us__section about-us__leadership">
        <div className="about-us__wrapper">
          <h2 className="about-us__heading about-us__heading--centered">
            Our Leadership
          </h2>
          <p className="about-us__leadership-intro">
            Our leadership team brings together a unique blend of vision,
            innovation, and integrity. With deep expertise in management,
            technology, and energy solutions, they are committed to driving our
            company's mission forward and making a meaningful impact in modern
            India's energy landscape.
          </p>
          <div className="about-us__leadership-grid">
            {leadership.map((leader) => (
              <article className="about-us__leader-card" key={leader.name}>
                <div className="about-us__leader-card-image-wrapper">
                  <img
                    src={leader.image}
                    alt={leader.alt}
                    className="about-us__leader-card-image"
                  />
                  <div className="about-us__leader-card-overlay">
                    <h3 className="about-us__leader-name">{leader.name}</h3>
                    <p className="about-us__leader-title">{leader.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Together for a Smarter and Greener Future Section */}
      <section className="about-us__section about-us__future">
        <div className="about-us__wrapper">
          <h2 className="about-us__heading about-us__heading--centered about-us__heading--highlighted">
            Together for a{" "}
            <span className="about-us__highlight about-us__highlight--orange">
              Smarter
            </span>{" "}
            and{" "}
            <span className="about-us__highlight about-us__highlight--green">
              Greener
            </span>{" "}
            Future
          </h2>
          <p className="about-us__description about-us__description--centered">
            Under the visionary leadership of Mr. Sushilkumar Patil and Mr. Anil
            More, Ondo Solutions Private Limited is rapidly emerging as a
            trusted name in the field of Intelligent Energy Management System
            and Smart Power Solutions. Their combined expertise — in business
            strategy, legal compliance, and technical innovation — continues to
            drive the company's mission of building a sustainable,
            energy-efficient, and technologically empowered future for all.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__left">
            <div className="footer__brand">
              <div className="footer__logo">
                <img src={logo} alt="Ondo logo" />
              </div>
              <div className="footer__tagline">
                <div>Future of Energy</div>
                <div>Conservation</div>
              </div>
            </div>
            <div className="footer__about">
              <h3 className="footer__heading">About Ondo</h3>
              <p className="footer__description">
                We are a technology-driven company dedicated to developing
                innovative energy-saving solutions for homes, offices, and
                industries. Our purpose goes beyond just reducing electricity
                bills — we aim to make energy efficiency a way of life through
                intelligent, reliable, and sustainable technologies.
              </p>
              <div className="footer__social">
                <a
                  href="#"
                  className="footer__social-link"
                  aria-label="Twitter"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="footer__social-link"
                  aria-label="Facebook"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="footer__social-link"
                  aria-label="Instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="footer__social-link"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                      fill="currentColor"
                    />
                    <circle cx="4" cy="4" r="2" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="footer__social-link"
                  aria-label="YouTube"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer__right">
            <h3 className="footer__heading">Company</h3>
            <nav className="footer__links">
              <Link to="/about" className="footer__link">
                About Us
              </Link>
              <Link to="/#products" className="footer__link">
                Products and Solutions
              </Link>
              <Link to="/contact" className="footer__link">
                Contact Us
              </Link>
              <a href="#privacy" className="footer__link">
                Privacy Policy
              </a>
              <a href="#terms" className="footer__link">
                Terms of Use
              </a>
            </nav>
          </div>
        </div>
        <div className="footer__copyright">
          <p>© 2025 Ondo Solutions Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;

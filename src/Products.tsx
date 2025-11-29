import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "../assets/logo.png";
import homePowerSaverImage from "../assets/Home_power_saver_image.png";
import industrialPowerSaverImage from "../assets/industrial_power_saver_image.png";
import residentialHomesIcon from "../assets/residential_homes.png";
import commercialSpacesIcon from "../assets/commercial_spaces.png";
import industrialPlantsIcon from "../assets/small_scale_industrial_plants.png";
import retailEstablishmentsIcon from "../assets/retail_establishments_icon.png";
import illustrationImage from "../assets/illustration_one_and_two.png";

const productUseCases = [
  {
    icon: residentialHomesIcon,
    alt: "Residential homes icon",
    title: "Residential Homes",
  },
  {
    icon: commercialSpacesIcon,
    alt: "Commercial spaces icon",
    title: "Commercial Spaces",
  },
  {
    icon: industrialPlantsIcon,
    alt: "Small scale industrial plants icon",
    title: "Small Scale Industrial Plants",
  },
  {
    icon: retailEstablishmentsIcon,
    alt: "Retail establishments icon",
    title: "Retail Establishments",
  },
];

const navLinks = [
  { label: "Home", href: "/", isLink: true },
  { label: "About Us", href: "/about", isLink: true },
  { label: "Products", href: "/products", isLink: true },
];

function Products() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`hero__nav hero__nav--white ${isMenuOpen ? "hero__nav--open" : ""}`}>
        <Link className="hero__brand" to="/">
          <img src={logo} alt="Ondo logo" />
        </Link>
        <button
          type="button"
          className="hero__menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="hero__nav-main">
          <nav className="hero__links">
            {navLinks.map((link) =>
              link.isLink ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={handleNavItemClick}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavItemClick}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary" onClick={handleNavItemClick}>
              Contact Us
            </Link>
            <button className="btn btn--ghost btn--ghost-dark" onClick={handleNavItemClick}>
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="products-page">
        <section className="products-page__intro">
          <div className="products-page__intro-inner">
            <h1 className="products-page__title">Products</h1>
            <p className="products-page__subtitle">
              Our product range is designed to save power, protect appliances,
              and optimise energy usage across households, commercial
              establishments, and industries.
            </p>
          </div>
        </section>

        <section className="products-page__card-section">
          <article className="products-page__card">
            <div className="products-page__card-image">
              <img
                src={homePowerSaverImage}
                alt="Power Saver & Protector for Home"
              />
            </div>
            <div className="products-page__card-content">
              <h2 className="products-page__card-heading">For Home</h2>
              <h3 className="products-page__card-title">
                Power Saver &amp; Protector
              </h3>
              <ol className="products-page__card-list">
                <li>Shields appliances from sudden voltage spikes</li>
                <li>Reduces power wastage in household wiring</li>
                <li>Improves power factor &amp; efficiency</li>
                <li>Protects against voltage fluctuations</li>
                <li>Enhances appliance lifespan</li>
                <li>Easy installation</li>
                <li>Low maintenance, long-lasting</li>
              </ol>
              <Link
                to="/products/home"
                className="btn btn--primary products-page__card-cta products-page__card-cta-link"
              >
                See More Details
              </Link>
            </div>
          </article>

          <article className="products-page__card products-page__card--reverse">
            <div className="products-page__card-image">
              <img
                src={industrialPowerSaverImage}
                alt="Power Saver for Commercial/Industrial"
              />
            </div>
            <div className="products-page__card-content">
              <h2 className="products-page__card-heading">
                For Commercial/Industrial
              </h2>
              <h3 className="products-page__card-title">Power Saver</h3>
              <ol className="products-page__card-list">
                <li>High-capacity energy optimization</li>
                <li>Improves power factor &amp; efficiency</li>
                <li>Provides stable power supply</li>
                <li>Reduces electricity bills significantly</li>
                <li>Provides stable power supply</li>
                <li>Suitable for offices, shops, factories</li>
              </ol>
              <Link
                to="/products/commercial"
                className="btn btn--primary products-page__card-cta products-page__card-cta-link"
              >
                See More Details
              </Link>
            </div>
          </article>
        </section>

        <section className="products-page__where">
          <div className="products-page__where-inner">
            <h2 className="products-page__where-title">Where you can use</h2>
            <p className="products-page__where-subtitle">
              Our product range is designed to save power, protect appliances,
              and optimise energy usage across households, commercial
              establishments, and industries.
            </p>
            <div className="products-page__where-grid">
              {productUseCases.map((useCase) => (
                <article
                  className="products-page__where-card"
                  key={useCase.title}
                >
                  <img src={useCase.icon} alt={useCase.alt} />
                  <h3>{useCase.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="products-page__how">
          <div className="products-page__how-inner">
            <h2 className="products-page__how-title">How it works</h2>
            <div className="products-page__how-layout">
              <div className="products-page__how-text">
                <p>
                  Our products utilise cutting-edge technology to regulate
                  voltage, reduce electrical surges, enhance power efficiency,
                  and improve power factor, safeguarding your electrical systems
                  from damage.
                </p>
                <p>
                  By continuously monitoring and adjusting the flow of
                  electricity, they ensure that only the necessary power is
                  used, minimising energy waste and optimising performance.
                </p>
                <p>
                  This results in efficient energy consumption, lower heat
                  generation, and a longer lifespan for connected appliances.
                </p>
              </div>
              <div className="products-page__how-illustrations">
                <img
                  src={illustrationImage}
                  alt="The outcome: Lower electricity bills and reduced carbon footprint – illustrations"
                  className="products-page__how-illustration-img"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

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
              <p className="footer__description">
                With over a decade of experience in electrical and electronic
                engineering, we have mastered the art of designing and
                manufacturing products that combine technical precision with
                real-world impact. Our flagship innovation, the Intelligent
                Energy Management System (IEMS) device, is engineered to
                optimize power usage, reduce wastage, and enhance the overall
                performance of electrical systems.
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
                <a href="#" className="footer__social-link" aria-label="GitHub">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
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
              <Link to="/products" className="footer__link">
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

export default Products;

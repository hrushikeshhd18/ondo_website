import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "../assets/logo.png";
import contactUsImage from "../assets/conatct_us.jpg";

function ContactUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formName, setFormName] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formAgree, setFormAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pseudo submit - no backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormName("");
    setFormAddress("");
    setFormEmail("");
    setFormMessage("");
    setFormAgree(false);
  };

  return (
    <>
      <header
        className={`hero__nav hero__nav--white ${
          isMenuOpen ? "hero__nav--open" : ""
        }`}
      >
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
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About us
            </Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
          </nav>
          <div className="hero__actions">
            <Link
              to="/contact"
              className="btn btn--primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
            <a
              href="http://ondosolutions.store"
              className="btn btn--ghost btn--ghost-dark"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noreferrer"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      <main className="contact-us">
        <section className="contact-us__hero">
          <div className="contact-us__wrapper">
            <div className="contact-us__tag">Contact us</div>
            <h1 className="contact-us__title">
              Let's Build a Smarter Energy Future Together
            </h1>
            <div className="contact-us__content">
              <div className="contact-us__image">
                <img src={contactUsImage} alt="Earth from space" />
              </div>
              <div className="contact-us__form-wrapper">
                <form className="contact-us__form" onSubmit={handleSubmit}>
                  <label className="contact-us__field">
                    <span className="contact-us__field-label">Name</span>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                    />
                  </label>
                  <label className="contact-us__field">
                    <span className="contact-us__field-label">
                      Office Address
                    </span>
                    <input
                      type="text"
                      placeholder="Enter address"
                      value={formAddress}
                      onChange={(e) => setFormAddress(e.target.value)}
                      required
                    />
                  </label>
                  <label className="contact-us__field">
                    <span className="contact-us__field-label">Email</span>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      required
                    />
                  </label>
                  <label className="contact-us__field">
                    <span className="contact-us__field-label">Message</span>
                    <textarea
                      placeholder="Enter your message"
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      rows={5}
                      required
                    />
                  </label>
                  <label className="contact-us__checkbox">
                    <input
                      type="checkbox"
                      checked={formAgree}
                      onChange={(e) => setFormAgree(e.target.checked)}
                      required
                    />
                    <span>
                      You agree to our friendly{" "}
                      <button
                        type="button"
                        className="contact-us__link"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle privacy policy link
                        }}
                      >
                        privacy policy.
                      </button>
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="btn btn--primary contact-us__submit"
                  >
                    Send Message
                  </button>
                </form>
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
                About us
              </Link>
              <Link to="/products" className="footer__link">
                Products and Solutions
              </Link>
              <Link to="/contact" className="footer__link">
                Contact us
              </Link>
              <Link to="/privacy" className="footer__link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer__link">
                Terms & Conditions
              </Link>
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

export default ContactUs;

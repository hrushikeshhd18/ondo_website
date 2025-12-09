import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "../assets/logo.png";

function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/", isLink: true },
    { label: "About us", href: "/about", isLink: true },
    { label: "Products", href: "/products", isLink: true },
  ];

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
            <Link
              to="/contact"
              className="btn btn--primary"
              onClick={handleNavItemClick}
            >
              Contact us
            </Link>
            <a
              href="http://ondosolutions.store"
              className="btn btn--ghost btn--ghost-dark"
              onClick={handleNavItemClick}
              target="_blank"
              rel="noreferrer"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      <main className="legal-page">
        <div className="legal-page__wrapper">
          <h1 className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__last-updated">Last Updated: January 2025</p>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">1. Introduction</h2>
            <p className="legal-page__paragraph">
              Ondo Solutions Private Limited ("we," "our," or "us") is committed
              to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website and use our services.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">2. Information We Collect</h2>
            <p className="legal-page__paragraph">
              We may collect information that you provide directly to us,
              including:
            </p>
            <ul className="legal-page__list">
              <li>
                Name and contact information (email address, phone number,
                mailing address)
              </li>
              <li>
                Payment information (processed securely through third-party
                payment processors)
              </li>
              <li>Product preferences and order history</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>
            <p className="legal-page__paragraph">
              We also automatically collect certain information when you visit
              our website, such as your IP address, browser type, device
              information, and usage patterns.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">
              3. How We Use Your Information
            </h2>
            <p className="legal-page__paragraph">
              We use the information we collect to:
            </p>
            <ul className="legal-page__list">
              <li>Process and fulfill your orders</li>
              <li>
                Communicate with you about your orders, products, and services
              </li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">
              4. Information Sharing and Disclosure
            </h2>
            <p className="legal-page__paragraph">
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul className="legal-page__list">
              <li>
                Service providers who assist us in operating our website and
                conducting our business
              </li>
              <li>Payment processors to process your transactions</li>
              <li>Shipping companies to deliver your orders</li>
              <li>
                Legal authorities when required by law or to protect our rights
              </li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">5. Data Security</h2>
            <p className="legal-page__paragraph">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">6. Your Rights</h2>
            <p className="legal-page__paragraph">You have the right to:</p>
            <ul className="legal-page__list">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="legal-page__paragraph">
              We use cookies and similar tracking technologies to enhance your
              browsing experience, analyze website traffic, and personalize
              content. You can control cookie preferences through your browser
              settings.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">8. Third-Party Links</h2>
            <p className="legal-page__paragraph">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">9. Children's Privacy</h2>
            <p className="legal-page__paragraph">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">
              10. Changes to This Privacy Policy
            </h2>
            <p className="legal-page__paragraph">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">11. Contact Us</h2>
            <p className="legal-page__paragraph">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="legal-page__paragraph">
              <strong>Ondo Solutions Private Limited</strong>
              <br />
              Email: info@ondosolutions.com
              <br />
              Phone: +91-XXXXXXXXXX
              <br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
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

export default PrivacyPolicy;

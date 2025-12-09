import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "../assets/logo.png";

function TermsConditions() {
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
          <h1 className="legal-page__title">Terms & Conditions</h1>
          <p className="legal-page__last-updated">Last Updated: January 2025</p>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">
              1. Installation after Confirmation of Payment
            </h2>
            <p className="legal-page__paragraph">
              Installation of our products will commence only after we have
              received confirmation of payment for your order. Once payment is
              confirmed, our technical team will contact you to schedule a
              convenient installation date. Please ensure that all payment
              obligations are fulfilled before expecting installation services.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">
              2. Warranty Against Manufacturing Defect Only
            </h2>
            <p className="legal-page__paragraph">
              Our warranty covers only manufacturing defects. The warranty does
              not cover:
            </p>
            <ul className="legal-page__list">
              <li>Damage caused by misuse, abuse, or negligence</li>
              <li>
                Damage resulting from accidents, natural disasters, or external
                factors
              </li>
              <li>Normal wear and tear</li>
              <li>Damage caused by unauthorized repairs or modifications</li>
              <li>
                Damage due to improper installation (unless installed by our
                authorized technicians)
              </li>
            </ul>
            <p className="legal-page__paragraph">
              If a manufacturing defect is identified, we will repair or replace
              the defective product at our discretion, subject to the terms of
              the warranty.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">
              3. Warranty Will Start from Date of Invoice
            </h2>
            <p className="legal-page__paragraph">
              The warranty period begins from the date of invoice issuance, not
              from the date of installation or delivery. Please retain your
              invoice as proof of purchase and warranty coverage. The warranty
              period and terms are as specified in the product documentation
              provided with your purchase.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">
              4. Order Once Placed Can't Be Cancelled
            </h2>
            <p className="legal-page__paragraph">
              Once an order has been placed and confirmed, it cannot be
              cancelled. This policy applies to all orders placed through our
              website, phone, or any other channel. We recommend that you
              carefully review your order details, product specifications, and
              requirements before completing your purchase.
            </p>
            <p className="legal-page__paragraph">
              In exceptional circumstances, such as product unavailability or
              technical issues on our part, we reserve the right to cancel an
              order and provide a full refund. However, customer-initiated
              cancellations are not permitted after order confirmation.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">
              5. All Disputes Subject to Kolhapur Jurisdiction Only
            </h2>
            <p className="legal-page__paragraph">
              Any disputes, claims, or legal proceedings arising from or related
              to these Terms & Conditions, our products, services, or your
              relationship with Ondo Solutions Private Limited shall be subject
              to the exclusive jurisdiction of the courts in Kolhapur,
              Maharashtra, India.
            </p>
            <p className="legal-page__paragraph">
              By using our services and purchasing our products, you agree to
              submit to the jurisdiction of the courts in Kolhapur and waive any
              objection to venue in such courts.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">6. General Terms</h2>
            <p className="legal-page__paragraph">
              By placing an order with Ondo Solutions Private Limited, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms & Conditions. We reserve the right to modify these
              terms at any time, and such modifications will be effective
              immediately upon posting on our website.
            </p>
            <p className="legal-page__paragraph">
              If any provision of these Terms & Conditions is found to be
              invalid or unenforceable, the remaining provisions shall continue
              to be valid and enforceable to the fullest extent permitted by
              law.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__heading">7. Contact Information</h2>
            <p className="legal-page__paragraph">
              For any questions or concerns regarding these Terms & Conditions,
              please contact us at:
            </p>
            <p className="legal-page__paragraph">
              <strong>Ondo Solutions Private Limited</strong>
              <br />
              Email: info@ondosolutions.com
              <br />
              Phone: +91-XXXXXXXXXX
              <br />
              Address: [Your Company Address]
              <br />
              Jurisdiction: Kolhapur, Maharashtra, India
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

export default TermsConditions;

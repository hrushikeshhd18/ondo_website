import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import heroBackground from "../assets/hero_background.jpg";
import logo from "../assets/logo.png";
import energyIcon from "../assets/energy_efficient_icon.png";
import durabilityIcon from "../assets/long_durablity_icon.png";
import ecoIcon from "../assets/eco_friendly_icon.png";
import automaticPowerIcon from "../assets/automatic_power_optimization.png";
import powerFactorIcon from "../assets/power_factor_improvement.png";
import voltageStabilizationIcon from "../assets/voltage_stabilization_regulation.png";
import realTimeMonitoringIcon from "../assets/real_time_energy_monitoring.png";
import intelligentControlIcon from "../assets/intelligent_control_system.png";
import surgeProtectionIcon from "../assets/surge_overload_protection.png";
import energySavingsIcon from "../assets/energy_cost_savings.png";
import easyInstallationIcon from "../assets/easy_installation.png";
import durableDesignIcon from "../assets/durable_reliable_design.png";
import ecoFriendlyOperationIcon from "../assets/ecofriendly_operation.png";
import homePowerSaverImage from "../assets/Home_power_saver_image.png";
import industrialPowerSaverImage from "../assets/industrial_power_saver_image.png";
import residentialHomesIcon from "../assets/residential_homes.png";
import commercialSpacesIcon from "../assets/commercial_spaces.png";
import industrialPlantsIcon from "../assets/small_scale_industrial_plants.png";
import retailEstablishmentsIcon from "../assets/retail_establishments_icon.png";
import costSavingsIcon from "../assets/cost_savings.png";
import safetyFirstIcon from "../assets/safety_first_card_icon.png";
import userFriendlyIcon from "../assets/user_friendly_card_icon.png";
import customerSupportIcon from "../assets/customer_supoort_icon.png";
import trustIcon from "../assets/trust_card_icon.png";
import certificationIcon from "../assets/certification_card_icon.png";

const navLinks = [
  { label: "Home", href: "/", isLink: true },
  { label: "About us", href: "/about", isLink: true },
  { label: "Products", href: "/products", isLink: true },
];

const featureCards = [
  {
    icon: energyIcon,
    alt: "Solar powered building icon",
    titleLines: ["Energy", "Efficiency"],
    description:
      "Cut down on electricity usage with our smart power-saving technology that optimizes your appliances' energy consumption.",
  },
  {
    icon: durabilityIcon,
    alt: "Shield check icon",
    titleLines: ["Long", "Durability"],
    description:
      "Built with high-quality components for lasting protection and energy savings, reducing the need for frequent replacements.",
  },
  {
    icon: ecoIcon,
    alt: "Hands caring for the earth icon",
    titleLines: ["Eco", "Friendly"],
    description:
      "Designed with sustainability in mind, our product helps reduce overall energy consumption, contributing to a greener planet.",
  },
];

const imesFeatures = [
  {
    icon: automaticPowerIcon,
    alt: "Automatic power optimization icon",
    titleLines: ["Automatic Power", "Optimization"],
    description:
      "Continuously monitors and adjusts electrical parameters to minimize energy wastage. Ensures efficient use of voltage and current, improving overall power utilization.",
  },
  {
    icon: powerFactorIcon,
    alt: "Power factor improvement icon",
    titleLines: ["Power Factor", "Improvement"],
    description:
      "Actively enhances the power factor of electrical systems. Reduces reactive power and penalties from utilities, resulting in lower electricity bills.",
  },
  {
    icon: voltageStabilizationIcon,
    alt: "Voltage stabilization icon",
    titleLines: ["Voltage Stabilization", "& Regulation"],
    description:
      "Maintains steady voltage supply to protect equipment from voltage fluctuations. Increases operational life of electrical appliances and machinery.",
  },
  {
    icon: realTimeMonitoringIcon,
    alt: "Real-time energy monitoring icon",
    titleLines: ["Real-Time Energy", "Monitoring"],
    description:
      "Displays real-time voltage, current, power factor, and consumption data. Enables better control and analysis of energy usage patterns.",
  },
  {
    icon: intelligentControlIcon,
    alt: "Intelligent control system icon",
    titleLines: ["Intelligent Control", "System"],
    description:
      "Equipped with a microprocessor-based or AI-driven control module. Automatically adapts to varying load conditions for consistent energy efficiency.",
  },
  {
    icon: surgeProtectionIcon,
    alt: "Surge and overload protection icon",
    titleLines: ["Surge & Overload", "Protection"],
    description:
      "Safeguards all connected equipment from electrical surges, spikes, and overloads. Prevents damage and downtime.",
  },
  {
    icon: energySavingsIcon,
    alt: "Energy and cost savings icon",
    titleLines: ["Energy & Cost", "Savings"],
    description:
      "Reduces electricity consumption by optimizing energy flow. Typically saves up to 20% of total power costs depending on load conditions.",
  },
  {
    icon: easyInstallationIcon,
    alt: "Easy installation icon",
    titleLines: ["Easy", "Installation"],
    description:
      "Easy to install and integrate with existing electrical setups. Minimal maintenance required.",
  },
  {
    icon: durableDesignIcon,
    alt: "Durable and reliable design icon",
    titleLines: ["Durable & Reliable", "Design"],
    description:
      "Built with high-quality electrical and electronic components. Designed for continuous industrial, commercial, or residential operation.",
  },
  {
    icon: ecoFriendlyOperationIcon,
    alt: "Eco-friendly operation icon",
    titleLines: ["Eco-Friendly", "Operation"],
    description:
      "Reduces carbon footprint by minimizing unnecessary energy use. Supports sustainable and responsible energy consumption.",
  },
];

const productCards = [
  {
    image: homePowerSaverImage,
    alt: "Home power saver device",
    category: "For Home",
    title: "Power Saver & Protector",
    features: [
      "Shields appliances from sudden voltage spikes",
      "Reduces power wastage in household wiring",
      "Improves power factor & efficiency",
      "Protects against voltage fluctuations",
      "Enhances appliance lifespan",
      "Easy installation",
      "Low maintenance, long-lasting",
    ],
  },
  {
    image: industrialPowerSaverImage,
    alt: "Industrial power saver device",
    category: "For Commercial/Industrial",
    title: "Power Saver",
    features: [
      "High-capacity energy optimization",
      "Improves power factor & efficiency",
      "Provides stable power supply",
      "Reduces electricity bills significantly",
      "Suitable for offices, shops, factories",
    ],
  },
];

const useCases = [
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

const benefits = [
  {
    icon: costSavingsIcon,
    alt: "Cost savings icon",
    title: "Cost Savings",
    description:
      "Enjoy reduced energy bills thanks to the smart energy-saving features of our product.",
  },
  {
    icon: safetyFirstIcon,
    alt: "Safety first icon",
    title: "Safety First",
    description:
      "Protect your expensive electrical appliances from damaging surges and spikes.",
  },
  {
    icon: userFriendlyIcon,
    alt: "User friendly icon",
    title: "User Friendly",
    description: "Simple, quick installation with minimal maintenance.",
  },
  {
    icon: customerSupportIcon,
    alt: "Customer support icon",
    title: "Customer Support",
    description:
      "Our dedicated customer service team is here to assist you with any questions or troubleshooting.",
  },
  {
    icon: trustIcon,
    alt: "Trust icon",
    title: "Trust",
    description: "Feedback from clients. It is mention in Case Studies",
  },
  {
    icon: certificationIcon,
    alt: "Certification icon",
    title: "Certification",
    description: "Product has been certified. ISI, ISO & C E",
  },
];

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  // Simple scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll("[data-scroll]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="hero__overlay" />
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
                className="btn btn--ghost"
                onClick={handleNavItemClick}
                target="_blank"
                rel="noreferrer"
              >
                Login
              </a>
            </div>
          </div>
        </header>

        <main className="hero__content">
          <div className="hero__text">
            <span className="hero__tagline">Save Energy, Smarter Control</span>
            <h1>Welcome to the future of energy conservation!</h1>
            <p>
              Reduce electricity bills, protect your appliances, and contribute
              to a greener future with our advanced power saver solutions.
            </p>
            <Link to="/contact" className="btn btn--primary hero__cta">
              Contact us
            </Link>
          </div>
        </main>
      </section>

      <section className="about" id="about">
        <div className="about__wrapper">
          <div className="about__intro" data-scroll>
            <h2>Who are we?</h2>
            <p>
              We are a technology-driven company creating innovative
              energy-saving solutions for homes, offices, and industries. Our
              Intelligent Energy Management Systems (IEMS) reduce electricity
              costs, protect appliances, and promote sustainable living through
              reliable and efficient engineering.
            </p>
          </div>

          <div className="about__cards">
            {featureCards.map((card) => (
              <article
                className="feature-card"
                key={card.titleLines.join("-")}
                data-scroll
              >
                <img
                  className="feature-card__icon"
                  src={card.icon}
                  alt={card.alt}
                />
                <h3>
                  {card.titleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mission"
        aria-labelledby="mission-heading"
        data-scroll
      >
        <div className="mission__tag">Our Mission</div>
        <p className="mission__statement" id="mission-heading">
          We <span>innovate</span> to empower every home and industry with
          smarter, cleaner, and more <span>efficient energy.</span>
        </p>
      </section>

      <section className="features" id="features">
        <div className="features__wrapper">
          <div className="features__tag" data-scroll>
            Features
          </div>
          <h2 className="features__title" data-scroll>
            Key Features of IEMS Device
          </h2>
          <div className="features__grid">
            {imesFeatures.map((feature, index) => (
              <article className="imes-feature-card" key={index} data-scroll>
                <img
                  className="imes-feature-card__icon"
                  src={feature.icon}
                  alt={feature.alt}
                />
                <h3 className="imes-feature-card__title">
                  {feature.titleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p className="imes-feature-card__description">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="products__wrapper">
          <div className="products__tag" data-scroll>
            Products
          </div>
          <h2 className="products__title" data-scroll>
            Our Offerings
          </h2>
          <p className="products__description" data-scroll>
            Our product range is designed to save power, protect appliances, and
            optimize energy usage across households, commercial establishments,
            and industries.
          </p>
          {productCards.map((product, index) => (
            <article className="product-card" key={index} data-scroll>
              <div className="product-card__image">
                <img src={product.image} alt={product.alt} />
              </div>
              <div className="product-card__content">
                <p className="product-card__category">{product.category}</p>
                <h3 className="product-card__title">{product.title}</h3>
                <ol className="product-card__features">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ol>
                <Link
                  to="/contact"
                  className="btn btn--primary product-card__cta"
                >
                  Contact us
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="use-cases" id="use-cases">
        <div className="use-cases__wrapper">
          <h2 className="use-cases__title" data-scroll>
            Where you can use
          </h2>
          <p className="use-cases__description" data-scroll>
            Our product range is designed to save power, protect appliances, and
            optimize energy usage across households, commercial establishments,
            and industries.
          </p>
          <div className="use-cases__grid">
            {useCases.map((useCase, index) => (
              <article className="use-case-card" key={index} data-scroll>
                <img
                  className="use-case-card__icon"
                  src={useCase.icon}
                  alt={useCase.alt}
                />
                <h3 className="use-case-card__title">{useCase.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits" id="benefits">
        <div className="benefits__wrapper">
          <div className="benefits__tag" data-scroll>
            Benefits
          </div>
          <h2 className="benefits__title" data-scroll>
            Why Choose Us
          </h2>
          <div className="benefits__grid">
            {benefits.map((benefit, index) => (
              <article className="benefit-card" key={index} data-scroll>
                <img
                  className="benefit-card__icon"
                  src={benefit.icon}
                  alt={benefit.alt}
                />
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="testimonials__wrapper">
          <div className="testimonials__tag" data-scroll>
            Review
          </div>
          <h2 className="testimonials__title" data-scroll>
            What do people say about us
          </h2>
          <p className="testimonials__description" data-scroll>
            Over 10,000 satisfied customers across households, corporate
            offices, and manufacturing units have reduced their electricity
            costs with our products
          </p>
          <div className="testimonials__grid">
            <article className="testimonial-card" data-scroll>
              <div className="testimonial-card__header">
                <div className="testimonial-card__avatar">
                  <div className="testimonial-card__avatar-placeholder">RK</div>
                </div>
                <div className="testimonial-card__info">
                  <h3 className="testimonial-card__name">Rajesh Kumar</h3>
                  <p className="testimonial-card__title">Home Owner</p>
                </div>
              </div>
              <div className="testimonial-card__rating">
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
              </div>
              <p className="testimonial-card__text">
                "The power saver has reduced our electricity bills by almost 30%
                in just three months. Installation was quick and easy, and we
                noticed the difference immediately. Excellent investment for any
                household!"
              </p>
            </article>
            <article className="testimonial-card" data-scroll>
              <div className="testimonial-card__header">
                <div className="testimonial-card__avatar">
                  <div className="testimonial-card__avatar-placeholder">PS</div>
                </div>
                <div className="testimonial-card__info">
                  <h3 className="testimonial-card__name">Priya Sharma</h3>
                  <p className="testimonial-card__title">Business Owner</p>
                </div>
              </div>
              <div className="testimonial-card__rating">
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
                <span className="star">★</span>
              </div>
              <p className="testimonial-card__text">
                "Our appliances are now better protected from voltage
                fluctuations, and the energy savings have been substantial. The
                device is very reliable and requires minimal maintenance. Highly
                satisfied with the purchase!"
              </p>
            </article>
            <article className="testimonial-card" data-scroll>
              <div className="testimonial-card__header">
                <div className="testimonial-card__avatar">
                  <div className="testimonial-card__avatar-placeholder">AP</div>
                </div>
                <div className="testimonial-card__info">
                  <h3 className="testimonial-card__name">Amit Patel</h3>
                  <p className="testimonial-card__title">Factory Manager</p>
                </div>
              </div>
              <div className="testimonial-card__rating">
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
                <span className="star star--filled">★</span>
              </div>
              <p className="testimonial-card__text">
                "We installed this in our factory and saw immediate improvements
                in power factor and energy efficiency. The ROI has been
                excellent, and our electricity costs have dropped significantly.
                Great investment for any industrial setup!"
              </p>
            </article>
          </div>
        </div>
      </section>

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

export default Home;

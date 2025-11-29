import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import heroBackground from "../assets/hero_background.jpg";
import heroProduct from "../assets/ondo_hero_product_image.png";
import logo from "../assets/logo.png";
import energyIcon from "../assets/energy_efficient_icon.png";
import durabilityIcon from "../assets/long_durablity_icon.png";
import ecoIcon from "../assets/eco_friendly_icon.png";
import automaticPowerIcon from "../assets/automatic_power_optimization.png";
import powerFactorIcon from "../assets/power_factor_improvement.png";
import voltageStabilizationIcon from "../assets/voltage_stabilization_regulation.png";
import loadBalancingIcon from "../assets/load_balancing_energy_distribution.png";
import harmonicFiltrationIcon from "../assets/harmonic_filtration_reduction.png";
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
  { label: "About Us", href: "/about", isLink: true },
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
    icon: loadBalancingIcon,
    alt: "Load balancing icon",
    titleLines: ["Load Balancing &", "Energy Distribution"],
    description:
      "Manages uneven load distribution across multiple phases. Ensures balanced operation and reduces system losses.",
  },
  {
    icon: harmonicFiltrationIcon,
    alt: "Harmonic filtration icon",
    titleLines: ["Harmonic Filtration", "& Reduction"],
    description:
      "Filters out unwanted harmonics caused by electronic loads. Improves power quality and system performance.",
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

  // Scroll animation hook - prevent blinking
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Unobserve after animation to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((el) => {
        // Ensure element is initially hidden
        (el as HTMLElement).style.visibility = 'hidden';
        observer.observe(el);
      });

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="hero__overlay" />
        <header className={`hero__nav ${isMenuOpen ? "hero__nav--open" : ""}`}>
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
              <button className="btn btn--ghost" onClick={handleNavItemClick}>
                Login
              </button>
            </div>
          </div>
        </header>

        <main className="hero__content">
          <div className="hero__text animate-fade-in-up">
            <span className="hero__tagline animate-fade-in">Save Energy, Smarter Control</span>
            <h1 className="animate-fade-in-up-delay">Welcome to the future of energy conservation!</h1>
            <p className="animate-fade-in-up-delay-2">
              Reduce electricity bills, protect your appliances, and contribute
              to a greener future with our advanced power saver solutions.
            </p>
            <Link to="/contact" className="btn btn--primary hero__cta animate-fade-in-up-delay-3">Contact Us</Link>
          </div>

          <div className="hero__visual animate-fade-in-right">
            <div className="hero__product-card">
              <img src={heroProduct} alt="Ondo smart energy controller" />
            </div>
          </div>
        </main>
      </section>

      <section className="about" id="about">
        <div className="about__wrapper">
          <div className="about__intro scroll-animate">
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
            {featureCards.map((card, index) => (
              <article className="feature-card scroll-animate" key={card.titleLines.join("-")} style={{ animationDelay: `${index * 0.1}s` }}>
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

      <section className="mission scroll-animate" aria-labelledby="mission-heading">
        <div className="mission__tag">Our Mission</div>
        <p className="mission__statement" id="mission-heading">
          We <span>innovate</span> to empower every home and industry with
          smarter, cleaner, and more <span>efficient energy.</span>
        </p>
      </section>

      <section className="features" id="features">
        <div className="features__wrapper">
          <div className="features__tag scroll-animate">Features</div>
          <h2 className="features__title scroll-animate">Key Features of IMES Device</h2>
          <div className="features__grid">
            {imesFeatures.map((feature, index) => (
              <article className="imes-feature-card scroll-animate" key={index} style={{ animationDelay: `${index * 0.05}s` }}>
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
          <div className="products__tag scroll-animate">Products</div>
          <h2 className="products__title scroll-animate">Our Offerings</h2>
          <p className="products__description scroll-animate">
            Our product range is designed to save power, protect appliances, and
            optimize energy usage across households, commercial establishments,
            and industries.
          </p>
          {productCards.map((product, index) => (
            <article className="product-card scroll-animate" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
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
                <Link to="/contact" className="btn btn--primary product-card__cta">
                  Contact Us
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="use-cases" id="use-cases">
        <div className="use-cases__wrapper">
          <h2 className="use-cases__title">Where you can use</h2>
          <p className="use-cases__description">
            Our product range is designed to save power, protect appliances, and
            optimize energy usage across households, commercial establishments,
            and industries.
          </p>
          <div className="use-cases__grid">
            {useCases.map((useCase, index) => (
              <article className="use-case-card" key={index}>
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
          <div className="benefits__tag">Benefits</div>
          <h2 className="benefits__title">Why Choose Us</h2>
          <div className="benefits__grid">
            {benefits.map((benefit, index) => (
              <article className="benefit-card" key={index}>
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
          <div className="testimonials__tag">Review</div>
          <h2 className="testimonials__title">What do people say about us</h2>
          <p className="testimonials__description">
            Over 10,000 satisfied customers across households, corporate
            offices, and manufacturing units have reduced their electricity
            costs with our products
          </p>
          <div className="testimonials__grid">
            <article className="testimonial-card">
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
            <article className="testimonial-card">
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
            <article className="testimonial-card">
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
              <a href="#products" className="footer__link">
                Products and Solutions
              </a>
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

export default Home;

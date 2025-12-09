import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";
import logo from "../assets/logo.png";
import homePowerSaverImage from "../assets/Home_power_saver_image.png";
import industrialPowerSaverImage from "../assets/industrial_power_saver_image.png";
import illustrationImage from "../assets/illustration_one_and_two.png";
import ondoHeroProduct from "../assets/ondo_hero_product_image.png";
import residentialHomesIcon from "../assets/residential_homes.png";
import commercialSpacesIcon from "../assets/commercial_spaces.png";
import industrialPlantsIcon from "../assets/small_scale_industrial_plants.png";
import retailEstablishmentsIcon from "../assets/retail_establishments_icon.png";
import energyProtectionIcon from "../assets/energy_protection_icon.png";
import ecoFriendlyIcon from "../assets/eco_friendly_icon.png";
import powerFactorIcon from "../assets/power_factor_icon.png";
import siteVisitIcon from "../assets/site_visit_icon.png";
import placeOrderIcon from "../assets/place_holder_icon.png";
import installationIcon from "../assets/installation_icon.png";

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

const productConfigs = {
  home: {
    id: "home",
    title: "Power Saver & Protector for Home",
    price: "₹ 12,000.00",
    image: homePowerSaverImage,
    images: [
      homePowerSaverImage,
      ondoHeroProduct,
      illustrationImage,
      homePowerSaverImage,
    ],
    quantityLabel: "Quantity",
    primaryCta: "Buy Now",
    secondaryCta: "Contact Sales Person",
    description:
      "This intelligent energy-optimising device is designed to keep your home's appliances safe and your electricity usage efficient. It shields your equipment from sudden voltage spikes and ongoing fluctuations, ensuring smooth, reliable performance every day. By reducing power wastage hidden in household wiring and improving overall power factor, it helps your home run more efficiently — translating into lower bills and a longer lifespan for your appliances. Built for convenience, it offers quick installation, minimal maintenance, and long-lasting durability, making it a practical upgrade for any modern home.",
    description2:
      "This intelligent energy-optimising device is designed to keep your home's appliances safe and your electricity usage efficient. It shields your equipment from sudden voltage spikes and ongoing fluctuations, ensuring smooth, reliable performance every day. By reducing power wastage hidden in household wiring and improving overall power factor, it helps your home run more efficiently — translating into lower bills and a longer lifespan for your appliances. Built for convenience, it offers quick installation, minimal maintenance, and long-lasting durability, making it a practical upgrade for any modern home.",
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
  commercial: {
    id: "commercial",
    title: "Power Saver for Commercial/Industrial",
    price: "₹ 25,000.00",
    image: industrialPowerSaverImage,
    images: [
      industrialPowerSaverImage,
      ondoHeroProduct,
      illustrationImage,
      industrialPowerSaverImage,
    ],
    quantityLabel: "Variants",
    primaryCta: "Request Technical Visit",
    secondaryCta: "Contact Sales Person",
    description:
      "Our technical team will visit your site, inspect the electrical setup, and recommend the right power saver variant for your needs.",
    description2:
      "This intelligent energy-optimizing device is designed to keep your home's appliances safe and your electricity usage efficient. It shields your equipment from sudden voltage spikes and ongoing fluctuations, ensuring smooth, reliable performance every day. By reducing power wastage hidden in household wiring and improving overall power factor, it helps your home run more efficiently—translating into lower bills and a longer lifespan for your appliances. Built for convenience, it offers quick installation, minimal maintenance, and long-lasting durability, making it a practical upgrade for any modern home.",
    features: [
      "High-capacity energy optimization",
      "Improves power factor & efficiency",
      "Provides stable power supply",
      "Reduces electricity bills significantly",
      "Provides stable power supply",
      "Suitable for offices, shops, factories",
    ],
  },
} as const;

type ProductKey = keyof typeof productConfigs;

function ProductDetail() {
  const params = useParams();
  const slug = (params.id || "home") as ProductKey;
  const product = productConfigs[slug] ?? productConfigs.home;

  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState("Mini");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("+91 9878987898");
  const [formAddress, setFormAddress] = useState("");
  const [formStreet, setFormStreet] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formPincode, setFormPincode] = useState("");
  const [formState, setFormState] = useState("");
  const [formAgree, setFormAgree] = useState(false);

  const handleQtyChange = (delta: number) => {
    setQuantity((prev) => {
      const next = prev + delta;
      if (next < 1) return 1;
      if (next > 99) return 99;
      return next;
    });
  };

  // Commented out - buttons are hidden
  // const handleOpenModal = () => {
  //   if (slug === "commercial") {
  //     setIsModalOpen(true);
  //   }
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitModal = (e: React.FormEvent) => {
    e.preventDefault();
    // pseudo submit – no backend, just close
    setIsModalOpen(false);
  };

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

      <main className="product-detail">
        <section className="product-detail__hero">
          <div className="product-detail__wrapper">
            <div className="product-detail__main">
              <div className="product-detail__image-panel">
                <div className="product-detail__image-card">
                  <img
                    src={product.images[selectedImageIndex]}
                    alt={`${product.title} - Image ${selectedImageIndex + 1}`}
                  />
                </div>
                <div className="product-detail__thumbnail-row">
                  <button
                    type="button"
                    className="product-detail__thumbnail-nav product-detail__thumbnail-nav--prev"
                    aria-label="Previous thumbnail"
                    onClick={() => {
                      setSelectedImageIndex((prev) =>
                        prev > 0 ? prev - 1 : product.images.length - 1
                      );
                    }}
                  >
                    ←
                  </button>
                  {product.images.map((img, index) => (
                    <div
                      key={index}
                      className={`product-detail__thumbnail ${
                        selectedImageIndex === index
                          ? "product-detail__thumbnail--active"
                          : ""
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img
                        src={img}
                        alt={`${product.title} thumbnail ${index + 1}`}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="product-detail__thumbnail-nav product-detail__thumbnail-nav--next"
                    aria-label="Next thumbnail"
                    onClick={() => {
                      setSelectedImageIndex((prev) =>
                        prev < product.images.length - 1 ? prev + 1 : 0
                      );
                    }}
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="product-detail__content">
                <h1 className="product-detail__title">{product.title}</h1>
                <p className="product-detail__price">{product.price}</p>

                <div className="product-detail__field-group">
                  <span className="product-detail__field-label">
                    {product.quantityLabel}
                  </span>
                  {slug === "home" ? (
                    <div className="product-detail__quantity">
                      <button
                        type="button"
                        className="product-detail__qty-btn"
                        onClick={() => handleQtyChange(-1)}
                      >
                        −
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        className="product-detail__qty-btn"
                        onClick={() => handleQtyChange(1)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <div className="product-detail__variants">
                      <button
                        type="button"
                        className={`product-detail__variant ${
                          activeVariant === "Mini"
                            ? "product-detail__variant--active"
                            : ""
                        }`}
                        onClick={() => setActiveVariant("Mini")}
                      >
                        Mini
                      </button>
                      <button
                        type="button"
                        className={`product-detail__variant ${
                          activeVariant === "Normal"
                            ? "product-detail__variant--active"
                            : ""
                        }`}
                        onClick={() => setActiveVariant("Normal")}
                      >
                        Normal
                      </button>
                      <button
                        type="button"
                        className={`product-detail__variant ${
                          activeVariant === "Pro"
                            ? "product-detail__variant--active"
                            : ""
                        }`}
                        onClick={() => setActiveVariant("Pro")}
                      >
                        Pro
                      </button>
                      <button
                        type="button"
                        className={`product-detail__variant ${
                          activeVariant === "Pro Max"
                            ? "product-detail__variant--active"
                            : ""
                        }`}
                        onClick={() => setActiveVariant("Pro Max")}
                      >
                        Pro Max
                      </button>
                    </div>
                  )}
                </div>

                {slug === "commercial" && (
                  <div className="product-detail__note-card">
                    <h3 className="product-detail__note-heading">Note</h3>
                    <p>{product.description}</p>
                  </div>
                )}

                {/* CTA buttons commented out for now */}
                {/* <div className="product-detail__cta-row">
                  <button
                    type="button"
                    className="btn btn--primary product-detail__cta-primary"
                    onClick={handleOpenModal}
                  >
                    {product.primaryCta}
                  </button>
                  <button className="btn btn--ghost product-detail__cta-secondary">
                    {product.secondaryCta}
                  </button>
                </div> */}

                <div className="product-detail__icons-row">
                  <div className="product-detail__icon-item">
                    <img
                      src={energyProtectionIcon}
                      alt="Energy Protection"
                      className="product-detail__icon-img"
                    />
                    <span>Energy Protection</span>
                  </div>
                  <div className="product-detail__icon-item">
                    <img
                      src={ecoFriendlyIcon}
                      alt="Eco Friendly"
                      className="product-detail__icon-img"
                    />
                    <span>Eco Friendly</span>
                  </div>
                  <div className="product-detail__icon-item">
                    <img
                      src={powerFactorIcon}
                      alt="Power Factor"
                      className="product-detail__icon-img"
                    />
                    <span>Power Factor</span>
                  </div>
                </div>

                {slug === "commercial" && (
                  <div className="product-detail__installation">
                    <h3 className="product-detail__subheading">
                      Installation Procedure
                    </h3>
                    <div className="product-detail__installation-steps">
                      <div className="product-detail__installation-step">
                        <img
                          src={siteVisitIcon}
                          alt="Site Visit"
                          className="product-detail__installation-icon"
                        />
                        <div className="product-detail__installation-content">
                          <h4>Site Visit</h4>
                          <p>
                            Once we receive your interest, our technical team
                            will visit the site and assess the required Power
                            Save variant.
                          </p>
                        </div>
                      </div>
                      <div className="product-detail__installation-step">
                        <img
                          src={placeOrderIcon}
                          alt="Place Order"
                          className="product-detail__installation-icon"
                        />
                        <div className="product-detail__installation-content">
                          <h4>Place Order</h4>
                          <p>
                            After placing the order for your preferred variant,
                            we will begin with processing your order dispatch.
                          </p>
                        </div>
                      </div>
                      <div className="product-detail__installation-step">
                        <img
                          src={installationIcon}
                          alt="Installation"
                          className="product-detail__installation-icon"
                        />
                        <div className="product-detail__installation-content">
                          <h4>Installation</h4>
                          <p>
                            Once the device reaches your doorstep, our
                            installation team begins with installing the device
                            free of cost.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="product-detail__body-main">
                  <h2 className="product-detail__section-title">Description</h2>
                  <p className="product-detail__paragraph">
                    {product.description2}
                  </p>

                  {slug === "home" && (
                    <>
                      <h3 className="product-detail__subheading">Features</h3>
                      <ol className="product-detail__features">
                        {product.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ol>

                      <h3 className="product-detail__subheading">Other</h3>
                      <ul className="product-detail__features">
                        <li>Free Installation</li>
                        <li>1 Year Warranty</li>
                        <li>24×7 Product Assistance</li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products-page__where product-detail__where">
          <div className="products-page__where-inner">
            <h2 className="products-page__where-title">Where you can use</h2>
            <p className="products-page__where-subtitle">
              Our product range is designed to save power, protect appliances,
              and optimise energy usage across households, commercial
              establishments, and industries.
            </p>
            <div className="products-page__where-grid">
              {useCases.map((useCase) => (
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

        {isModalOpen && (
          <div className="product-detail-modal" role="dialog" aria-modal="true">
            <div
              className="product-detail-modal__backdrop"
              onClick={handleCloseModal}
            />
            <div className="product-detail-modal__dialog">
              <h2 className="product-detail-modal__title">
                Enter your Details
              </h2>
              <p className="product-detail-modal__subtitle">
                Fill in your details so that we can reach out to you.
              </p>
              <form
                className="product-detail-modal__form"
                onSubmit={handleSubmitModal}
              >
                <label className="product-detail-modal__field">
                  <span className="product-detail-modal__field-label">
                    Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />
                </label>
                <label className="product-detail-modal__field">
                  <span className="product-detail-modal__field-label">
                    Mobile Number
                  </span>
                  <input
                    type="tel"
                    placeholder="+91 9878987898"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                  />
                </label>
                <div className="product-detail-modal__field-group">
                  <span className="product-detail-modal__field-label">
                    Visit Address
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Home Number/Name"
                    value={formAddress}
                    onChange={(e) => setFormAddress(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Enter Street/Locality"
                    value={formStreet}
                    onChange={(e) => setFormStreet(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Enter City"
                    value={formCity}
                    onChange={(e) => setFormCity(e.target.value)}
                  />
                  <div className="product-detail-modal__field-row">
                    <input
                      type="text"
                      placeholder="Enter Pincode"
                      value={formPincode}
                      onChange={(e) => setFormPincode(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={formState}
                      onChange={(e) => setFormState(e.target.value)}
                    />
                  </div>
                </div>
                <label className="product-detail-modal__checkbox">
                  <input
                    type="checkbox"
                    checked={formAgree}
                    onChange={(e) => setFormAgree(e.target.checked)}
                  />
                  <span>
                    You agree to our friendly{" "}
                    <button
                      type="button"
                      className="product-detail-modal__link"
                    >
                      privacy policy.
                    </button>
                  </span>
                </label>
                <div className="product-detail-modal__actions">
                  <button
                    type="button"
                    className="product-detail-modal__btn product-detail-modal__btn--secondary"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="product-detail-modal__btn product-detail-modal__btn--primary"
                    disabled={!formAgree}
                  >
                    Request Technical Visit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
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

export default ProductDetail;

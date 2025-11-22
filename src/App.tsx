import './App.css'
import heroBackground from '../assets/hero_background.jpg'
import heroProduct from '../assets/ondo_hero_product_image.png'
import logo from '../assets/logo.png'
import energyIcon from '../assets/energy_efficient_icon.png'
import durabilityIcon from '../assets/long_durablity_icon.png'
import ecoIcon from '../assets/eco_friendly_icon.png'
import automaticPowerIcon from '../assets/automatic_power_optimization.png'
import powerFactorIcon from '../assets/power_factor_improvement.png'
import voltageStabilizationIcon from '../assets/voltage_stabilization_regulation.png'
import loadBalancingIcon from '../assets/load_balancing_energy_distribution.png'
import harmonicFiltrationIcon from '../assets/harmonic_filtration_reduction.png'
import realTimeMonitoringIcon from '../assets/real_time_energy_monitoring.png'
import intelligentControlIcon from '../assets/intelligent_control_system.png'
import surgeProtectionIcon from '../assets/surge_overload_protection.png'
import energySavingsIcon from '../assets/energy_cost_savings.png'
import easyInstallationIcon from '../assets/easy_installation.png'
import durableDesignIcon from '../assets/durable_reliable_design.png'
import ecoFriendlyOperationIcon from '../assets/ecofriendly_operation.png'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
]

const featureCards = [
  {
    icon: energyIcon,
    alt: 'Solar powered building icon',
    titleLines: ['Energy', 'Efficiency'],
    description:
      'Cut down on electricity usage with our smart power-saving technology that optimizes your appliances\' energy consumption.',
  },
  {
    icon: durabilityIcon,
    alt: 'Shield check icon',
    titleLines: ['Long', 'Durability'],
    description:
      'Built with high-quality components for lasting protection and energy savings, reducing the need for frequent replacements.',
  },
  {
    icon: ecoIcon,
    alt: 'Hands caring for the earth icon',
    titleLines: ['Eco', 'Friendly'],
    description:
      'Designed with sustainability in mind, our product helps reduce overall energy consumption, contributing to a greener planet.',
  },
]

const imesFeatures = [
  {
    icon: automaticPowerIcon,
    alt: 'Automatic power optimization icon',
    titleLines: ['Automatic Power', 'Optimization'],
    description:
      'Continuously monitors and adjusts electrical parameters to minimize energy wastage. Ensures efficient use of voltage and current, improving overall power utilization.',
  },
  {
    icon: powerFactorIcon,
    alt: 'Power factor improvement icon',
    titleLines: ['Power Factor', 'Improvement'],
    description:
      'Actively enhances the power factor of electrical systems. Reduces reactive power and penalties from utilities, resulting in lower electricity bills.',
  },
  {
    icon: voltageStabilizationIcon,
    alt: 'Voltage stabilization icon',
    titleLines: ['Voltage Stabilization', '& Regulation'],
    description:
      'Maintains steady voltage supply to protect equipment from voltage fluctuations. Increases operational life of electrical appliances and machinery.',
  },
  {
    icon: loadBalancingIcon,
    alt: 'Load balancing icon',
    titleLines: ['Load Balancing &', 'Energy Distribution'],
    description:
      'Manages uneven load distribution across multiple phases. Ensures balanced operation and reduces system losses.',
  },
  {
    icon: harmonicFiltrationIcon,
    alt: 'Harmonic filtration icon',
    titleLines: ['Harmonic Filtration', '& Reduction'],
    description:
      'Filters out unwanted harmonics caused by electronic loads. Improves power quality and system performance.',
  },
  {
    icon: realTimeMonitoringIcon,
    alt: 'Real-time energy monitoring icon',
    titleLines: ['Real-Time Energy', 'Monitoring'],
    description:
      'Displays real-time voltage, current, power factor, and consumption data. Enables better control and analysis of energy usage patterns.',
  },
  {
    icon: intelligentControlIcon,
    alt: 'Intelligent control system icon',
    titleLines: ['Intelligent Control', 'System'],
    description:
      'Equipped with a microprocessor-based or AI-driven control module. Automatically adapts to varying load conditions for consistent energy efficiency.',
  },
  {
    icon: surgeProtectionIcon,
    alt: 'Surge and overload protection icon',
    titleLines: ['Surge & Overload', 'Protection'],
    description:
      'Safeguards all connected equipment from electrical surges, spikes, and overloads. Prevents damage and downtime.',
  },
  {
    icon: energySavingsIcon,
    alt: 'Energy and cost savings icon',
    titleLines: ['Energy & Cost', 'Savings'],
    description:
      'Reduces electricity consumption by optimizing energy flow. Typically saves up to 20% of total power costs depending on load conditions.',
  },
  {
    icon: easyInstallationIcon,
    alt: 'Easy installation icon',
    titleLines: ['Easy', 'Installation'],
    description:
      'Easy to install and integrate with existing electrical setups. Minimal maintenance required.',
  },
  {
    icon: durableDesignIcon,
    alt: 'Durable and reliable design icon',
    titleLines: ['Durable & Reliable', 'Design'],
    description:
      'Built with high-quality electrical and electronic components. Designed for continuous industrial, commercial, or residential operation.',
  },
  {
    icon: ecoFriendlyOperationIcon,
    alt: 'Eco-friendly operation icon',
    titleLines: ['Eco-Friendly', 'Operation'],
    description:
      'Reduces carbon footprint by minimizing unnecessary energy use. Supports sustainable and responsible energy consumption.',
  },
]

function App() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero__overlay" />
        <header className="hero__nav">
          <a className="hero__brand" href="#">
            <img src={logo} alt="Ondo logo" />
          </a>
          <nav className="hero__links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hero__actions">
            <button className="btn btn--primary">Contact Us</button>
            <button className="btn btn--ghost">Login</button>
          </div>
        </header>

        <main className="hero__content">
          <div className="hero__text">
            <span className="hero__tagline">“Save Energy, Smarter Control”</span>
            <h1>Welcome to the future of energy conservation!</h1>
            <p>
              Reduce electricity bills, protect your appliances, and contribute to a greener
              future with our advanced power saver solutions.
            </p>
            <button className="btn btn--primary hero__cta">Contact Us</button>
          </div>

          <div className="hero__visual">
            <div className="hero__product-card">
              <img src={heroProduct} alt="Ondo smart energy controller" />
            </div>
          </div>
        </main>
      </section>

      <section className="about" id="about">
        <div className="about__wrapper">
          <div className="about__intro">
            <h2>Who are we?</h2>
            <p>
              We are a technology-driven company creating innovative energy-saving solutions
              for homes, offices, and industries. Our Intelligent Energy Management Systems
              (IEMS) reduce electricity costs, protect appliances, and promote sustainable
              living through reliable and efficient engineering.
            </p>
          </div>

          <div className="about__cards">
            {featureCards.map((card) => (
              <article className="feature-card" key={card.titleLines.join('-')}>
                <img className="feature-card__icon" src={card.icon} alt={card.alt} />
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

      <section className="mission" aria-labelledby="mission-heading">
        <div className="mission__tag">Our Mission</div>
        <p className="mission__statement" id="mission-heading">
          We <span>innovate</span> to empower every home and industry with smarter, cleaner, and more{' '}
          <span>efficient energy.</span>
        </p>
      </section>

      <section className="features" id="features">
        <div className="features__wrapper">
          <div className="features__tag">Features</div>
          <h2 className="features__title">Key Features of IMES Device</h2>
          <div className="features__grid">
            {imesFeatures.map((feature, index) => (
              <article className="imes-feature-card" key={index}>
                <img className="imes-feature-card__icon" src={feature.icon} alt={feature.alt} />
                <h3 className="imes-feature-card__title">
                  {feature.titleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p className="imes-feature-card__description">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App

import './App.css'
import heroBackground from '../assets/hero_background.jpg'
import heroProduct from '../assets/ondo_hero_product_image.png'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
]

function App() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
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
    </div>
  )
}

export default App

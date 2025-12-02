import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { navigationLinks } from '../data/content';
import UnderDevelopmentModal from './UnderDevelopmentModal';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUnderDevelopment, setShowUnderDevelopment] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Track scroll to toggle solid background on homepage
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  return (
    <header className={`site-header ${isHomePage ? 'homepage-header' : 'other-page-header'} ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="shell">
        <Link to="/" className="brand">
          <img src="/assets/hero/logo.png" alt="Supreme Masqueraders Society" className="brand-logo" />
          <div>
            <strong>Supreme Masqueraders</strong>
            <p>Society</p>
          </div>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`primary-nav ${isMenuOpen ? 'mobile-open' : ''}`} aria-label="Main navigation">
          {navigationLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => (isActive ? 'active' : '')}>
              {link.label}
            </NavLink>
          ))}
          <div className="mobile-nav-ctas">
            <button
              type="button"
              className="ghost-button"
              onClick={() => {
                setShowUnderDevelopment(true);
                setIsMenuOpen(false);
              }}
            >
              Log in
            </button>
            <button
              type="button"
              className="primary-button"
              onClick={() => {
                setShowUnderDevelopment(true);
                setIsMenuOpen(false);
              }}
            >
              Sign up
            </button>
          </div>
        </nav>

        <div className="nav-ctas">
          <button
            type="button"
            className="ghost-button"
            onClick={() => setShowUnderDevelopment(true)}
          >
            Log in
          </button>
          <button
            type="button"
            className="primary-button"
            onClick={() => setShowUnderDevelopment(true)}
          >
            Sign up
          </button>
        </div>
      </div>
      <UnderDevelopmentModal
        isOpen={showUnderDevelopment}
        onClose={() => setShowUnderDevelopment(false)}
      />
    </header>
  );
};

export default Navigation;


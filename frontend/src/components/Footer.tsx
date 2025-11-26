import { Link } from 'react-router-dom';

const footerLinks = [
  {
    heading: 'Product',
    items: ['Overview', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
  },
  {
    heading: 'Resources',
    items: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Support'],
  },
  {
    heading: 'Use cases',
    items: ['Startups', 'Enterprise', 'Government', 'Marketplaces', 'Ecommerce'],
  },
  {
    heading: 'Social',
    items: ['Twitter', 'LinkedIn', 'YouTube', 'Instagram', 'Dribbble'],
  },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="shell">
      <div className="footer-cta">
        <div>
          <p className="eyebrow">Let’s get started on something great</p>
          <h2>Join over 4,000+ masqueraders already growing with Supreme.</h2>
        </div>
        <div className="cta-stack">
          <Link to="/contact" className="ghost-button">
            Chat to us
          </Link>
          <Link to="/contact" className="primary-button">
            Get started
          </Link>
        </div>
      </div>

      <div className="footer-grid">
        {footerLinks.map((column) => (
          <div key={column.heading}>
            <p className="eyebrow">{column.heading}</p>
            <ul>
              {column.items.map((item) => (
                <li key={item}>
                  <Link to="/">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-base">
        <span>⚡ Supreme Masqueraders Society</span>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;


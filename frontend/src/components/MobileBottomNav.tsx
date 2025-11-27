import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const MobileBottomNav = () => {
  const location = useLocation();
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  // Icon mapping for navigation items
  const getIcon = (path: string) => {
    switch (path) {
      case '/':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case '/about':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case '/events':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case '/gallery':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H19C19.5304 18 20.0391 17.7893 20.4142 17.4142C20.7893 17.0391 21 16.5304 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11L11.09 13.09C11.4788 13.4788 12.1115 13.4788 12.5 13.09L15 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 11H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case '/team':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case '/branches':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case '/contact':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3522 21.3992C21.1472 21.5857 20.9053 21.7262 20.6426 21.8116C20.3798 21.897 20.102 21.9254 19.828 21.895C16.7425 21.4601 13.787 20.4118 11.19 18.82C8.77382 17.3471 6.72533 15.2987 5.252 12.882C3.65398 10.2642 2.60355 7.28359 2.172 4.182C2.14162 3.90792 2.17006 3.63013 2.25551 3.36737C2.34096 3.10461 2.48146 2.86271 2.66801 2.65766C2.85456 2.45262 3.08312 2.28903 3.33806 2.17743C3.593 2.06583 3.86872 2.00881 4.147 2.01H7.147C7.69796 1.99483 8.23766 2.1679 8.68237 2.5015C9.12708 2.8351 9.45069 3.31177 9.602 3.862L10.582 7.592C10.7063 8.04095 10.7091 8.51789 10.5892 8.96824C10.4692 9.41859 10.2309 9.82572 9.902 10.142L8.302 11.742C9.81167 14.3442 11.6558 16.1883 14.258 17.698L15.858 16.098C16.1743 15.7691 16.5814 15.5308 17.0318 15.4109C17.4821 15.2909 17.9591 15.2937 18.408 15.418L22.138 16.398C22.6884 16.5492 23.1651 16.8729 23.4987 17.3176C23.8323 17.7623 24.0054 18.302 23.99 18.853L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case '/auth':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Get essential navigation items for mobile bottom nav
  const primaryNavItems = [
    { label: 'Home', path: '/', icon: getIcon('/') },
    { label: 'Events', path: '/events', icon: getIcon('/events') },
    { label: 'Gallery', path: '/gallery', icon: getIcon('/gallery') },
    { label: 'Branches', path: '/branches', icon: getIcon('/branches') },
  ];

  // Additional navigation items for "More" menu
  const moreNavItems = [
    { label: 'About', path: '/about', icon: getIcon('/about') },
    { label: 'Team', path: '/team', icon: getIcon('/team') },
    { label: 'Contact', path: '/contact', icon: getIcon('/contact') },
    { label: 'Profile', path: '/auth', icon: getIcon('/auth') },
  ];

  // Check if we're on a dashboard page (hide bottom nav on dashboard)
  const isDashboard = location.pathname.startsWith('/dashboard');

  if (isDashboard) {
    return null;
  }

  return (
    <>
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {primaryNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
            aria-label={item.label}
          >
            <span className="mobile-nav-icon">{item.icon}</span>
            <span className="mobile-nav-label">{item.label}</span>
          </NavLink>
        ))}
        <button
          className={`mobile-nav-item ${showMoreMenu ? 'active' : ''}`}
          onClick={() => setShowMoreMenu(!showMoreMenu)}
          aria-label="More options"
          aria-expanded={showMoreMenu}
        >
          <span className="mobile-nav-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="mobile-nav-label">More</span>
        </button>
      </nav>
      {showMoreMenu && (
        <div className="mobile-more-menu">
          <div className="mobile-more-menu-overlay" onClick={() => setShowMoreMenu(false)}></div>
          <div className="mobile-more-menu-content">
            {moreNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="mobile-more-menu-item"
                onClick={() => setShowMoreMenu(false)}
              >
                <span className="mobile-more-menu-icon">{item.icon}</span>
                <span className="mobile-more-menu-label">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileBottomNav;


import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import UnderDevelopmentModal from '../components/UnderDevelopmentModal';
import {
  capabilityHighlights,
  eventHighlights,
  galleryItems,
  heroContent,
  heroImages,
  impactHighlights,
  newsFeed,
  partners,
  sponsorsAndPartners,
  stats,
  upcomingEvents,
  whyJoinReasons,
} from '../data/content';

const HomePage = () => {
  const [visibleReasons, setVisibleReasons] = useState<number[]>([]);
  const reasonRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null);
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(new Set());
  const headingRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());
  const [userLocation, setUserLocation] = useState<string>('');
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>('');
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showUnderDevelopment, setShowUnderDevelopment] = useState(false);

  // Countdown timer to December 25th, 2025
  useEffect(() => {
    const targetDate = new Date('2025-12-25T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observers = reasonRefs.current.map((el, index) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleReasons((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              }, index * 200); // Stagger by 200ms
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Handle ESC key to close modal and prevent body scroll
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedEvent(null);
        }
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = '';
      };
    }
  }, [selectedEvent]);

  // Animate section headings on scroll
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    headingRefs.current.forEach((el, key) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleHeadings((prev) => new Set(prev).add(key));
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Animate feature cards on scroll
  useEffect(() => {
    const observers = featureRefs.current.map((el, index) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleFeatures((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              }, index * 100); // Stagger by 100ms
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Hero image carousel with 1-minute delay for hero1
  useEffect(() => {
    let carouselInterval: NodeJS.Timeout | null = null;

    // Filter out hero2, hero3, and image6 - only use hero1, hero4, hero5
    const carouselImages = [heroImages[0], heroImages[3], heroImages[4]]; // hero1, hero4, hero5

    // Show hero1 for 1 minute (60000ms) before starting carousel
    const initialDelay = setTimeout(() => {
      // After 1 minute, start cycling through hero4 and hero5
      carouselInterval = setInterval(() => {
        setCurrentHeroImage((prev) => {
          // After hero1 (index 0), cycle between hero4 (index 1) and hero5 (index 2)
          if (prev === 0) {
            return 1; // Start with hero4
          }
          // Toggle between hero4 (1) and hero5 (2)
          return prev === 1 ? 2 : 1;
        });
      }, 5000); // Change image every 5 seconds after initial delay
    }, 60000); // 1 minute delay

    return () => {
      clearTimeout(initialDelay);
      if (carouselInterval) {
        clearInterval(carouselInterval);
      }
    };
  }, []);

  // Get user's current location
  const getCurrentLocation = () => {
    setIsLocating(true);
    setLocationError('');

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Reverse geocoding would be ideal, but for now we'll use coordinates
        setUserLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        setIsLocating(false);
      },
      (error) => {
        let errorMessage = 'Unable to get your location';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enable location services.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out.';
            break;
        }
        setLocationError(errorMessage);
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };


  return (
    <>
      <section className="hero-banner">
        {/* Only show hero1, hero4, and hero5 in carousel */}
        {[heroImages[0], heroImages[3], heroImages[4]].map((image, index) => (
          <div
            key={image}
            className={`hero-slide ${index === currentHeroImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-overlay" />
        <div className="shell">
          <div className="hero-content">
            <div className="anniversary-badge">
              <span className="anniversary-text">{heroContent.anniversary}</span>
            </div>
            <p className="eyebrow">{heroContent.eyebrow}</p>
            <h1>{heroContent.title}</h1>
            <p className="lead">{heroContent.description}</p>
            <div className="cta-stack">
              <button
                type="button"
                className="primary-button"
                onClick={() => setShowUnderDevelopment(true)}
              >
                {heroContent.primaryCta.label}
              </button>
              <button
                type="button"
                className="primary-button countdown-button"
                title={`Countdown to December 25, 2025: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes`}
              >
                Countdown: {countdown.days}d {String(countdown.hours).padStart(2, '0')}:{String(countdown.minutes).padStart(2, '0')}
              </button>
            </div>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat-item">
                  <p className="eyebrow">{stat.label}</p>
                  <h3>{stat.value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile buttons section - appears right after hero */}
      <section className="hero-buttons-section">
        <div className="shell">
          <p className="eyebrow">{heroContent.eyebrow}</p>
          <p className="lead">{heroContent.description}</p>
          <div className="anniversary-badge">
            <span className="anniversary-text">{heroContent.anniversary}</span>
          </div>
          <div className="cta-stack">
            <button
              type="button"
              className="primary-button"
              onClick={() => setShowUnderDevelopment(true)}
            >
              {heroContent.primaryCta.label}
            </button>
            <button
              type="button"
              className="primary-button countdown-button"
              title={`Countdown to December 25, 2025: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes`}
            >
              Countdown: {countdown.days}d {String(countdown.hours).padStart(2, '0')}:{String(countdown.minutes).padStart(2, '0')}
            </button>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat-item">
                <p className="eyebrow">{stat.label}</p>
                <h3>{stat.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-join-section">
        <div className="shell">
          <div
            ref={(el) => headingRefs.current.set('why-join', el)}
            className={`section-heading-wrapper ${visibleHeadings.has('why-join') ? 'visible' : ''}`}
          >
            <SectionHeading
              eyebrow="Membership"
              title="Why Join Supreme Masqueraders"
              description="Discover the benefits of being part of our vibrant cultural community."
            />
          </div>
          <div className="why-join-list">
            {whyJoinReasons.map((reason, index) => (
              <div
                key={reason.title}
                ref={(el) => {
                  reasonRefs.current[index] = el;
                }}
                className={`why-join-item ${visibleReasons.includes(index) ? 'visible' : ''} ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
              >
                <div className="why-join-number">{index + 1}</div>
                <div className="why-join-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell upcoming-events-section">
        <div
          ref={(el) => headingRefs.current.set('upcoming-events', el)}
          className={`section-heading-wrapper ${visibleHeadings.has('upcoming-events') ? 'visible' : ''}`}
        >
          <SectionHeading
            eyebrow="What's Next"
            title="Upcoming Events"
            description="Join us for exciting cultural celebrations and community gatherings."
          />
        </div>
        <div className="gallery-grid">
          {upcomingEvents.map((event) => (
            <figure key={event.id} className="gallery-card" onClick={() => setSelectedEvent(event)} style={{ cursor: 'pointer' }}>
              <img src={event.image} alt={event.title} loading="lazy" />
              <figcaption>
                <p className="eyebrow">{event.type}</p>
                <h3>{event.title}</h3>
                <p className="event-location">{event.location}</p>
                {event.description && <p className="event-description">{event.description}</p>}
                <span className="event-date">{event.date}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEvent(event);
                  }}
                  className="primary-button event-details-btn"
                >
                  View more details
                </button>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="sponsors-section">
        <div className="shell">
          <div
            ref={(el) => headingRefs.current.set('sponsors', el)}
            className={`section-heading-wrapper ${visibleHeadings.has('sponsors') ? 'visible' : ''}`}
          >
            <SectionHeading
              eyebrow="Our Supporters"
              title="Sponsors & Partners"
              description="We're grateful for the organizations that support our mission."
            />
          </div>
          <div className="sponsors-marquee">
            <div className="sponsors-track">
              {[...sponsorsAndPartners, ...sponsorsAndPartners].map((sponsor, index) => (
                <div key={`${sponsor.name}-${index}`} className="sponsor-item">
                  <div className="sponsor-logo">
                    <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
                  </div>
                  <p className="sponsor-name">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="our-impact-section">
        <div className="shell">
          <div
            ref={(el) => headingRefs.current.set('our-impact', el)}
            className={`section-heading-wrapper ${visibleHeadings.has('our-impact') ? 'visible' : ''}`}
          >
            <div className="impact-header-text">
              <p className="eyebrow">Making a Difference</p>
              <h2>Our Impact</h2>
            </div>
          </div>
          <div className="impact-marquee">
            <div className="impact-track">
              {[...impactHighlights, ...impactHighlights].map((impact, index) => (
                <div key={`${impact.title}-${index}`} className="impact-stat-item">
                  <h3>{impact.stat}</h3>
                  <p>{impact.statLabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    <section className="stats-shell">
      <div className="shell stats-grid">
        {stats.map((item) => (
          <article key={item.label}>
            <p className="eyebrow">{item.label}</p>
            <h3>{item.value}</h3>
          </article>
        ))}
      </div>
    </section>

    <section className="shell">
      <div
        ref={(el) => headingRefs.current.set('command-centers', el)}
        className={`section-heading-wrapper ${visibleHeadings.has('command-centers') ? 'visible' : ''}`}
      >
        <SectionHeading
          eyebrow="Platform Features"
          title="Discover what we got for you here"
          description="Explore our comprehensive platform designed to enhance your experience with Supreme Masqueraders Society."
        />
      </div>
      <div className="features-grid">
        <div
          ref={(el) => {
            featureRefs.current[0] = el;
          }}
          className={`feature-item ${visibleFeatures.includes(0) ? 'visible' : ''}`}
        >
          <div className="feature-icon-box">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="feature-content">
            <h3>Turnout outlines & real-time route tracking</h3>
            <p>Coordinate outing logistics with live GPS tracking and route visualization</p>
          </div>
        </div>
        <div
          ref={(el) => {
            featureRefs.current[1] = el;
          }}
          className={`feature-item ${visibleFeatures.includes(1) ? 'visible' : ''}`}
        >
          <div className="feature-icon-box">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="feature-content">
            <h3>News feed (society-wide & branch-level)</h3>
            <p>Stay updated with announcements and updates from all branches</p>
          </div>
        </div>
        <div
          ref={(el) => {
            featureRefs.current[2] = el;
          }}
          className={`feature-item ${visibleFeatures.includes(2) ? 'visible' : ''}`}
        >
          <div className="feature-icon-box">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="feature-content">
            <h3>Branch management (membership requests & approvals)</h3>
            <p>Streamline membership processes with automated approval workflows</p>
          </div>
        </div>
        <div
          ref={(el) => {
            featureRefs.current[3] = el;
          }}
          className={`feature-item ${visibleFeatures.includes(3) ? 'visible' : ''}`}
        >
          <div className="feature-icon-box">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div className="feature-content">
            <h3>Member forums / discussion boards</h3>
            <p>Engage in meaningful discussions and share ideas with members</p>
          </div>
        </div>
        <div
          ref={(el) => {
            featureRefs.current[4] = el;
          }}
          className={`feature-item ${visibleFeatures.includes(4) ? 'visible' : ''}`}
        >
          <div className="feature-icon-box">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div className="feature-content">
            <h3>Event listings, calendar, reminders & notifications</h3>
            <p>Never miss an event with integrated calendar and smart reminders</p>
          </div>
        </div>
        <div
          ref={(el) => {
            featureRefs.current[5] = el;
          }}
          className={`feature-item ${visibleFeatures.includes(5) ? 'visible' : ''}`}
        >
          <div className="feature-icon-box">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
          <div className="feature-content">
            <h3>Media hub with photos/videos, likes, comments, and internal sharing</h3>
            <p>Share and discover memorable moments from events and activities</p>
          </div>
        </div>
      </div>
    </section>

    <section className="shell">
      <div
        ref={(el) => headingRefs.current.set('event-highlights', el)}
        className={`section-heading-wrapper ${visibleHeadings.has('event-highlights') ? 'visible' : ''}`}
      >
        <SectionHeading
          eyebrow="Upcoming experiences"
          title="Event highlights & turnout routes"
          description="Automate reminders, publish route tracking, and share staging details with every stakeholder."
        />
      </div>
      {/* Route Tracking Section */}
      <div className="route-tracking-section">
        <div className="route-tracking-container">
          <div className="route-map">
            {/* Location Inputs */}
            <div className="location-inputs">
              <div className="location-input-wrapper">
                <div className="location-radio start-radio"></div>
                <div className="location-input-line"></div>
                <div className="location-input-container">
                  <input
                    type="text"
                    className="location-input"
                    placeholder="Enter your location or use current"
                    value={userLocation}
                    onChange={(e) => setUserLocation(e.target.value)}
                  />
                  <button
                    type="button"
                    className="location-detect-btn"
                    onClick={getCurrentLocation}
                    disabled={isLocating}
                    title="Detect my location"
                  >
                    {isLocating ? (
                      <svg className="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25"></circle>
                        <path d="M12 2 A10 10 0 0 1 22 12" strokeLinecap="round"></path>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
                {locationError && (
                  <div className="location-error">{locationError}</div>
                )}
              </div>
              <div className="location-input-wrapper">
                <div className="location-radio end-radio"></div>
                <div className="location-input-container">
                  <input
                    type="text"
                    className="location-input"
                    placeholder="Band current location"
                    value="Band Location - Main Outing Route"
                    readOnly
                  />
                  <div className="band-location-badge">
                    <span className="status-dot"></span>
                    <span>Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Background */}
            <div className="map-background">
              <div className="map-grid"></div>
              <div className="map-streets">
                <div className="street horizontal street-1"></div>
                <div className="street horizontal street-2"></div>
                <div className="street horizontal street-3"></div>
                <div className="street vertical street-4"></div>
                <div className="street vertical street-5"></div>
                <div className="street vertical street-6"></div>
              </div>
            </div>

            {/* Band Starting Point (Visible but not on route) */}
            <div className="band-start-point">
              <div className="band-start-marker">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span className="route-label">Band Started Here</span>
            </div>

            {/* Person's Current Location */}
            <div className="person-location">
              <div className="person-location-marker">
                <div className="person-pulse"></div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </div>

            {/* Band's Current Location */}
            <div className="band-current-location">
              <div className="band-current-marker">
                <div className="band-pulse"></div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <span className="route-label">Band Location</span>
            </div>

            {/* Route from Person to Band */}
            <div className="route-path-person-to-band">
              <svg className="route-line" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                <path
                  className="route-path-line-person"
                  d="M 200 320 Q 250 280, 280 240 Q 300 200, 280 160 Q 260 120, 220 100"
                  fill="none"
                  stroke="#ff6b35"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="route-tracking-dot-person"></div>
            </div>
          </div>
          <div className="route-info">
            <div className="route-info-header">
              <h4>Live Route Tracking</h4>
              <div className="route-status-badge active">
                <span className="status-dot"></span>
                <span>In Progress</span>
              </div>
            </div>
            <div className="route-stats">
              <div className="route-stat-card">
                <div className="route-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="route-stat-content">
                  <span className="route-stat-label">Distance to Band</span>
                  <span className="route-stat-value">0.8 km</span>
                </div>
              </div>
              <div className="route-stat-card">
                <div className="route-stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="route-stat-content">
                  <span className="route-stat-label">Walking Time</span>
                  <span className="route-stat-value">10 min</span>
                </div>
              </div>
            </div>
            <div className="route-waypoints">
              <h5 className="waypoints-title">Location Details</h5>
              <div className="waypoint-list">
                <div className="waypoint-item">
                  <div className="waypoint-marker person">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="waypoint-details">
                    <strong>Your Location</strong>
                    <span>Current position</span>
                  </div>
                </div>
                <div className="waypoint-item">
                  <div className="waypoint-marker band-current">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                  <div className="waypoint-details">
                    <strong>Band Current Location</strong>
                    <span>Main Outing Route</span>
                  </div>
                </div>
                <div className="waypoint-item">
                  <div className="waypoint-marker band-start">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="waypoint-details">
                    <strong>Band Started At</strong>
                    <span>Supreme Secretariat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="partner-row">
      <div className="shell">
        <p className="eyebrow">Partners & supporters</p>
        <div>
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </div>
    </section>

    <section className="shell">
      <div
        ref={(el) => headingRefs.current.set('gallery', el)}
        className={`section-heading-wrapper ${visibleHeadings.has('gallery') ? 'visible' : ''}`}
      >
        <SectionHeading
          eyebrow="Media hub"
          title="Featured gallery moments"
          description="Pit-stops across outings, mentorship clinics, and diaspora showcases."
        />
      </div>
      <div className="gallery-grid">
        {(() => {
          // Group images by year
          const byYear = galleryItems.reduce((acc, item) => {
            if (!acc[item.year]) acc[item.year] = [];
            acc[item.year].push(item);
            return acc;
          }, {} as Record<number, typeof galleryItems>);

          // Get all years sorted (newest first)
          const years = Object.keys(byYear)
            .map(Number)
            .sort((a, b) => b - a);

          // Select images from each year to ensure diversity
          const selected: typeof galleryItems = [];
          const imagesPerYear = Math.ceil(20 / years.length);

          years.forEach((year) => {
            const yearImages = byYear[year];
            // Shuffle and take up to imagesPerYear from each year
            const shuffled = [...yearImages].sort(() => Math.random() - 0.5);
            selected.push(...shuffled.slice(0, imagesPerYear));
          });

          // If we have less than 20, fill with more from all years
          if (selected.length < 20) {
            const remaining = galleryItems
              .filter((item) => !selected.some((s) => s.id === item.id))
              .sort(() => Math.random() - 0.5)
              .slice(0, 20 - selected.length);
            selected.push(...remaining);
          }

          // Shuffle final selection and limit to 20
          return selected
            .sort(() => Math.random() - 0.5)
            .slice(0, 20)
            .map((item) => (
              <figure key={item.id} className="gallery-card">
                <img src={item.image} alt={item.caption} loading="lazy" />
                <figcaption>
                  <p className="eyebrow">{item.outing}</p>
                  <h3>{item.caption}</h3>
                  <span>{item.mediaType.toUpperCase()}</span>
                </figcaption>
              </figure>
            ));
        })()}
      </div>
    </section>

    <section className="shell">
      <div
        ref={(el) => headingRefs.current.set('news-feed', el)}
        className={`section-heading-wrapper ${visibleHeadings.has('news-feed') ? 'visible' : ''}`}
      >
        <SectionHeading
          eyebrow="News feed"
          title="Society & branch-wide updates"
          description="Stay informed with automatic reminders, FCM pushes, and Arkasel notifications."
        />
      </div>
      <div className="news-grid">
        {newsFeed.map((item) => (
          <article key={item.title} className="card">
            <p className="eyebrow">{item.branch}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <span>{item.postedOn}</span>
          </article>
        ))}
      </div>
    </section>

      <PageHero
      eyebrow="All-in-one platform"
      title="Streamline all branch management, turnouts, and stay updated with relevant info in a unified platform."
    >
      <div className="cta-stack">
        <button
          type="button"
          className="primary-button"
          onClick={() => setShowUnderDevelopment(true)}
        >
          Preview dashboards
        </button>
        <Link to="/contact" className="ghost-button">
          Talk to our team
        </Link>
      </div>
      </PageHero>

      {/* Event Image Modal */}
      {selectedEvent && (
        <div className="event-modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="event-modal-close"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="event-modal-image" />
            <div className="event-modal-info">
              <p className="eyebrow">{selectedEvent.type}</p>
              <h2>{selectedEvent.title}</h2>
              <p className="event-modal-location">{selectedEvent.location}</p>
              <p className="event-modal-description">
                {selectedEvent.description || 'Join us for this exciting celebration of our cultural heritage and community spirit.'}
              </p>
              <span className="event-modal-date">{selectedEvent.date}</span>
            </div>
          </div>
        </div>
      )}

      <UnderDevelopmentModal
        isOpen={showUnderDevelopment}
        onClose={() => setShowUnderDevelopment(false)}
      />
    </>
  );
};

export default HomePage;


import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { aboutContent, stats } from '../data/content';

const AboutPage = () => {
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(new Set());
  const headingRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());

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

  return (
  <>
    {/* Hero Section */}
    <section className="about-hero-section">
      <div className="about-hero-overlay"></div>
      <div className="shell">
        <div className="about-hero-content">
          <h1>About Us</h1>
        </div>
      </div>
    </section>

    {/* Society Where There is Love */}
    <section className="about-understanding-section">
      <div className="shell">
        <div className="understanding-layout">
          <div className="understanding-title-wrapper">
            <h2 className="understanding-title">Society Where There is Love</h2>
          </div>
          <div className="understanding-content-wrapper">
            <div className="understanding-text">
              <p className="understanding-text-with-cap">
                <span className="drop-cap">T</span>
                {aboutContent.whoWeAre.description.substring(1)}
              </p>
              <p>{aboutContent.ourStory.origins}</p>
            </div>
            <div className="understanding-images">
              <div className="understanding-image-wrapper understanding-image-left">
                <img src="/assets/hero/gallery1.png" alt="Supreme Masqueraders gathering" loading="lazy" />
                <button className="video-play-button" aria-label="Play video">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9"/>
                    <path d="M25 20L25 40L40 30L25 20Z" fill="#1D68FE"/>
                  </svg>
                </button>
              </div>
              <div className="understanding-image-wrapper understanding-image-right">
                <img src="/assets/hero/gallery2.png" alt="Community celebration" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About Us - Identity, Vision and Values */}
    <section className="about-identity-vision-section">
      <div className="shell">
        <div
          ref={(el) => { headingRefs.current.set('identity-vision', el); }}
          className={`about-identity-header ${visibleHeadings.has('identity-vision') ? 'visible' : ''}`}
        >
          <p className="about-identity-eyebrow">ABOUT US</p>
          <h2 className="about-identity-title">Unveiling Our Identity, Vision and Values</h2>
          <p className="about-identity-description">
            We're passionate about cultural preservation and youth empowerment. With years of experience in masquerade traditions, 
            we've established ourselves as leaders in celebrating and promoting our rich cultural heritage.
          </p>
        </div>

        {/* Core Values Box */}
        <div className="about-core-values-box">
          {aboutContent.coreValues.slice(0, 4).map((value, index) => (
            <div key={value.title} className="core-value-item">
              <div className="core-value-icon">
                {index === 0 && (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                )}
                {index === 1 && (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                  </svg>
                )}
                {index === 2 && (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="3"/>
                    <line x1="12" y1="2" x2="12" y2="6"/>
                    <line x1="12" y1="18" x2="12" y2="22"/>
                    <line x1="2" y1="12" x2="6" y2="12"/>
                    <line x1="18" y1="12" x2="22" y2="12"/>
                  </svg>
                )}
                {index === 3 && (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                    <circle cx="12" cy="12" r="5"/>
                  </svg>
                )}
              </div>
              <div className="core-value-title">{value.title}</div>
            </div>
          ))}
        </div>

        {/* Vision and Mission Cards */}
        <div className="about-vision-mission-cards">
          <div className="vision-mission-card">
            <div className="vision-mission-icon vision-icon-color">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="vision-mission-card-title">Vision</h3>
            <p className="vision-mission-card-text">{aboutContent.vision.statement}</p>
          </div>
          <div className="vision-mission-card">
            <div className="vision-mission-icon mission-icon-color">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="12 6 12 18 16 12"/>
              </svg>
            </div>
            <h3 className="vision-mission-card-title">Mission</h3>
            <p className="vision-mission-card-text">{aboutContent.mission.statement}</p>
          </div>
        </div>

        <div className="about-identity-cta">
          <Link to="/about" className="know-more-button">Know More About Us</Link>
        </div>
      </div>
    </section>

    {/* Awards Timeline Section */}
    <section className="about-awards-section">
      <div className="about-awards-overlay"></div>
      <div className="shell">
        <div className="awards-marquee">
          <div className="awards-track">
            {[...aboutContent.ourStory.milestones.slice().reverse(), ...aboutContent.ourStory.milestones.slice().reverse()].map((milestone, index) => {
              const originalIndex = index % aboutContent.ourStory.milestones.length;
              return (
                <div key={`${milestone.year}-${index}`} className="award-item">
                  <div className="award-year">{milestone.year}</div>
                  <div className="award-badge">
                    {originalIndex === 0 ? 'BEST SERVICE' : originalIndex === 1 ? 'TOPRATED' : originalIndex === 2 ? 'WINNER' : 'VICTORY'}
                  </div>
                  <div className="award-label">Best Cultural Organization</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Statistics Section */}
    <section className="about-stats-section">
      <div className="shell">
        <div className="stats-grid-about">
          <div className="stat-item-about">
            <div className="stat-number">{stats.find(s => s.label === 'Active Members')?.value || '4,000+'}</div>
            <div className="stat-label">Happy Members</div>
            <p className="stat-description">Active participants across all branches</p>
          </div>
          <div className="stat-item-about">
            <div className="stat-number">100%</div>
            <div className="stat-label">Cultural Preservation</div>
            <p className="stat-description">Dedicated to maintaining traditions</p>
          </div>
          <div className="stat-item-about">
            <div className="stat-number">18</div>
            <div className="stat-label">Branches Worldwide</div>
            <p className="stat-description">Global presence and reach</p>
          </div>
          <div className="stat-item-about">
            <div className="stat-number">24+</div>
            <div className="stat-label">Years of Service</div>
            <p className="stat-description">Serving communities since 2000</p>
          </div>
        </div>
      </div>
    </section>

    {/* Our Identity */}
    <section className="shell">
      <div
        ref={(el) => { headingRefs.current.set('our-identity', el); }}
        className={`section-heading-wrapper ${visibleHeadings.has('our-identity') ? 'visible' : ''}`}
      >
        <SectionHeading eyebrow="Brand Identity" title="Our Identity" align="left" />
      </div>
      <div className="about-content">
        <div className="identity-section">
          <h3>{aboutContent.identity.logo.title}</h3>
          <p>{aboutContent.identity.logo.description}</p>
        </div>

        <div className="identity-section">
          <h3>{aboutContent.identity.colors.title}</h3>
          <p>{aboutContent.identity.colors.description}</p>
          <div className="colors-grid">
            {aboutContent.identity.colors.colors.map((color) => (
              <div key={color.name} className="color-item">
                <div className="color-swatch" style={{ backgroundColor: color.hex }}></div>
                <div className="color-info">
                  <strong>{color.name}</strong>
                  <span>{color.hex}</span>
                  <p>{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="identity-section">
          <h3>{aboutContent.identity.symbolism.title}</h3>
          <p>{aboutContent.identity.symbolism.description}</p>
        </div>
      </div>
    </section>

    {/* Outfit Design Inspiration */}
    <section className="shell">
      <div
        ref={(el) => { headingRefs.current.set('design-inspiration', el); }}
        className={`section-heading-wrapper ${visibleHeadings.has('design-inspiration') ? 'visible' : ''}`}
      >
        <SectionHeading eyebrow="Creative Expression" title="Outfit Design Inspiration" align="left" />
      </div>
      <div className="about-content">
        <div className="story-section">
          <h3>Annual Design Philosophy</h3>
          <p>
            Each year, our masquerade outfits are carefully crafted with deep meaning and cultural significance. 
            Our design team draws inspiration from our rich heritage, current themes, and the evolving narrative 
            of our community to create unique ensembles that tell a story.
          </p>
        </div>
        <div className="design-inspiration-grid">
          {aboutContent.designInspiration && aboutContent.designInspiration.length > 0 ? (
            aboutContent.designInspiration.map((inspiration) => (
              <article key={inspiration.year} className="inspiration-card">
                {inspiration.image && (
                  <div className="inspiration-image-wrapper">
                    <img 
                      src={inspiration.image} 
                      alt={`${inspiration.year} - ${inspiration.theme}`}
                      className="inspiration-image"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback placeholder if image fails to load
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect fill="%23e5e7eb" width="400" height="250"/%3E%3Ctext fill="%239ca3af" font-family="Arial" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EOutfit Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                )}
                <div className="inspiration-card-content">
                  <div className="inspiration-year">{inspiration.year}</div>
                  <h4>{inspiration.theme}</h4>
                  <p>{inspiration.description}</p>
                  {inspiration.highlights && (
                    <ul className="inspiration-highlights">
                      {inspiration.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))
          ) : (
            <div className="inspiration-placeholder">
              <p>Design inspiration content will be added here. This section will showcase the creative vision and cultural significance behind each year's masquerade outfit designs.</p>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* Events & Programs */}
    <section className="shell">
      <div
        ref={(el) => { headingRefs.current.set('events-programs', el); }}
        className={`section-heading-wrapper ${visibleHeadings.has('events-programs') ? 'visible' : ''}`}
      >
        <SectionHeading eyebrow="Engagement" title="Events & Programs" align="left" />
      </div>
      <div className="about-content">
        <p>
          We organize a variety of events and programs throughout the year, including our signature December and New Year
          brass band outings, cultural festivals, youth empowerment workshops, and community outreach initiatives. These
          events bring together members, families, and the broader community to celebrate our rich cultural heritage.
        </p>
        <div className="cta-stack" style={{ marginTop: '2rem' }}>
          <Link to="/events" className="primary-button">
            View All Events
          </Link>
        </div>
      </div>
    </section>

    {/* Contact & Social Media */}
    <section className="shell">
      <div
        ref={(el) => { headingRefs.current.set('contact', el); }}
        className={`section-heading-wrapper ${visibleHeadings.has('contact') ? 'visible' : ''}`}
      >
        <SectionHeading eyebrow="Get in Touch" title="Contact & Social Media" align="left" />
      </div>
      <div className="contact-section">
        <div className="contact-info">
          <div className="contact-item">
            <strong>Phone:</strong>
            <span>{aboutContent.contact.phone}</span>
          </div>
          <div className="contact-item">
            <strong>Email:</strong>
            <a href={`mailto:${aboutContent.contact.email}`}>{aboutContent.contact.email}</a>
          </div>
          <div className="contact-item">
            <strong>Location:</strong>
            <span>{aboutContent.contact.location}</span>
          </div>
        </div>
        <div className="social-media">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href={aboutContent.contact.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={aboutContent.contact.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={aboutContent.contact.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default AboutPage;

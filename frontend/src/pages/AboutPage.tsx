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
                <p>
                  {aboutContent.ourStory.origins}{' '}
                  <span className="motto-highlight">{aboutContent.ourStory.motto}</span>.
                </p>
              </div>
              <div className="understanding-images">
                <div className="understanding-image-wrapper understanding-image-left">
                  <img src="/assets/hero/gallery1.png" alt="Supreme Masqueraders gathering" loading="lazy" />
                  <button className="video-play-button" aria-label="Play video">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9" />
                      <path d="M25 20L25 40L40 30L25 20Z" fill="#1D68FE" />
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

      {/* Our Journey Section */}
      <section className="about-journey-section">
        <div className="shell">
          <div className="journey-layout">
            <div className="journey-content">
              <h2 className="journey-title">{aboutContent.ourStory.journey.title}</h2>
              <div className="journey-text">
                {aboutContent.ourStory.journey.paragraphs.map((paragraph, index) => {
                  // Helper to highlight specific words
                  const highlightText = (text: string) => {
                    const parts = text.split(/(\beagle\b|\d+(?:,\d+)*(?:s)?)/gi);
                    return parts.map((part, i) => {
                      if (part.toLowerCase() === 'eagle' || /^\d+(?:,\d+)*(?:s)?$/.test(part)) {
                        return <span key={i} className="text-highlight-blue">{part}</span>;
                      }
                      return part;
                    });
                  };

                  return <p key={index}>{highlightText(paragraph)}</p>;
                })}
              </div>
            </div>
            <div className="journey-image-wrapper">
              <img src="/assets/hero/founders.png" alt="Founders of Supreme Masquerade Society" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 25th Anniversary Section */}
      <section className="about-anniversary-section" style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
        <div className="shell">
          <div
            ref={(el) => { headingRefs.current.set('anniversary', el); }}
            className={`section-heading-wrapper ${visibleHeadings.has('anniversary') ? 'visible' : ''}`}
            style={{ marginBottom: '4rem' }}
          >
            <SectionHeading eyebrow="25th Anniversary" title={aboutContent.anniversary.theme} align="center" />
          </div>

          <div className="anniversary-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Manifesto */}
            <div style={{ maxWidth: '800px', margin: '0 auto 5rem', textAlign: 'center' }}>
              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.8',
                color: '#374151',
                fontWeight: '500'
              }}>
                {aboutContent.anniversary.description}
              </p>
            </div>

            {/* Key Initiatives Grid */}
            <div className="anniversary-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2.5rem',
              marginBottom: '6rem'
            }}>
              {/* Dress Well Campaign */}
              <div className="anniversary-card" style={{
                backgroundColor: 'white',
                padding: '3rem 2.5rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
                border: '1px solid #f3f4f6',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#eff6ff',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: '#1D68FE'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.38 3.4a2 2 0 0 0-2-1H5.62a2 2 0 0 0-2 1L2 6v5h2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11h2V6l-1.62-2.6zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>
                  {aboutContent.anniversary.dressWellCampaign.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6', flex: 1 }}>
                  {aboutContent.anniversary.dressWellCampaign.description}
                </p>
              </div>

              {/* Ankos Village */}
              <div className="anniversary-card" style={{
                backgroundColor: 'white',
                padding: '3rem 2.5rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
                border: '1px solid #f3f4f6',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#fef2f2',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: '#FC1313'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21V12a4 4 0 0 1 4-4 4 4 0 0 1 4 4v9" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>
                  {aboutContent.anniversary.ankosVillage.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6', flex: 1 }}>
                  {aboutContent.anniversary.ankosVillage.description}
                </p>
              </div>

              {/* Costume Policy */}
              <div className="anniversary-card" style={{
                backgroundColor: 'white',
                padding: '3rem 2.5rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
                border: '1px solid #f3f4f6',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: '#16a34a'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M8 11l3 3 5-5" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>
                  {aboutContent.anniversary.costumePolicy.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6', flex: 1 }}>
                  {aboutContent.anniversary.costumePolicy.description}
                </p>
              </div>
            </div>

            {/* Anniversary Projects */}
            <div className="anniversary-projects" style={{
              marginTop: '4rem',
              backgroundColor: 'rgba(29, 104, 254, 0.15)',
              borderRadius: '2rem',
              padding: '3rem 2rem',
              maxWidth: '1000px',
              margin: '4rem auto 0',
              border: '1px solid rgba(29, 104, 254, 0.2)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h3 className="anniversary-title" style={{ fontWeight: '700', marginBottom: '0.75rem', color: '#1D68FE' }}>Anniversary Projects</h3>
                <p className="anniversary-description" style={{ maxWidth: '600px', margin: '0 auto', color: '#6b7280' }}>
                  Initiatives designed to foster cohesion, academic excellence, and community wellness.
                </p>
              </div>

              <div className="projects-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}>
                {aboutContent.anniversary.projects.map((project, index) => (
                  <div key={index} className="project-item" style={{
                    backgroundColor: 'white',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#eff6ff',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      color: '#1D68FE'
                    }}>
                      <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>{index + 1}</span>
                    </div>
                    <h4 className="project-title" style={{ fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>
                      {project.title}
                    </h4>
                    <p className="project-description" style={{ color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                      {project.description}
                    </p>
                  </div>
                ))}
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                      <line x1="12" y1="2" x2="12" y2="6" />
                      <line x1="12" y1="18" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="6" y2="12" />
                      <line x1="18" y1="12" x2="22" y2="12" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      <circle cx="12" cy="12" r="5" />
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
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="vision-mission-card-title">Vision</h3>
              <p className="vision-mission-card-text">{aboutContent.vision.statement}</p>
            </div>
            <div className="vision-mission-card">
              <div className="vision-mission-icon mission-icon-color">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="12 6 12 18 16 12" />
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
              <div className="stat-number">{stats.find(s => s.label === 'Global branches')?.value || '30+'}</div>
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
          {aboutContent.identity.eagle && (
            <div className="identity-section identity-section-eagle">
              <h3>{aboutContent.identity.eagle.title}</h3>
              <p>{aboutContent.identity.eagle.description}</p>
            </div>
          )}

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
              <a
                href={aboutContent.contact.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="Follow us on Facebook"
              >
                <span className="contact-social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M22 12.07C22 6.49 17.52 2 11.93 2 6.35 2 1.87 6.49 1.87 12.07c0 4.98 3.64 9.11 8.4 9.93v-7.03H7.9v-2.9h2.37V9.41c0-2.35 1.4-3.65 3.55-3.65 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.9h-2.2V22c4.76-.82 8.4-4.95 8.4-9.93Z" />
                  </svg>
                </span>
                <span>Facebook</span>
              </a>
              <a
                href={aboutContent.contact.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="Follow us on Instagram"
              >
                <span className="contact-social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm9.25 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                  </svg>
                </span>
                <span>Instagram</span>
              </a>
              <a
                href={aboutContent.contact.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="Subscribe on YouTube"
              >
                <span className="contact-social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M21.6 7.2s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-.9-3-.2-7.7-.2-7.7-.2h-.1s-4.7 0-7.7.2c-.4 0-1.3 0-2.1.9-.6.7-.8 2.2-.8 2.2S0 9.1 0 11v1.9c0 1.9.2 3.8.2 3.8s.2 1.5.8 2.2c.8.9 1.8.8 2.3.9 1.7.2 7.5.2 7.5.2s4.7 0 7.7-.2c.4 0 1.3 0 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8ZM9.6 14.8V8.7l5.6 3.1-5.6 3Z" />
                  </svg>
                </span>
                <span>YouTube</span>
              </a>
              <a
                href={aboutContent.contact.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="Follow us on X"
              >
                <span className="contact-social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M19.98 4h-3l-3.21 4.14L11.04 4H4l6.47 8.38L4.34 20h3l3.32-4.28L13.7 20h7.04l-6.7-8.65L19.98 4Zm-4.68 12.6h-1.7L8.7 7.3h1.7l4.9 9.3Z" />
                  </svg>
                </span>
                <span>
                  X{' '}
                  {aboutContent.contact.socialMedia.xHandle && (
                    <span className="contact-social-handle">
                      {aboutContent.contact.socialMedia.xHandle}
                    </span>
                  )}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

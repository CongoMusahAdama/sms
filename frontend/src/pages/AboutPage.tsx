import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import PageHero from '../components/PageHero';
import { aboutContent } from '../data/content';

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
    <PageHero
      eyebrow="About us"
      title="Supreme Masqueraders Society"
      description="A vibrant cultural organization dedicated to preserving, promoting, and celebrating masquerade traditions while empowering youth and building stronger communities."
    />

    {/* Who We Are */}
    <section className="who-we-are-section">
      <div className="shell">
        <div
          ref={(el) => { headingRefs.current.set('who-we-are', el); }}
          className={`section-heading-wrapper ${visibleHeadings.has('who-we-are') ? 'visible' : ''}`}
        >
          <SectionHeading eyebrow="Introduction" title="Who We Are" align="left" />
        </div>
        <div className="about-content">
          <p>{aboutContent.whoWeAre.description}</p>
        </div>
      </div>
    </section>

    {/* Our Story / History */}
    <section className="shell">
      <div
        ref={(el) => { headingRefs.current.set('our-story', el); }}
        className={`section-heading-wrapper ${visibleHeadings.has('our-story') ? 'visible' : ''}`}
      >
        <SectionHeading eyebrow="Our Journey" title="Our Story" align="left" />
      </div>
      <div className="about-content">
        <div className="story-section">
          <h3>Origins</h3>
          <p>
            The Supreme Masqueraders Society was established on <strong>{aboutContent.ourStory.establishment}</strong> in
            Sekondi-Takoradi, Ghana. {aboutContent.ourStory.origins}
          </p>
        </div>

        <div className="story-section">
          <h3>Cultural Significance</h3>
          <p>{aboutContent.ourStory.culturalSignificance}</p>
        </div>

        <div className="story-section">
          <h3>Key Milestones</h3>
          <div className="milestones-grid">
            {aboutContent.ourStory.milestones.map((milestone, index) => (
              <div key={milestone.year} className="milestone-card">
                <div className="milestone-card-header">
                  <div className="milestone-year-badge">{milestone.year}</div>
                  <div className="milestone-number">{index + 1}</div>
                </div>
                <div className="milestone-card-body">
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="shell">
      <div
        ref={(el) => { headingRefs.current.set('core-values', el); }}
        className={`section-heading-wrapper ${visibleHeadings.has('core-values') ? 'visible' : ''}`}
      >
        <SectionHeading eyebrow="Guiding Principles" title="Our Core Values" align="left" />
      </div>
      <div className="values-grid">
        {aboutContent.coreValues.map((value) => (
          <article key={value.title} className="card">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>

    {/* What We Do / Activities */}
    <section className="shell">
      <div
        ref={(el) => { headingRefs.current.set('what-we-do', el); }}
        className={`section-heading-wrapper ${visibleHeadings.has('what-we-do') ? 'visible' : ''}`}
      >
        <SectionHeading eyebrow="Our Work" title="What We Do" align="left" />
      </div>
      <div className="activities-grid-new">
        {aboutContent.activities.map((activity) => (
          <article key={activity.title} className="activity-card-new">
            <div className="activity-icon-box">
              <span className="activity-icon">{activity.icon}</span>
            </div>
            <div className="activity-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* Achievements & Recognition */}
    <section className="shell">
      <div
        ref={(el) => { headingRefs.current.set('achievements', el); }}
        className={`section-heading-wrapper ${visibleHeadings.has('achievements') ? 'visible' : ''}`}
      >
        <SectionHeading eyebrow="Our Success" title="Achievements & Recognition" align="left" />
      </div>
      <div className="achievements-grid">
        {aboutContent.achievements.map((achievement) => (
          <article key={achievement.title} className="card achievement-card">
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </article>
        ))}
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

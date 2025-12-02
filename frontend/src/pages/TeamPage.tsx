import { useEffect, useRef, useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { teamMembers } from '../data/content';

const TeamPage = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, index) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
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
        { threshold: 0.2 }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Executives and officers stewarding every turnout."
        description="A cross-functional leadership collective spanning operations, finance, media, partnerships, and community impact."
      />

      <section className="shell" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <SectionHeading
          eyebrow="Leadership"
          title="Executive & officer profiles"
          description="Each leader runs dedicated dashboards with approvals, analytics, and automation."
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              ref={(el) => { cardRefs.current[index] = el; }}
              style={{
                backgroundColor: '#f9fafb',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.6s ease',
                cursor: 'pointer',
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(30px)'
              }}
              onMouseEnter={(e) => {
                if (visibleCards.includes(index)) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (visibleCards.includes(index)) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <div style={{
                width: '160px',
                height: '160px',
                margin: '0 auto 1.5rem',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                backgroundColor: '#e5e7eb'
              }}>
                <img
                  src={member.portrait}
                  alt={member.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: member.imagePosition || 'center center'
                  }}
                />
              </div>

              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                marginBottom: '0.25rem',
                color: '#111827'
              }}>{member.name}</h3>

              <p style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#1D68FE',
                marginBottom: '0.75rem'
              }}>{member.title}</p>

              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                lineHeight: '1.5',
                margin: 0
              }}>{member.focus}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default TeamPage;

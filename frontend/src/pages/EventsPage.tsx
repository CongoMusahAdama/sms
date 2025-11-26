import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { eventHighlights, upcomingEvents } from '../data/content';

const pastEvents = eventHighlights.map((event) => ({
  ...event,
  status: 'Completed',
  recap: 'Highlights, media drops, and Paystack reconciliation summary ready.',
}));

const EventsPage = () => (
  <>
    <PageHero
      eyebrow="Events"
      title="Upcoming programs, turnouts, and past outings."
      description="Automated reminders, FCM notifications, and Arkasel alerts keep members prepared."
    />

    <section className="shell">
      <SectionHeading
        eyebrow="Upcoming"
        title="Next society experiences"
        description="Route tracking, turnout outlines, and safety pods included."
      />
      <div className="events-container">
        <div className="event-grid">
          {[...upcomingEvents, ...eventHighlights].map((event) => (
            <article key={event.id} className="event-card">
              <div className="event-card-image">
                <img src={event.image} alt={event.title} loading="lazy" />
              </div>
              <div className="event-card-content">
                <p className="eyebrow">{event.type}</p>
                <h3>{event.title}</h3>
                {'location' in event && event.location && <p className="event-location">{event.location}</p>}
                {'route' in event && event.route && <p className="event-location">Route: {event.route}</p>}
                {'description' in event && event.description && <p className="event-description">{event.description}</p>}
                <div className="event-footer">
                  <span className="event-date">{event.date}</span>
                  <button type="button" className="primary-button event-details-btn">
                    View details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="shell">
      <SectionHeading eyebrow="Past outings" title="Recent programs with media recaps" />
      <div className="timeline">
        {pastEvents.map((event) => (
          <article key={`past-${event.id}`}>
            <h3>{event.title}</h3>
            <p>{event.recap}</p>
            <span>{event.status}</span>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default EventsPage;


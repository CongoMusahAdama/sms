import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { aboutContent } from '../data/content';

const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="Ready to collaborate with the Supreme Masqueraders Society?"
      description="Reach our community success team for partnerships, membership, and media requests."
    />

    <section className="shell contact-grid">
      <div className="card">
        <SectionHeading
          eyebrow="Connect"
          title="We are always listening"
          description={`Email ${aboutContent.contact.email} or call ${aboutContent.contact.phone}. Follow us on our social media platforms.`}
          align="left"
        />
        <div className="contact-meta">
          <div>
            <p className="eyebrow">HQ Address</p>
            <p>{aboutContent.contact.location}</p>
          </div>
          <div>
            <p className="eyebrow">Email</p>
            <p>{aboutContent.contact.email}</p>
          </div>
          <div>
            <p className="eyebrow">Phone</p>
            <p>{aboutContent.contact.phone}</p>
          </div>
        </div>
      </div>

      <form className="contact-form card">
        <label>
          Full name
          <input type="text" placeholder="Your full name" required />
        </label>
        <label>
          Email
          <input type="email" placeholder="your.email@example.com" required />
        </label>
        <label>
          Topic
          <select required>
            <option>Membership</option>
            <option>Branch partnership</option>
            <option>Media / press</option>
            <option>Vendors</option>
          </select>
        </label>
        <label>
          Message
          <textarea rows={4} placeholder="Let us know how we can collaborate." required />
        </label>
        <button type="submit" className="primary-button">
          Send inquiry
        </button>
      </form>
    </section>
  </>
);

export default ContactPage;


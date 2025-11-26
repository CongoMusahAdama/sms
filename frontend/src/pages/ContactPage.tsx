import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

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
          description="Email hello@suprememasq.org or call +233 55 123 4567. Follow @suprememasq on Instagram, TikTok, Twitter, and LinkedIn."
          align="left"
        />
        <div className="contact-meta">
          <div>
            <p className="eyebrow">HQ Address</p>
            <p>Heritage House, 12 Artists Lane, Accra</p>
          </div>
          <div>
            <p className="eyebrow">Partnerships</p>
            <p>partners@suprememasq.org</p>
          </div>
          <div>
            <p className="eyebrow">Media</p>
            <p>press@suprememasq.org</p>
          </div>
        </div>
      </div>

      <form className="contact-form card">
        <label>
          Full name
          <input type="text" placeholder="Ama K. / Branch officer" required />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@suprememasq.org" required />
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


import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { teamMembers } from '../data/content';

const TeamPage = () => (
  <>
    <PageHero
      eyebrow="Team"
      title="Executives and officers stewarding every turnout."
      description="A cross-functional leadership collective spanning operations, finance, media, partnerships, and community impact."
    />

    <section className="shell">
      <SectionHeading
        eyebrow="Leadership"
        title="Executive & officer profiles"
        description="Each leader runs dedicated dashboards with approvals, analytics, and automation."
      />
      <div className="team-grid">
        {teamMembers.map((member) => (
          <article key={member.name} className="team-card">
            <img src={member.portrait} alt={member.name} loading="lazy" />
            <h3>{member.name}</h3>
            <p className="eyebrow">{member.title}</p>
            <p>{member.focus}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default TeamPage;


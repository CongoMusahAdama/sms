import { Link } from 'react-router-dom';
import { type DashboardRole, dashboards } from '../../data/content';

type DashboardLayoutProps = {
  role: DashboardRole;
};

const roleTitles: Record<DashboardRole, string> = {
  member: 'Member',
  officer: 'Branch Officer',
  executive: 'Executive',
  admin: 'Administrator',
};

const DashboardLayout = ({ role }: DashboardLayoutProps) => {
  const config = dashboards[role];

  return (
    <section className="dashboard-shell">
      <aside>
        <div className="sidebar-header">
          <p className="eyebrow">{roleTitles[role]}</p>
          <h2>{config.title}</h2>
          <p>{config.subtitle}</p>
        </div>
        <nav>
          <ul>
            {config.sidebarLinks.map((link) => (
              <li key={link.label}>
                <span>{link.label}</span>
                {link.badge && <span className="pill">{link.badge}</span>}
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/" className="ghost-button secondary">
          Back to site
        </Link>
      </aside>

      <div className="dashboard-main">
        <div className="dashboard-grid">
          {config.stats.map((stat) => (
            <article key={stat.label} className="card">
              <p className="eyebrow">{stat.label}</p>
              <h3>{stat.value}</h3>
              {stat.trend && <p className="trend">{stat.trend}</p>}
            </article>
          ))}
        </div>

        <div className="dashboard-panels">
          <section>
            <h3>Highlights</h3>
            <ul>
              {config.highlights.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Priority actions</h3>
            <ul>
              {config.actions.map((action) => (
                <li key={action.label}>
                  <strong>{action.label}</strong>
                  <p>{action.helper}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;


import { useParams, Link } from 'react-router-dom';
import team from '../data/team.json';
import './TeamMember.css';

export default function TeamMember() {
  const { slug } = useParams();
  const member = team.find(m => m.slug === slug);

  if (!member) {
    return (
      <main className="team-member-page">
        <div className="tm-not-found">
          <p className="tm-eyebrow">Not found</p>
          <h1 className="tm-not-found-heading">Team member not found</h1>
          <Link to="/about" className="tm-back-link">← Meet the team</Link>
        </div>
      </main>
    );
  }

  const {
    name, role, qualifications, location,
    bio, awards = [], projects = [], image,
    email, linkedin,
  } = member;

  return (
    <main className="team-member-page">

      {/* ── Hero ─────────────────────────────────── */}
      <header className="tm-hero">
        <div className="tm-section-panel">
          <span className="tm-section-label">Our Team</span>
          <span className="tm-section-rule" />
        </div>

        <div className="tm-hero-body">
          <div className="tm-hero-text">
            <p className="tm-hero-role animate-in">{role}</p>
            <h1 className="tm-hero-name animate-in animate-in--delay-1">{name}</h1>
            <p className="tm-hero-quals animate-in animate-in--delay-2">{qualifications}</p>
          </div>

          <div className="tm-hero-portrait">
            <img
              src={image || `/assets/team/${slug}.jpg`}
              alt={name}
              className="tm-portrait-img"
              loading="eager"
            />
          </div>
        </div>
      </header>

      {/* ── Bio ──────────────────────────────────── */}
      <section className="tm-bio">
        <div className="tm-section-panel">
          <span className="tm-section-label">Biography</span>
          <span className="tm-section-rule" />
        </div>

        <div className="tm-bio-body">
          <div className="tm-bio-grid">
            <div className="tm-bio-meta">
              <dl className="tm-meta-list">
                <div className="tm-meta-item">
                  <dt className="tm-meta-label">Location</dt>
                  <dd className="tm-meta-value">{location}</dd>
                </div>
                {email && (
                  <div className="tm-meta-item">
                    <dt className="tm-meta-label">Email</dt>
                    <dd className="tm-meta-value">
                      <a href={`mailto:${email}`} className="tm-meta-link">{email}</a>
                    </dd>
                  </div>
                )}
                {linkedin && (
                  <div className="tm-meta-item">
                    <dt className="tm-meta-label">LinkedIn</dt>
                    <dd className="tm-meta-value">
                      <a href={linkedin} target="_blank" rel="noreferrer" className="tm-meta-link">
                        View profile →
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <p className="tm-bio-text">{bio}</p>
          </div>
        </div>
      </section>

      {/* ── Awards ───────────────────────────────── */}
      {awards.length > 0 && (
        <section className="tm-awards">
          <div className="tm-section-panel tm-section-panel--bone">
            <span className="tm-section-label">Awards &amp; Recognition</span>
            <span className="tm-section-rule" />
          </div>

          <div className="tm-awards-body">
            <ul className="tm-awards-list">
              {awards.map(award => (
                <li key={award} className="tm-award-item">
                  <span className="tm-award-dash">—</span>
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Projects ─────────────────────────────── */}
      {projects.length > 0 && (
        <section className="tm-projects">
          <div className="tm-section-panel">
            <span className="tm-section-label">Related Projects</span>
            <span className="tm-section-rule" />
          </div>

          <div className="tm-projects-body">
            <ul className="tm-projects-list">
              {projects.map(({ slug: pSlug, title }) => (
                <li key={pSlug}>
                  <Link to={`/projects/${pSlug}`} className="tm-project-link">
                    <span>{title}</span>
                    <span className="tm-project-arrow">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Nav ──────────────────────────────────── */}
      <nav className="tm-nav" aria-label="Team navigation">
        <div className="tm-section-panel">
          <span className="tm-section-label">Navigation</span>
          <span className="tm-section-rule" />
        </div>
        <div className="tm-nav-body">
          <Link to="/about" className="tm-back-btn">← Meet the team</Link>
          <Link to="/contact" className="tm-contact-btn">Get in touch</Link>
        </div>
      </nav>

    </main>
  );
}

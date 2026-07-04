import { useParams, Link } from 'react-router-dom';
import projects from '../data/caseStudies.json';
import './CaseStudyDetail.css';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <main className="case-study-detail-page">
        <div className="csd-not-found">
          <p className="csd-eyebrow">404</p>
          <h1 className="csd-not-found-heading">Project not found</h1>
          <Link to="/case-studies" className="csd-back-link">← All projects</Link>
        </div>
      </main>
    );
  }

  const {
    title, category, year, location, client,
    summary, challenge, solution, outcome,
    coverImage, galleryImages = [], tags = [],
    services = [], area, status,
  } = project;

  return (
    <main className="case-study-detail-page">

      {/* ── Hero ─────────────────────────────────── */}
      <header className="csd-hero">
        <div className="csd-section-panel">
          <span className="csd-section-label">{category}</span>
          <span className="csd-section-rule" />
        </div>

        <div className="csd-hero-body">
          <div className="csd-hero-meta">
            <span className="csd-meta-pill">{location}</span>
            <span className="csd-meta-pill">{year}</span>
            {tags.map(t => <span key={t} className="csd-meta-pill">{t}</span>)}
          </div>

          <h1 className="csd-hero-heading animate-in">{title}</h1>

          <p className="csd-hero-summary animate-in animate-in--delay-1">{summary}</p>
        </div>

        <div className="csd-hero-cover">
          <img
            src={coverImage || `/assets/case-studies/${slug}-cover.jpg`}
            alt={title}
            className="csd-cover-img"
            loading="eager"
          />
        </div>
      </header>

      {/* ── Project Info ──────────────────────────── */}
      <section className="csd-info">
        <div className="csd-section-panel">
          <span className="csd-section-label">Project Details</span>
          <span className="csd-section-rule" />
        </div>

        <div className="csd-info-body">
          <dl className="csd-info-grid">
            <div className="csd-info-item">
              <dt className="csd-info-label">Client</dt>
              <dd className="csd-info-value">{client}</dd>
            </div>
            <div className="csd-info-item">
              <dt className="csd-info-label">Location</dt>
              <dd className="csd-info-value">{location}</dd>
            </div>
            <div className="csd-info-item">
              <dt className="csd-info-label">Year</dt>
              <dd className="csd-info-value">{year}</dd>
            </div>
            <div className="csd-info-item">
              <dt className="csd-info-label">Category</dt>
              <dd className="csd-info-value">{category}</dd>
            </div>
            {area && (
              <div className="csd-info-item">
                <dt className="csd-info-label">Area</dt>
                <dd className="csd-info-value">{area}</dd>
              </div>
            )}
            {status && (
              <div className="csd-info-item">
                <dt className="csd-info-label">Status</dt>
                <dd className="csd-info-value">{status}</dd>
              </div>
            )}
            {services.length > 0 && (
              <div className="csd-info-item csd-info-item--wide">
                <dt className="csd-info-label">Services</dt>
                <dd className="csd-info-value">{services.join(', ')}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* ── Challenge ────────────────────────────── */}
      {challenge && (
        <section className="csd-body-section csd-challenge">
          <div className="csd-section-panel">
            <span className="csd-section-label">The Challenge</span>
            <span className="csd-section-rule" />
          </div>

          <div className="csd-body-content">
            <div className="csd-body-grid">
              <h2 className="csd-body-heading">
                The <em className="csd-highlight">brief</em>
              </h2>
              <p className="csd-body-text">{challenge}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery row 1 ────────────────────────── */}
      {galleryImages.length >= 2 && (
        <div className="csd-gallery-row">
          <div className="csd-gallery-img-wrap csd-gallery-img-wrap--tall">
            <img src={galleryImages[0]} alt="" className="csd-gallery-img" loading="lazy" />
          </div>
          <div className="csd-gallery-img-wrap">
            <img src={galleryImages[1]} alt="" className="csd-gallery-img" loading="lazy" />
          </div>
        </div>
      )}

      {/* ── Solution ─────────────────────────────── */}
      {solution && (
        <section className="csd-body-section csd-solution">
          <div className="csd-section-panel csd-section-panel--dark">
            <span className="csd-section-label csd-section-label--gold">Our Approach</span>
            <span className="csd-section-rule csd-section-rule--dim" />
          </div>

          <div className="csd-body-content csd-body-content--dark">
            <div className="csd-body-grid">
              <h2 className="csd-body-heading csd-body-heading--light">
                The <em className="csd-highlight">solution</em>
              </h2>
              <p className="csd-body-text csd-body-text--muted">{solution}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery row 2 ────────────────────────── */}
      {galleryImages.length >= 4 && (
        <div className="csd-gallery-row csd-gallery-row--3">
          {galleryImages.slice(2, 5).map((src, i) => (
            <div key={i} className="csd-gallery-img-wrap">
              <img src={src} alt="" className="csd-gallery-img" loading="lazy" />
            </div>
          ))}
        </div>
      )}

      {/* ── Outcome ──────────────────────────────── */}
      {outcome && (
        <section className="csd-body-section">
          <div className="csd-section-panel">
            <span className="csd-section-label">The Outcome</span>
            <span className="csd-section-rule" />
          </div>

          <div className="csd-body-content">
            <div className="csd-body-grid">
              <h2 className="csd-body-heading">
                The <em className="csd-highlight">result</em>
              </h2>
              <p className="csd-body-text">{outcome}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── Back / Next nav ──────────────────────── */}
      <nav className="csd-project-nav" aria-label="Project navigation">
        <div className="csd-section-panel">
          <span className="csd-section-label">Navigation</span>
          <span className="csd-section-rule" />
        </div>

        <div className="csd-project-nav-body">
          <Link to="/case-studies" className="csd-nav-link">
            <span className="csd-nav-arrow">←</span>
            <span>All projects</span>
          </Link>
          <Link to="/contact" className="csd-btn-primary">
            Start a project
          </Link>
        </div>
      </nav>

    </main>
  );
}

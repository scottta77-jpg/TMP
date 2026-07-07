import { useParams, Link } from 'react-router-dom';
import features from '../data/sustainableFeatures.json';
import caseStudies from '../data/caseStudies.json';
import './SustainableFeature.css';

export default function SustainableFeature() {
  const { slug } = useParams();
  const feature = features.find(f => f.slug === slug);

  if (!feature) {
    return (
      <main className="sustainable-feature-page">
        <div className="sf-not-found">
          <p className="sf-eyebrow">Not found</p>
          <h1 className="sf-not-found-heading">Feature not found</h1>
          <Link to="/" className="sf-back-link">← Home</Link>
        </div>
      </main>
    );
  }

  const {
    title, description, icon,
    relatedProjects = [], keyFacts = [],
    heroImage,
  } = feature;

  const related = relatedProjects
    .map(rSlug => caseStudies.find(p => p.slug === rSlug))
    .filter(Boolean);

  return (
    <main className="sustainable-feature-page">

      {/* ── Hero ─────────────────────────────────── */}
      <header className="sf-hero">
        <div className="sf-section-panel">
          <span className="sf-section-label">Sustainable Design</span>
          <span className="sf-section-rule" />
        </div>

        <div className="sf-hero-body">
          <p className="sf-hero-eyebrow animate-in">Sustainability feature</p>
          <h1 className="sf-hero-title animate-in animate-in--delay-1">
            {title}
          </h1>
        </div>

        {heroImage && (
          <div className="sf-hero-cover">
            <img
              src={heroImage}
              alt={title}
              className="sf-cover-img"
              loading="eager"
            />
          </div>
        )}
      </header>

      {/* ── Description ──────────────────────────── */}
      <section className="sf-desc">
        <div className="sf-section-panel">
          <span className="sf-section-label">Overview</span>
          <span className="sf-section-rule" />
        </div>

        <div className="sf-desc-body">
          <div className="sf-desc-grid">
            <p className="sf-desc-intro">{description}</p>

            {keyFacts.length > 0 && (
              <ul className="sf-facts">
                {keyFacts.map((fact, i) => (
                  <li key={i} className="sf-fact-item">
                    <span className="sf-fact-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="sf-fact-text">{fact}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* ── Related projects ─────────────────────── */}
      {related.length > 0 && (
        <section className="sf-related">
          <div className="sf-section-panel sf-section-panel--bone">
            <span className="sf-section-label">Featured in</span>
            <span className="sf-section-rule" />
          </div>

          <div className="sf-related-body">
            <ul className="sf-related-grid">
              {related.map(({ slug: pSlug, title: pTitle, category, year, coverImage }) => (
                <li key={pSlug}>
                  <Link to={`/projects/${pSlug}`} className="sf-related-card">
                    <div className="sf-related-img-wrap">
                      <img
                        src={coverImage || `/assets/case-studies/${pSlug}-cover.jpg`}
                        alt={pTitle}
                        className="sf-related-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="sf-related-labels">
                      <span className="sf-label-pill">{pTitle}</span>
                      <span className="sf-label-pill">{category} · {year}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── All features nav ─────────────────────── */}
      <section className="sf-all-features">
        <div className="sf-section-panel">
          <span className="sf-section-label">All sustainability features</span>
          <span className="sf-section-rule" />
        </div>

        <div className="sf-all-body">
          <ul className="sf-all-list">
            {features.filter(f => f.slug !== slug).map(f => (
              <li key={f.slug}>
                <Link to={`/sustainable-features/${f.slug}`} className="sf-all-link">
                  <span>{f.title}</span>
                  <span className="sf-all-arrow">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}

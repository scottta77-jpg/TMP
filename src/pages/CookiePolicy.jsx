import { Link } from 'react-router-dom';
import './Legal.css';

const COOKIE_TYPES = [
  {
    name: 'Strictly necessary',
    purpose: 'Required for the website to function. Cannot be disabled.',
    examples: 'Session cookies, security tokens.',
    canOptOut: false,
  },
  {
    name: 'Analytics',
    purpose: 'Help us understand how visitors use the site so we can improve it.',
    examples: 'Google Analytics (anonymised IP).',
    canOptOut: true,
  },
  {
    name: 'Functional',
    purpose: 'Remember your preferences and personalise your experience.',
    examples: 'Language preference, newsletter opt-in state.',
    canOptOut: true,
  },
  {
    name: 'Marketing',
    purpose: 'Track visits to help us show relevant content on other platforms.',
    examples: 'LinkedIn Insight Tag.',
    canOptOut: true,
  },
];

export default function CookiePolicy() {
  return (
    <main className="cookie-policy-page legal-page">

      <header className="legal-hero">
        <div className="legal-section-panel">
          <span className="legal-section-label">Legal</span>
          <span className="legal-section-rule" />
        </div>

        <div className="legal-hero-body">
          <p className="legal-hero-eyebrow animate-in">Last updated: 1 January 2025</p>
          <h1 className="legal-hero-heading animate-in animate-in--delay-1">
            Cookie <em className="legal-highlight">Policy</em>
          </h1>
        </div>
      </header>

      <div className="legal-body">
        <div className="legal-section-panel">
          <span className="legal-section-rule" />
        </div>

        <article className="legal-content">

          <section className="legal-block">
            <h2 className="legal-h2">What are cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help
              the site remember information about your visit, which can make it easier to visit again
              and make the site more useful to you.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">How we use cookies</h2>
            <p>
              We use cookies to understand how visitors interact with our website, to provide a better
              experience, and to support our marketing efforts. The table below describes the types of
              cookies we use.
            </p>
          </section>

          {/* Cookie table */}
          <section className="legal-block">
            <h2 className="legal-h2">Cookie types</h2>
            <div className="cookie-table-wrap">
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Purpose</th>
                    <th>Examples</th>
                    <th>Can you opt out?</th>
                  </tr>
                </thead>
                <tbody>
                  {COOKIE_TYPES.map(({ name, purpose, examples, canOptOut }) => (
                    <tr key={name}>
                      <td className="cookie-type-name">{name}</td>
                      <td>{purpose}</td>
                      <td>{examples}</td>
                      <td className={canOptOut ? 'cookie-yes' : 'cookie-no'}>
                        {canOptOut ? 'Yes' : 'No'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">Managing cookies</h2>
            <p>
              You can control and delete cookies through your browser settings. Note that disabling
              cookies may affect the functionality of this website. Most browsers allow you to refuse
              all cookies or accept only certain types.
            </p>
            <p>
              For more information on managing cookies, visit{' '}
              <a href="https://www.aboutcookies.org" target="_blank" rel="noreferrer" className="legal-link">
                aboutcookies.org
              </a>.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">Contact</h2>
            <p>
              Questions about cookies? Email us at{' '}
              <a href="mailto:tonyp@tmparchitecture.co.uk" className="legal-link">
                tonyp@tmparchitecture.co.uk
              </a>.
            </p>
          </section>

        </article>

        <nav className="legal-nav">
          <Link to="/" className="legal-nav-link">← Home</Link>
          <div className="legal-nav-links">
            <Link to="/privacy-policy" className="legal-nav-link">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="legal-nav-link">Terms &amp; Conditions</Link>
          </div>
        </nav>
      </div>

    </main>
  );
}

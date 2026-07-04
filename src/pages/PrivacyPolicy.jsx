import { Link } from 'react-router-dom';
import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <main className="privacy-policy-page legal-page">

      <header className="legal-hero">
        <div className="legal-section-panel">
          <span className="legal-section-label">Legal</span>
          <span className="legal-section-rule" />
        </div>

        <div className="legal-hero-body">
          <p className="legal-hero-eyebrow animate-in">Last updated: 1 January 2025</p>
          <h1 className="legal-hero-heading animate-in animate-in--delay-1">
            Privacy <em className="legal-highlight">Policy</em>
          </h1>
        </div>
      </header>

      <div className="legal-body">
        <div className="legal-section-panel">
          <span className="legal-section-rule" />
        </div>

        <article className="legal-content">

          <section className="legal-block">
            <h2 className="legal-h2">1. Who we are</h2>
            <p>
              Herbert &amp; Crown Architects Ltd ("we", "us", "our") is registered in England and
              Wales. Our registered office is 12 Cloth Fair, Barbican, London EC1A 7JQ. We are the
              data controller for the personal data described in this policy.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">2. What data we collect</h2>
            <p>We may collect and process the following personal data about you:</p>
            <ul className="legal-list">
              <li>Name, email address, phone number, and company name provided via our contact form or newsletter sign-up.</li>
              <li>Technical data including IP address, browser type, and pages visited, collected via analytics tools.</li>
              <li>Correspondence you send us by email or post.</li>
            </ul>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">3. How we use your data</h2>
            <p>We use personal data to:</p>
            <ul className="legal-list">
              <li>Respond to enquiries and manage our client relationship with you.</li>
              <li>Send you our newsletter where you have opted in.</li>
              <li>Improve our website and understand how visitors use it.</li>
              <li>Comply with our legal and regulatory obligations.</li>
            </ul>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">4. Legal basis for processing</h2>
            <p>
              We process your data on the basis of legitimate interests (responding to enquiries,
              maintaining client relationships), consent (newsletter), and legal obligation where
              applicable.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">5. How long we keep your data</h2>
            <p>
              We retain personal data for as long as necessary to fulfil the purposes for which it
              was collected, or as required by law. Enquiry data is retained for 3 years from last
              contact. Newsletter subscriber data is retained until you unsubscribe.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">6. Your rights</h2>
            <p>
              Under UK GDPR you have the right to access, rectify, erase, restrict, or object to
              processing of your personal data, and the right to data portability. To exercise any
              of these rights, contact us at{' '}
              <a href="mailto:privacy@herbertandcrown.com" className="legal-link">
                privacy@herbertandcrown.com
              </a>.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">7. Cookies</h2>
            <p>
              We use cookies and similar technologies. Please see our{' '}
              <Link to="/cookies" className="legal-link">Cookie Policy</Link>{' '}
              for details.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">8. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The date at the top of this page
              indicates when it was last revised. Continued use of our website after changes
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">9. Contact us</h2>
            <p>
              For any privacy-related queries, please contact{' '}
              <a href="mailto:privacy@herbertandcrown.com" className="legal-link">
                privacy@herbertandcrown.com
              </a>{' '}
              or write to us at our registered office address above.
            </p>
          </section>

        </article>

        <nav className="legal-nav">
          <Link to="/" className="legal-nav-link">← Home</Link>
          <div className="legal-nav-links">
            <Link to="/terms-and-conditions" className="legal-nav-link">Terms &amp; Conditions</Link>
            <Link to="/cookies" className="legal-nav-link">Cookie Policy</Link>
          </div>
        </nav>
      </div>

    </main>
  );
}

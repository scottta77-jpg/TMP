import { Link } from 'react-router-dom';
import './Legal.css';

export default function TermsAndConditions() {
  return (
    <main className="terms-and-conditions-page legal-page">

      <header className="legal-hero">
        <div className="legal-section-panel">
          <span className="legal-section-label">Legal</span>
          <span className="legal-section-rule" />
        </div>

        <div className="legal-hero-body">
          <p className="legal-hero-eyebrow animate-in">Last updated: 1 January 2025</p>
          <h1 className="legal-hero-heading animate-in animate-in--delay-1">
            Terms &amp; <em className="legal-highlight">Conditions</em>
          </h1>
        </div>
      </header>

      <div className="legal-body">
        <div className="legal-section-panel">
          <span className="legal-section-rule" />
        </div>

        <article className="legal-content">

          <section className="legal-block">
            <h2 className="legal-h2">1. Introduction</h2>
            <p>
              These terms and conditions govern your use of the Herbert &amp; Crown Architects Ltd
              website and any services we provide. By accessing this website, you agree to these
              terms in full.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">2. Intellectual property</h2>
            <p>
              All content on this website — including text, images, drawings, and design — is the
              intellectual property of Herbert &amp; Crown Architects Ltd or is used with permission.
              You may not reproduce, distribute, or transmit any content without prior written consent.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">3. Professional services</h2>
            <p>
              Architectural services are governed by separate appointment documents between Herbert
              &amp; Crown Architects Ltd and the client. Nothing on this website constitutes
              professional advice, and we accept no liability arising from reliance on website content
              without a formal appointment.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">4. Limitation of liability</h2>
            <p>
              To the extent permitted by law, Herbert &amp; Crown Architects Ltd shall not be liable
              for any indirect, incidental, or consequential loss arising from use of or inability to
              use this website or its content.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">5. Third-party links</h2>
            <p>
              This website may contain links to third-party websites. We are not responsible for the
              content, privacy practices, or accuracy of any linked sites.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">6. Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes shall be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="legal-block">
            <h2 className="legal-h2">7. Changes</h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of the website
              after changes are posted constitutes acceptance.
            </p>
          </section>

        </article>

        <nav className="legal-nav">
          <Link to="/" className="legal-nav-link">← Home</Link>
          <div className="legal-nav-links">
            <Link to="/privacy-policy" className="legal-nav-link">Privacy Policy</Link>
            <Link to="/cookies" className="legal-nav-link">Cookie Policy</Link>
          </div>
        </nav>
      </div>

    </main>
  );
}

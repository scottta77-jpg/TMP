import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found-page">

      <div className="nf-section-panel">
        <span className="nf-section-label">404</span>
        <span className="nf-section-rule" />
      </div>

      <div className="nf-body">
        <div className="nf-content">
          <p className="nf-code animate-in">404</p>
          <h1 className="nf-heading animate-in animate-in--delay-1">
            Page not <em className="nf-highlight">found</em>
          </h1>
          <p className="nf-sub animate-in animate-in--delay-2">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="nf-actions animate-in animate-in--delay-3">
            <Link to="/" className="nf-btn-primary">← Back to home</Link>
            <Link to="/case-studies" className="nf-btn-secondary">View our work</Link>
            <Link to="/contact" className="nf-btn-secondary">Get in touch</Link>
          </div>
        </div>

        <div className="nf-bg-text" aria-hidden="true">404</div>
      </div>

    </main>
  );
}

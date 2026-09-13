import React from 'react';
import { Link } from 'react-router-dom';

export default function RealLifeStoryCard({
  badge = "REAL-LIFE SCENARIO",
  title,
  icon = "bi-exclamation-diamond-fill",
  scenarioText,
  withoutProtection,
  withAvsProtection,
  claimAssistancePerk = "With AVS Prosperity Consultancy, claim process assistance becomes easy, fast & 100% smooth.",
  ctaText = "Get Protected Now",
  ctaLink = "#consultation-form"
}) {
  return (
    <div className="card border-0 rounded-4 shadow-sm overflow-hidden mb-5 bg-white position-relative" style={{ borderLeft: '5px solid #C9A24D' }}>
      <div className="card-body p-4 p-md-5">
        
        {/* Header Badge & Title */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="badge px-3 py-2 rounded-pill bg-gold-subtle text-gold-accent fw-bold text-uppercase fs-8 tracking-wider">
            <i className={`bi ${icon} me-1`}></i> {badge}
          </span>
          <span className="text-muted fs-8 font-serif">Why This Matters in Real Life</span>
        </div>

        <h3 className="display-6 font-playfair text-emerald fw-bold mb-4">
          {title}
        </h3>

        {/* Narrative Box */}
        <div className="p-4 rounded-3 mb-4" style={{ backgroundColor: '#F8F6F0', border: '1px solid #DDD8CC' }}>
          <p className="text-dark font-serif fs-6 leading-relaxed mb-0">
            {scenarioText}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="p-3 rounded-3 h-100" style={{ backgroundColor: '#FFF5F5', border: '1px solid #FED7D7' }}>
              <div className="d-flex align-items-center text-danger fw-bold mb-2">
                <i className="bi bi-x-circle-fill me-2 fs-5"></i> Without Insurance
              </div>
              <p className="text-muted fs-7 mb-0">
                {withoutProtection}
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-3 rounded-3 h-100" style={{ backgroundColor: '#F0FFF4', border: '1px solid #C6F6D5' }}>
              <div className="d-flex align-items-center text-success fw-bold mb-2">
                <i className="bi bi-check-circle-fill me-2 fs-5"></i> With AVS Guidance
              </div>
              <p className="text-muted fs-7 mb-0">
                {withAvsProtection}
              </p>
            </div>
          </div>
        </div>

        {/* AVS Claim Assistance Guarantee */}
        <div className="p-3 rounded-3 mb-4 text-white d-flex align-items-center gap-3 flex-wrap flex-md-nowrap" style={{ backgroundColor: '#0B1F33' }}>
          <div className="icon-circle bg-gold-subtle text-gold-accent flex-shrink-0" style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="bi bi-headset fs-4"></i>
          </div>
          <div>
            <h5 className="text-gold-accent font-playfair mb-1 fw-bold">AVS Claim Assistance Support</h5>
            <p className="text-light-opacity fs-7 mb-0">
              {claimAssistancePerk}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <span className="text-muted fs-7">
            <i className="bi bi-shield-lock-fill text-gold-accent me-1"></i> Tailored coverage built for your family's exact needs.
          </span>
          {ctaLink.startsWith('#') ? (
            <a href={ctaLink} className="btn btn-gold rounded-pill px-4 py-2 text-dark fw-bold">
              {ctaText} <i className="bi bi-arrow-down-circle ms-1"></i>
            </a>
          ) : (
            <Link to={ctaLink} className="btn btn-gold rounded-pill px-4 py-2 text-dark fw-bold">
              {ctaText} <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}

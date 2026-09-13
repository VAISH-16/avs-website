import React from 'react';
import { trackEvent } from '../utils/analytics';

export default function FinalCTASection({ onOpenModal }) {
  const handleConsultationClick = () => {
    trackEvent('final_cta_click', { cta: 'BOOK A CONSULTATION' });
    if (onOpenModal) {
      onOpenModal('Final CTA Consultation');
    }
  };

  return (
    <section className="final-cta-section section py-5 dark-background text-light position-relative" style={{ backgroundColor: '#0B1F33' }}>
      <div className="container py-5 text-center">
        <div className="row justify-content-center py-4">
          <div className="col-lg-8">

            {/* Eyebrow / Small accent line */}
            <div className="luxury-divider mx-auto mb-4" style={{ height: '2px', width: '60px', background: '#C9A24D' }}></div>

            {/* Main Heading */}
            <h2 className="display-3 font-serif text-white fw-bold mb-4" style={{ letterSpacing: '-0.01em', lineHeight: '1.2' }}>
              YOUR FINANCIAL FUTURE<br />
              <span style={{ color: '#C9A24D' }}>DESERVES A PLAN.</span>
            </h2>

            {/* Subquote */}
            <p className="lead font-serif text-light-opacity mb-5 fs-4 fst-italic" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              “Let's start with a conversation.”
            </p>

            {/* CTA Button */}
            <div>
              <button
                onClick={handleConsultationClick}
                className="btn btn-luxury-gold px-5 py-3 text-uppercase tracking-wider fw-bold shadow-sm fs-6 d-inline-flex align-items-center gap-2"
                style={{ background: '#C9A24D', color: '#0B1F33', border: 'none', borderRadius: '30px' }}
              >
                BOOK A CONSULTATION &rarr;
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


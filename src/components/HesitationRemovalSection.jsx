import React from 'react';
import { trackEvent } from '../utils/analytics';

export default function HesitationRemovalSection({ onOpenModal }) {
  const handlePrimaryClick = () => {
    trackEvent('hesitation_cta_click', { cta: 'TALK TO AN ADVISOR' });
    if (onOpenModal) {
      onOpenModal('General Advisory');
    }
  };

  const handleSecondaryClick = () => {
    trackEvent('hesitation_cta_click', { cta: 'REQUEST A CALLBACK' });
    if (onOpenModal) {
      onOpenModal('Callback Request');
    }
  };

  return (
    <section className="section py-5 bg-white position-relative border-bottom border-gold-subtle">
      <div className="container py-4">

        <div className="p-4 p-md-5 rounded-4 text-white shadow-lg border border-gold-accent position-relative overflow-hidden" style={{ background: '#0B1F33' }}>

          {/* Subtle Background Icon */}


          <div className="row justify-content-center text-center position-relative" style={{ zIndex: 2 }}>
            <div className="col-lg-10 col-xl-9">

              <span className="badge bg-gold-accent font-sans fs-8 tracking-widest uppercase mb-3 px-3 py-2 fw-bold" style={{ background: '#C9A24D', color: '#0B1F33' }}>
                NO PRIOR PRODUCT KNOWLEDGE REQUIRED
              </span>

              <h2 className="display-4 font-playfair text-white fw-bold mb-3">
                Not Sure Where to Start?
              </h2>

              <div className="luxury-divider mx-auto mb-4 bg-gold-accent" style={{ height: '2px', width: '80px', background: '#C9A24D' }}></div>

              <p className="display-6 font-serif text-gold-accent fw-medium mb-3 leading-snug" style={{ color: '#DFBF77' }}>
                "You don't need to know which financial product you need before speaking with us."
              </p>

              <p className="lead font-sans text-light-opacity mb-4 fs-5">
                Just tell us your goal. We'll help you understand the next step.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                <button
                  onClick={handlePrimaryClick}
                  className="btn btn-luxury-gold px-5 py-3 text-uppercase tracking-wider fw-bold shadow-sm fs-6"
                  style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                >
                  TALK TO AN ADVISOR &rarr;
                </button>

                <button
                  onClick={handleSecondaryClick}
                  className="btn btn-outline-light px-5 py-3 text-uppercase tracking-wider fw-semibold fs-6"
                >
                  REQUEST A CALLBACK &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

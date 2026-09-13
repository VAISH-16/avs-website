import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function FounderSection({ onOpenModal }) {
  return (
    <section className="section py-5 position-relative border-bottom border-gold-subtle" style={{ backgroundColor: '#F8F6F0' }}>
      <div className="container py-5">
        <div className="row align-items-center gy-5">

          {/* Founder Photo Left */}
          <div className="col-lg-5">
            <div className="position-relative text-center text-lg-start">
              <div
                className="overflow-hidden shadow-md border border-gold-subtle d-inline-block"
                style={{ borderRadius: '20px', backgroundColor: '#FFFFFF', padding: '8px' }}
              >
                <img
                  src="/assets/img/archana_photo.jpg"
                  alt="Archana Ssalunkhe - Founder &amp; Wealth Strategist | AMFI-Registered Mutual Fund Distributor | IRDAI-Certified Insurance Professional"
                  className="img-fluid rounded-4 object-fit-cover"
                  style={{ maxHeight: '420px', width: '100%', objectPosition: 'top center' }}
                />
              </div>
            </div>
          </div>

          {/* Content Right */}
          <div className="col-lg-7">
            <div className="ps-lg-4">

              {/* Eyebrow */}
              <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold d-block mb-3" style={{ color: '#C9A24D', letterSpacing: '0.2em' }}>
                MEET THE FOUNDER
              </span>

              {/* Name & Role */}
              <h2 className="display-4 font-serif fw-bold mb-1" style={{ color: '#0B1F33' }}>
                ARCHANA SSALUNKHE
              </h2>
              <p className="fs-6 font-sans text-uppercase tracking-wider fw-semibold mb-1" style={{ color: '#C9A24D', letterSpacing: '0.12em' }}>
                Founder &amp; Wealth Strategist
              </p>
              <p className="fs-7 font-sans text-uppercase tracking-wider fw-semibold mb-4" style={{ color: '#5F6B73', letterSpacing: '0.05em' }}>
                AMFI-Registered Mutual Fund Distributor | IRDAI-Certified Insurance Professional
              </p>

              {/* Quote */}
              <blockquote className="lead font-serif mb-4 fst-italic ps-3 border-start" style={{ borderColor: '#C9A24D', borderWidth: '2px', color: '#0B1F33' }}>
                “We don’t just plan for wealth. We plan for the life it enables.”
              </blockquote>

              {/* Short 2-3 line introduction */}
              <p className="font-sans text-muted mb-4 fs-6" style={{ color: '#5F6B73', lineHeight: '1.7', maxWidth: '600px' }}>
                Archana Ssalunkhe provides personalized financial guidance across risk protection, capital growth, and wealth management. With a commitment to clarity, integrity, and personal trust, she helps families and businesses secure their financial legacy.
              </p>

              {/* CTA */}
              <div>
                <Link
                  to="/about"
                  onClick={() => trackEvent('founder_meet_click')}
                  className="btn btn-luxury-gold px-4 py-3 text-uppercase tracking-wider fw-bold shadow-sm d-inline-flex align-items-center gap-2"
                  style={{ background: '#C9A24D', color: '#0B1F33', border: 'none', borderRadius: '30px' }}
                >
                  MEET THE FOUNDER &rarr;
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


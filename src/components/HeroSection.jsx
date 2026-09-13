import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function HeroSection({ onOpenModal }) {
  const handleConsultationClick = () => {
    trackEvent('hero_cta_click', { cta: 'BOOK A CONSULTATION' });
    if (onOpenModal) {
      onOpenModal("General Consultation");
    }
  };

  const handleServicesClick = () => {
    trackEvent('hero_cta_click', { cta: 'EXPLORE SERVICES' });
  };

  return (
    <section 
      id="hero" 
      className="hero-split-clean section position-relative overflow-hidden d-flex align-items-center"
      style={{ 
        minHeight: '88vh', 
        paddingTop: '7rem', 
        paddingBottom: '5rem', 
        backgroundColor: '#F8F6F0' 
      }}
    >
      <div className="container-fluid container-xl">
        <div className="row align-items-center g-5">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="col-lg-6">
            <div className="hero-content pe-lg-4">
              
              {/* Small eyebrow */}
              <div className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-1.5 rounded-pill bg-gold-subtle border border-gold-accent shadow-sm">
                <i className="bi bi-patch-check-fill text-gold-accent fs-6"></i>
                <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold" style={{ color: '#0B1F33', letterSpacing: '0.12em' }}>
                  ISO 9001:2015 CERTIFIED COMPANY
                </span>
              </div>

              {/* Main heading */}
              <h1 
                className="display-3 font-serif fw-bold mb-4 hero-title leading-tight" 
                style={{ color: '#0B1F33', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
              >
                BUILDING PROSPERITY.<br />
                <span style={{ color: '#C9A24D' }}>PROTECTING WHAT MATTERS.</span>
              </h1>

              {/* Supporting text */}
              <p 
                className="lead font-serif mb-5 hero-subtitle fs-4 fst-italic" 
                style={{ color: '#5F6B73', maxWidth: '580px', lineHeight: '1.6' }}
              >
                “Insurance, investments and financial planning designed around your goals and future.”
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3">
                <button 
                  onClick={handleConsultationClick}
                  className="btn btn-luxury-gold px-4 py-3 text-uppercase tracking-wider fw-bold shadow-sm d-inline-flex align-items-center gap-2"
                  style={{ background: '#C9A24D', color: '#0B1F33', border: 'none', borderRadius: '30px' }}
                >
                  BOOK A CONSULTATION &rarr;
                </button>
                
                <Link 
                  to="/services"
                  onClick={handleServicesClick}
                  className="btn btn-outline-emerald px-4 py-3 text-uppercase tracking-wider fw-semibold d-inline-flex align-items-center gap-2"
                  style={{ borderColor: '#0B1F33', color: '#0B1F33', borderRadius: '30px' }}
                >
                  EXPLORE SERVICES &rarr;
                </Link>
              </div>

            </div>
          </div>

          {/* RIGHT ONE ELEGANT VISUAL */}
          <div className="col-lg-6">
            <div className="hero-image-wrap position-relative">
              <div 
                className="hero-img-frame shadow-lg overflow-hidden border border-gold-subtle"
                style={{ borderRadius: '24px', backgroundColor: '#FFFFFF', padding: '8px' }}
              >
                <img
                  src="/assets/img/hero_main.png"
                  alt="Archana Ssalunkhe - Founder &amp; Wealth Strategist | AMFI-Registered Mutual Fund Distributor | IRDAI-Certified Insurance Professional"
                  className="img-fluid w-100 rounded-4 shadow-sm"
                  style={{ height: 'auto', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


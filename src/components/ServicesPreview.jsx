import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function ServicesPreview({ onOpenModal }) {
  const pillars = [
    {
      title: 'INSURANCE',
      tagline: 'Protect What Matters',
      icon: 'bi-shield-check',
      description: 'Comprehensive risk protection spanning health, life, motor, travel, and corporate business assets.',
      link: '/insurance',
      requirement: 'Insurance & Protection'
    },
    {
      title: 'INVESTMENTS',
      tagline: 'Grow What Matters',
      icon: 'bi-graph-up-arrow',
      description: 'Structured wealth accumulation utilizing disciplined mutual fund SIPs, fixed yield bonds, and capital growth.',
      link: '/investments',
      requirement: 'Investment Planning'
    },
    {
      title: 'FINANCIAL PLANNING',
      tagline: 'Plan What Matters',
      icon: 'bi-compass',
      description: 'Personalized roadmap for retirement, child education, tax optimization, and long-term legacy goals.',
      link: '/personal-finance',
      requirement: 'Financial Planning'
    }
  ];

  return (
    <section className="section py-5 position-relative border-bottom border-gold-subtle" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-5">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold d-block mb-2" style={{ color: '#C9A24D', letterSpacing: '0.2em' }}>
              OUR SERVICES
            </span>
            <h2 className="display-4 font-serif text-emerald fw-bold mb-3" style={{ color: '#0B1F33' }}>
              THREE PILLARS.<br />
              <span style={{ color: '#C9A24D' }}>ONE FINANCIAL JOURNEY.</span>
            </h2>
            <div className="luxury-divider mx-auto mb-4" style={{ width: '60px', height: '2px', backgroundColor: '#C9A24D' }}></div>
          </div>
        </div>

        {/* 3 Premium Pillar Cards */}
        <div className="row g-4 justify-content-center">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div 
                className="pillar-card p-4 p-xl-5 rounded-4 bg-white border border-gold-subtle shadow-sm h-100 d-flex flex-column transition-all hover-lift"
                style={{ borderRadius: '20px', transition: 'all 0.35s ease' }}
              >
                
                {/* Icon & Eyebrow */}
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '56px', height: '56px', backgroundColor: 'rgba(201, 162, 77, 0.12)', border: '1px solid rgba(201, 162, 77, 0.3)' }}
                  >
                    <i className={`bi ${pillar.icon} fs-3`} style={{ color: '#C9A24D' }}></i>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-serif fw-bold h3 mb-2" style={{ color: '#0B1F33' }}>
                  {pillar.title}
                </h3>

                {/* Tagline / Subtitle */}
                <span className="fs-7 font-sans fw-bold text-uppercase tracking-wider d-block mb-3" style={{ color: '#C9A24D', letterSpacing: '0.08em' }}>
                  {pillar.tagline}
                </span>

                {/* Short Description */}
                <p className="font-sans text-muted fs-6 mb-4 flex-fill" style={{ color: '#5F6B73', lineHeight: '1.65' }}>
                  {pillar.description}
                </p>

                {/* Explore CTA Link */}
                <div className="mt-auto pt-3 border-top border-gold-subtle">
                  <Link 
                    to={pillar.link}
                    onClick={() => trackEvent('explore_pillar_click', { pillar: pillar.title })}
                    className="d-inline-flex align-items-center gap-2 font-sans text-uppercase tracking-wider fw-bold fs-7 text-decoration-none"
                    style={{ color: '#0B1F33' }}
                  >
                    Explore &rarr;
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


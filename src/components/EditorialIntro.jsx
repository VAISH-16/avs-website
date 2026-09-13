import React from 'react';
import { trackEvent } from '../utils/analytics';

export default function EditorialIntro({ onOpenModal }) {
  const principles = [
    {
      title: 'PERSONALIZED',
      desc: 'Guidance around your goals.',
      icon: 'bi-person-gear'
    },
    {
      title: 'HOLISTIC',
      desc: 'Prosperity and protection considered together.',
      icon: 'bi-intersect'
    },
    {
      title: 'SIMPLE',
      desc: 'Understand your options before deciding.',
      icon: 'bi-lightbulb'
    },
    {
      title: 'LONG-TERM',
      desc: 'Support beyond the initial transaction.',
      icon: 'bi-infinity'
    }
  ];

  const handleCTAClick = () => {
    trackEvent('editorial_cta_click', { cta: 'TALK TO AN ADVISOR' });
    if (onOpenModal) {
      onOpenModal('Personalized Advisory');
    }
  };

  return (
    <section className="section py-5 bg-ivory position-relative border-bottom border-gold-subtle">
      <div className="container py-4">
        
        {/* Editorial Heading */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-9 col-xl-8">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-3">
              OUR ADVISORY PHILOSOPHY
            </span>
            <h2 className="display-4 font-playfair text-emerald fw-bold mb-4">
              Financial Decisions Deserve a Conversation.
            </h2>
            <div className="luxury-divider mx-auto mb-4"></div>
            <p className="lead font-serif text-secondary mb-3 fs-4">
              Your goals, responsibilities and future are unique. Your financial strategy should be too.
            </p>
            <p className="font-sans text-muted fs-6 mb-0">
              At AVS Prosperity Consultancy, we focus on understanding your needs before helping you explore suitable financial solutions.
            </p>
          </div>
        </div>

        {/* 4 Advisory Principles */}
        <div className="row g-4 mb-5">
          {principles.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="p-4 rounded-4 bg-white border border-gold-subtle shadow-sm h-100 d-flex flex-column text-center">
                <div className="d-inline-flex align-items-center justify-content-center bg-gold-subtle text-emerald rounded-circle mx-auto mb-3" style={{ width: '56px', height: '56px' }}>
                  <i className={`bi ${item.icon} fs-3 text-gold-accent`}></i>
                </div>
                <h3 className="font-playfair text-emerald fw-bold fs-5 tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-muted fs-7 mb-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={handleCTAClick}
            className="btn btn-luxury-gold px-5 py-3 text-uppercase tracking-wider fw-bold shadow-sm"
            style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
          >
            TALK TO AN ADVISOR &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}

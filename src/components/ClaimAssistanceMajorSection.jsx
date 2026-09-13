import React from 'react';
import { trackEvent } from '../utils/analytics';

export default function ClaimAssistanceMajorSection({ onOpenModal }) {
  const steps = [
    { num: '01', title: 'CLAIM', desc: 'Notify us immediately when an event occurs.' },
    { num: '02', title: 'DOCUMENTATION', desc: 'Guidance on collecting precise claim paperwork.' },
    { num: '03', title: 'SUBMISSION', desc: 'Filing complete dossiers with insurer claim desks.' },
    { num: '04', title: 'FOLLOW-UP', desc: 'Active follow-up with desk managers & surveyors.' },
    { num: '05', title: 'SETTLEMENT SUPPORT', desc: 'Client advocacy through final claim settlement.' }
  ];

  const handleCTAClick = () => {
    trackEvent('claim_assistance_click', { cta: 'REQUEST CLAIM ASSISTANCE' });
    if (onOpenModal) {
      onOpenModal('Claim Assistance');
    }
  };

  return (
    <section className="section py-5 bg-white position-relative border-bottom border-gold-subtle">
      <div className="container py-4">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              CLIENT ADVOCACY DESK
            </span>
            <h2 className="display-4 font-playfair text-emerald fw-bold mb-3">
              When You Need Your Insurance, We're Here.
            </h2>
            <div className="luxury-divider mx-auto mb-4"></div>
            <p className="lead font-serif text-secondary mb-0">
              Insurance isn't just about buying a policy. It's about having support when you need to use it.
            </p>
          </div>
        </div>

        {/* 5-Step Visual Claim Process */}
        <div className="row g-3 g-lg-4 mb-5 justify-content-center">
          {steps.map((step, idx) => (
            <div key={idx} className="col-6 col-md-4 col-lg">
              <div className="p-3 rounded-3 bg-ivory border border-gold-subtle text-center h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="fs-8 text-uppercase tracking-widest text-gold-accent fw-bold d-block mb-1">
                    STEP {step.num}
                  </span>
                  <h3 className="font-playfair text-emerald fw-bold fs-7 mb-2 uppercase">
                    {step.title}
                  </h3>
                </div>
                <p className="font-sans text-muted fs-8 mb-0">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA & Disclaimer */}
        <div className="text-center">
          <button 
            onClick={handleCTAClick}
            className="btn btn-luxury-gold px-5 py-3 text-uppercase tracking-wider fw-bold shadow-sm mb-3"
            style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
          >
            REQUEST CLAIM ASSISTANCE &rarr;
          </button>
          
          <p className="fs-8 font-sans text-muted mb-0">
            <i className="bi bi-info-circle me-1 text-gold-accent"></i> Note: Claim assistance does not guarantee claim approval or settlement. All claim decisions remain subject to insurance company terms, conditions, and policy verifications.
          </p>
        </div>

      </div>
    </section>
  );
}

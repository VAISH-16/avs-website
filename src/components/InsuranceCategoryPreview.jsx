import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function InsuranceCategoryPreview({ onOpenModal }) {
  const insuranceNeeds = [
    {
      cat: 'LIFE INSURANCE',
      message: "Protect the future you're building.",
      icon: 'bi-heart-pulse',
      link: '/dedicated/life-insurance',
      requirement: 'Life & Term Insurance'
    },
    {
      cat: 'HEALTH INSURANCE',
      message: 'Focus on recovery, not financial uncertainty.',
      icon: 'bi-hospital',
      link: '/dedicated/health-insurance',
      requirement: 'Health Insurance'
    },
    {
      cat: 'MOTOR INSURANCE',
      message: 'Keep your journey moving.',
      icon: 'bi-car-front',
      link: '/dedicated/motor-insurance',
      requirement: 'Motor Insurance'
    },
    {
      cat: 'PROPERTY INSURANCE',
      message: "Protect the place you've built your life around.",
      icon: 'bi-house-check',
      link: '/insurance',
      requirement: 'Property Insurance'
    },
    {
      cat: 'BUSINESS INSURANCE',
      message: "Protect the business you've worked hard to build.",
      icon: 'bi-briefcase',
      link: '/dedicated/business-insurance',
      requirement: 'Business Protection'
    },
    {
      cat: 'MARINE INSURANCE',
      message: 'Every journey carries more than cargo.',
      icon: 'bi-box-seam',
      link: '/dedicated/marine-insurance',
      requirement: 'Marine Cargo Insurance'
    },
    {
      cat: 'GROUP INSURANCE',
      message: 'Protect your people. Strengthen your business.',
      icon: 'bi-people',
      link: '/dedicated/group-insurance',
      requirement: 'Group Health Insurance'
    }
  ];

  const handleCTAClick = (item) => {
    trackEvent('insurance_preview_click', { cat: item.cat, requirement: item.requirement });
  };

  return (
    <section className="section py-5 bg-ivory position-relative border-bottom border-gold-subtle">
      <div className="container py-4">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              RISK PREPAREDNESS
            </span>
            <h2 className="display-4 font-playfair text-emerald fw-bold mb-3">
              Life Doesn't Always Go According to Plan.
            </h2>
            <div className="luxury-divider mx-auto mb-4"></div>
            <p className="lead font-serif text-secondary mb-0">
              Protection helps you stay financially prepared when the unexpected happens.
            </p>
          </div>
        </div>

        {/* Travel Insurance Storytelling Preview Feature */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="p-4 p-md-5 rounded-4 bg-white border border-gold-accent shadow-md d-flex flex-column flex-md-row align-items-center gap-4">
              
              <div className="travel-visual-box p-4 rounded-4 bg-gold-subtle text-emerald text-center flex-shrink-0" style={{ width: '140px', height: '140px' }}>
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                  <i className="bi bi-airplane-engines fs-1 text-gold-accent mb-1"></i>
                  <span className="fs-8 text-uppercase tracking-wider fw-bold">TRAVEL</span>
                </div>
              </div>

              <div className="flex-fill text-center text-md-start">
                <span className="badge bg-emerald text-gold-accent font-sans fs-8 tracking-wider uppercase mb-2 px-3 py-1 fw-bold">
                  FEATURED PROTECTION
                </span>
                <h3 className="font-playfair text-emerald fw-bold display-6 mb-2">
                  "Travel with confidence."
                </h3>
                <p className="font-sans text-muted fs-6 mb-3">
                  Comprehensive coverage for international trips, flight delays, lost baggage, and emergency medical emergencies abroad.
                </p>
                
                <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center justify-content-md-start">
                  <Link 
                    to="/dedicated/travel-insurance" 
                    onClick={() => trackEvent('travel_preview_click')}
                    className="btn btn-luxury-gold px-4 py-2 text-uppercase tracking-wider fw-bold fs-7"
                  >
                    Explore Travel Insurance <i className="bi bi-arrow-right ms-1"></i>
                  </Link>

                  <button 
                    onClick={() => onOpenModal && onOpenModal('Travel Insurance')}
                    className="btn btn-outline-emerald px-4 py-2 text-uppercase tracking-wider fw-semibold fs-7"
                  >
                    Find the Right Protection
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 7 Other Insurance Category Cards */}
        <div className="row g-4">
          {insuranceNeeds.map((item, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="insurance-cat-card p-4 rounded-4 bg-white border border-gold-subtle shadow-sm h-100 d-flex flex-column transition-all hover-lift">
                
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-inline-flex align-items-center justify-content-center bg-emerald text-gold-accent rounded-3 p-3" style={{ width: '48px', height: '48px' }}>
                    <i className={`bi ${item.icon} fs-4`}></i>
                  </div>
                  <span className="fs-8 font-sans text-uppercase tracking-widest text-muted fw-bold">
                    {item.cat}
                  </span>
                </div>

                <p className="font-playfair text-emerald fw-bold fs-5 mb-4 flex-fill leading-snug">
                  "{item.message}"
                </p>

                <div className="mt-auto pt-3 border-top border-gold-subtle d-flex justify-content-between align-items-center">
                  <Link 
                    to={item.link}
                    onClick={() => handleCTAClick(item)}
                    className="btn-link-gold font-serif text-uppercase tracking-wider fw-bold fs-7"
                  >
                    Explore Protection <i className="bi bi-arrow-right ms-1"></i>
                  </Link>

                  <button 
                    onClick={() => onOpenModal && onOpenModal(item.requirement)}
                    className="btn btn-sm btn-outline-emerald rounded-pill px-3 py-1 fs-8 text-uppercase tracking-wider fw-semibold"
                  >
                    Get Quote
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

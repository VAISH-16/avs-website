import React from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function InteractiveInsuranceSection({ onOpenModal }) {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'health',
      title: 'Health & Mediclaim',
      icon: 'bi-heart-pulse-fill',
      tagline: 'Comprehensive cashless medical cover & family health security',
      desc: 'Protecting your family from rising healthcare inflation, hospitalizations, and medical emergencies.',
      typesCount: 14
    },
    {
      id: 'life',
      title: 'Life & Term Insurance',
      icon: 'bi-shield-heart-fill',
      tagline: 'High-sum income replacement & long-term wealth protection',
      desc: 'Safeguarding your dependents, debt commitments, and life milestones with structured life covers.',
      typesCount: 12
    },
    {
      id: 'motor',
      title: 'Motor & Fleet Cover',
      icon: 'bi-car-front-fill',
      tagline: 'Zero-depreciation motor insurance for personal & commercial fleets',
      desc: 'Complete road protection, instant towing assistance, and 100% cashless garage repairs.',
      typesCount: 15
    },
    {
      id: 'travel',
      title: 'Travel Insurance',
      icon: 'bi-airplane-fill',
      tagline: 'Worldwide medical, baggage & flight protection for overseas travel',
      desc: 'Schengen-compliant international policies covering trip delays, lost passports, and medical care.',
      typesCount: 12
    },
    {
      id: 'business',
      title: 'Business & Asset Cover',
      icon: 'bi-building-fill',
      tagline: 'Commercial property, fire perils, liability & business continuity',
      desc: 'Shielding commercial premises, plant machinery, marine cargo, and corporate legal liabilities.',
      typesCount: 20
    },
    {
      id: 'general',
      title: 'General Insurance',
      icon: 'bi-shield-check-fill',
      tagline: 'Broader "everything else" protection for assets, property & niche risks',
      desc: 'Specialized risk management ranging from pet paw care and housing societies to crop and event covers.',
      typesCount: 17
    }
  ];

  const handleCardClick = (catId, catTitle) => {
    trackEvent('insurance_category_navigate', { categoryId: catId, categoryTitle: catTitle });
    navigate(`/insurance-category/${catId}`);
  };

  return (
    <section className="section py-5 bg-ivory position-relative" id="interactive-insurance">
      <div className="container py-4">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-10">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              AVS RISK MANAGEMENT &amp; PROTECTION
            </span>
            <h2 className="display-4 font-playfair text-emerald fw-bold mb-3">
              Insurance &amp; Protection Solutions
            </h2>
            <div className="luxury-divider mx-auto mb-4"></div>
            
            {/* Supporting Lines as requested */}
            <p className="lead font-serif text-dark fw-semibold fs-5 mb-2" style={{ color: '#0B1F33' }}>
              “Protection for every stage, every asset, and every ambition.”
            </p>
            <p className="font-sans text-secondary max-w-3xl mx-auto fs-6 mb-4">
              From health and life protection to vehicles, travel, businesses and everyday assets — we help you find the right cover for what matters most.
            </p>

            {/* Tagline Badge */}
            <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow-sm" style={{ background: '#0B1F33', border: '1px solid #C9A24D' }}>
              <i className="bi bi-shield-lock-fill text-gold-accent fs-5"></i>
              <span className="font-serif text-gold-accent fw-bold fs-6 tracking-wide">
                “From Paw to Plane, we protect what matters.”
              </span>
            </div>
          </div>
        </div>

        {/* 6 Main Interactive Cards Grid */}
        <div className="row g-4">
          {categories.map((cat) => (
            <div key={cat.id} className="col-lg-4 col-md-6 col-12 d-flex">
              <div 
                onClick={() => handleCardClick(cat.id, cat.title)}
                className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white transition-all hover-lift cursor-pointer user-select-none position-relative w-100 d-flex flex-column"
                style={{
                  border: '1px solid #DDD8CC',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
              >
                {/* Card Header: Icon & Type Count Badge */}
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div 
                    className="icon-circle d-inline-flex align-items-center justify-content-center rounded-3 p-3" 
                    style={{ 
                      width: '54px', 
                      height: '54px', 
                      background: 'rgba(201, 162, 77, 0.15)',
                      color: '#0B1F33'
                    }}
                  >
                    <i className={`bi ${cat.icon} fs-3`} style={{ color: '#0B1F33' }}></i>
                  </div>

                  <span 
                    className="badge font-sans fs-8 tracking-wider uppercase px-3 py-2 rounded-pill fw-bold"
                    style={{ 
                      background: '#F4F1E8', 
                      color: '#5F6B73' 
                    }}
                  >
                    {cat.typesCount} Covers Listed
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-playfair text-emerald fw-bold h4 mb-2" style={{ color: '#0B1F33' }}>
                  {cat.title}
                </h3>

                <p className="font-serif text-gold-accent fs-7 fw-semibold mb-2" style={{ color: '#C9A24D' }}>
                  {cat.tagline}
                </p>

                <p className="text-muted fs-7 mb-4 flex-fill leading-snug">
                  {cat.desc}
                </p>

                {/* Interactive Button Bar */}
                <div className="mt-auto pt-3 border-top border-gold-subtle d-flex align-items-center justify-content-between">
                  <span className="fs-7 font-sans fw-bold tracking-wider text-uppercase text-gold-accent">
                    Explore Insurance Types &rarr;
                  </span>

                  <button
                    type="button"
                    className="btn btn-sm rounded-circle d-inline-flex align-items-center justify-content-center p-0"
                    style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: '#0B1F33',
                      color: '#C9A24D',
                      border: 'none'
                    }}
                    aria-label="View Insurance Types"
                  >
                    <i className="bi bi-arrow-right fs-6"></i>
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

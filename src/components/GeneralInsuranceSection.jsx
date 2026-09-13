import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function GeneralInsuranceSection({ onOpenModal }) {
  const [expandedCards, setExpandedCards] = useState({});
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = [
    {
      id: 'motor',
      name: 'Motor Insurance',
      tag: 'VEHICLE',
      icon: 'bi-car-front-fill',
      shortDesc: 'Protection for personal and commercial vehicles against eligible accidents, damages, theft and liabilities.',
      link: '/motor-insurance',
      products: [
        'Car Insurance',
        'Two-Wheeler Insurance',
        'Commercial Vehicle Insurance',
        'Taxi / Cab Insurance',
        'Truck Insurance',
        'Bus Insurance',
        'Auto-Rickshaw Insurance',
        'Fleet Insurance'
      ]
    },
    {
      id: 'health',
      name: 'Health & Personal Accident',
      tag: 'PERSONAL',
      icon: 'bi-heart-pulse-fill',
      shortDesc: 'Coverage designed to protect you and your family against medical expenses and accidental risks.',
      link: '/health-insurance',
      products: [
        'Health Insurance',
        'Family Floater',
        'Senior Citizen Health Insurance',
        'Group Health Insurance',
        'Critical Illness',
        'Personal Accident',
        'Group Personal Accident'
      ]
    },
    {
      id: 'home',
      name: 'Home & Property',
      tag: 'PROPERTY',
      icon: 'bi-house-heart-fill',
      shortDesc: 'Protection for your home, property and belongings against eligible risks such as fire, theft and natural perils.',
      link: null,
      products: [
        'Home Insurance',
        'Householder Insurance',
        'Property Insurance',
        'Fire Insurance',
        'Burglary Insurance',
        'Contents Insurance',
        'Landlord Insurance',
        'Tenant / Renter Insurance'
      ]
    },
    {
      id: 'society',
      name: 'Society Insurance',
      tag: 'PROPERTY',
      icon: 'bi-buildings-fill',
      shortDesc: 'Comprehensive protection for housing societies, buildings, common areas and associated liabilities.',
      link: null,
      products: [
        'Housing Society Insurance',
        'Apartment / Building Insurance',
        'Common Area Cover',
        'Society Liability',
        'Fire & Property Cover'
      ]
    },
    {
      id: 'business',
      name: 'Business Insurance',
      tag: 'COMMERCIAL',
      icon: 'bi-briefcase-fill',
      shortDesc: 'Protection for shops, offices, commercial properties, assets and day-to-day business risks.',
      link: '/business-insurance',
      products: [
        'Shop Insurance',
        'Office Insurance',
        'Commercial Property',
        'Business Package Policy',
        'Fire & Special Perils',
        'Burglary',
        'Money Insurance',
        'Fidelity Guarantee'
      ]
    },
    {
      id: 'liability',
      name: 'Liability Insurance',
      tag: 'COMMERCIAL',
      icon: 'bi-shield-lock-fill',
      shortDesc: 'Protection against eligible third-party, professional, employer and business liabilities.',
      link: null,
      products: [
        'Public Liability',
        'Product Liability',
        'Professional Indemnity',
        "Employer's Liability",
        'Workmen Compensation',
        'Directors & Officers (D&O)',
        'Errors & Omissions (E&O)'
      ]
    },
    {
      id: 'marine',
      name: 'Marine Insurance',
      tag: 'COMMERCIAL',
      icon: 'bi-water',
      shortDesc: 'Coverage for goods, cargo, vessels and transportation-related risks.',
      link: null,
      products: [
        'Marine Cargo',
        'Marine Hull',
        'Inland Transit',
        'Import / Export Cargo',
        'Goods-in-Transit'
      ]
    },
    {
      id: 'engineering',
      name: 'Engineering Insurance',
      tag: 'COMMERCIAL',
      icon: 'bi-gear-wide-connected',
      shortDesc: 'Protection for construction projects, machinery, equipment and engineering-related risks.',
      link: null,
      products: [
        'Contractors All Risk (CAR)',
        'Erection All Risk (EAR)',
        'Machinery Breakdown',
        'Electronic Equipment',
        'Contractor Plant & Machinery',
        'Boiler & Pressure Plant'
      ]
    },
    {
      id: 'travel',
      name: 'Travel Insurance',
      tag: 'PERSONAL',
      icon: 'bi-airplane-fill',
      shortDesc: 'Protection for domestic and international travel, including eligible medical, baggage and trip-related risks.',
      link: '/travel-insurance',
      products: [
        'International Travel',
        'Domestic Travel',
        'Student Travel',
        'Senior Citizen Travel',
        'Schengen Travel',
        'Multi-Trip Travel',
        'Baggage / Trip-related Covers'
      ]
    },
    {
      id: 'pet',
      name: 'Pet / Paw Care',
      tag: 'SPECIALTY',
      icon: 'bi-shield-heart',
      shortDesc: 'Insurance solutions designed to help protect pets against eligible accidents, illnesses and veterinary expenses.',
      link: null,
      products: [
        'Dog Insurance',
        'Cat Insurance',
        'Pet Accident',
        'Pet Illness',
        'Veterinary Expense Cover'
      ]
    },
    {
      id: 'agriculture',
      name: 'Agriculture & Rural',
      tag: 'SPECIALTY',
      icon: 'bi-tree-fill',
      shortDesc: 'Insurance solutions for crops, livestock, agricultural assets and rural businesses.',
      link: null,
      products: [
        'Crop Insurance',
        'Livestock Insurance',
        'Cattle Insurance',
        'Poultry Insurance',
        'Agriculture Equipment'
      ]
    },
    {
      id: 'cyber',
      name: 'Cyber & Specialty',
      tag: 'SPECIALTY',
      icon: 'bi-shield-slash-fill',
      shortDesc: 'Protection against eligible cyber, digital, gadget, jewellery, fine-art and other specialized risks.',
      link: null,
      products: [
        'Cyber Insurance',
        'Cyber Crime',
        'Data Breach',
        'Gadget Insurance',
        'Jewellery Insurance',
        'Fine Art Insurance',
        'Drone Insurance'
      ]
    },
    {
      id: 'aviation',
      name: 'Aviation',
      tag: 'SPECIALTY',
      icon: 'bi-airplane-engines-fill',
      shortDesc: 'Specialized insurance solutions for aircraft, drones, aviation liabilities and related risks.',
      link: null,
      products: [
        'Aircraft Hull',
        'Aviation Liability',
        'Drone Insurance',
        'Airport Liability',
        'Aviation Personal Accident'
      ]
    }
  ];

  const filterTabs = [
    { id: 'ALL', label: 'All General Insurance' },
    { id: 'PERSONAL', label: 'Personal & Health' },
    { id: 'VEHICLE', label: 'Motor & Transport' },
    { id: 'PROPERTY', label: 'Home & Society' },
    { id: 'COMMERCIAL', label: 'Business & Liabilities' },
    { id: 'SPECIALTY', label: 'Specialty & Niche' }
  ];

  const toggleExpand = (catId) => {
    setExpandedCards((prev) => {
      const nextState = !prev[catId];
      if (nextState) {
        trackEvent('general_insurance_expand_products', { categoryId: catId });
      }
      return { ...prev, [catId]: nextState };
    });
  };

  const handleQuoteClick = (catName) => {
    trackEvent('general_insurance_quote_click', { category: catName });
    if (onOpenModal) {
      onOpenModal(catName);
    }
  };

  const filteredCategories = activeFilter === 'ALL' 
    ? categories 
    : categories.filter((c) => c.tag === activeFilter);

  return (
    <section className="section py-5 bg-ivory position-relative border-bottom border-gold-subtle" id="general-insurance">
      <div className="container py-4">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-9">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              COMPREHENSIVE RISK COVERAGE
            </span>
            <h2 className="display-4 font-playfair text-emerald fw-bold mb-3">
              General Insurance Solutions
            </h2>
            <div className="luxury-divider mx-auto mb-4"></div>
            <p className="lead font-serif text-secondary mb-0">
              From everyday personal protection to complex commercial, marine, and aviation risks — safeguarding every asset, business, and milestone <strong>"from pin to plane."</strong>
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`btn btn-sm rounded-pill px-3 py-2 text-uppercase tracking-wider fw-semibold transition-all ${
                activeFilter === tab.id
                  ? 'btn-emerald text-white shadow-sm'
                  : 'btn-outline-dark bg-white text-muted'
              }`}
              style={{
                backgroundColor: activeFilter === tab.id ? '#0B1F33' : '#FFFFFF',
                color: activeFilter === tab.id ? '#FFFFFF' : '#5F6B73',
                borderColor: activeFilter === tab.id ? '#0B1F33' : '#DDD8CC'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 13 General Insurance Category Cards Grid */}
        <div className="row g-4">
          {filteredCategories.map((cat) => {
            const isExpanded = !!expandedCards[cat.id];
            const visibleProducts = isExpanded ? cat.products : cat.products.slice(0, 4);
            const hasMoreProducts = cat.products.length > 4;

            return (
              <div key={cat.id} className="col-md-6 col-lg-4 d-flex">
                <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white w-100 d-flex flex-column transition-all hover-lift" style={{ border: '1px solid #DDD8CC' }}>
                  
                  {/* Icon & Title Header */}
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="icon-circle bg-gold-subtle text-gold-accent d-inline-flex align-items-center justify-content-center rounded-3 p-3" style={{ width: '52px', height: '52px', background: 'rgba(201, 162, 77, 0.15)' }}>
                      <i className={`bi ${cat.icon} fs-3`} style={{ color: '#C9A24D' }}></i>
                    </div>
                    <span className="badge bg-gold-subtle text-emerald font-sans fs-8 tracking-wider uppercase px-2 py-1 fw-bold" style={{ background: '#F4F1E8', color: '#0B1F33' }}>
                      {cat.tag}
                    </span>
                  </div>

                  <h4 className="font-playfair text-emerald fw-bold mb-2 h5" style={{ color: '#0B1F33' }}>
                    {cat.name}
                  </h4>

                  <p className="text-muted fs-7 mb-3 leading-snug">
                    {cat.shortDesc}
                  </p>

                  {/* Products List */}
                  <div className="mb-4 flex-fill">
                    <span className="fs-8 text-uppercase tracking-wider text-muted font-sans fw-bold d-block mb-2">
                      Covered Products ({cat.products.length}):
                    </span>
                    <ul className="list-unstyled mb-0">
                      {visibleProducts.map((prod, idx) => (
                        <li key={idx} className="fs-7 text-dark mb-1 d-flex align-items-center">
                          <i className="bi bi-check-circle-fill me-2 fs-8" style={{ color: '#C9A24D' }}></i>
                          <span>{prod}</span>
                        </li>
                      ))}
                    </ul>

                    {hasMoreProducts && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(cat.id)}
                        className="btn btn-link p-0 fs-8 fw-bold text-decoration-none mt-2 d-inline-flex align-items-center"
                        style={{ color: '#C9A24D' }}
                      >
                        {isExpanded ? (
                          <>
                            <span>Show Less</span> <i className="bi bi-chevron-up ms-1"></i>
                          </>
                        ) : (
                          <>
                            <span>+ Explore {cat.products.length - 4} More Covers</span> <i className="bi bi-chevron-down ms-1"></i>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Card Actions Footer */}
                  <div className="mt-auto pt-3 border-top border-gold-subtle d-flex flex-column flex-sm-row gap-2 align-items-stretch align-items-sm-center justify-content-between">
                    {cat.link ? (
                      <Link
                        to={cat.link}
                        className="btn btn-outline-dark btn-sm rounded-pill px-3 py-2 flex-fill text-center fs-7 fw-semibold"
                      >
                        Explore Policy <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleQuoteClick(cat.name)}
                        className="btn btn-outline-dark btn-sm rounded-pill px-3 py-2 flex-fill text-center fs-7 fw-semibold"
                      >
                        Explore Coverage <i className="bi bi-arrow-right ms-1"></i>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleQuoteClick(cat.name)}
                      className="btn btn-sm rounded-pill px-3 py-2 fs-7 text-uppercase tracking-wider fw-bold text-nowrap"
                      style={{ backgroundColor: '#0B1F33', color: '#C9A24D', border: 'none' }}
                    >
                      Get Quote
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Pin to Plane Banner */}
        <div className="mt-5 p-4 p-md-5 rounded-4 text-white text-center position-relative overflow-hidden shadow-md" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', border: '1px solid rgba(201, 162, 77, 0.4)' }}>
          <div className="position-relative z-1 max-w-2xl mx-auto">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              SPECIALIZED UNDERWRITING & ADVISORY
            </span>
            <h3 className="font-playfair text-white display-6 fw-bold mb-3">
              Need a Custom Commercial or Niche Risk Cover?
            </h3>
            <p className="font-serif text-light-opacity fs-6 mb-4">
              From liability indemnities and contractor plant machinery to fleet motor portfolios, aviation, and crop insurance — our advisory team structures tailored solutions with premier underwriters.
            </p>
            <button
              onClick={() => handleQuoteClick("Custom Commercial / Niche Risk Cover")}
              className="btn btn-luxury-gold px-4 py-3 text-uppercase tracking-wider fw-bold fs-7 shadow-sm"
              style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
            >
              Request Custom Underwriting Review <i className="bi bi-shield-check ms-1"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

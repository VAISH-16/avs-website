import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';
import ConsultationModal from '../components/ConsultationModal';
import { trackEvent } from '../utils/analytics';

export default function Investments() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState('Investment Advisory');

  const mainCards = [
    {
      id: 'mutual-funds',
      title: 'MUTUAL FUNDS',
      icon: 'bi-graph-up-arrow',
      tagline: 'GROW WHAT MATTERS',
      shortDesc: 'Diversified investment solutions for long-term wealth creation.',
      countText: '27 Scheme Types & Facilities',
      link: '/investment-category/mutual-funds'
    },
    {
      id: 'bonds',
      title: 'BONDS',
      icon: 'bi-bank',
      tagline: 'STABILIZE WHAT MATTERS',
      shortDesc: 'Fixed-income opportunities for stability and portfolio diversification.',
      countText: '12 Debt & Debenture Solutions',
      link: '/investment-category/bonds'
    },
    {
      id: 'wealth-planning',
      title: 'WEALTH PLANNING',
      icon: 'bi-compass',
      tagline: 'PLAN WHAT MATTERS',
      shortDesc: 'Structured financial strategies built around your goals.',
      countText: '23 Goal & Retirement Strategies',
      link: '/investment-category/wealth-planning'
    }
  ];

  const handleCardClick = (link, title) => {
    trackEvent('investment_card_click', { category: title });
    navigate(link);
  };

  const handleOpenModal = (requirement = 'Investment Advisory') => {
    setSelectedRequirement(requirement);
    setIsModalOpen(true);
  };

  return (
    <main className="main pt-5 bg-ivory min-vh-100">
      
      {/* Page Header */}
      <section className="page-header py-5 dark-background text-light text-center" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', borderBottom: '2px solid #C9A24D' }}>
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">
            INVESTMENTS → GROW WHAT MATTERS
          </span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">
            Investment &amp; Wealth Advisory
          </h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto mb-4">
            Disciplined asset allocation, mutual fund compounding, corporate bond fixed-income, and structured goal-based wealth planning.
          </p>

          {/* Core Brand Positioning Badges */}
          <div className="d-flex flex-wrap justify-content-center gap-2 max-w-3xl mx-auto">
            <span className="badge bg-gold-subtle text-gold-accent px-3 py-2 fs-8 font-sans uppercase tracking-wider" style={{ background: 'rgba(201, 162, 77, 0.15)', color: '#C9A24D', border: '1px solid rgba(201, 162, 77, 0.3)' }}>
              INSURANCE → Protect What Matters
            </span>
            <span className="badge bg-gold-accent text-dark px-3 py-2 fs-8 font-sans uppercase tracking-wider fw-bold" style={{ background: '#C9A24D', color: '#0B1F33' }}>
              INVESTMENTS → Grow What Matters
            </span>
            <span className="badge bg-gold-subtle text-gold-accent px-3 py-2 fs-8 font-sans uppercase tracking-wider" style={{ background: 'rgba(201, 162, 77, 0.15)', color: '#C9A24D', border: '1px solid rgba(201, 162, 77, 0.3)' }}>
              WEALTH PLANNING → Plan What Matters
            </span>
          </div>
        </div>
      </section>

      {/* Main 3 Premium Investment Cards Grid */}
      <section className="section py-5">
        <div className="container py-4">
          
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
                STRATEGIC WEALTH SOLUTIONS
              </span>
              <h2 className="display-5 font-playfair text-emerald mb-3" style={{ color: '#0B1F33' }}>
                Select an Investment Category
              </h2>
              <div className="luxury-divider mx-auto mb-3"></div>
              <p className="text-muted font-sans fs-6">
                Click any category below to explore dedicated investment types, asset classes, and tailored financial solutions.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {mainCards.map((card) => (
              <div key={card.id} className="col-lg-4 col-md-6 col-12 d-flex">
                <div 
                  onClick={() => handleCardClick(card.link, card.title)}
                  className="card h-100 p-4 p-md-5 rounded-4 shadow-sm border-0 bg-white transition-all hover-lift cursor-pointer user-select-none w-100 d-flex flex-column"
                  style={{
                    border: '1px solid #DDD8CC',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Icon & Count Badge */}
                  <div className="d-flex align-items-start justify-content-between mb-4">
                    <div className="icon-circle bg-gold-subtle text-gold-accent d-inline-flex align-items-center justify-content-center rounded-3 p-3" style={{ width: '64px', height: '64px', background: 'rgba(201, 162, 77, 0.15)' }}>
                      <i className={`bi ${card.icon} fs-2`} style={{ color: '#0B1F33' }}></i>
                    </div>

                    <span className="badge bg-ivory text-muted font-sans fs-8 tracking-wider uppercase px-3 py-2 rounded-pill fw-semibold border border-gold-subtle">
                      {card.countText}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-playfair text-emerald fw-bold display-6 mb-2" style={{ color: '#0B1F33' }}>
                    {card.title}
                  </h3>

                  <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-3">
                    {card.tagline}
                  </span>

                  {/* Description */}
                  <p className="text-muted fs-6 mb-4 flex-fill leading-relaxed">
                    {card.shortDesc}
                  </p>

                  {/* CTA Action Footer */}
                  <div className="mt-auto pt-3 border-top border-gold-subtle d-flex align-items-center justify-content-between">
                    <span className="fs-7 font-sans fw-bold tracking-wider text-uppercase text-gold-accent">
                      Explore Solutions &rarr;
                    </span>

                    <button
                      type="button"
                      className="btn btn-sm rounded-circle d-inline-flex align-items-center justify-content-center p-0"
                      style={{
                        width: '42px',
                        height: '42px',
                        backgroundColor: '#0B1F33',
                        color: '#C9A24D',
                        border: 'none'
                      }}
                      aria-label={`Explore ${card.title}`}
                    >
                      <i className="bi bi-arrow-right fs-5"></i>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AMFI Registered Distributor Notice */}
      <section className="section py-4 bg-white">
        <div className="container">
          <div className="p-4 rounded-4 bg-ivory border border-gold-subtle shadow-sm max-w-4xl mx-auto">
            <h5 className="font-playfair text-emerald mb-2" style={{ color: '#0B1F33' }}>
              <i className="bi bi-patch-check-fill text-gold-accent me-2" style={{ color: '#C9A24D' }}></i> ISO 9001:2015 Certified Company &amp; AMFI Registered Distributor
            </h5>
            <p className="text-muted fs-7 mb-0 leading-relaxed">
              AVS Prosperity Consultancy is an ISO 9001:2015 Certified Financial Advisory &amp; Risk Management firm acting as an AMFI-registered distributor facilitating scheme selection across leading Indian Asset Management Companies. Mutual fund investments are subject to market risks; please read scheme information documents carefully before investing. We do not provide guaranteed returns or bank deposit products.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ConsultationForm title="Schedule Portfolio Review & Wealth Planning" />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialRequirement={selectedRequirement}
      />

    </main>
  );
}

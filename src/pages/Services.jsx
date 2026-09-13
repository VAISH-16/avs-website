import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';
import ConsultationModal from '../components/ConsultationModal';
import { trackEvent } from '../utils/analytics';

export default function Services() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState('General Services Inquiry');

  // Accordion state: all cards expanded by default
  const [expandedCards, setExpandedCards] = useState({
    insurance: true,
    investments: true,
    'financial-planning': true
  });

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const serviceData = [
    {
      id: 'insurance',
      title: 'INSURANCE',
      tagline: 'PROTECT WHAT MATTERS',
      shortDesc: '“Comprehensive protection solutions for your health, family, vehicles, travel and valuable assets.”',
      badge: '6 Insurance Categories',
      icon: 'bi-shield-check-fill',
      moreInfoLink: '/insurance',
      subcategories: [
        { title: 'Health & Mediclaim', desc: 'Comprehensive health & hospitalization protection', link: '/insurance-category/health', icon: 'bi-heart-pulse-fill' },
        { title: 'Life & Term Insurance', desc: 'High-sum income replacement & term cover', link: '/insurance-category/life', icon: 'bi-shield-heart-fill' },
        { title: 'Motor & Fleet Insurance', desc: 'Zero-dep vehicle & commercial fleet protection', link: '/insurance-category/motor', icon: 'bi-car-front-fill' },
        { title: 'Travel Insurance', desc: 'Worldwide travel medical & baggage protection', link: '/insurance-category/travel', icon: 'bi-airplane-fill' },
        { title: 'Business & Asset Insurance', desc: 'Commercial property fire, liability & cargo cover', link: '/insurance-category/business', icon: 'bi-building-fill' },
        { title: 'General Insurance', desc: 'Niche asset protection & risk management', link: '/insurance-category/general', icon: 'bi-shield-check-fill' }
      ]
    },
    {
      id: 'investments',
      title: 'INVESTMENTS',
      tagline: 'GROW WHAT MATTERS',
      shortDesc: '“Investment solutions designed to help you build and grow wealth with clarity, discipline and a long-term approach.”',
      badge: '3 Investment Categories',
      icon: 'bi-graph-up-arrow',
      moreInfoLink: '/investments',
      subcategories: [
        { title: 'Mutual Funds', desc: 'Equity, debt & hybrid wealth compounding solutions', link: '/investment-category/mutual-funds', icon: 'bi-graph-up-arrow' },
        { title: 'Bonds', desc: 'Fixed-income corporate bonds & NCD opportunities', link: '/investment-category/bonds', icon: 'bi-bank' },
        { title: 'Wealth Planning', desc: 'Goal-based asset allocation & portfolio reviews', link: '/investment-category/wealth-planning', icon: 'bi-compass' }
      ]
    },
    {
      id: 'financial-planning',
      title: 'FINANCIAL PLANNING',
      tagline: 'PLAN WHAT MATTERS',
      shortDesc: '“A structured financial roadmap built around your goals, priorities and financial future.”',
      badge: '7 Planning Solutions',
      icon: 'bi-compass-fill',
      moreInfoLink: '/financial-planning-category/financial-planning',
      subcategories: [
        { title: 'Financial Health Assessment', desc: 'Diagnostic audit of cash flow, net worth & risk profile', link: '/financial-planning-category/financial-health', icon: 'bi-activity' },
        { title: 'Goal-Based Planning', desc: 'Time-bound strategies for education, home & life goals', link: '/financial-planning-category/goal-based', icon: 'bi-journal-bookmark-fill' },
        { title: 'Investment Planning', desc: 'Risk-based asset allocation, SIP compounding & rebalancing', link: '/financial-planning-category/investment-planning', icon: 'bi-graph-up-arrow' },
        { title: 'Protection Planning', desc: 'HLV income replacement & comprehensive risk transfer', link: '/financial-planning-category/protection-planning', icon: 'bi-shield-check' },
        { title: 'Retirement Planning', desc: 'Post-retirement corpus engineering & automated SWP income', link: '/financial-planning-category/retirement-planning', icon: 'bi-hourglass-split' },
        { title: 'Wealth Creation & Management', desc: 'Multi-decade compounding & family legacy alignment', link: '/financial-planning-category/wealth-creation', icon: 'bi-pie-chart-fill' },
        { title: 'Tax-Efficient Financial Planning', desc: 'LTCG optimization, Section 80C/80D review & tax harvesting', link: '/financial-planning-category/tax-efficient', icon: 'bi-receipt-cutoff' }
      ]
    }
  ];

  const handleSubcategoryClick = (e, link, title) => {
    e.stopPropagation();
    trackEvent('services_subcategory_navigate', { subcategory: title });
    navigate(link);
  };

  const handleMoreInfoClick = (e, link, categoryTitle) => {
    e.stopPropagation();
    trackEvent('services_more_info_click', { category: categoryTitle });
    navigate(link);
  };

  const handleOpenModal = (requirement = 'General Services Inquiry') => {
    setSelectedRequirement(requirement);
    setIsModalOpen(true);
  };

  return (
    <main className="main pt-5 bg-ivory min-vh-100">

      {/* Page Hero Header */}
      <section className="page-header py-5 dark-background text-light text-center" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', borderBottom: '2px solid #C9A24D' }}>
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">
            OUR SERVICES
          </span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">
            Explore Our Financial Services
          </h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto mb-4">
            “Protect what matters, grow your wealth, and build a financial roadmap designed around your goals.”
          </p>

          {/* Positioning Badges */}
          <div className="d-flex flex-wrap justify-content-center gap-2 max-w-3xl mx-auto">
            <span className="badge bg-gold-subtle text-gold-accent px-3 py-2 fs-8 font-sans uppercase tracking-wider" style={{ background: 'rgba(201, 162, 77, 0.15)', color: '#C9A24D', border: '1px solid rgba(201, 162, 77, 0.3)' }}>
              INSURANCE → Protect What Matters
            </span>
            <span className="badge bg-gold-subtle text-gold-accent px-3 py-2 fs-8 font-sans uppercase tracking-wider" style={{ background: 'rgba(201, 162, 77, 0.15)', color: '#C9A24D', border: '1px solid rgba(201, 162, 77, 0.3)' }}>
              INVESTMENTS → Grow What Matters
            </span>
            <span className="badge bg-gold-accent text-dark px-3 py-2 fs-8 font-sans uppercase tracking-wider fw-bold" style={{ background: '#C9A24D', color: '#0B1F33' }}>
              FINANCIAL PLANNING → Plan What Matters
            </span>
          </div>
        </div>
      </section>

      {/* Main 3 Collapsible Service Cards Section */}
      <section className="section py-5">
        <div className="container py-4">

          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
                AVS CORE CAPABILITIES
              </span>
              <h2 className="display-5 font-playfair text-emerald mb-3" style={{ color: '#0B1F33' }}>
                Select a Service Category
              </h2>
              <div className="luxury-divider mx-auto mb-3"></div>
              <p className="text-muted font-sans fs-6">
                Click any service card below to expand and view its specialized subcategories, or click <strong>MORE INFO</strong> to open its full dedicated page.
              </p>
            </div>
          </div>

          <div className="row g-4 align-items-stretch justify-content-center">
            {serviceData.map((card) => {
              const displayedSubcategories = card.subcategories.slice(0, 3);

              return (
                <div key={card.id} className="col-lg-4 col-md-6 col-12 d-flex">
                  <div
                    className="card p-4 p-md-5 rounded-4 shadow-sm border-0 bg-white transition-all w-100 d-flex flex-column justify-content-between h-100 hover-lift"
                    style={{
                      border: '1px solid rgba(201, 162, 77, 0.45)',
                      boxShadow: '0 10px 30px rgba(11, 31, 51, 0.08)',
                      minHeight: '660px'
                    }}
                  >
                    <div>
                      {/* Top Row: Icon Circle & Category Count Badge */}
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <div className="icon-circle bg-gold-subtle text-gold-accent d-inline-flex align-items-center justify-content-center rounded-3 p-3" style={{ width: '60px', height: '60px', background: '#0B1F33' }}>
                          <i className={`bi ${card.icon} fs-3`} style={{ color: '#C9A24D' }}></i>
                        </div>

                        <span className="badge bg-ivory text-muted font-sans fs-8 tracking-wider uppercase px-3 py-2 rounded-pill fw-semibold border border-gold-subtle">
                          {card.badge}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-playfair text-emerald fw-bold display-6 mb-1" style={{ color: '#0B1F33' }}>
                        {card.title}
                      </h3>

                      <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-3" style={{ color: '#C9A24D' }}>
                        {card.tagline}
                      </span>

                      {/* Short Description */}
                      <p className="text-muted fs-6 mb-4 leading-relaxed">
                        {card.shortDesc}
                      </p>

                      {/* Top 3 Subcategories List */}
                      <div className="mb-4 pt-3 border-top border-gold-subtle">
                        <span className="fs-8 text-uppercase tracking-wider text-gold-accent font-sans fw-bold d-block mb-3" style={{ color: '#C9A24D' }}>
                          POPULAR CATEGORIES:
                        </span>

                        <div className="d-flex flex-column gap-3">
                          {displayedSubcategories.map((sub, idx) => (
                            <div
                              key={idx}
                              onClick={(e) => handleSubcategoryClick(e, sub.link, sub.title)}
                              className="subcategory-row p-3 px-4 rounded-3 bg-ivory border border-gold-subtle d-flex align-items-center justify-content-between transition-all hover-lift"
                              style={{
                                cursor: 'pointer',
                                background: '#F8F6F0',
                                border: '1px solid #E6E0D2',
                                transition: 'all 0.25s ease',
                                minHeight: '58px'
                              }}
                            >
                              <div className="d-flex align-items-center gap-3">
                                <div className="p-2 rounded-circle bg-white shadow-sm d-inline-flex align-items-center justify-content-center text-emerald flex-shrink-0" style={{ width: '34px', height: '34px', color: '#0B1F33' }}>
                                  <i className={`bi ${sub.icon} fs-6`} style={{ color: '#0B1F33' }}></i>
                                </div>
                                <div>
                                  <h4 className="font-playfair fw-bold text-dark fs-6 mb-0" style={{ color: '#0B1F33' }}>
                                    {sub.title}
                                  </h4>
                                </div>
                              </div>

                              <i className="bi bi-arrow-right fs-6 text-gold-accent ms-2 flex-shrink-0" style={{ color: '#C9A24D' }}></i>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Explore All Button */}
                    <div className="pt-4 border-top border-gold-subtle mt-4">
                      <button
                        type="button"
                        onClick={(e) => handleMoreInfoClick(e, card.moreInfoLink, card.title)}
                        className="btn btn-luxury-gold w-100 py-3 rounded-pill font-sans fw-bold fs-7 text-uppercase tracking-wider shadow-sm d-inline-flex align-items-center justify-content-center gap-2"
                        style={{ backgroundColor: '#0B1F33', color: '#C9A24D', border: '1px solid #C9A24D' }}
                      >
                        <span>EXPLORE {card.title} &rarr;</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Consultation Section */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ConsultationForm title="Book a Comprehensive Financial & Insurance Review" />
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

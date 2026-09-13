import React from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

export default function InteractiveFinancialPlanningSection() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'financial-health',
      number: '01',
      title: 'Financial Health Assessment',
      icon: 'bi-activity',
      tagline: 'Diagnostic audit of cash flows, assets, liabilities & existing portfolios',
      desc: 'Evaluate income & expense ratios, debt leverage, liquidity surplus, risk profile, and current insurance/investment coverage.',
      solutionsCount: 8
    },
    {
      id: 'goal-based',
      number: '02',
      title: 'Goal-Based Financial Planning',
      icon: 'bi-journal-bookmark-fill',
      tagline: 'Dedicated investment roadmaps for life\'s core milestones',
      desc: 'Time-bound wealth accumulation strategies for child education, marriage, home purchase, dream lifestyle, and financial independence.',
      solutionsCount: 9
    },
    {
      id: 'investment-planning',
      number: '03',
      title: 'Investment Planning',
      icon: 'bi-graph-up-arrow',
      tagline: 'Disciplined asset allocation, compounding & risk-reward balance',
      desc: 'Custom SIP & lump sum strategies, portfolio diversification, risk-based asset allocation, benchmark reviews, and rebalancing.',
      solutionsCount: 10
    },
    {
      id: 'protection-planning',
      number: '04',
      title: 'Protection Planning',
      icon: 'bi-shield-check',
      tagline: 'Safeguard family, medical health, income & business liabilities',
      desc: 'Comprehensive risk transfer assessing Human Life Value (HLV), health inflation shield, personal accident, family, and business protection.',
      solutionsCount: 7
    },
    {
      id: 'retirement-planning',
      number: '05',
      title: 'Retirement Planning',
      icon: 'bi-hourglass-split',
      tagline: 'Inflation-adjusted corpus building & lifelong income engineering',
      desc: 'Calculating retirement cash flow requirements, gradual de-risking strategies, and automated SWP income streams for post-retirement freedom.',
      solutionsCount: 7
    },
    {
      id: 'wealth-creation',
      number: '06',
      title: 'Wealth Creation & Management',
      icon: 'bi-pie-chart-fill',
      tagline: 'Multi-decade capital growth, preservation & family wealth planning',
      desc: 'High-conviction compounding blueprints, risk management, wealth accumulation, preservation, and unified family portfolio alignment.',
      solutionsCount: 10
    },
    {
      id: 'tax-efficient',
      number: '07',
      title: 'Tax-Efficient Financial Planning',
      icon: 'bi-receipt-cutoff',
      tagline: 'Structuring investments for post-tax returns & capital gains efficiency',
      desc: 'Selecting instruments with long-term capital gains tax benefits, Section 80C/80D reviews, capital gains harvesting, and legal structure planning.',
      solutionsCount: 5
    }
  ];

  const handleCardClick = (catId, catTitle) => {
    trackEvent('financial_planning_category_click', { categoryId: catId, categoryTitle: catTitle });
    navigate(`/financial-planning-category/${catId}`);
  };

  return (
    <section className="section py-5 bg-ivory position-relative" id="financial-planning-categories">
      <div className="container py-4">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-10">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              PERSONALIZED ADVISORY ROADMAP
            </span>
            <h2 className="display-4 font-playfair text-emerald fw-bold mb-3" style={{ color: '#0B1F33' }}>
              Financial Planning Categories
            </h2>
            <div className="luxury-divider mx-auto mb-4"></div>
            
            <p className="lead font-serif text-dark fw-semibold fs-5 mb-2" style={{ color: '#0B1F33' }}>
              “A clear financial roadmap designed around your goals, priorities and future.”
            </p>
            <p className="font-sans text-secondary max-w-3xl mx-auto fs-6 mb-4">
              Select any category below to explore its comprehensive sub-section planning solutions, goal assessments, and detailed execution frameworks.
            </p>

            {/* Pillar Tagline Badge */}
            <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow-sm" style={{ background: '#0B1F33', border: '1px solid #C9A24D' }}>
              <i className="bi bi-compass-fill text-gold-accent fs-5" style={{ color: '#C9A24D' }}></i>
              <span className="font-serif text-gold-accent fw-bold fs-6 tracking-wide" style={{ color: '#C9A24D' }}>
                FINANCIAL PLANNING → Plan What Matters
              </span>
            </div>
          </div>
        </div>

        {/* 7 Interactive Category Cards Grid */}
        <div className="row g-4 justify-content-center">
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
                {/* Card Header: Icon & Solutions Count Badge */}
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div 
                      className="icon-circle d-inline-flex align-items-center justify-content-center rounded-3 p-3" 
                      style={{ 
                        width: '54px', 
                        height: '54px', 
                        background: '#0B1F33',
                        color: '#C9A24D'
                      }}
                    >
                      <i className={`bi ${cat.icon} fs-3`} style={{ color: '#C9A24D' }}></i>
                    </div>
                  </div>

                  <span 
                    className="badge font-sans fs-8 tracking-wider uppercase px-3 py-2 rounded-pill fw-bold"
                    style={{ 
                      background: 'rgba(201, 162, 77, 0.15)', 
                      color: '#0B1F33',
                      border: '1px solid rgba(201, 162, 77, 0.3)'
                    }}
                  >
                    {cat.solutionsCount} Solutions
                  </span>
                </div>

                {/* Category Number & Title */}
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="badge bg-gold-accent text-dark font-sans fw-bold fs-8 px-2 py-1 rounded" style={{ background: '#C9A24D', color: '#0B1F33' }}>
                    {cat.number}
                  </span>
                  <h3 className="font-playfair text-emerald fw-bold h4 mb-0" style={{ color: '#0B1F33' }}>
                    {cat.title}
                  </h3>
                </div>

                {/* Tagline & Description */}
                <p className="font-serif text-gold-accent fs-7 fw-semibold mb-2" style={{ color: '#C9A24D' }}>
                  {cat.tagline}
                </p>

                <p className="text-muted fs-7 mb-4 flex-fill leading-snug">
                  {cat.desc}
                </p>

                {/* Interactive Action Footer */}
                <div className="mt-auto pt-3 border-top border-gold-subtle d-flex align-items-center justify-content-between">
                  <span className="fs-7 font-sans fw-bold tracking-wider text-uppercase text-gold-accent" style={{ color: '#C9A24D' }}>
                    View Solutions &rarr;
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
                    aria-label={`View ${cat.title}`}
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

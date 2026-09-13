import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';
import ConsultationModal from '../components/ConsultationModal';
import { trackEvent } from '../utils/analytics';

export default function FinancialPlanningDetailPage() {
  const { catId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState('');
  
  const catIdMap = {
    'financial-health': '01',
    'goal-based': '02',
    'investment-planning': '03',
    'protection-planning': '04',
    'retirement-planning': '05',
    'wealth-creation': '06',
    'tax-efficient': '07'
  };

  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (catId && catIdMap[catId]) {
      setActiveTab(catIdMap[catId]);
    } else {
      setActiveTab('all');
    }
  }, [catId]);

  const [expandedCategories, setExpandedCategories] = useState({
    0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true
  });

  const toggleCategory = (idx) => {
    setExpandedCategories(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const planningData = {
    title: 'Financial Planning',
    tagline: '“Turn your financial goals into a structured roadmap for today, tomorrow and the years ahead.”',
    icon: 'bi-compass-fill',
    description: 'AVS Prosperity assists clients in structuring their finances around their core life goals, investment priorities, protection needs, and long-term aspirations through personalized, conflict-free financial planning.',
    categories: [
      {
        number: '01',
        title: 'FINANCIAL HEALTH ASSESSMENT',
        icon: 'bi-activity',
        desc: 'Comprehensive diagnostic evaluation of your current financial standing, income cash flows, and liability balance.',
        items: [
          { name: 'Income & Expense Analysis', summary: 'Detailed audit of primary/secondary cash inflows against household lifestyle and fixed expenditure.' },
          { name: 'Cash Flow Analysis', summary: 'Optimizing monthly surplus liquidity to establish systematic investment and emergency reserves.' },
          { name: 'Asset & Liability Assessment', summary: 'Evaluating net worth ratio, debt leverage, loan EMIs, and asset liquidity for financial health.' },
          { name: 'Financial Position Assessment', summary: 'Comprehensive benchmark audit comparing net worth growth against inflation and life stage norms.' },
          { name: 'Financial Goal Assessment', summary: 'Quantifying upcoming life milestones into precise inflation-adjusted future cash requirements.' },
          { name: 'Risk Profiling', summary: 'Objective psychometric evaluation determining your investment risk tolerance and loss capacity.' },
          { name: 'Existing Investment Review', summary: 'In-depth audit of existing mutual funds, equities, and fixed income assets for underperformance.' },
          { name: 'Existing Insurance Review', summary: 'Evaluating adequacy of term and health cover to eliminate coverage gaps or duplicate policies.' }
        ]
      },
      {
        number: '02',
        title: 'GOAL-BASED FINANCIAL PLANNING',
        icon: 'bi-journal-bookmark-fill',
        desc: 'Structuring dedicated, time-bound investment pathways for your short, medium, and long-term family milestones.',
        items: [
          { name: 'Child Education Planning', summary: 'Dedicated accumulation strategy for domestic and international higher education expenses.' },
          { name: 'Child Marriage Planning', summary: 'Long-term wealth creation structured to fund future family celebration milestones.' },
          { name: 'Home Purchase Planning', summary: 'Targeted fund accumulation for property down payments and real estate acquisition.' },
          { name: 'Vehicle Purchase Planning', summary: 'Short-to-medium term savings strategy for personal or commercial vehicle acquisitions.' },
          { name: 'Dream / Lifestyle Planning', summary: 'Dedicated investment pools for luxury vacations, passion goals, and major lifestyle spending.' },
          { name: 'Financial Independence Planning', summary: 'Building passive income streams to achieve early financial freedom and career flexibility.' },
          { name: 'Short-Term Goal Planning', summary: 'Capital safety strategies for milestones expected within 1 to 3 years.' },
          { name: 'Medium-Term Goal Planning', summary: 'Balanced growth portfolio for milestones falling within 3 to 7 years.' },
          { name: 'Long-Term Goal Planning', summary: 'High-compounding equity strategies for major life goals 7+ years away.' }
        ]
      },
      {
        number: '03',
        title: 'INVESTMENT PLANNING',
        icon: 'bi-graph-up-arrow',
        desc: 'Disciplined asset allocation, mutual fund compounding, and risk-reward optimization.',
        items: [
          { name: 'Investment Goal Assessment', summary: 'Evaluating targeted investment returns required to achieve future milestone amounts.' },
          { name: 'Asset Allocation', summary: 'Structuring optimal equity, debt, gold, and cash ratios matched to your risk profile.' },
          { name: 'Investment Strategy', summary: 'Formulating personalized asset deployment blueprints aligned with your time horizon.' },
          { name: 'Risk-Based Investment Planning', summary: 'Custom portfolio construction based on formal risk capacity and drawdown limits.' },
          { name: 'SIP Planning', summary: 'Automated monthly wealth compounding leveraging rupee cost averaging across top AMC funds.' },
          { name: 'Lump Sum Investment Planning', summary: 'Strategic one-time capital deployment during favorable market valuation windows.' },
          { name: 'Goal-Based Investment Planning', summary: 'Mapping dedicated investment schemes to individual short, medium, and long-term targets.' },
          { name: 'Portfolio Diversification', summary: 'Spreading investments across uncorrelated asset classes to minimize portfolio volatility.' },
          { name: 'Portfolio Review', summary: 'Periodic comprehensive health check evaluating fund performance against benchmark indices.' },
          { name: 'Portfolio Rebalancing', summary: 'Systematic re-alignment of portfolio weights to restore target asset allocation ratios.' }
        ]
      },
      {
        number: '04',
        title: 'PROTECTION PLANNING',
        icon: 'bi-shield-check',
        desc: 'Shielding your family, medical health, earnings, and business liabilities against life risks.',
        items: [
          { name: 'Life Insurance Needs Assessment', summary: 'Calculating exact Human Life Value (HLV) to secure income replacement for dependents.' },
          { name: 'Health Insurance Needs Assessment', summary: 'Structuring cashless medical coverage to shield personal wealth from medical inflation.' },
          { name: 'Personal Accident Protection', summary: 'Financial safety against permanent disability, loss of earnings, or accidental impairment.' },
          { name: 'Family Protection Planning', summary: 'Comprehensive risk transfer umbrella securing dependents, home loans, and monthly living costs.' },
          { name: 'Income Protection Planning', summary: 'Safeguarding household income continuity against critical illness or unexpected disablement.' },
          { name: 'Asset Protection Planning', summary: 'Shielding physical property, homes, vehicles, and valuables against natural perils and theft.' },
          { name: 'Business Protection Planning', summary: 'Commercial property, Keyman, liability, and employee group health insurance solutions.' }
        ]
      },
      {
        number: '05',
        title: 'RETIREMENT PLANNING',
        icon: 'bi-hourglass-split',
        desc: 'Structuring inflation-adjusted wealth accumulation and guaranteed post-retirement income.',
        items: [
          { name: 'Retirement Goal Assessment', summary: 'Evaluating post-retirement monthly lifestyle expenses adjusted for future inflation.' },
          { name: 'Retirement Corpus Planning', summary: 'Calculating exact wealth accumulation targets required to fund 30+ years of retirement.' },
          { name: 'Retirement Investment Planning', summary: 'Disciplined compounding strategy shifting gradually from growth equities to stable income.' },
          { name: 'Retirement Cash-Flow Planning', summary: 'Engineering predictable monthly cash flows using SWP and annuity cash streams.' },
          { name: 'Post-Retirement Income Planning', summary: 'Automated regular income solutions ensuring lifelong financial independence without principal depletion.' },
          { name: 'Financial Independence Planning', summary: 'Building self-sustaining passive wealth pools to retire comfortably on your own terms.' },
          { name: 'Retirement Lifestyle Planning', summary: 'Structuring wealth reserves for post-retirement health, travel, and leisure pursuits.' }
        ]
      },
      {
        number: '06',
        title: 'WEALTH CREATION & MANAGEMENT',
        icon: 'bi-pie-chart-fill',
        desc: 'Long-term wealth creation, multi-generational preservation, and portfolio consolidation.',
        items: [
          { name: 'Long-Term Wealth Creation', summary: 'High-conviction capital growth blueprints building multi-decade wealth portfolios.' },
          { name: 'Wealth Accumulation', summary: 'Systematic combination of SIPs, lump-sum investments, and corporate bonds for equity growth.' },
          { name: 'Systematic Wealth Creation', summary: 'Disciplined monthly allocation mapped to multi-decade wealth compounding targets.' },
          { name: 'Portfolio Diversification', summary: 'Minimizing concentration risk across fund managers, market caps, and economic sectors.' },
          { name: 'Asset Allocation', summary: 'Strategic cross-asset distribution tailored to preserve capital while capturing market upside.' },
          { name: 'Risk Management', summary: 'Downside protection strategies shielding accumulated capital during market downturns.' },
          { name: 'Wealth Preservation', summary: 'Capital protection strategies safeguarding accumulated principal against inflation.' },
          { name: 'Portfolio Review', summary: 'In-depth evaluation of portfolio health, asset weights, and individual fund performance.' },
          { name: 'Portfolio Rebalancing', summary: 'Systematic re-alignment of asset weights to maintain risk-reward parameters.' },
          { name: 'Family Wealth Planning', summary: 'Unified wealth management aligning multi-generational family assets and financial goals.' }
        ]
      },
      {
        number: '07',
        title: 'TAX-EFFICIENT FINANCIAL PLANNING',
        icon: 'bi-receipt-cutoff',
        desc: 'Structuring investments and asset choices for optimal post-tax returns and capital gains efficiency.',
        items: [
          { name: 'Tax-Efficient Investment Planning', summary: 'Selecting investment instruments offering favorable long-term capital gains (LTCG) tax treatment.' },
          { name: 'Tax-Saving Investment Review', summary: 'Optimizing Section 80C and 80D deductions through ELSS mutual funds and health covers.' },
          { name: 'Capital Gains Consideration', summary: 'Structuring redemption timelines and SWP cash flows to minimize capital gains tax liabilities.' },
          { name: 'Investment Structure Review', summary: 'Organizing asset holdings across family members to optimize tax brackets legally.' },
          { name: 'Tax-Efficient Portfolio Planning', summary: 'Harvesting tax losses periodically and utilizing tax-efficient growth schemes over high-tax fixed interest.' }
        ]
      }
    ]
  };

  const handleOpenModal = (solutionName) => {
    trackEvent('financial_planning_consult_click', { solution: solutionName });
    setSelectedRequirement(`Financial Planning - ${solutionName}`);
    setIsModalOpen(true);
  };

  // Filter categories based on activeTab and live search
  const filteredCategories = planningData.categories.filter(cat => {
    if (activeTab !== 'all' && cat.number !== activeTab) return false;
    return true;
  }).map(cat => {
    const matchingItems = cat.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, items: matchingItems };
  }).filter(cat => cat.items.length > 0);

  const totalItemCount = planningData.categories.reduce((acc, c) => acc + c.items.length, 0);

  return (
    <main className="main pt-5 bg-ivory min-vh-100">
      
      {/* Page Header */}
      <section className="page-header py-5 text-light position-relative" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', borderBottom: '2px solid #C9A24D' }}>
        <div className="container py-4">
          
          {/* Navigation Back */}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Link to="/personal-finance" className="btn btn-outline-light btn-sm rounded-pill px-3 py-2 fs-7 fw-semibold">
              <i className="bi bi-arrow-left me-1"></i> Back to Financial Planning Overview
            </Link>

            <span className="badge bg-gold-subtle text-gold-accent font-sans fs-8 tracking-wider uppercase px-3 py-1 fw-bold" style={{ background: 'rgba(201, 162, 77, 0.15)', color: '#C9A24D', border: '1px solid rgba(201, 162, 77, 0.4)' }}>
              FINANCIAL PLANNING → Plan What Matters
            </span>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="icon-circle bg-gold-subtle text-gold-accent d-inline-flex align-items-center justify-content-center rounded-3 p-3" style={{ width: '58px', height: '58px', background: 'rgba(201, 162, 77, 0.2)' }}>
                  <i className={`bi ${planningData.icon} fs-2`} style={{ color: '#C9A24D' }}></i>
                </div>
                <div>
                  <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block">
                    AVS FINANCIAL ADVISORY
                  </span>
                  <h1 className="display-4 font-playfair text-white mt-1 mb-0 fw-bold">
                    {planningData.title}
                  </h1>
                </div>
              </div>

              <p className="lead font-serif text-gold-accent fs-5 mt-3 mb-2" style={{ color: '#C9A24D' }}>
                {planningData.tagline}
              </p>
              <p className="font-sans text-secondary-light fs-6 mt-1 mb-0">
                {planningData.description}
              </p>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <div className="p-4 rounded-4 bg-white text-dark shadow-sm border border-gold-subtle text-start">
                <span className="fs-8 text-uppercase tracking-wider text-gold-accent font-sans fw-bold d-block mb-1">
                  PERSONALIZED ROADMAP
                </span>
                <h4 className="font-playfair text-emerald fw-bold h5 mb-2" style={{ color: '#0B1F33' }}>
                  Talk to an Advisor
                </h4>
                <p className="fs-7 text-muted mb-3">
                  Let's evaluate your cash flows, life milestones, risk profile, and existing portfolio for optimal financial health.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenModal('Full Financial Planning Review')}
                  className="btn btn-luxury-gold w-100 py-2 text-uppercase tracking-wider fw-bold fs-7 shadow-sm"
                  style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                >
                  Consult Planning Specialist &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Section: Live Search Bar, Category Tabs & Sub-Section Cards */}
      <section className="section py-5">
        <div className="container py-2">
          
          {/* Live Search Bar */}
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8">
              <div className="p-3 bg-white rounded-4 shadow-sm border border-gold-subtle d-flex align-items-center gap-3">
                <i className="bi bi-search fs-4 text-gold-accent ms-2" style={{ color: '#C9A24D' }}></i>
                <input 
                  type="text" 
                  className="form-control border-0 shadow-none fs-6 font-sans luxury-input p-0"
                  placeholder="Search planning solutions (e.g. child education, retirement, risk profiling, tax-saving, cash flow)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ background: 'transparent' }}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="btn btn-link p-0 text-muted fs-6"
                    aria-label="Clear search"
                  >
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2 px-2">
                <span className="fs-8 text-muted font-sans">
                  Showing solutions across <strong>{filteredCategories.length}</strong> categories ({totalItemCount} total services)
                </span>
                {searchQuery && (
                  <span className="fs-8 text-gold-accent font-sans fw-semibold">
                    Filtered by "{searchQuery}"
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Category Tabs Bar */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            <button
              onClick={() => setActiveTab('all')}
              className={`btn btn-sm rounded-pill px-3 py-2 fs-7 font-sans fw-semibold transition-all ${activeTab === 'all' ? 'shadow-sm' : ''}`}
              style={{
                backgroundColor: activeTab === 'all' ? '#0B1F33' : '#FFFFFF',
                color: activeTab === 'all' ? '#C9A24D' : '#0B1F33',
                border: activeTab === 'all' ? '1px solid #0B1F33' : '1px solid #DDD8CC'
              }}
            >
              <i className="bi bi-grid-fill me-1"></i> All 7 Categories
            </button>
            {planningData.categories.map((c) => (
              <button
                key={c.number}
                onClick={() => setActiveTab(c.number)}
                className={`btn btn-sm rounded-pill px-3 py-2 fs-7 font-sans fw-semibold transition-all ${activeTab === c.number ? 'shadow-sm' : ''}`}
                style={{
                  backgroundColor: activeTab === c.number ? '#0B1F33' : '#FFFFFF',
                  color: activeTab === c.number ? '#C9A24D' : '#0B1F33',
                  border: activeTab === c.number ? '1px solid #0B1F33' : '1px solid #DDD8CC'
                }}
              >
                <span className="me-1 fw-bold">{c.number}</span> {c.title.split(' ')[0]} {c.title.split(' ')[1] || ''}
              </button>
            ))}
          </div>

          {/* 7 Display Planning Categories as Accordions / Cards */}
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat, cIdx) => {
              const isOpen = searchQuery ? true : !!expandedCategories[cIdx];
              return (
                <div key={cIdx} className="mb-4 bg-white rounded-4 shadow-sm border border-gold-subtle overflow-hidden">
                  
                  {/* Interactive Category Card Header / Accordion Toggle */}
                  <div 
                    onClick={() => toggleCategory(cIdx)}
                    className="p-4 d-flex align-items-center justify-content-between cursor-pointer select-none transition-all hover-bg-ivory"
                    style={{ background: isOpen ? '#0B1F33' : '#FFFFFF', color: isOpen ? '#FFFFFF' : '#0B1F33', cursor: 'pointer', transition: 'all 0.3s ease' }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="p-2 rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '44px', height: '44px', background: isOpen ? '#C9A24D' : '#0B1F33', color: isOpen ? '#0B1F33' : '#C9A24D' }}>
                        <span className="font-sans fw-bold fs-6">{cat.number}</span>
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                          <h3 className="font-playfair fw-bold h4 mb-0" style={{ color: isOpen ? '#FFFFFF' : '#0B1F33' }}>
                            {cat.title}
                          </h3>
                          <span className="badge rounded-pill fs-8 font-sans px-3 py-1" style={{ background: isOpen ? 'rgba(201, 162, 77, 0.25)' : 'rgba(11, 31, 51, 0.08)', color: isOpen ? '#C9A24D' : '#0B1F33' }}>
                            {cat.items.length} Solutions
                          </span>
                        </div>
                        <p className="fs-7 font-sans mb-0 mt-1" style={{ color: isOpen ? 'rgba(255, 255, 255, 0.75)' : '#6C757D' }}>
                          {cat.desc}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-8 text-uppercase tracking-wider fw-bold font-sans d-none d-md-inline-block" style={{ color: isOpen ? '#C9A24D' : '#0B1F33' }}>
                        {isOpen ? 'Collapse' : 'Expand'}
                      </span>
                      <div className="rounded-circle d-inline-flex align-items-center justify-content-center p-2" style={{ width: '36px', height: '36px', background: isOpen ? 'rgba(201, 162, 77, 0.2)' : 'rgba(11, 31, 51, 0.05)', color: isOpen ? '#C9A24D' : '#0B1F33' }}>
                        <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} fs-6`}></i>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Sub-cards Grid */}
                  {isOpen && (
                    <div className="p-4 bg-ivory border-top border-gold-subtle">
                      <div className="row g-4">
                        {cat.items.map((item, iIdx) => (
                          <div key={iIdx} className="col-lg-4 col-md-6 col-12 d-flex">
                            <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white w-100 d-flex flex-column transition-all hover-lift" style={{ border: '1px solid #DDD8CC' }}>
                              
                              {/* Title */}
                              <div className="d-flex align-items-start justify-content-between mb-2">
                                <h4 className="font-playfair text-emerald fw-bold h5 mb-0" style={{ color: '#0B1F33' }}>
                                  {item.name}
                                </h4>
                                <i className="bi bi-compass text-gold-accent fs-5 ms-2 flex-shrink-0" style={{ color: '#C9A24D' }}></i>
                              </div>

                              {/* Summary Box */}
                              <div className="p-3 rounded-3 my-3 flex-fill" style={{ background: '#F8F6F0', borderLeft: '3px solid #C9A24D' }}>
                                <span className="fs-8 text-uppercase tracking-wider text-muted font-sans fw-bold d-block mb-1">
                                  Service Scope:
                                </span>
                                <p className="font-sans fs-7 text-dark mb-0 leading-snug">
                                  {item.summary}
                                </p>
                              </div>

                              {/* Action Footer */}
                              <div className="mt-auto pt-3 border-top border-gold-subtle d-flex align-items-center justify-content-between gap-2">
                                <span className="fs-8 text-muted font-sans">
                                  <i className="bi bi-shield-check me-1 text-gold-accent"></i> Certified Process
                                </span>

                                <button
                                  type="button"
                                  onClick={() => handleOpenModal(item.name)}
                                  className="btn btn-sm rounded-pill px-3 py-2 fs-7 text-uppercase tracking-wider fw-bold text-nowrap"
                                  style={{ backgroundColor: '#0B1F33', color: '#C9A24D', border: 'none' }}
                                >
                                  Inquire Service <i className="bi bi-arrow-right ms-1"></i>
                                </button>
                              </div>

                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })
          ) : (
            <div className="text-center py-5 bg-white rounded-4 p-5 shadow-sm border border-gold-subtle max-w-xl mx-auto">
              <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
              <h4 className="font-playfair fw-bold text-dark mb-2">No Matching Planning Service Found</h4>
              <p className="text-muted fs-7 mb-4">
                We couldn't find any planning service matching "{searchQuery}". Try searching for another term or talk to our financial advisors directly.
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="btn btn-outline-dark btn-sm rounded-pill px-4 py-2 me-2"
              >
                Clear Search
              </button>
              <button 
                onClick={() => handleOpenModal(searchQuery || 'Custom Planning Request')}
                className="btn btn-luxury-gold btn-sm rounded-pill px-4 py-2"
                style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
              >
                Schedule Planning Review &rarr;
              </button>
            </div>
          )}

          {/* Bottom CTA Block as requested */}
          <div className="mt-5 p-4 p-md-5 rounded-4 text-white text-center position-relative overflow-hidden shadow-lg" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', border: '2px solid #C9A24D' }}>
            <div className="position-relative z-1 max-w-2xl mx-auto">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
                TAILORED FINANCIAL ROADMAP
              </span>
              <h3 className="font-playfair text-white display-6 fw-bold mb-3">
                Let's Build Your Financial Roadmap
              </h3>
              <p className="font-serif text-light-opacity fs-6 mb-4">
                “Your goals are unique. Your financial plan should be too.”
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenModal('Financial Roadmap Session')}
                  className="btn btn-luxury-gold px-4 py-3 text-uppercase tracking-wider fw-bold fs-7 shadow-sm"
                  style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                >
                  Talk to an Advisor <i className="bi bi-headset ms-1"></i>
                </button>

                <Link 
                  to="/personal-finance" 
                  className="btn btn-outline-light px-4 py-3 text-uppercase tracking-wider fw-semibold fs-7 rounded-pill"
                >
                  Back to Financial Planning <i className="bi bi-arrow-left ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Consultation Section */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ConsultationForm title="Book Your Personal Financial Guidance Session" />
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

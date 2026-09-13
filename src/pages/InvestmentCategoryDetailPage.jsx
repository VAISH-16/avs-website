import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';
import ConsultationModal from '../components/ConsultationModal';
import { trackEvent } from '../utils/analytics';

export default function InvestmentCategoryDetailPage() {
  const { catId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [catId]);

  const allInvestmentCategories = {
    'mutual-funds': {
      id: 'mutual-funds',
      title: 'Mutual Funds',
      tagline: '“Build wealth systematically with investment solutions designed around your goals, risk profile and time horizon.”',
      icon: 'bi-graph-up-arrow',
      description: 'Explore diversified equity, debt, and hybrid mutual fund solutions backed by top AMCs to achieve long-term financial growth.',
      badge: 'INVESTMENTS → Grow What Matters',
      sections: [
        {
          heading: 'Equity Mutual Funds',
          desc: 'Capital growth strategies investing in equities across market capitalizations.',
          items: [
            { name: 'Large Cap Funds', summary: 'Invests in top 100 established companies for steady capital growth with relatively lower volatility.' },
            { name: 'Mid Cap Funds', summary: 'Invests in mid-sized companies with high growth potential and expanding market share.' },
            { name: 'Small Cap Funds', summary: 'Invests in emerging small businesses for aggressive long-term capital appreciation.' },
            { name: 'Flexi Cap Funds', summary: 'Flexible asset allocation across large, mid, and small cap equities based on market opportunities.' },
            { name: 'Multi Cap Funds', summary: 'Mandatory structured allocation across large, mid, and small cap stocks ensuring true diversification.' },
            { name: 'Large & Mid Cap Funds', summary: 'Balanced equity portfolio spanning industry leaders and high-growth mid-sized companies.' },
            { name: 'Value / Contra Funds', summary: 'Contrarian investing strategy targeting undervalued stocks with long-term turnaround potential.' },
            { name: 'Focused Funds', summary: 'Concentrated equity portfolio limited to a maximum of 30 high-conviction stock picks.' },
            { name: 'Sectoral / Thematic Funds', summary: 'Targeted investments in specific economic sectors like IT, Banking, Pharma, or Infrastructure.' }
          ]
        },
        {
          heading: 'Debt Mutual Funds',
          desc: 'Fixed-income solutions designed for capital preservation and predictable returns.',
          items: [
            { name: 'Liquid Funds', summary: 'Ultra short-term debt instruments for high liquidity, safety, and parking surplus cash.' },
            { name: 'Overnight Funds', summary: 'Invests in debt securities maturing in 1 day for maximum safety and minimal interest rate risk.' },
            { name: 'Money Market Funds', summary: 'Invests in commercial papers, certificate of deposits, and T-bills maturing up to 1 year.' },
            { name: 'Short Duration Funds', summary: 'Short-term debt securities offering stable returns with lower sensitivity to interest rates.' },
            { name: 'Corporate Bond Funds', summary: 'Invests minimum 80% in top AAA-rated corporate debt instruments for reliable yield.' },
            { name: 'Banking & PSU Debt Funds', summary: 'Invests in high-grade bonds issued by banks, financial institutions, and public sector units.' },
            { name: 'Credit Risk Funds', summary: 'Invests in AA and below-rated corporate debt securities offering higher yield potential.' },
            { name: 'Dynamic Bond Funds', summary: 'Actively managed debt portfolio adjusting bond duration dynamically based on interest rate cycles.' }
          ]
        },
        {
          heading: 'Hybrid Mutual Funds',
          desc: 'Optimal balance of equity growth and debt stability in a single portfolio.',
          items: [
            { name: 'Aggressive Hybrid Funds', summary: 'Equity-oriented hybrid funds allocating 65-80% in equities and the rest in fixed income.' },
            { name: 'Conservative Hybrid Funds', summary: 'Debt-oriented hybrid funds allocating 75-90% in debt securities with marginal equity exposure.' },
            { name: 'Balanced Advantage Funds', summary: 'Dynamically shifts allocation between equity and debt based on market valuation metrics.' },
            { name: 'Equity Savings Funds', summary: 'Invests in equity, debt, and derivative arbitrage for low-volatility tax-efficient returns.' },
            { name: 'Multi-Asset Allocation Funds', summary: 'Invests in minimum 3 asset classes including equity, debt, and gold for multi-dimensional safety.' },
            { name: 'Arbitrage Funds', summary: 'Capitalizes on price differentials between cash and futures market with virtually risk-free returns.' }
          ]
        },
        {
          heading: 'Other Mutual Fund Solutions',
          desc: 'Passive, tax-saving, and international investment avenues.',
          items: [
            { name: 'Index Funds', summary: 'Passively managed funds replicating benchmark market indices like Nifty 50 or Sensex at low cost.' },
            { name: 'ELSS / Tax-Saving Mutual Funds', summary: 'Equity funds providing Section 80C tax deduction up to ₹1.5 Lakhs with a 3-year lock-in.' },
            { name: 'International / Global Funds', summary: 'Invests in global market leaders, foreign indices, and international technology giants.' },
            { name: 'Solution-Oriented Funds', summary: 'Dedicated goal-based mutual fund schemes structured specifically for retirement or child education.' }
          ]
        },
        {
          heading: 'Investment Facilities',
          desc: 'Specialized transaction mechanisms and portfolio management services.',
          items: [
            { name: 'SIP (Systematic Investment Plan)', summary: 'Automated monthly wealth compounding leveraging rupee cost averaging across top AMC schemes.' },
            { name: 'Lump Sum Investment', summary: 'One-time capital deployment into high-conviction mutual fund schemes during favorable market conditions.' },
            { name: 'STP (Systematic Transfer Plan)', summary: 'Gradual systematic transfer of capital from liquid debt schemes to equity funds.' },
            { name: 'SWP (Systematic Withdrawal Plan)', summary: 'Automated regular cash payouts for post-retirement cash flow and steady monthly income.' },
            { name: 'Goal-Based SIP', summary: 'Target-oriented monthly investment plans mapped to concrete milestone dates and inflation estimates.' },
            { name: 'Portfolio Review', summary: 'In-depth health check and risk audit of your existing mutual fund investments.' },
            { name: 'Portfolio Rebalancing', summary: 'Periodic asset reallocation to restore your original target risk-reward asset mix.' }
          ]
        }
      ]
    },
    'bonds': {
      id: 'bonds',
      title: 'Bonds',
      tagline: '“Explore fixed-income opportunities designed to bring stability, predictable income and diversification to your portfolio.”',
      icon: 'bi-bank',
      description: 'Access curated corporate bonds, NCDs, and fixed-income securities offering predictable interest payouts and capital preservation.',
      badge: 'INVESTMENTS → Grow What Matters',
      sections: [
        {
          heading: 'Corporate Bonds',
          desc: 'High-quality corporate debt instruments offering reliable coupon yields.',
          items: [
            { name: 'Investment Grade Corporate Bonds', summary: 'High-rated debt instruments issued by creditworthy corporate enterprises for dependable income.' },
            { name: 'High-Quality Corporate Bonds', summary: 'AAA/AA+ rated corporate bonds ensuring high capital safety and predictable interest payouts.' },
            { name: 'Secured Corporate Bonds', summary: 'Debt securities backed by physical company assets providing enhanced investor protection.' },
            { name: 'Unsecured Corporate Bonds', summary: 'Senior corporate debt offering higher coupon interest payouts for risk-reward optimization.' }
          ]
        },
        {
          heading: 'NCDs (Non-Convertible Debentures)',
          desc: 'Fixed-tenure debentures providing attractive coupon rates.',
          items: [
            { name: 'Listed NCDs', summary: 'Debentures traded on major stock exchanges offering secondary market liquidity and regular interest.' },
            { name: 'Secured NCDs', summary: 'Asset-backed debentures offering guaranteed coupon rates and priority payout during liquidation.' },
            { name: 'Corporate NCDs', summary: 'High-yield debentures issued by reputed corporate houses for fixed investment tenures.' },
            { name: 'Fixed-Coupon NCDs', summary: 'Debentures paying fixed monthly, annual, or cumulative interest payouts agreed upon upfront.' }
          ]
        },
        {
          heading: 'Other Bond Opportunities',
          desc: 'Exchange-traded and structured fixed-income debt securities.',
          items: [
            { name: 'Listed Bonds', summary: 'Exchange-listed fixed-income debt instruments offering price transparency and liquidity.' },
            { name: 'Secured Bonds', summary: 'Asset-secured fixed income securities with structured cash flows and legal charge on underlying assets.' },
            { name: 'Fixed-Income Opportunities', summary: 'Curated high-yield debt options selected by underwriters for capital preservation and stable returns.' },
            { name: 'Private / Unlisted Bonds', summary: 'Bespoke corporate debt issues tailored for institutional and qualified high-net-worth investors.' }
          ]
        }
      ]
    },
    'wealth-planning': {
      id: 'wealth-planning',
      title: 'Wealth Planning',
      tagline: '“Turn your financial goals into a structured investment strategy built for your future.”',
      icon: 'bi-compass',
      description: 'Comprehensive financial planning, asset allocation, retirement engineering, and goal-based wealth creation strategies.',
      badge: 'WEALTH PLANNING → Plan What Matters',
      sections: [
        {
          heading: 'Goal-Based Planning',
          desc: 'Targeted investment pathways mapped to your family milestones.',
          items: [
            { name: 'Child Education Planning', summary: 'Dedicated corpus accumulation strategy for domestic and overseas higher education expenses.' },
            { name: 'Child Marriage Planning', summary: 'Long-term wealth creation structured around future family milestones and celebrations.' },
            { name: 'Home Purchase Planning', summary: 'Targeted fund accumulation for property down payments and real estate acquisition.' },
            { name: 'Dream / Lifestyle Planning', summary: 'Dedicated investment pools for luxury vacations, passion projects, and major lifestyle acquisitions.' },
            { name: 'Financial Independence Planning', summary: 'Structuring passive income streams to achieve early financial freedom and career flexibility.' }
          ]
        },
        {
          heading: 'Wealth Creation',
          desc: 'Strategic capital growth and disciplined portfolio structuring.',
          items: [
            { name: 'Long-Term Wealth Creation', summary: 'Compounding strategies targeting inflation-beating capital growth over 10+ year time horizons.' },
            { name: 'Systematic Wealth Creation', summary: 'Disciplined monthly SIP allocation mapped to multi-decade wealth compounding targets.' },
            { name: 'Lump Sum Wealth Deployment', summary: 'Strategic one-time capital deployment during favorable market valuation windows.' },
            { name: 'Portfolio Diversification', summary: 'Spreading investments across uncorrelated asset classes to minimize downside volatility.' },
            { name: 'Asset Allocation', summary: 'Structuring optimal equity, debt, and cash ratios matched to your risk capacity.' },
            { name: 'Risk-Based Investment Planning', summary: 'Custom portfolio construction based on formal psychometric risk tolerance profiling.' }
          ]
        },
        {
          heading: 'Financial Planning',
          desc: 'Holistic financial health evaluation, review, and monitoring.',
          items: [
            { name: 'Financial Goal Assessment', summary: 'Quantitative evaluation of current cash flows, liabilities, and future milestone costs.' },
            { name: 'Investment Planning', summary: 'Tailored roadmap aligning income streams with concrete short and long-term objectives.' },
            { name: 'Portfolio Review', summary: 'Comprehensive health check of your existing investments and underperforming assets.' },
            { name: 'Portfolio Rebalancing', summary: 'Systematic re-alignment of portfolio weights to restore target asset allocation ratios.' },
            { name: 'Investment Strategy Review', summary: 'Periodic evaluation of market conditions, fund performance, and tax efficiency.' },
            { name: 'Risk Profiling', summary: 'Objective assessment determining your financial risk tolerance and capacity for loss.' },
            { name: 'Periodic Portfolio Monitoring', summary: 'Ongoing performance tracking and regular advisory reporting for peace of mind.' }
          ]
        },
        {
          heading: 'Income & Future Planning',
          desc: 'Retirement income engineering, wealth preservation, and estate legacy.',
          items: [
            { name: 'Regular Income Planning', summary: 'Structuring SWP and dividend cash flows for predictable monthly post-tax income.' },
            { name: 'Retirement Corpus Planning', summary: 'Calculating exact inflation-adjusted post-retirement wealth requirements and accumulation targets.' },
            { name: 'Post-Retirement Income Planning', summary: 'Automated cash flow strategies ensuring lifelong financial independence without depleting principal.' },
            { name: 'Wealth Preservation', summary: 'Capital protection strategies shielding accumulated wealth against market downturns and inflation.' },
            { name: 'Legacy / Estate-Oriented Wealth Planning', summary: 'Structuring wealth transfer and asset protection mechanisms for future generations.' }
          ]
        }
      ]
    }
  };

  const category = allInvestmentCategories[catId] || allInvestmentCategories['mutual-funds'];

  const handleOpenModal = (solutionName) => {
    trackEvent('investment_solution_consult_click', { category: category.title, solution: solutionName });
    setSelectedRequirement(`${category.title} - ${solutionName}`);
    setIsModalOpen(true);
  };

  // Filter sections based on search query
  const filteredSections = category.sections.map(section => {
    const matchingItems = section.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...section, items: matchingItems };
  }).filter(section => section.items.length > 0);

  const totalItemCount = category.sections.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <main className="main pt-5 bg-ivory min-vh-100">
      
      {/* Category Header Banner */}
      <section className="page-header py-5 text-light position-relative" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', borderBottom: '2px solid #C9A24D' }}>
        <div className="container py-4">
          
          {/* Breadcrumb & Navigation Back */}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Link to="/investments" className="btn btn-outline-light btn-sm rounded-pill px-3 py-2 fs-7 fw-semibold">
              <i className="bi bi-arrow-left me-1"></i> Back to Investments
            </Link>

            <span className="badge bg-gold-subtle text-gold-accent font-sans fs-8 tracking-wider uppercase px-3 py-1 fw-bold" style={{ background: 'rgba(201, 162, 77, 0.15)', color: '#C9A24D', border: '1px solid rgba(201, 162, 77, 0.4)' }}>
              {category.badge}
            </span>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="icon-circle bg-gold-subtle text-gold-accent d-inline-flex align-items-center justify-content-center rounded-3 p-3" style={{ width: '58px', height: '58px', background: 'rgba(201, 162, 77, 0.2)' }}>
                  <i className={`bi ${category.icon} fs-2`} style={{ color: '#C9A24D' }}></i>
                </div>
                <div>
                  <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block">
                    AVS INVESTMENT &amp; WEALTH ADVISORY
                  </span>
                  <h1 className="display-4 font-playfair text-white mt-1 mb-0 fw-bold">
                    {category.title}
                  </h1>
                </div>
              </div>

              <p className="lead font-serif text-gold-accent fs-5 mt-3 mb-2" style={{ color: '#C9A24D' }}>
                {category.tagline}
              </p>
              <p className="font-sans text-secondary-light fs-6 mt-1 mb-0">
                {category.description}
              </p>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <div className="p-4 rounded-4 bg-white text-dark shadow-sm border border-gold-subtle text-start">
                <span className="fs-8 text-uppercase tracking-wider text-gold-accent font-sans fw-bold d-block mb-1">
                  AMFI CERTIFIED ADVISORY
                </span>
                <h4 className="font-playfair text-emerald fw-bold h5 mb-2" style={{ color: '#0B1F33' }}>
                  Talk to an Advisor
                </h4>
                <p className="fs-7 text-muted mb-3">
                  Our wealth specialists help structure portfolios tailored to your financial targets and risk capacity.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenModal('Comprehensive Investment Advisory')}
                  className="btn btn-luxury-gold w-100 py-2 text-uppercase tracking-wider fw-bold fs-7 shadow-sm"
                  style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                >
                  Consult Investment Specialist &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Section: Live Search Bar & Solutions Grid */}
      <section className="section py-5">
        <div className="container py-2">
          
          {/* Live Search Bar */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="p-3 bg-white rounded-4 shadow-sm border border-gold-subtle d-flex align-items-center gap-3">
                <i className="bi bi-search fs-4 text-gold-accent ms-2" style={{ color: '#C9A24D' }}></i>
                <input 
                  type="text" 
                  className="form-control border-0 shadow-none fs-6 font-sans luxury-input p-0"
                  placeholder={`Search ${category.title} options (e.g. flexi cap, ncd, sip, education, corporate bond)...`}
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
                  Showing solutions across <strong>{category.sections.length}</strong> categories ({totalItemCount} total options)
                </span>
                {searchQuery && (
                  <span className="fs-8 text-gold-accent font-sans fw-semibold">
                    Filtered by "{searchQuery}"
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Sections & Cards */}
          {filteredSections.length > 0 ? (
            filteredSections.map((sec, sIdx) => (
              <div key={sIdx} className="mb-5">
                
                {/* Section Sub-heading */}
                <div className="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom border-gold-subtle">
                  <div className="p-2 rounded-circle bg-emerald text-gold-accent d-inline-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', background: '#0B1F33', color: '#C9A24D' }}>
                    <i className="bi bi-check2-circle fs-5"></i>
                  </div>
                  <div>
                    <h3 className="font-playfair text-emerald fw-bold h4 mb-0" style={{ color: '#0B1F33' }}>
                      {sec.heading}
                    </h3>
                    <p className="fs-7 text-muted font-sans mb-0">
                      {sec.desc}
                    </p>
                  </div>
                </div>

                {/* Grid of Cards: 2-3 Columns on Desktop, Single Column on Mobile */}
                <div className="row g-4">
                  {sec.items.map((item, iIdx) => (
                    <div key={iIdx} className="col-lg-4 col-md-6 col-12 d-flex">
                      <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white w-100 d-flex flex-column transition-all hover-lift" style={{ border: '1px solid #DDD8CC' }}>
                        
                        {/* Card Top Icon & Title */}
                        <div className="d-flex align-items-start justify-content-between mb-2">
                          <h4 className="font-playfair text-emerald fw-bold h5 mb-0" style={{ color: '#0B1F33' }}>
                            {item.name}
                          </h4>
                          <i className="bi bi-graph-up text-gold-accent fs-5 ms-2 flex-shrink-0" style={{ color: '#C9A24D' }}></i>
                        </div>

                        {/* Summary Box */}
                        <div className="p-3 rounded-3 my-3 flex-fill" style={{ background: '#F8F6F0', borderLeft: '3px solid #C9A24D' }}>
                          <span className="fs-8 text-uppercase tracking-wider text-muted font-sans fw-bold d-block mb-1">
                            Overview:
                          </span>
                          <p className="font-sans fs-7 text-dark mb-0 leading-snug">
                            {item.summary}
                          </p>
                        </div>

                        {/* Card Action Footer */}
                        <div className="mt-auto pt-3 border-top border-gold-subtle d-flex align-items-center justify-content-between gap-2">
                          <span className="fs-8 text-muted font-sans">
                            <i className="bi bi-patch-check-fill me-1 text-gold-accent"></i> Verified Strategy
                          </span>

                          <button
                            type="button"
                            onClick={() => handleOpenModal(item.name)}
                            className="btn btn-sm rounded-pill px-3 py-2 fs-7 text-uppercase tracking-wider fw-bold text-nowrap"
                            style={{ backgroundColor: '#0B1F33', color: '#C9A24D', border: 'none' }}
                          >
                            Inquire Solution <i className="bi bi-arrow-right ms-1"></i>
                          </button>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))
          ) : (
            <div className="text-center py-5 bg-white rounded-4 p-5 shadow-sm border border-gold-subtle max-w-xl mx-auto">
              <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
              <h4 className="font-playfair fw-bold text-dark mb-2">No Investment Option Found</h4>
              <p className="text-muted fs-7 mb-4">
                We couldn't find any option matching "{searchQuery}". Try searching for another keyword or speak with our wealth advisors.
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="btn btn-outline-dark btn-sm rounded-pill px-4 py-2 me-2"
              >
                Clear Search
              </button>
              <button 
                onClick={() => handleOpenModal(searchQuery || 'Custom Wealth Consultation')}
                className="btn btn-luxury-gold btn-sm rounded-pill px-4 py-2"
                style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
              >
                Schedule Wealth Review &rarr;
              </button>
            </div>
          )}

          {/* Bottom Back Button & AMFI Notice */}
          <div className="mt-5 text-center">
            <Link to="/investments" className="btn btn-outline-dark rounded-pill px-4 py-2 fs-7 font-sans fw-bold mb-4">
              <i className="bi bi-arrow-left me-1"></i> Back to Investments Overview
            </Link>

            <div className="p-4 rounded-4 bg-white border border-gold-subtle text-start max-w-3xl mx-auto shadow-sm">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-1">
                AVS PROSPERITY COMPLIANCE &amp; DISCLOSURE
              </span>
              <p className="fs-8 text-muted mb-0 leading-relaxed">
                AVS Prosperity Consultancy is an ISO 9001:2015 Certified Company and AMFI-registered mutual fund distributor facilitating scheme transactions across premier AMCs in India. Investments are subject to market risks; please read scheme information documents carefully before investing. Past performance is not indicative of future returns.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Consultation Section */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ConsultationForm title={`Schedule Consultation for ${category.title}`} />
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

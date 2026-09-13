import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const scenarios = [
  {
    id: 'health',
    category: 'Health Insurance',
    icon: 'bi-heart-pulse-fill',
    title: 'Emergency Medical Hospitalization During Family Lunch',
    story: 'You are having a peaceful Sunday lunch with your family. Suddenly, your father experiences severe chest tightness and trouble breathing. Panic strikes as you rush him to the hospital emergency room. The hospital requests an immediate admission deposit for ICU care. Because you have comprehensive Health Insurance through AVS Prosperity Consultancy, there is no frantic pooling of emergency funds or selling assets. You and your family spend every moment caring for dad while AVS handles the cashless claim approval seamlessly.',
    link: '/health-insurance',
    ctaText: 'Explore Health Insurance'
  },
  {
    id: 'life',
    category: 'Life & Term Cover',
    icon: 'bi-shield-heart-fill',
    title: 'Highway Accident: Protecting Family Dignity & Home Loan',
    story: 'A dedicated family breadwinner is driving home on the highway after work when an unexpected truck collision occurs. Beyond the tragic emotional loss, monthly home loan EMIs of ₹65,000 and children\'s school fees arrive immediately. With a ₹2 Crore Term Life Cover structured under the MWP Act by AVS Prosperity Consultancy, the full payout goes directly to the spouse without interference from creditors. The family retains their home and the kids complete university without financial compromise.',
    link: '/life-insurance',
    ctaText: 'Explore Life Cover'
  },
  {
    id: 'motor',
    category: 'Motor Insurance',
    icon: 'bi-car-front-fill',
    title: 'Stormy Night Highway Collision: Zero Cash Out-of-Pocket',
    story: 'Driving home on a rainy midnight highway, a fallen tree branch smashes your windshield, bumper, and radiator. With AVS Zero-Depreciation Motor Insurance, one phone call to our 24x7 desk dispatches emergency towing straight to an authorized network garage. Repair bills of ₹1.75 Lakhs are covered 100% cashless, and you return home safely while AVS handles all surveyor documentation.',
    link: '/motor-insurance',
    ctaText: 'Explore Motor Cover'
  },
  {
    id: 'travel',
    category: 'Travel Insurance',
    icon: 'bi-airplane-fill',
    title: 'Lost Luggage & Overseas ER Hospitalization in London',
    story: 'You arrive at London Heathrow for a family holiday, only to find your checked-in bags missing. The next day, your child develops a high fever requiring urgent emergency room treatment costing £3,800 ($4,800 USD). With AVS Overseas Travel Insurance, medical bills are settled directly cashless in foreign currency through international TPA partners, and lost luggage emergency allowance is disbursed immediately.',
    link: '/travel-insurance',
    ctaText: 'Explore Travel Cover'
  },
  {
    id: 'business',
    category: 'Business & Asset Cover',
    icon: 'bi-building-fill',
    title: 'Factory Short-Circuit Fire: Fast-Tracking Recovery',
    story: 'At 2:00 AM on a festival holiday, an electrical short-circuit triggers a fire inside a factory, destroying ₹65 Lakhs worth of raw materials and machinery. With Commercial Fire & Special Perils Cover guided by AVS Prosperity Consultancy, an emergency surveyor is deployed within 24 hours. Replacement machinery and stock losses are fully reimbursed, preserving employee payroll and business operations.',
    link: '/business-insurance',
    ctaText: 'Explore Business Cover'
  }
];

export default function RealLifeScenariosSection() {
  const [activeTab, setActiveTab] = useState('health');
  const currentScenario = scenarios.find(s => s.id === activeTab) || scenarios[0];

  return (
    <section className="py-5" style={{ backgroundColor: '#F8F6F0' }}>
      <div className="container py-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Why Insurance Matters</span>
          <h2 className="display-5 font-playfair text-emerald fw-bold mt-2">Real-Life Claim Scenarios</h2>
          <div className="luxury-divider mx-auto my-3"></div>
          <p className="text-muted font-serif">
            Click any insurance category below to see how AVS Prosperity Consultancy protects families in real-world emergencies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`btn rounded-pill px-3 py-2 fw-semibold fs-7 transition-all ${
                activeTab === s.id
                  ? 'btn-dark text-gold-accent shadow-sm'
                  : 'btn-outline-secondary text-dark bg-white'
              }`}
              style={{ border: activeTab === s.id ? '2px solid #C9A24D' : '1px solid #DDD8CC' }}
            >
              <i className={`bi ${s.icon} me-2`}></i>
              {s.category}
            </button>
          ))}
        </div>

        {/* Scenario Display Card */}
        <div className="card border-0 rounded-4 shadow-sm bg-white overflow-hidden" style={{ borderLeft: '5px solid #C9A24D' }}>
          <div className="card-body p-4 p-md-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge px-3 py-2 rounded-pill bg-gold-subtle text-gold-accent fw-bold text-uppercase fs-8">
                <i className={`bi ${currentScenario.icon} me-1`}></i> Real-Life Story
              </span>
              <span className="text-muted fs-8 font-serif">Case Example</span>
            </div>

            <h3 className="display-6 font-playfair text-emerald fw-bold mb-3">
              {currentScenario.title}
            </h3>

            <div className="p-4 rounded-3 mb-4" style={{ backgroundColor: '#F8F6F0', border: '1px solid #DDD8CC' }}>
              <p className="text-dark font-serif fs-6 leading-relaxed mb-0">
                {currentScenario.story}
              </p>
            </div>

            <div className="p-3 rounded-3 mb-4 text-white d-flex align-items-center gap-3" style={{ backgroundColor: '#0B1F33' }}>
              <i className="bi bi-shield-check text-gold-accent fs-2"></i>
              <div>
                <strong className="text-gold-accent d-block font-playfair">AVS Claim Assistance Guarantee</strong>
                <span className="text-light-opacity fs-7">
                  With AVS Prosperity Consultancy, claim process assistance becomes easy, fast & 100% smooth.
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <Link to={currentScenario.link} className="btn btn-gold rounded-pill px-4 py-2 text-dark fw-bold">
                {currentScenario.ctaText} <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

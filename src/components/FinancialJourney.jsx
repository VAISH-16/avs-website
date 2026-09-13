import React from 'react';

export default function FinancialJourney() {
  const steps = [
    {
      num: '01',
      title: 'PLAN',
      subtitle: 'Goal & Cashflow Clarity',
      desc: 'Understand your goals, current wealth, tax situation, and timeline.',
      icon: 'bi-compass'
    },
    {
      num: '02',
      title: 'INVEST',
      subtitle: 'Systematic Growth',
      desc: 'Deploy capital into suitable mutual funds, SIPs, government & corporate bonds, and assets.',
      icon: 'bi-graph-up-arrow'
    },
    {
      num: '03',
      title: 'PROTECT',
      subtitle: 'Risk & Asset Shield',
      desc: 'Safeguard your family and enterprise with life, health, motor, and business insurance.',
      icon: 'bi-shield-check'
    },
    {
      num: '04',
      title: 'REVIEW',
      subtitle: 'Ongoing Evolution',
      desc: 'Periodic reviews and policy support as your career and life milestones evolve.',
      icon: 'bi-arrow-repeat'
    }
  ];

  return (
    <section className="section py-5 bg-white position-relative border-bottom border-gold-subtle">
      <div className="container py-4">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              THE AVS ROADMAP
            </span>
            <h2 className="display-4 font-playfair text-emerald fw-bold mb-3">
              Your Financial Journey Is Unique.
            </h2>
            <div className="luxury-divider mx-auto mb-4"></div>
            <p className="lead font-serif text-secondary mb-0">
              Because your financial plan should evolve as your life evolves.
            </p>
          </div>
        </div>

        {/* 4 Journey Steps Grid */}
        <div className="row g-4 position-relative">
          
          {steps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="journey-card p-4 rounded-4 bg-ivory border border-gold-subtle shadow-sm h-100 d-flex flex-column position-relative overflow-hidden">
                
                {/* Large Background Step Number */}
                <span className="position-absolute top-0 end-0 p-3 font-playfair text-gold-subtle fw-bold fs-1 opacity-25 select-none">
                  {step.num}
                </span>

                <div className="d-inline-flex align-items-center justify-content-center bg-emerald text-gold-accent rounded-circle mb-3" style={{ width: '48px', height: '48px' }}>
                  <i className={`bi ${step.icon} fs-4`}></i>
                </div>

                <div className="mb-2">
                  <span className="fs-8 font-sans text-uppercase tracking-widest text-gold-accent fw-bold d-block">
                    STEP {step.num}
                  </span>
                  <h3 className="font-playfair text-emerald fw-bold h4 mb-1">
                    {step.title}
                  </h3>
                  <span className="fs-7 font-serif text-muted italic-subtitle d-block mb-2">
                    {step.subtitle}
                  </span>
                </div>

                <p className="font-sans text-muted fs-7 mb-0 flex-fill">
                  {step.desc}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';
import ConsultationModal from '../components/ConsultationModal';
import { trackEvent } from '../utils/analytics';

import InteractiveFinancialPlanningSection from '../components/InteractiveFinancialPlanningSection';

export default function PersonalFinance() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState('Personal Financial Planning');

  const handleOpenModal = (requirement = 'Personal Financial Planning') => {
    setSelectedRequirement(requirement);
    setIsModalOpen(true);
  };

  return (
    <main className="main pt-5 bg-ivory min-vh-100">
      
      {/* Page Header */}
      <section className="page-header py-5 dark-background text-light text-center" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', borderBottom: '2px solid #C9A24D' }}>
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">
            FINANCIAL PLANNING → PLAN WHAT MATTERS
          </span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">
            Personal Financial Guidance
          </h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto mb-4">
            Structuring custom financial roadmaps, retirement security, tax-optimized investments, and comprehensive family protection.
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

      {/* 7 Interactive Financial Planning Category Cards */}
      <InteractiveFinancialPlanningSection />

      {/* Life Goals Feature Banner */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">GOAL-BASED ADVISORY</span>
              <h2 className="display-5 font-playfair text-emerald mb-4" style={{ color: '#0B1F33' }}>Planning Around Your Core Life Aspirations</h2>
              <p className="text-muted mb-4 fs-6">
                We align your SIP contributions, lump sum investments, and risk protection with concrete life milestones:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-gold-accent me-3 fs-5" style={{ color: '#C9A24D' }}></i>
                  <span className="fw-medium text-dark fs-6">Comfortable Early Retirement &amp; SWP Income Stream</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-gold-accent me-3 fs-5" style={{ color: '#C9A24D' }}></i>
                  <span className="fw-medium text-dark fs-6">Higher Education Fund for Children (Domestic &amp; Overseas)</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-gold-accent me-3 fs-5" style={{ color: '#C9A24D' }}></i>
                  <span className="fw-medium text-dark fs-6">Real Estate Acquisition &amp; Tax-Exempt Capital Savings</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-gold-accent me-3 fs-5" style={{ color: '#C9A24D' }}></i>
                  <span className="fw-medium text-dark fs-6">Legacy Wealth Transfer to Next Generation</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <img
                src="/assets/img/hero_family_planning.png"
                alt="Personal Wealth & Life Goals"
                className="img-fluid rounded-4 shadow-lg border border-gold-light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="section py-5 bg-ivory">
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

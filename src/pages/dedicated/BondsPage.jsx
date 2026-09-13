import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import RealLifeStoryCard from '../../components/RealLifeStoryCard';

export default function BondsPage() {
  return (
    <main className="main pt-5">
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Fixed Income & Capital Preservation</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">Government & Corporate Bonds</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Secure predictable returns and protect your capital with AAA-rated Government Bonds, PSUs, Corporate Debentures, and Government & Corporate Bonds (REC, PFC, NHAI).
          </p>
        </div>
      </section>

      <section className="section py-5 bg-ivory">
        <div className="container py-4">

          {/* Real-Life Scenario Section */}
          <RealLifeStoryCard
            badge="FIXED INCOME & TAX RELIEF SCENARIO"
            icon="bi-cash-coin"
            title="Securing High-Yield Fixed Returns & Capital Preservation"
            scenarioText='Whether you wish to earn stable annual interest or save capital gains tax on property sales under Section 54EC, AVS Prosperity Consultancy helps you allocate funds into sovereign, PSU, and AAA-rated Corporate Bonds (REC, PFC, NHAI, SGBs & Top Corporate Debentures). Your principal remains secure with regular, predictable coupon payouts.'
            withoutProtection="Unstructured investments often expose your wealth to equity volatility or low-yielding savings instruments."
            withAvsProtection="Guaranteed capital safety backed by Sovereign/AAA security with optimized tax efficiency."
            claimAssistancePerk="AVS Prosperity Consultancy assists with complete application verification, bank coordination, and demat bond allotment."
            ctaText="Inquire About Bonds"
            ctaLink="#consultation-form"
          />

          <div className="row gy-4 align-items-center mt-3">
            <div className="col-lg-6">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Fixed Income Solutions</span>
              <h2 className="display-5 font-playfair text-emerald mb-4">Sovereign Security & Predictable Yields</h2>
              <p className="text-muted mb-4">
                Build a resilient fixed-income portfolio with high-grade government and corporate bonds tailored to meet your liquidity and tax-saving goals.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>AAA Rated & Sovereign Security:</strong> Government securities, PSU bonds (REC, PFC, NHAI), and top corporate debentures.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Section 54EC Capital Gains Tax Exemption:</strong> 100% tax relief on property sale gains up to ₹50 Lakhs.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Predictable Interest Income:</strong> Fixed periodic coupon payouts with full principal redemption at maturity.</div></li>
              </ul>
            </div>
            <div className="col-lg-6" id="consultation-form">
              <ConsultationForm title="Inquire About Government & Corporate Bonds" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


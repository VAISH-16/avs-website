import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import RealLifeStoryCard from '../../components/RealLifeStoryCard';

export default function BusinessInsurancePage() {
  return (
    <main className="main pt-5">
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Commercial Risk</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">Business & Asset Insurance</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Commercial property, fire special perils, keyman indemnity, and employee group health (GMC) insurance.
          </p>
        </div>
      </section>

      <section className="section py-5 bg-ivory">
        <div className="container py-4">

          {/* Real-Life Scenario Section */}
          <RealLifeStoryCard 
            badge="REAL-LIFE BUSINESS SCENARIO"
            icon="bi-building-fill"
            title="Factory Fire Emergency: Fast-Tracking Business Survival & Recovery"
            scenarioText='At 2:00 AM on a festival holiday, an electrical short-circuit triggers a massive fire in a manufacturing warehouse, destroying ₹65 Lakhs worth of finished goods inventory, raw materials, and precision CNC machinery. Without proper commercial insurance, a business built across 15 years faces instant bankruptcy, employee layoffs, and ruined vendor relationships. Because the founder secured Commercial Fire & Special Perils Cover guided by AVS Prosperity Consultancy, an emergency surveyor inspection was deployed within 24 hours. Replacement machinery and stock losses were fully reimbursed, enabling full factory revival without defaulting on payroll or customer orders.'
            withoutProtection="Business owners suffer catastrophic capital loss, severe operational shutdowns, personal liability for debts, and potential business closure."
            withAvsProtection="100% asset loss recovery, machinery breakdown replacement, business interruption profit protection, and group employee mediclaim."
            claimAssistancePerk="AVS Prosperity Consultancy acts as your corporate claim advocate — managing TPA surveyors, policy documentation, and speedy claim payout disbursement."
            ctaText="Audit Your Business Insurance"
            ctaLink="#consultation-form"
          />

          <div className="row gy-4 align-items-center mt-3">
            <div className="col-lg-6">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Enterprise Asset Shield</span>
              <h2 className="display-5 font-playfair text-emerald mb-4">Insulate Business Operations</h2>
              <p className="text-muted mb-4">
                Safeguard factory machinery, warehouse stock, office premises, and employee health with tailored commercial insurance policies from top-tier underwriters.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Fire & Special Perils:</strong> Protection against fire, electrical short-circuit, storm, flood, and earthquake damage.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Group Mediclaim (GMC):</strong> Corporate health insurance for employees and families with cashless admission.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Keyman & Liability Cover:</strong> Protecting corporate balance sheets upon loss of key founders or executives.</div></li>
              </ul>
            </div>
            <div className="col-lg-6" id="consultation-form">
              <ConsultationForm title="Inquire About Corporate Risk Audit" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import RealLifeStoryCard from '../../components/RealLifeStoryCard';

export default function LifeInsurancePage() {
  return (
    <main className="main pt-5">
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Family Shield</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">Life & Term Insurance</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            High-sum assured term insurance plans ensuring complete financial protection for your dependents.
          </p>
        </div>
      </section>

      <section className="section py-5 bg-ivory">
        <div className="container py-4">

          {/* Real-Life Scenario Section */}
          <RealLifeStoryCard 
            badge="REAL-LIFE LIFE INSURANCE SCENARIO"
            icon="bi-shield-heart-fill"
            title="Securing Your Family's Dreams When the Unexpected Happens"
            scenarioText='Picture a dedicated parent and sole breadwinner driving back home on the highway after a long workday. An unexpected accident occurs, leaving the family without their primary provider. Beyond the devastating loss, monthly home loan EMIs of ₹65,000, school fees, and family living expenses arrive immediately. Because a ₹2 Crore Term Life policy was structured under the Married Women’s Property (MWP) Act with AVS Prosperity Consultancy, the insurance payout goes directly to the spouse without interference from creditors. The family keeps their home, the children attend college as planned, and financial dignity remains intact.'
            withoutProtection="Dependents face immediate financial collapse, potential eviction due to unpaid home loans, and compromised education for children."
            withAvsProtection="Guaranteed tax-free lump sum payout replaces monthly income, pays off outstanding debts, and secures your children's future education."
            claimAssistancePerk="AVS Prosperity Consultancy assigns a dedicated claims concierge to assist the grieving family with hassle-free death claim documentation and fast-track settlement."
            ctaText="Calculate Your Life Cover"
            ctaLink="#consultation-form"
          />

          <div className="row gy-4 align-items-center mt-3">
            <div className="col-lg-6">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Income Replacement</span>
              <h2 className="display-5 font-playfair text-emerald mb-4">Protect Your Family's Lifestyle</h2>
              <p className="text-muted mb-4">
                Pure term life insurance is the single most cost-effective way to secure your family against life's uncertainties. We assist in calculating your exact Human Life Value (HLV) to ensure optimal coverage.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>High Cover at Low Premium:</strong> Secure ₹1 Crore+ cover for affordable monthly payouts.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Critical Illness Riders:</strong> Add-on lump sum protection for heart conditions, cancer, and stroke.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>MWP Act Registration:</strong> Ensure policy proceeds go strictly to your spouse and children, legally protected from commercial creditors.</div></li>
              </ul>
            </div>
            <div className="col-lg-6" id="consultation-form">
              <ConsultationForm title="Calculate Your Term Insurance Needs" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


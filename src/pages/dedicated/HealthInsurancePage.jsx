import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import RealLifeStoryCard from '../../components/RealLifeStoryCard';

export default function HealthInsurancePage() {
  return (
    <main className="main pt-5">
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Medical Security</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">Health & Mediclaim Cover</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Comprehensive family floater policies, cashless hospitalization networks, and super top-up plans.
          </p>
        </div>
      </section>

      <section className="section py-5 bg-ivory">
        <div className="container py-4">

          {/* Real-Life Scenario Section */}
          <RealLifeStoryCard 
            badge="REAL-LIFE HEALTH SCENARIO"
            icon="bi-heart-pulse-fill"
            title="When Every Second Counts: Focus on Care, Not Hospital Bills"
            scenarioText='Imagine having a peaceful lunch with your family on a weekend. Suddenly, your father experiences acute chest tightness and trouble breathing. Panic sets in as you rush him to the nearest hospital emergency room. The hospital requests an immediate admission deposit for ICU monitoring and specialized tests. Because you have comprehensive Health Insurance through AVS Prosperity Consultancy, there is no frantic calling around to arrange funds, selling assets, or depleting emergency savings. You and your family spend every moment focusing on dad’s recovery while AVS handles the paperwork.'
            withoutProtection="Family members are forced to run around arranging cash, liquidating fixed deposits, or delaying critical medical procedures due to upfront deposit demands."
            withAvsProtection="Immediate cashless hospital admission approved. Your family remains by dad's bedside offering emotional strength while the medical team delivers undivided care."
            claimAssistancePerk="With AVS Prosperity Consultancy, claim process assistance becomes easy & smooth — from cashless pre-authorization to final discharge settlement."
            ctaText="Get Cashless Health Protection"
            ctaLink="#consultation-form"
          />

          <div className="row gy-4 align-items-center mt-3">
            <div className="col-lg-6">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Beat Medical Inflation</span>
              <h2 className="display-5 font-playfair text-emerald mb-4">Cashless Medical Protection</h2>
              <p className="text-muted mb-4">
                Medical inflation in India runs above 14% annually. A robust individual or family health insurance policy shields your hard-earned savings from sudden hospitalization expenses.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Cashless Hospital Network:</strong> Direct cashless admission across 10,000+ top hospitals nationwide.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>No Room Rent Capping:</strong> Single private room eligibility without hidden co-payment penalties.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Restoration Benefit:</strong> 100% automatic reload of sum insured if exhausted in a single policy year.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Pre & Post Hospitalization:</strong> Comprehensive coverage for 60 days before and 180 days after hospital stay.</div></li>
              </ul>
            </div>
            <div className="col-lg-6" id="consultation-form">
              <ConsultationForm title="Get Health Insurance Quote & Claim Help" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import RealLifeStoryCard from '../../components/RealLifeStoryCard';

export default function MotorInsurancePage() {
  return (
    <main className="main pt-5">
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Vehicle Protection</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">Motor & Fleet Insurance</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Zero-depreciation comprehensive insurance for private cars, luxury sedans, and commercial fleets.
          </p>
        </div>
      </section>

      <section className="section py-5 bg-ivory">
        <div className="container py-4">

          {/* Real-Life Scenario Section */}
          <RealLifeStoryCard 
            badge="REAL-LIFE MOTOR SCENARIO"
            icon="bi-car-front-fill"
            title="Late Night Highway Collision: Zero Cash Out-of-Pocket"
            scenarioText='Imagine driving your family home on a rainy midnight highway. Suddenly, a heavy branch collapses onto the road, severely damaging your windshield, bumper, radiator, and engine bay. You are stranded far from home in the dark. With AVS Zero-Depreciation Motor Insurance, a quick call to our 24x7 desk dispatches emergency towing straight to an authorized network garage. Repairs amounting to ₹1.75 Lakhs for metal, bumper, and engine parts are covered 100% cashless. You return home safely without paying a single rupee out of pocket for depreciation deductions.'
            withoutProtection="Car owners are stuck paying 50% out-of-pocket for plastic and rubber part replacements, plus expensive towing and surveyor hassles."
            withAvsProtection="Full zero-dep replacement payout, instant roadside assistance, and direct settlement with 4,000+ cashless network garages."
            claimAssistancePerk="AVS Prosperity Consultancy coordinates surveyor inspection, garage approval, and claims filing so your car is restored swiftly without stress."
            ctaText="Get Zero-Dep Auto Cover"
            ctaLink="#consultation-form"
          />

          <div className="row gy-4 align-items-center mt-3">
            <div className="col-lg-6">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Complete Auto Shield</span>
              <h2 className="display-5 font-playfair text-emerald mb-4">Cashless Garage Network & Zero Dep</h2>
              <p className="text-muted mb-4">
                Protect your vehicle against accident repairs, theft, third-party liability, and natural calamities with zero-depreciation cover and 24/7 roadside assistance.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Bumper-to-Bumper Cover:</strong> Full replacement value on plastic, rubber, fiber, and glass parts without depreciation.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Engine Protect & Hydro-Lock Cover:</strong> Defense against water ingression and oil leakage engine damage during monsoons.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>24/7 Roadside Assistance:</strong> Fuel delivery, flat tire change, battery jumpstart, and flatbed towing.</div></li>
              </ul>
            </div>
            <div className="col-lg-6" id="consultation-form">
              <ConsultationForm title="Renew or Quote Motor Insurance" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


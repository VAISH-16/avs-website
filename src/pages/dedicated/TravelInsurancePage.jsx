import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import RealLifeStoryCard from '../../components/RealLifeStoryCard';

export default function TravelInsurancePage() {
  return (
    <main className="main pt-5">
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Global Security</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">International Travel Insurance</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Emergency medical cashless care, trip cancellation refund, and lost passport protection worldwide.
          </p>
        </div>
      </section>

      <section className="section py-5 bg-ivory">
        <div className="container py-4">

          {/* Real-Life Scenario Section */}
          <RealLifeStoryCard 
            badge="REAL-LIFE TRAVEL SCENARIO"
            icon="bi-airplane-fill"
            title="Lost Luggage & Overseas ER: Direct Cashless Assistance"
            scenarioText='Imagine landing at London Heathrow after a 10-hour flight for a long-planned family vacation. At baggage claim, your luggage containing essential garments and prescriptions is nowhere to be found. The next day, your child spikes a high fever requiring urgent emergency room admission costing £3,800 ($4,800+ USD). With Overseas Travel Insurance through AVS Prosperity Consultancy, medical bills are settled directly cashless in foreign currency through international TPA partners, and an emergency allowance for essential clothes/meds is transferred immediately. A potential vacation catastrophe turns into a smooth, guided resolution.'
            withoutProtection="Travelers face out-of-pocket medical bills in foreign currency (often exceeding tens of thousands of dollars), lost passport panics, and uncompensated flight cancellations."
            withAvsProtection="Direct cashless hospital settlement up to $500,000, emergency baggage allowance, passport replacement support, and trip interruption protection."
            claimAssistancePerk="AVS Prosperity Consultancy's global assistance hotline coordinates directly with foreign hospitals and airlines so you can focus on enjoying your trip."
            ctaText="Get Overseas Travel Protection"
            ctaLink="#consultation-form"
          />

          <div className="row gy-4 align-items-center mt-3">
            <div className="col-lg-6">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Worldwide Coverage</span>
              <h2 className="display-5 font-playfair text-emerald mb-4">Travel Worldwide with Confidence</h2>
              <p className="text-muted mb-4">
                Whether traveling for business or leisure, overseas medical costs can be astronomical. Our travel insurance plans provide Schengen-compliant coverage with cashless hospital assistance.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Cashless Hospitalization:</strong> Up to $500,000 emergency medical and dental cover worldwide.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Flight & Baggage Loss:</strong> Compensation for delayed flights, lost passports, and misplaced checked-in luggage.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Schengen Visa Compliant:</strong> Instant policy issuance meeting mandatory €30,000 European visa requirements.</div></li>
              </ul>
            </div>
            <div className="col-lg-6" id="consultation-form">
              <ConsultationForm title="Get Overseas Travel Insurance Plan" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


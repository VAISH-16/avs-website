import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import RealLifeStoryCard from '../../components/RealLifeStoryCard';

export default function SipPage() {
  return (
    <main className="main pt-5">
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Disciplined Investing</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">Systematic Investment Plan (SIP)</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Harness the power of compounding and rupee cost averaging with automated monthly investments.
          </p>
        </div>
      </section>

      <section className="section py-5 bg-ivory">
        <div className="container py-4">

          {/* Real-Life Scenario Section */}
          <RealLifeStoryCard 
            badge="REAL-LIFE SIP SCENARIO"
            icon="bi-arrow-repeat"
            title="Automating Retirement Independence with ₹15,000/Month"
            scenarioText='Imagine setting up an automated ₹15,000 monthly SIP when you turn 30. During market crashes, instead of panicking, rupee cost averaging automatically buys more mutual fund units at lower prices. By age 50, with annual step-ups matching your salary hikes, your accumulated portfolio surpasses ₹1.8 Crores. You achieve financial independence early, allowing you to pursue your passions or retire on your own terms with automated Monthly Systematic Withdrawal Plans (SWP).'
            withoutProtection="Money remains idle in savings accounts earning 3% interest (losing value to inflation), or gets spent on impulse purchases."
            withAvsProtection="Automated wealth building turns modest monthly savings into multi-crore compounding wealth over 10-15 year horizons."
            claimAssistancePerk="AVS Prosperity Consultancy assists with automated auto-debit setup, step-up tracking, and goal-indexed fund selection."
            ctaText="Start Your SIP Journey"
            ctaLink="#consultation-form"
          />

          <div className="row gy-4 align-items-center mt-3">
            <div className="col-lg-6">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">The Power of Compounding</span>
              <h2 className="display-5 font-playfair text-emerald mb-4">Build Long-Term Generational Wealth</h2>
              <p className="text-muted mb-4">
                A Systematic Investment Plan (SIP) allows you to invest small fixed sums periodically into mutual funds. This instills financial discipline while neutralizing market volatility through rupee cost averaging.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Rupee Cost Averaging:</strong> Automatically buy more units when market prices drop and fewer when prices rise.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Step-Up SIP Options:</strong> Increase monthly contributions annually as your salary or business cash flow grows.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Goal Targeting:</strong> Dedicated SIPs for child education, retirement, and estate creation.</div></li>
              </ul>
            </div>
            <div className="col-lg-6" id="consultation-form">
              <ConsultationForm title="Start Your SIP Journey Today" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


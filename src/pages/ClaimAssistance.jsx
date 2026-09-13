import React, { useState } from 'react';
import ConsultationForm from '../components/ConsultationForm';

export default function ClaimAssistance() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { num: 1, title: "Immediate Intimation", desc: "Contact our dedicated claim desk immediately upon occurrence of hospitalization, accident, or property loss." },
    { num: 2, title: "Document Verification", desc: "Our team reviews claim forms, bills, discharge summaries, and FIR reports to eliminate documentation errors." },
    { num: 3, title: "Surveyor Coordination", desc: "We coordinate with insurance company surveyors and TPAs to ensure fair damage assessment." },
    { num: 4, title: "Underwriter Submission", desc: "Submitting verified claim dockets directly to insurer portals for swift processing." },
    { num: 5, title: "Approval Tracking", desc: "Continuous follow-up with claim managers to resolve queries or additional info requests." },
    { num: 6, title: "Settlement Payout", desc: "Direct credit of cashless authorization or reimbursement funds into your bank account." }
  ];

  return (
    <main className="main pt-5">
      
      {/* Page Header */}
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Client Advocacy</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">Claim Settlement Assistance</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Hands-on advisory support and coordination during health, life, motor, or commercial insurance claims.
          </p>
        </div>
      </section>

      {/* Emergency Helpline Banner */}
      <section className="section py-4 bg-emerald text-light">
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-lg-8">
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone-outbound-fill text-gold-accent display-5 me-3"></i>
                <div>
                  <h4 className="font-playfair text-white mb-1">Need Urgent Claim Support?</h4>
                  <p className="mb-0 text-light-opacity fs-7">Call our dedicated claim desk for immediate guidance on cashless intimation & documentation.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="tel:+919322947512" className="btn btn-luxury-gold px-4 py-3 fw-bold text-uppercase tracking-wider">
                <i className="bi bi-telephone-fill me-2"></i> +91 93229 47512
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Horizontal Timeline */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 font-playfair text-emerald mb-3">Our 6-Step Claim Settlement Workflow</h2>
              <div className="luxury-divider mx-auto mb-3"></div>
              <p className="text-muted">Click any step to view how we facilitate hassle-free resolution.</p>
            </div>
          </div>

          <div className="row g-3">
            {steps.map((step) => (
              <div key={step.num} className="col-md-6 col-lg-4">
                <div
                  className={`claim-step-card p-4 rounded-4 shadow-sm border bg-white h-100 cursor-pointer ${activeStep === step.num ? 'active border-gold border-2' : 'border-gold-subtle'}`}
                  onClick={() => setActiveStep(step.num)}
                >
                  <div className="d-flex align-items-center mb-3">
                    <span className="step-badge-num bg-gold-subtle text-gold-accent font-playfair fw-bold me-3">0{step.num}</span>
                    <h5 className="font-playfair text-emerald mb-0">{step.title}</h5>
                  </div>
                  <p className="text-muted fs-7 mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure Banner */}
      <section className="section py-4 bg-white">
        <div className="container">
          <div className="p-4 rounded-4 bg-ivory border border-gold-subtle shadow-sm">
            <h5 className="font-playfair text-emerald mb-2"><i className="bi bi-shield-exclamation text-gold-accent me-2"></i> Regulatory Disclosure</h5>
            <p className="text-muted fs-7 mb-0">
              Claim settlement assistance is provided as part of our advisory commitment to clients. Final claim liability, approval status, and payout timelines are determined strictly by the respective insurance company as per policy terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Claim Assistance Form */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ConsultationForm
                title="Submit Claim Intimation / Inquiry"
                subtitle="Provide details regarding your policy and claim situation for immediate counselor assistance."
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

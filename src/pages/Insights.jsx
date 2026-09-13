import React from 'react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';

export default function Insights() {
  const articles = [
    {
      title: "Why SIP Discipline Beats Market Timing Every Single Time",
      cat: "Mutual Funds",
      date: "September 2026",
      desc: "An in-depth editorial analysis on how Rupee Cost Averaging protects investors during volatility and accelerates compounding over a 10-year horizon.",
      link: "/sip"
    },
    {
      title: "Government & Corporate Bonds: The Ultimate Shield for Property Capital Gains",
      cat: "Tax Planning",
      date: "August 2026",
      desc: "How real estate sellers in India can save up to ₹20 Lakhs in capital gains tax by deploying proceeds into AAA-rated REC, PFC, and NHAI bonds.",
      link: "/bonds"
    },
    {
      title: "Why Term Insurance is Non-Negotiable for Business Owners",
      cat: "Protection",
      date: "August 2026",
      desc: "Separating personal wealth from commercial liabilities: How term insurance shields your family if business debts exist.",
      link: "/life-insurance"
    }
  ];

  return (
    <main className="main pt-5">

      {/* Page Header */}
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Financial Thought Leadership</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">Insights & Articles</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Editorial perspectives on wealth preservation, tax optimization, risk mitigation, and strategic asset allocation.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">
          <div className="row g-4">
            {articles.map((item, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-gold-subtle text-gold-accent text-uppercase fs-8 fw-bold px-3 py-2 rounded-pill">{item.cat}</span>
                    <span className="fs-8 text-muted">{item.date}</span>
                  </div>
                  <h4 className="font-playfair text-emerald mb-3">{item.title}</h4>
                  <p className="text-muted fs-7 mb-4">{item.desc}</p>
                  <div className="mt-auto">
                    <Link to={item.link} className="btn-link-gold font-serif text-uppercase tracking-wider fw-semibold">
                      Read Editorial <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 font-playfair text-emerald mb-3">Frequently Asked Questions</h2>
              <div className="luxury-divider mx-auto mb-3"></div>
              <p className="text-muted">Common queries regarding our advisory model and financial guidance process.</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion luxury-accordion" id="insightsFaq">

                <div className="accordion-item mb-3 border rounded-3 overflow-hidden">
                  <h2 className="accordion-header" id="faqOne">
                    <button className="accordion-button font-playfair fw-bold text-emerald" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      How does AVS Prosperity Consultancy differ from online stock broking apps?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#insightsFaq">
                    <div className="accordion-body text-muted fs-7">
                      Unlike DIY apps that push high-frequency trading without context, we provide personalized 1-on-1 financial guidance tailored to your family's exact cash flow, tax bracket, and long-term risk profile.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3 border rounded-3 overflow-hidden">
                  <h2 className="accordion-header" id="faqTwo">
                    <button className="accordion-button collapsed font-playfair fw-bold text-emerald" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      What is the process for investing in Section 54EC Capital Gains Bonds?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#insightsFaq">
                    <div className="accordion-body text-muted fs-7">
                      Under Section 54EC, capital gains from sale of land or building can be invested in REC, PFC, or NHAI bonds within 6 months of sale. We assist with complete application verification and allotment documentation.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3 border rounded-3 overflow-hidden">
                  <h2 className="accordion-header" id="faqThree">
                    <button className="accordion-button collapsed font-playfair fw-bold text-emerald" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      Do you charge an upfront fee for initial consultation?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#insightsFaq">
                    <div className="accordion-body text-muted fs-7">
                      Our initial discovery session is complimentary. As an ISO 9001:2015 certified company, AMFI certified mutual fund distributors, and licensed insurance advisors, we disclose all regulatory aspects transparently prior to execution.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';

export default function BusinessFinance() {
  return (
    <main className="main pt-5">
      
      {/* Page Header */}
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Corporate Advisory</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">Business & Corporate Shield</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Comprehensive commercial asset protection, keyman indemnification, employee group health schemes, and fleet risk management.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 font-playfair text-emerald mb-3">Enterprise Protection Solutions</h2>
              <div className="luxury-divider mx-auto mb-3"></div>
              <p className="text-muted">Shield your balance sheet, physical infrastructure, and human capital against operational shocks.</p>
            </div>
          </div>

          <div className="row g-4">
            
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-building-check text-gold-accent fs-2 me-3"></i>
                  <h4 className="font-playfair text-emerald mb-0">Commercial Asset Cover</h4>
                </div>
                <p className="text-muted fs-7 mb-4">
                  Standard Fire & Special Perils, Machinery Breakdown, Burglary, and Business Interruption indemnity for factories and offices.
                </p>
                <div className="mt-auto">
                  <Link to="/business-insurance" className="btn btn-outline-dark btn-sm rounded-pill">Property & Asset Cover <i className="bi bi-arrow-right ms-1"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-people-fill text-gold-accent fs-2 me-3"></i>
                  <h4 className="font-playfair text-emerald mb-0">Employee Group Cover</h4>
                </div>
                <p className="text-muted fs-7 mb-4">
                  Group Mediclaim (GMC) and Group Personal Accident (GPA) policies enhancing talent retention while meeting statutory compliance.
                </p>
                <div className="mt-auto">
                  <Link to="/business-insurance" className="btn btn-outline-dark btn-sm rounded-pill">Group Health & GMC <i className="bi bi-arrow-right ms-1"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-truck text-gold-accent fs-2 me-3"></i>
                  <h4 className="font-playfair text-emerald mb-0">Fleet & Logistics</h4>
                </div>
                <p className="text-muted fs-7 mb-4">
                  Comprehensive commercial vehicle insurance, logistics transit marine policies, and corporate travel covers for global teams.
                </p>
                <div className="mt-auto">
                  <Link to="/motor-insurance" className="btn btn-outline-dark btn-sm rounded-pill me-2 mb-2">Fleet Cover</Link>
                  <Link to="/travel-insurance" className="btn btn-outline-dark btn-sm rounded-pill mb-2">Corporate Travel</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Guidance Section */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <img
                src="/assets/img/business_owner_guidance.png"
                alt="Corporate Financial Guidance"
                className="img-fluid rounded-4 shadow-lg border border-gold-light"
              />
            </div>
            <div className="col-lg-6">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Enterprise Risk Audit</span>
              <h2 className="display-5 font-playfair text-emerald mb-4">Protecting Business Continuity</h2>
              <p className="text-muted mb-4">
                We work closely with business founders, directors, and CFOs to evaluate operational exposure and design bespoke commercial insurance structures:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-shield-fill-check text-gold-accent me-3 fs-5"></i>
                  <span className="fw-medium text-dark">Keyman Insurance protecting key executive loss</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-shield-fill-check text-gold-accent me-3 fs-5"></i>
                  <span className="fw-medium text-dark">Public & Directors’ Liability Indemnity</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-shield-fill-check text-gold-accent me-3 fs-5"></i>
                  <span className="fw-medium text-dark">Factory & Stock Fire Special Perils</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-shield-fill-check text-gold-accent me-3 fs-5"></i>
                  <span className="fw-medium text-dark">Cashless Corporate Group Hospitalization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ConsultationForm title="Request a Corporate Risk Audit" subtitle="Schedule an in-person or virtual session with our principal corporate advisor." />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

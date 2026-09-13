import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';

export default function NfoPage() {
  return (
    <main className="main pt-5">
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">New Fund Offers</span>
          <h1 className="display-4 font-playfair text-white mt-2 fw-bold">NFO Investment Guidance</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Early allotment access to innovative sectoral, international, and thematic mutual fund offerings.
          </p>
        </div>
      </section>

      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">First-Mover Advantage</span>
              <h2 className="display-5 font-playfair text-emerald mb-4">Capitalize on Emerging Market Themes</h2>
              <p className="text-muted mb-4">
                New Fund Offers (NFOs) allow investors to enter specialized asset classes or niche economic themes at the base ₹10 NAV stage. We evaluate fund manager track records before recommending subscriptions.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Thematic Screening:</strong> Identifying high-growth themes like AI, green energy, and infrastructure.</div></li>
                <li className="mb-3 d-flex align-items-start"><i className="bi bi-check-circle-fill text-gold-accent me-2 mt-1"></i> <div><strong>Zero Friction Subscription:</strong> Digital paperless application process for instant allotment.</div></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ConsultationForm title="Inquire About Active NFO Openings" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

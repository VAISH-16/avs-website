import React from 'react';
import ConsultationForm from '../components/ConsultationForm';

export default function Contact() {
  return (
    <main className="main pt-5">

      {/* Page Header */}
      <section className="page-header py-5 dark-background text-light text-center">
        <div className="container py-4">
          <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill border border-gold-accent" style={{ backgroundColor: 'rgba(201, 162, 77, 0.12)' }}>
            <i className="bi bi-patch-check-fill fs-6" style={{ color: '#C9A24D' }}></i>
            <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold" style={{ color: '#C9A24D', letterSpacing: '0.1em' }}>
              ISO 9001:2015 CERTIFIED COMPANY
            </span>
          </div>
          <h1 className="display-4 font-playfair text-white mt-1 fw-bold">Contact Our Advisory Desk</h1>
          <p className="lead text-light-opacity font-serif max-w-2xl mx-auto">
            Schedule a confidential consultation with Mrs. Archana Ssalunkhe & team at our Goregaon East advisory office in Mumbai.
          </p>
        </div>
      </section>

      {/* Contact Cards & Social Channels */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">

          {/* Main 3 Info Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white text-center hover-lift transition-all">
                <div className="icon-circle bg-gold-subtle text-gold-accent mx-auto mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', backgroundColor: 'rgba(201, 162, 77, 0.12)' }}>
                  <i className="bi bi-geo-alt-fill fs-3" style={{ color: '#C9A24D' }}></i>
                </div>
                <h4 className="font-serif fw-bold" style={{ color: '#0B1F33' }}>Advisory Office</h4>
                <p className="text-muted fs-7 mb-0 lh-base">
                  Bimbisar Nagar, Goregaon East,<br />Mumbai, Maharashtra 400065, India
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white text-center hover-lift transition-all">
                <div className="icon-circle bg-gold-subtle text-gold-accent mx-auto mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', backgroundColor: 'rgba(201, 162, 77, 0.12)' }}>
                  <i className="bi bi-telephone-fill fs-3" style={{ color: '#C9A24D' }}></i>
                </div>
                <h4 className="font-serif fw-bold" style={{ color: '#0B1F33' }}>Helpline Numbers</h4>
                <p className="text-muted fs-7 mb-0 lh-base">
                  <a href="tel:+919322947512" className="text-dark hover-gold font-medium d-block">+91 93229 47512</a>
                  <a href="tel:+919372233501" className="text-dark hover-gold font-medium d-block">+91 93722 33501</a>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white text-center hover-lift transition-all">
                <div className="icon-circle bg-gold-subtle text-gold-accent mx-auto mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', backgroundColor: 'rgba(201, 162, 77, 0.12)' }}>
                  <i className="bi bi-envelope-fill fs-3" style={{ color: '#C9A24D' }}></i>
                </div>
                <h4 className="font-serif fw-bold" style={{ color: '#0B1F33' }}>Email Inquiry</h4>
                <p className="text-muted fs-7 mb-0 lh-base">
                  <a href="mailto:avsprosperity@gmail.com" className="text-dark hover-gold font-medium d-block">avsprosperity@gmail.com</a>
                  <span className="fs-8 text-muted d-block mt-1">Direct Advisor Inbox</span>
                </p>
              </div>
            </div>
          </div>

          {/* Social Media & Direct Channels */}
          <div className="pt-4 border-top border-gold-subtle">
            <div className="text-center mb-4">
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-1" style={{ color: '#C9A24D' }}>
                DIRECT CONNECT CHANNELS
              </span>
              <h3 className="h4 font-serif fw-bold mb-0" style={{ color: '#0B1F33' }}>
                Follow &amp; Reach Us On Social Media
              </h3>
            </div>

            <div className="row g-3 justify-content-center">
              {/* Call */}
              <div className="col-6 col-md-3">
                <a
                  href="tel:+919322947512"
                  className="card h-100 p-3 rounded-4 shadow-sm border-0 bg-white text-decoration-none text-center d-flex flex-column align-items-center justify-content-center hover-lift transition-all"
                >
                  <div className="rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(201, 162, 77, 0.12)', color: '#C9A24D' }}>
                    <i className="bi bi-telephone-fill fs-4"></i>
                  </div>
                  <span className="fw-bold fs-7 text-dark d-block">Direct Call</span>
                  <span className="fs-8 text-muted">+91 93229 47512</span>
                </a>
              </div>

              {/* WhatsApp */}
              <div className="col-6 col-md-3">
                <a
                  href="https://wa.me/+919322947512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card h-100 p-3 rounded-4 shadow-sm border-0 bg-white text-decoration-none text-center d-flex flex-column align-items-center justify-content-center hover-lift transition-all"
                >
                  <div className="rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(37, 211, 102, 0.12)', color: '#25D366' }}>
                    <i className="bi bi-whatsapp fs-4"></i>
                  </div>
                  <span className="fw-bold fs-7 text-dark d-block">WhatsApp Chat</span>
                  <span className="fs-8 text-muted">Instant Assistance</span>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="col-6 col-md-3">
                <a
                  href="https://www.linkedin.com/company/avs-prosperity-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card h-100 p-3 rounded-4 shadow-sm border-0 bg-white text-decoration-none text-center d-flex flex-column align-items-center justify-content-center hover-lift transition-all"
                >
                  <div className="rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(10, 102, 194, 0.12)', color: '#0A66C2' }}>
                    <i className="bi bi-linkedin fs-4"></i>
                  </div>
                  <span className="fw-bold fs-7 text-dark d-block">LinkedIn</span>
                  <span className="fs-8 text-muted">AVS Prosperity</span>
                </a>
              </div>

              {/* Instagram */}
              <div className="col-6 col-md-3">
                <a
                  href="https://www.instagram.com/avsprosperityconsultancy?igsh=MW9iejVrbGxzMGx0Yg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card h-100 p-3 rounded-4 shadow-sm border-0 bg-white text-decoration-none text-center d-flex flex-column align-items-center justify-content-center hover-lift transition-all"
                >
                  <div className="rounded-circle d-flex align-items-center justify-content-center mb-2" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(228, 64, 95, 0.12)', color: '#E4405F' }}>
                    <i className="bi bi-instagram fs-4"></i>
                  </div>
                  <span className="fw-bold fs-7 text-dark d-block">Instagram</span>
                  <span className="fs-8 text-muted">@avsprosperityconsultancy</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Interactive Google Maps & Office Location Section */}
      <section className="section py-5 bg-white border-top border-gold-subtle">
        <div className="container py-4">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center gap-2 mb-2 px-3 py-1 rounded-pill" style={{ backgroundColor: 'rgba(201, 162, 77, 0.12)', border: '1px solid rgba(201, 162, 77, 0.35)' }}>
              <i className="bi bi-geo-alt-fill" style={{ color: '#C9A24D' }}></i>
              <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold" style={{ color: '#C9A24D' }}>
                OFFICIAL GOOGLE MAPS LOCATION
              </span>
            </div>
            <h2 className="display-6 font-serif fw-bold" style={{ color: '#0B1F33' }}>
              Visit AVS Prosperity Advisory Office
            </h2>
            <p className="text-muted font-serif max-w-2xl mx-auto fs-6">
              Our office is located at Bimbisar Nagar in Goregaon East, Mumbai. Use the interactive map below or click to get direct turn-by-turn navigation.
            </p>
          </div>

          <div className="row gy-5 align-items-stretch">
            {/* Column 1: Interactive Map Display */}
            <div className="col-lg-6">
              <div className="h-100 rounded-4 overflow-hidden shadow-sm border border-gold-subtle d-flex flex-column bg-white position-relative">
                <div className="p-3 text-white d-flex align-items-center justify-content-between border-bottom" style={{ backgroundColor: '#0B1F33' }}>
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-pin-map-fill fs-5" style={{ color: '#C9A24D' }}></i>
                    <span className="font-serif fw-bold fs-7 text-white">Interactive Location Map</span>
                  </div>
                  <span className="badge rounded-pill font-sans fs-8 px-2.5 py-1" style={{ backgroundColor: 'rgba(201, 162, 77, 0.2)', color: '#C9A24D', border: '1px solid rgba(201, 162, 77, 0.4)' }}>
                    Bimbisar Nagar, Mumbai
                  </span>
                </div>

                <div className="flex-grow-1 w-100 position-relative" style={{ minHeight: '400px' }}>
                  <iframe
                    title="AVS Prosperity Official Office Location - Bimbisar Nagar, Goregaon East, Mumbai"
                    src="https://maps.google.com/maps?q=Bimbisar+Nagar,+Goregaon+East,+Mumbai,+Maharashtra+400065,India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ minHeight: '400px', border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="p-3 bg-light border-top d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <span className="fs-8 text-muted d-flex align-items-center gap-1">
                    <i className="bi bi-info-circle-fill text-gold-accent" style={{ color: '#C9A24D' }}></i>
                    Pinch or scroll to zoom map
                  </span>
                  <a
                    href="https://share.google/rbwqxfXcmvm1QSAQi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-8 fw-bold text-decoration-none d-inline-flex align-items-center gap-1"
                    style={{ color: '#0B1F33' }}
                  >
                    Open Full Google Map <i className="bi bi-box-arrow-up-right fs-8" style={{ color: '#C9A24D' }}></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Office Details & Navigation Actions */}
            <div className="col-lg-6">
              <div className="card h-100 p-4 p-md-5 rounded-4 shadow-sm border border-gold-subtle bg-white d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <span className="badge px-3 py-2 rounded-pill font-sans fs-8 fw-bold text-uppercase" style={{ backgroundColor: 'rgba(201, 162, 77, 0.12)', color: '#C9A24D', border: '1px solid rgba(201, 162, 77, 0.4)' }}>
                      ISO 9001:2015 CERTIFIED ADVISORY OFFICE
                    </span>
                  </div>

                  <h3 className="h4 font-serif fw-bold mb-3" style={{ color: '#0B1F33' }}>
                    AVS Prosperity Advisory Desk
                  </h3>

                  {/* Address Section */}
                  <div className="p-3 rounded-3 mb-4" style={{ backgroundColor: 'rgba(11, 31, 51, 0.03)', borderLeft: '4px solid #C9A24D' }}>
                    <div className="d-flex align-items-start gap-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mt-1" style={{ width: '38px', height: '38px', backgroundColor: 'rgba(201, 162, 77, 0.15)', color: '#C9A24D' }}>
                        <i className="bi bi-geo-alt-fill fs-5"></i>
                      </div>
                      <div>
                        <span className="fs-8 text-uppercase tracking-wider font-sans fw-bold d-block text-muted mb-1">
                          OFFICIAL GOOGLE MAPS ADDRESS
                        </span>
                        <p className="font-medium fs-6 text-dark mb-0 lh-base">
                          Bimbisar Nagar, Goregaon East,<br />
                          Mumbai, Maharashtra 400065, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Office Info Grid */}
                  <div className="row g-3 mb-4">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-start gap-2">
                        <i className="bi bi-clock-fill fs-5" style={{ color: '#C9A24D' }}></i>
                        <div>
                          <strong className="d-block fs-7 text-dark">Advisory Hours</strong>
                          <span className="fs-8 text-muted d-block">Mon – Sat: 10:00 AM – 7:00 PM</span>
                          <span className="fs-8 text-muted fst-italic">(By Appointment)</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-start gap-2">
                        <i className="bi bi-telephone-fill fs-5" style={{ color: '#C9A24D' }}></i>
                        <div>
                          <strong className="d-block fs-7 text-dark">Helpline Desk</strong>
                          <a href="tel:+919322947512" className="fs-8 text-dark hover-gold font-medium d-block text-decoration-none">+91 93229 47512</a>
                          <a href="tel:+919372233501" className="fs-8 text-dark hover-gold font-medium d-block text-decoration-none">+91 93722 33501</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Google Maps Action Buttons */}
                <div className="pt-4 border-top border-gold-subtle">
                  <div className="d-flex flex-column flex-sm-row gap-3">
                    {/* Get Directions Button */}
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Bimbisar+Nagar,+Goregaon+East,+Mumbai,+Maharashtra+400065"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn px-4 py-3 rounded-3 font-sans fw-bold d-inline-flex align-items-center justify-content-center gap-2 hover-lift flex-grow-1 shadow-sm text-decoration-none"
                      style={{ backgroundColor: '#C9A24D', color: '#0B1F33', border: 'none' }}
                    >
                      <i className="bi bi-sign-turn-right-fill fs-5"></i>
                      <span>Get Directions</span>
                    </a>

                    {/* View on Google Maps Button */}
                    <a
                      href="https://share.google/rbwqxfXcmvm1QSAQi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn px-4 py-3 rounded-3 font-sans fw-bold d-inline-flex align-items-center justify-content-center gap-2 hover-lift flex-grow-1 text-decoration-none"
                      style={{ backgroundColor: 'transparent', color: '#0B1F33', border: '1.5px solid #0B1F33' }}
                    >
                      <i className="bi bi-geo-alt-fill fs-5" style={{ color: '#C9A24D' }}></i>
                      <span>View on Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Consultation Form Section */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ConsultationForm title="Book Your Appointment" subtitle="Fill out the form below to request a confidential meeting with Mrs. Archana Ssalunkhe & advisory team." />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

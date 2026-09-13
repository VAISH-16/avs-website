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
                  Goregaon East, Mumbai,<br />Maharashtra 400065, India
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
                  <a href="mailto:arssalunkhe79@gmail.com" className="text-dark hover-gold font-medium d-block">arssalunkhe79@gmail.com</a>
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

      {/* Map & Form Grid */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="h-100 rounded-4 overflow-hidden shadow-sm border border-gold-subtle">
                <iframe
                  title="AVS Prosperity Office Location Goregaon East"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.665979261895!2d72.8596637!3d19.1661601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a42a000001%3A0x6b876409c9918731!2sGoregaon%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ minHeight: '400px', border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <ConsultationForm title="Book Your Appointment" subtitle="Fill out the form below to request a meeting with Mrs. Archana Ssalunkhe." />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

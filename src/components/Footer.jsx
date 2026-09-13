import React from 'react';
import { Link } from 'react-router-dom';
import { GOOGLE_REVIEW_URL } from '../utils/googleReviews';

export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background text-light pt-5" style={{ backgroundColor: '#071524' }}>
      <div className="container footer-top py-5">
        <div className="row gy-4 g-lg-5">
          
          {/* Column 1: AVS PROSPERITY */}
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="/" className="logo d-inline-block mb-3">
              <img 
                src="/assets/img/avs-logo.png" 
                alt="AVS Prosperity Logo" 
                className="rounded-2 shadow-sm" 
                style={{ 
                  height: '60px', 
                  width: 'auto', 
                  objectFit: 'contain', 
                  backgroundColor: '#FFFFFF', 
                  padding: '4px', 
                  border: '1px solid rgba(201, 162, 77, 0.4)' 
                }}
              />
            </Link>
            <h3 className="font-serif fw-bold text-white fs-4 mb-1" style={{ color: '#FFFFFF' }}>
              AVS PROSPERITY
            </h3>
            <p className="brand-tagline font-serif fst-italic mb-2" style={{ color: '#C9A24D' }}>
              Prosperity with Protection.
            </p>
            <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ backgroundColor: 'rgba(201, 162, 77, 0.12)', border: '1px solid rgba(201, 162, 77, 0.4)' }}>
              <i className="bi bi-patch-check-fill" style={{ color: '#C9A24D', fontSize: '0.85rem' }}></i>
              <span className="fs-8 fw-bold text-uppercase font-sans" style={{ color: '#C9A24D', letterSpacing: '0.08em' }}>
                ISO 9001:2015 Certified Company
              </span>
            </div>
            <p className="footer-desc text-muted fs-7 lh-base mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Personalized financial guidance delivering structured wealth growth and comprehensive risk management for families and businesses.
            </p>

            {/* LOVE YOUR EXPERIENCE? GOOGLE REVIEW CTA */}
            <div className="p-3 rounded-3 border border-gold-subtle d-inline-block w-100 mb-3" style={{ backgroundColor: 'rgba(201, 162, 77, 0.08)' }}>
              <span className="fs-8 text-uppercase tracking-wider font-sans fw-bold d-block mb-1" style={{ color: '#C9A24D' }}>
                LOVE YOUR EXPERIENCE?
              </span>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans fw-bold fs-7 text-decoration-none d-inline-flex align-items-center gap-1"
                style={{ color: '#FFFFFF' }}
              >
                Leave us a Google Review <span style={{ color: '#C9A24D' }}>&rarr;</span>
              </a>
            </div>

            {/* SOCIAL MEDIA & DIRECT CONNECT HANDLES */}
            <div>
              <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold d-block mb-2" style={{ color: '#C9A24D', letterSpacing: '0.15em' }}>
                CONNECT WITH US
              </span>
              <div className="d-flex align-items-center gap-2">
                <a
                  href="tel:+919322947512"
                  className="btn border-gold-subtle rounded-circle d-flex align-items-center justify-content-center p-0 hover-lift"
                  style={{ width: '42px', height: '42px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#C9A24D', border: '1px solid rgba(201, 162, 77, 0.35)' }}
                  title="Call Us Directly (+91 93229 47512)"
                  aria-label="Call Us Directly"
                >
                  <i className="bi bi-telephone-fill fs-6"></i>
                </a>
                <a
                  href="https://wa.me/+919322947512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-gold-subtle rounded-circle d-flex align-items-center justify-content-center p-0 hover-lift"
                  style={{ width: '42px', height: '42px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#25D366', border: '1px solid rgba(37, 211, 102, 0.35)' }}
                  title="Chat on WhatsApp"
                  aria-label="Chat on WhatsApp"
                >
                  <i className="bi bi-whatsapp fs-5"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/avs-prosperity-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-gold-subtle rounded-circle d-flex align-items-center justify-content-center p-0 hover-lift"
                  style={{ width: '42px', height: '42px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#0A66C2', border: '1px solid rgba(10, 102, 194, 0.35)' }}
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a
                  href="https://www.instagram.com/avsprosperityconsultancy?igsh=MW9iejVrbGxzMGx0Yg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-gold-subtle rounded-circle d-flex align-items-center justify-content-center p-0 hover-lift"
                  style={{ width: '42px', height: '42px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#E4405F', border: '1px solid rgba(228, 64, 95, 0.35)' }}
                  title="Instagram Profile"
                  aria-label="Instagram Profile"
                >
                  <i className="bi bi-instagram fs-5"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: PROSPERITY */}
          <div className="col-lg-3 col-md-3 col-6 footer-links">
            <h4 className="fs-6 text-uppercase tracking-wider mb-3 font-sans fw-bold" style={{ color: '#C9A24D' }}>
              PROSPERITY
            </h4>
            <ul className="list-unstyled fs-7">
              <li className="mb-2">
                <Link to="/investment-category/mutual-funds" className="footer-link-item fs-7">
                  Mutual Funds
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/investment-category/bonds" className="footer-link-item fs-7">
                  Bonds
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/investment-category/wealth-planning" className="footer-link-item fs-7">
                  Wealth Planning
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/financial-planning-types" className="footer-link-item fs-7">
                  Financial Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: PROTECTION */}
          <div className="col-lg-3 col-md-3 col-6 footer-links">
            <h4 className="fs-6 text-uppercase tracking-wider mb-3 font-sans fw-bold" style={{ color: '#C9A24D' }}>
              PROTECTION
            </h4>
            <ul className="list-unstyled fs-7">
              <li className="mb-2">
                <Link to="/insurance-category/health" className="footer-link-item fs-7">
                  Health &amp; Mediclaim
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/insurance-category/life" className="footer-link-item fs-7">
                  Life &amp; Term
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/insurance-category/motor" className="footer-link-item fs-7">
                  Motor &amp; Fleet
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/insurance-category/travel" className="footer-link-item fs-7">
                  Travel
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/insurance-category/business" className="footer-link-item fs-7">
                  Business &amp; Asset
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/insurance-category/general" className="footer-link-item fs-7">
                  General Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: COMPANY */}
          <div className="col-lg-2 col-md-6 footer-links">
            <h4 className="fs-6 text-uppercase tracking-wider mb-3 font-sans fw-bold" style={{ color: '#C9A24D' }}>
              COMPANY
            </h4>
            <ul className="list-unstyled fs-7">
              <li className="mb-2">
                <Link to="/about" className="footer-link-item fs-7">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/testimonials" className="footer-link-item fs-7">
                  Testimonials
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="footer-link-item fs-7">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Notice */}
        <div className="row mt-5 pt-4 border-top border-secondary border-opacity-25">
          <div className="col-12">
            <p className="fs-8 text-muted mb-0 lh-sm" style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.8rem' }}>
              <strong style={{ color: '#C9A24D' }}>ISO 9001:2015 Certified Company</strong> &bull; <strong style={{ color: '#C9A24D' }}>Regulatory Notice:</strong> AVS Prosperity Consultancy operates as an ISO 9001:2015 Certified Financial Advisory &amp; AMFI-Registered Mutual Fund Distributor. Mutual fund investments are subject to market risks; read all scheme-related documents carefully.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container copyright py-4 border-top border-secondary border-opacity-25 text-center">
        <p className="mb-1 fs-8 text-muted" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          &copy; {new Date().getFullYear()} <strong className="text-light">AVS Prosperity Consultancy</strong>. All Rights Reserved.
        </p>
        <p className="mb-0 fs-8 text-muted" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          Developed by{' '}
          <a 
            href="https://vaishnavisalunkhe.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-decoration-none fw-semibold"
            style={{ color: '#C9A24D' }}
          >
            Vaishnavi Salunkhe
          </a>
        </p>
      </div>
    </footer>
  );
}


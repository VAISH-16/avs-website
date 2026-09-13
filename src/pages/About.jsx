import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultationModal from '../components/ConsultationModal';
import InstagramWidget from '../components/InstagramWidget';
import GoogleReviewsWidget from '../components/GoogleReviewsWidget';
import { trackEvent } from '../utils/analytics';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRequirement, setModalRequirement] = useState('General Consultation');

  const handleOpenModal = (requirement = 'General Consultation') => {
    trackEvent('about_consultation_click', { requirement });
    setModalRequirement(requirement);
    setIsModalOpen(true);
  };

  return (
    <main className="main pt-5 bg-ivory min-vh-100">

      {/* 1. HERO SECTION */}
      <section className="page-header py-5 text-light position-relative" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', borderBottom: '2px solid #C9A24D' }}>
        <div className="container py-5 text-center text-lg-start">
          <div className="row align-items-center gy-4">
            <div className="col-lg-8 mx-auto text-center">
              <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1.5 rounded-pill border border-gold-accent" style={{ backgroundColor: 'rgba(201, 162, 77, 0.15)' }}>
                <i className="bi bi-patch-check-fill fs-6" style={{ color: '#C9A24D' }}></i>
                <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold" style={{ color: '#C9A24D', letterSpacing: '0.12em' }}>
                  ISO 9001:2015 CERTIFIED COMPANY
                </span>
              </div>
              <h1 className="display-4 font-playfair text-white fw-bold mb-3">
                Building Prosperity.<br />
                <span style={{ color: '#C9A24D' }}>Protecting What Matters.</span>
              </h1>
              <p className="lead font-serif text-light-opacity max-w-2xl mx-auto fs-5 mb-4 lh-lg">
                “At AVS Prosperity, we believe financial planning is not just about investing money. It is about making informed decisions today to create security, achieve meaningful goals and build a prosperous tomorrow.”
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button
                  type="button"
                  className="btn btn-luxury-gold px-4 py-3 text-uppercase tracking-wider fw-bold shadow-sm rounded-pill"
                  style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                  onClick={() => handleOpenModal('About Page Hero Consultation')}
                >
                  BOOK A CONSULTATION &rarr;
                </button>
                <Link
                  to="/services"
                  className="btn btn-outline-light px-4 py-3 text-uppercase tracking-wider fw-bold rounded-pill"
                  style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
                >
                  EXPLORE OUR SERVICES &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER SECTION */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center gy-5">
            {/* Founder Image Left */}
            <div className="col-lg-5">
              <div className="position-relative mx-auto" style={{ maxWidth: '440px' }}>
                <div className="rounded-4 overflow-hidden shadow-lg border border-gold-subtle bg-ivory">
                  <img
                    src="/assets/img/archana_photo.jpg"
                    alt="Archana Ssalunkhe - Founder &amp; Wealth Strategist | AMFI-Registered Mutual Fund Distributor | IRDAI-Certified Insurance Professional"
                    className="img-fluid w-100 object-fit-cover d-block"
                    style={{ maxHeight: '520px', objectPosition: 'top center' }}
                  />
                </div>
                {/* Floating Badge */}
                <div
                  className="position-absolute bottom-0 start-50 translate-middle-x mb-n3 w-90 p-3 rounded-3 text-white text-center shadow-lg border border-gold-accent"
                  style={{ background: '#0B1F33', backdropFilter: 'blur(8px)' }}
                >
                  <h3 className="h6 font-playfair fw-bold text-gold-accent mb-0">Archana Ssalunkhe</h3>
                  <span className="fs-8 text-uppercase tracking-wider text-light-opacity d-block fw-semibold" style={{ color: '#C9A24D' }}>Founder &amp; Wealth Strategist</span>
                  <span className="fs-8 text-uppercase tracking-wider text-light-opacity d-block" style={{ fontSize: '0.7rem' }}>AMFI-Registered Mutual Fund Distributor | IRDAI-Certified Insurance Professional</span>
                </div>
              </div>
            </div>

            {/* Founder Bio Right */}
            <div className="col-lg-7">
              <div className="ps-lg-4">
                <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
                  MEET THE FOUNDER
                </span>
                <h2 className="display-5 font-playfair fw-bold mb-3" style={{ color: '#0B1F33' }}>
                  The Person Behind AVS Prosperity
                </h2>

                <div className="p-3 mb-4 rounded-3 bg-ivory border-start border-4 border-gold shadow-sm">
                  <p className="font-serif fst-italic fs-5 text-dark mb-0">
                    “We don’t just plan for wealth. We plan for the life it enables.”
                  </p>
                </div>

                <div className="space-y-3 font-sans text-muted fs-6 lh-relaxed" style={{ color: '#5F6B73' }}>
                  <p>
                    AVS Prosperity was born out of a desire to bring genuine, personal clarity to financial planning. Over the years, I observed how many individuals and families struggled not from a lack of financial products, but from a lack of objective, personal direction.
                  </p>
                  <p>
                    My philosophy is simple: understand the person first. Before we discuss asset allocation or policy terms, we listen to your life story, your family’s priorities, and what true financial peace of mind means to you.
                  </p>
                  <p>
                    Whether we are structuring systematic wealth creation through mutual funds, securing your legacy with bonds, or insulating your family with comprehensive life and health protection, our commitment is to walk beside you at every step—building a partnership anchored in trust and longevity.
                  </p>
                </div>

                {/* Founder Signature Element */}
                <div className="d-flex align-items-center justify-content-between mt-4 pt-3 border-top border-gold-subtle flex-wrap gap-3">
                  <div>
                    <span className="font-serif fs-4 fw-bold d-block" style={{ color: '#0B1F33', fontStyle: 'italic' }}>
                      Archana Ssalunkhe
                    </span>
                    <span className="fs-8 text-uppercase tracking-wider text-gold-accent font-sans fw-semibold d-block">
                      Founder &amp; Wealth Strategist
                    </span>
                    <span className="fs-8 text-uppercase tracking-wider text-muted font-sans d-block" style={{ fontSize: '0.72rem' }}>
                      AMFI-Registered Mutual Fund Distributor | IRDAI-Certified Insurance Professional
                    </span>
                  </div>

                  <button
                    type="button"
                    className="btn btn-luxury-gold px-4 py-2 text-uppercase tracking-wider fw-bold shadow-sm rounded-pill"
                    style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                    onClick={() => handleOpenModal('Connect With Founder')}
                  >
                    CONNECT WITH US &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="section py-5 bg-white">
        <div className="container py-4">
          <div className="row g-4">
            {/* Vision Card */}
            <div className="col-md-6">
              <div className="card h-100 p-5 rounded-4 shadow-sm border-0 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', color: '#FFFFFF' }}>
                <div className="position-absolute top-0 end-0 p-4 opacity-10">
                  <i className="bi bi-eye-fill display-1 text-gold-accent"></i>
                </div>
                <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-3">
                  GUIDING STAR
                </span>
                <h3 className="display-6 font-playfair text-white fw-bold mb-3">OUR VISION</h3>
                <div className="luxury-divider mb-4" style={{ height: '2px', background: '#C9A24D', width: '60px' }}></div>
                <blockquote className="lead font-serif text-light fs-5 mb-0 lh-lg fst-italic">
                  “To empower individuals and families to build a financially secure and prosperous future through informed decisions, disciplined investing and meaningful protection.”
                </blockquote>
              </div>
            </div>

            {/* Mission Card */}
            <div className="col-md-6">
              <div className="card h-100 p-5 rounded-4 shadow-sm border border-gold-subtle bg-ivory position-relative overflow-hidden">
                <div className="position-absolute top-0 end-0 p-4 opacity-10">
                  <i className="bi bi-bullseye display-1 text-emerald"></i>
                </div>
                <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-3">
                  DAILY PURPOSE
                </span>
                <h3 className="display-6 font-playfair text-emerald fw-bold mb-3">OUR MISSION</h3>
                <div className="luxury-divider mb-4" style={{ height: '2px', background: '#0B1F33', width: '60px' }}></div>
                <blockquote className="lead font-serif text-dark fs-5 mb-0 lh-lg fst-italic">
                  “To simplify financial decisions, understand every client’s unique needs and provide thoughtful insurance, investment and financial planning solutions that evolve with their life.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* 7. WHY AVS PROSPERITY */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              WHY AVS PROSPERITY
            </span>
            <h2 className="display-5 font-playfair fw-bold mb-3" style={{ color: '#0B1F33' }}>
              A Relationship Beyond a Transaction.
            </h2>
          </div>

          <div className="row g-4">
            {[
              { title: 'ISO 9001:2015 CERTIFIED', desc: 'Operating under internationally benchmarked quality management standards for advisory & client service.' },
              { title: 'PERSONALISED APPROACH', desc: 'Solutions based on your goals, needs and risk profile.' },
              { title: 'END-TO-END GUIDANCE', desc: 'Support from understanding your needs through implementation and review.' },
              { title: 'PROTECTION + PROSPERITY', desc: 'We focus on both protecting what you have and growing what you can build.' },
              { title: 'LONG-TERM RELATIONSHIP', desc: 'We aim to be a financial partner through different stages of your life.' },
              { title: 'DIGITAL & CONVENIENT', desc: 'Simple, transparent and convenient processes wherever possible.' }
            ].map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-6">
                <div className="card h-100 p-4 rounded-4 shadow-sm border-0 bg-white d-flex flex-row align-items-start gap-3">
                  <div className="icon-circle bg-gold-subtle text-gold-accent flex-shrink-0 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '42px', height: '42px', background: '#0B1F33', color: '#C9A24D' }}>
                    <i className="bi bi-check-lg fs-5"></i>
                  </div>
                  <div>
                    <h3 className="font-playfair h6 text-emerald fw-bold mb-1">{item.title}</h3>
                    <p className="font-sans text-muted fs-7 mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 9. CLIENT TRUST / TESTIMONIALS */}
      <section className="section py-5 bg-ivory">
        <div className="container py-4">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              CLIENT EXPERIENCES
            </span>
            <h2 className="display-5 font-playfair fw-bold mb-3" style={{ color: '#0B1F33' }}>
              Trusted by Clients.<br />Built on Relationships.
            </h2>
          </div>

          {/* DYNAMIC GOOGLE REVIEWS WIDGET */}
          <GoogleReviewsWidget layout="carousel" />
        </div>
      </section>

      {/* 10. INSTAGRAM FEED (RIGHT BELOW TESTIMONIALS) */}
      <InstagramWidget />

      {/* 10. FINAL CTA */}
      <section className="section py-5 text-light position-relative" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', borderTop: '2px solid #C9A24D' }}>
        <div className="container py-5 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              START YOUR JOURNEY
            </span>
            <h2 className="display-4 font-playfair text-white fw-bold mb-3">
              Your Financial Future Deserves a Plan.
            </h2>
            <p className="lead font-serif text-light-opacity fs-5 mb-4 lh-lg">
              “Whether you are looking to protect your family, grow your wealth or plan for a major life goal, let's start with a conversation.”
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button
                type="button"
                className="btn btn-luxury-gold px-5 py-3 text-uppercase tracking-wider fw-bold shadow-sm rounded-pill"
                style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                onClick={() => handleOpenModal('About Page Bottom Final CTA')}
              >
                BOOK A CONSULTATION &rarr;
              </button>
              <Link
                to="/services"
                className="btn btn-outline-light px-5 py-3 text-uppercase tracking-wider fw-bold rounded-pill"
                style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
              >
                EXPLORE OUR SERVICES &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialRequirement={modalRequirement}
      />

    </main>
  );
}

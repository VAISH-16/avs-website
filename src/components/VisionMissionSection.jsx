import React from 'react';

export default function VisionMissionSection() {
  return (
    <section className="section py-5 bg-white border-top border-gold-subtle">
      <div className="container py-4">
        
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
            OUR CORE PURPOSE
          </span>
          <h2 className="display-5 font-serif fw-bold mb-3" style={{ color: '#0B1F33' }}>
            Vision &amp; Mission
          </h2>
          <p className="lead font-serif text-secondary fs-6 mb-0">
            Guiding every financial strategy and client partnership at AVS Prosperity.
          </p>
        </div>

        <div className="row g-4">
          {/* Vision Card */}
          <div className="col-md-6">
            <div className="card h-100 p-4 p-lg-5 rounded-4 shadow-sm border-0 position-relative overflow-hidden hover-lift transition-all" style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', color: '#FFFFFF' }}>
              <div className="position-absolute top-0 end-0 p-4 opacity-10">
                <i className="bi bi-eye-fill display-1 text-gold-accent"></i>
              </div>
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-3">
                GUIDING STAR
              </span>
              <h3 className="display-6 font-serif text-white fw-bold mb-3">OUR VISION</h3>
              <div className="luxury-divider mb-4" style={{ height: '2px', background: '#C9A24D', width: '60px' }}></div>
              <blockquote className="lead font-serif text-light fs-5 mb-0 lh-lg fst-italic" style={{ color: '#F8F6F0' }}>
                “To empower individuals and families to build a financially secure and prosperous future through informed decisions, disciplined investing and meaningful protection.”
              </blockquote>
            </div>
          </div>

          {/* Mission Card */}
          <div className="col-md-6">
            <div className="card h-100 p-4 p-lg-5 rounded-4 shadow-sm border border-gold-subtle bg-ivory position-relative overflow-hidden hover-lift transition-all">
              <div className="position-absolute top-0 end-0 p-4 opacity-10">
                <i className="bi bi-bullseye display-1 text-emerald" style={{ color: '#0B1F33' }}></i>
              </div>
              <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-3">
                DAILY PURPOSE
              </span>
              <h3 className="display-6 font-serif fw-bold mb-3" style={{ color: '#0B1F33' }}>OUR MISSION</h3>
              <div className="luxury-divider mb-4" style={{ height: '2px', background: '#0B1F33', width: '60px' }}></div>
              <blockquote className="lead font-serif text-dark fs-5 mb-0 lh-lg fst-italic" style={{ color: '#2C3E50' }}>
                “To simplify financial decisions, understand every client’s unique needs and provide thoughtful insurance, investment and financial planning solutions that evolve with their life.”
              </blockquote>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

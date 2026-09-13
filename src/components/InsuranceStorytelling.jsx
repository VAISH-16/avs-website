import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function InsuranceStorytelling() {
  const [activeStep, setActiveStep] = useState(0);

  const stories = [
    {
      id: "travel",
      title: "TRAVEL INSURANCE",
      subtitle: "Travel with confidence. Leave the worries behind.",
      message: "Your journey should be about the destination — not the unexpected.",
      ctaText: "Explore Travel Insurance",
      ctaLink: "/travel-insurance",
      icon: "bi-airplane-fill",
      renderGraphic: (progress) => (
        <div className="story-graphic-box travel-graphic position-relative p-4 rounded-4 shadow-sm bg-white border border-gold-subtle overflow-hidden text-center" style={{ minHeight: '320px' }}>
          <div className="sky-bg position-absolute top-0 start-0 w-100 h-100 bg-ivory opacity-50"></div>
          {/* Traveller */}
          <div className="traveller-figure position-relative z-2 my-3">
            <i className="bi bi-person-walking display-3 text-emerald me-2"></i>
            <i className="bi bi-luggage-fill fs-2 text-gold-accent"></i>
          </div>
          {/* Plane Flying Across */}
          <div
            className="plane-element position-relative z-2 my-2 transition-all duration-300"
            style={{
              transform: `translateX(${(progress - 0.5) * 80}px) translateY(-${progress * 20}px)`,
              opacity: Math.min(1, progress * 1.5)
            }}
          >
            <i className="bi bi-send-fill display-5 text-emerald rotate-45"></i>
          </div>
          {/* Protection Shield Overlay */}
          <div className="shield-overlay mt-3">
            <span className="badge bg-gold-subtle text-emerald border border-gold-light rounded-pill px-3 py-2 fs-7 font-serif fw-bold">
              <i className="bi bi-shield-fill-check text-gold-accent me-2"></i> Overseas Health & Loss Shield Active
            </span>
          </div>
        </div>
      )
    },
    {
      id: "health",
      title: "HEALTH INSURANCE",
      subtitle: "Prioritizing wellness without financial anxiety.",
      message: "Because health should come first — and financial stress shouldn't come second.",
      ctaText: "Explore Health Insurance",
      ctaLink: "/health-insurance",
      icon: "bi-heart-pulse-fill",
      renderGraphic: (progress) => (
        <div className="story-graphic-box health-graphic position-relative p-4 rounded-4 shadow-sm bg-white border border-gold-subtle overflow-hidden text-center" style={{ minHeight: '320px' }}>
          <div className="family-scene my-3 position-relative z-2">
            <i className="bi bi-house-heart-fill display-3 text-emerald me-3"></i>
            <i className="bi bi-people-fill display-4 text-gold-accent"></i>
          </div>
          <div className="consultation-pulse my-3">
            <div className="spinner-grow spinner-grow-sm text-gold-accent me-2" role="status"></div>
            <span className="fs-7 font-serif text-secondary">Cashless Hospital Network Access</span>
          </div>
          <div className="shield-overlay mt-3">
            <span className="badge bg-emerald text-gold-accent rounded-pill px-4 py-2 fs-7 font-serif fw-bold shadow-sm">
              <i className="bi bi-shield-lock-fill me-2"></i> 100% Medical Inflation Shield
            </span>
          </div>
        </div>
      )
    },
    {
      id: "life",
      title: "LIFE INSURANCE",
      subtitle: "Securing dreams across every milestone.",
      message: "Protect the future you've worked so hard to build.",
      ctaText: "Explore Life Insurance",
      ctaLink: "/life-insurance",
      icon: "bi-shield-lock-fill",
      renderGraphic: (progress) => (
        <div className="story-graphic-box life-graphic position-relative p-4 rounded-4 shadow-sm bg-white border border-gold-subtle overflow-hidden text-center" style={{ minHeight: '320px' }}>
          <div className="milestone-growth my-3">
            <i className="bi bi-person-fill fs-2 text-secondary me-2"></i>
            <i className="bi bi-arrow-right text-gold-accent me-2"></i>
            <i className="bi bi-mortarboard-fill fs-1 text-emerald me-2"></i>
            <i className="bi bi-arrow-right text-gold-accent me-2"></i>
            <i className="bi bi-house-door-fill display-4 text-gold-accent"></i>
          </div>
          <p className="fs-8 text-uppercase tracking-wider text-muted font-serif mb-2">Income Replacement & MWP Trust Protection</p>
          <div className="shield-overlay mt-2">
            <span className="badge bg-gold-subtle text-emerald border border-gold-light rounded-pill px-4 py-2 fs-7 font-serif fw-bold">
              <i className="bi bi-shield-check text-gold-accent me-2"></i> Guaranteed Legacy Security
            </span>
          </div>
        </div>
      )
    },
    {
      id: "motor",
      title: "MOTOR INSURANCE",
      subtitle: "Seamless journeys on every road.",
      message: "Because unexpected moments shouldn't derail your plans.",
      ctaText: "Explore Motor Insurance",
      ctaLink: "/motor-insurance",
      icon: "bi-car-front-fill",
      renderGraphic: (progress) => (
        <div className="story-graphic-box motor-graphic position-relative p-4 rounded-4 shadow-sm bg-white border border-gold-subtle overflow-hidden text-center" style={{ minHeight: '320px' }}>
          <div className="car-motion my-3">
            <i className="bi bi-car-front-fill display-3 text-emerald me-3"></i>
            <i className="bi bi-signpost-split-fill fs-2 text-gold-accent"></i>
          </div>
          <div className="roadside-support my-2">
            <span className="fs-7 text-secondary font-serif">24/7 Roadside Assistance & Zero-Dep Cover</span>
          </div>
          <div className="shield-overlay mt-3">
            <span className="badge bg-emerald text-gold-accent rounded-pill px-4 py-2 fs-7 font-serif fw-bold shadow-sm">
              <i className="bi bi-shield-fill-check me-2"></i> Bumper-to-Bumper Protection
            </span>
          </div>
        </div>
      )
    },
    {
      id: "property",
      title: "PROPERTY INSURANCE",
      subtitle: "Safeguarding your sanctuary.",
      message: "Protect the place you've built your life around.",
      ctaText: "Explore Property Insurance",
      ctaLink: "/business-insurance",
      icon: "bi-building-fill-check",
      renderGraphic: (progress) => (
        <div className="story-graphic-box property-graphic position-relative p-4 rounded-4 shadow-sm bg-white border border-gold-subtle overflow-hidden text-center" style={{ minHeight: '320px' }}>
          <div className="home-structure my-3">
            <i className="bi bi-cloud-rain-fill fs-2 text-secondary d-block mb-1"></i>
            <i className="bi bi-building-fill display-3 text-emerald"></i>
          </div>
          <div className="shield-overlay mt-3">
            <span className="badge bg-gold-subtle text-emerald border border-gold-light rounded-pill px-4 py-2 fs-7 font-serif fw-bold">
              <i className="bi bi-shield-fill-check text-gold-accent me-2"></i> Fire & Special Perils Cover
            </span>
          </div>
        </div>
      )
    },
    {
      id: "business",
      title: "BUSINESS INSURANCE",
      subtitle: "Commercial continuity for entrepreneurs.",
      message: "Protect the business you've worked hard to build.",
      ctaText: "Explore Business Insurance",
      ctaLink: "/business-insurance",
      icon: "bi-briefcase-fill",
      renderGraphic: (progress) => (
        <div className="story-graphic-box business-graphic position-relative p-4 rounded-4 shadow-sm bg-white border border-gold-subtle overflow-hidden text-center" style={{ minHeight: '320px' }}>
          <div className="enterprise-scene my-3">
            <i className="bi bi-person-workspace display-3 text-emerald me-3"></i>
            <i className="bi bi-safe-fill display-4 text-gold-accent"></i>
          </div>
          <div className="shield-overlay mt-3">
            <span className="badge bg-emerald text-gold-accent rounded-pill px-4 py-2 fs-7 font-serif fw-bold shadow-sm">
              <i className="bi bi-shield-lock-fill me-2"></i> Commercial Risk & Keyman Shield
            </span>
          </div>
        </div>
      )
    },
    {
      id: "marine",
      title: "MARINE & LOGISTICS INSURANCE",
      subtitle: "Securing cargo across global trade routes.",
      message: "Because every journey carries more than cargo.",
      ctaText: "Explore Marine Insurance",
      ctaLink: "/business-insurance",
      icon: "bi-box-seam-fill",
      renderGraphic: (progress) => (
        <div className="story-graphic-box marine-graphic position-relative p-4 rounded-4 shadow-sm bg-white border border-gold-subtle overflow-hidden text-center" style={{ minHeight: '320px' }}>
          <div className="ocean-cargo my-3">
            <i className="bi bi-water text-gold-accent fs-3 d-block mb-1"></i>
            <i className="bi bi-box-seam-fill display-3 text-emerald me-2"></i>
            <i className="bi bi-truck fs-1 text-gold-accent"></i>
          </div>
          <div className="shield-overlay mt-3">
            <span className="badge bg-gold-subtle text-emerald border border-gold-light rounded-pill px-4 py-2 fs-7 font-serif fw-bold">
              <i className="bi bi-shield-check text-gold-accent me-2"></i> Transit & Ocean Freight Shield
            </span>
          </div>
        </div>
      )
    },
    {
      id: "group",
      title: "GROUP & EMPLOYEE INSURANCE",
      subtitle: "Empowering talent through wellness.",
      message: "Protect your people. Strengthen your business.",
      ctaText: "Explore Group Insurance",
      ctaLink: "/business-insurance",
      icon: "bi-people-fill",
      renderGraphic: (progress) => (
        <div className="story-graphic-box group-graphic position-relative p-4 rounded-4 shadow-sm bg-white border border-gold-subtle overflow-hidden text-center" style={{ minHeight: '320px' }}>
          <div className="team-scene my-3">
            <i className="bi bi-people-fill display-2 text-emerald"></i>
          </div>
          <div className="shield-overlay mt-3">
            <span className="badge bg-emerald text-gold-accent rounded-pill px-4 py-2 fs-7 font-serif fw-bold shadow-sm">
              <i className="bi bi-shield-fill-check me-2"></i> Group Mediclaim & Personal Accident
            </span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="insurance-storytelling-section section py-5 bg-ivory position-relative">
      <div className="container py-4">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold d-block mb-2">
              Visual Risk Stories
            </span>
            <h2 className="display-5 font-playfair text-emerald fw-bold mb-3">
              Protection for What Matters Most
            </h2>
            <div className="luxury-divider mx-auto mb-4"></div>
            <p className="lead font-serif text-secondary mb-0">
              Understanding why coverage matters through real-life scenarios.
            </p>
          </div>
        </div>

        {/* Story Modules - Alternating Layout */}
        <div className="stories-wrapper">
          {stories.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={story.id} className="story-module py-5 border-bottom border-gold-subtle border-opacity-50">
                <div className={`row align-items-center gy-4 ${isEven ? '' : 'flex-row-reverse'}`}>
                  
                  {/* Visual Scene Graphic */}
                  <div className="col-lg-6">
                    {story.renderGraphic(0.8)}
                  </div>

                  {/* Text & Content Story */}
                  <div className="col-lg-6">
                    <div className={`story-content-box p-lg-4 ${isEven ? 'ps-lg-4' : 'pe-lg-4'}`}>
                      <div className="d-flex align-items-center mb-3">
                        <div className="icon-circle bg-gold-subtle text-emerald me-3">
                          <i className={`bi ${story.icon} fs-3 text-gold-accent`}></i>
                        </div>
                        <div>
                          <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-serif fw-bold">Story 0{index + 1}</span>
                          <h3 className="font-playfair text-emerald fw-bold h2 mb-0">{story.title}</h3>
                        </div>
                      </div>

                      <h5 className="font-serif fst-italic text-secondary mb-3">{story.subtitle}</h5>
                      <p className="lead text-dark font-serif mb-4 fw-medium" style={{ borderLeft: '3px solid #C9A24D', paddingLeft: '1rem' }}>
                        "{story.message}"
                      </p>

                      <Link to={story.ctaLink} className="btn btn-luxury-gold px-4 py-3 text-uppercase tracking-wider fw-semibold">
                        {story.ctaText} <i className="bi bi-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

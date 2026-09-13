import React from 'react';
import { trackEvent } from '../utils/analytics';

export default function UserNeedsSection({ onOpenModal }) {
  const needs = [
    {
      id: 'wealth',
      requirement: 'Investment Planning',
      title: 'BUILD MY WEALTH',
      desc: 'Investment planning, Mutual Funds, SIPs, Bonds and wealth creation.',
      icon: 'bi-graph-up-arrow',
      tag: 'Wealth Creation'
    },
    {
      id: 'family',
      requirement: 'Family Protection',
      title: 'PROTECT MY FAMILY',
      desc: 'Life, Health, Motor, Travel and family risk protection solutions.',
      icon: 'bi-shield-heart',
      tag: 'Protection'
    },
    {
      id: 'retirement',
      requirement: 'Retirement Planning',
      title: 'PLAN MY RETIREMENT',
      desc: 'Plan financially for the life you want after work.',
      icon: 'bi-sunset',
      tag: 'Future Planning'
    },
    {
      id: 'child',
      requirement: "Child's Future Planning",
      title: "PLAN MY CHILD'S FUTURE",
      desc: 'Prepare financially for higher education and key life milestones.',
      icon: 'bi-mortarboard',
      tag: 'Milestone Planning'
    },
    {
      id: 'business',
      requirement: 'Business Protection',
      title: 'PROTECT MY BUSINESS',
      desc: 'Business insurance, corporate asset risk protection, and guidance.',
      icon: 'bi-building-check',
      tag: 'Enterprise Risk'
    },
    {
      id: 'claim',
      requirement: 'Claim Assistance',
      title: 'I NEED CLAIM ASSISTANCE',
      desc: 'Guidance with documentation, insurer intimation, and claim settlement.',
      icon: 'bi-headset',
      tag: 'Client Advocacy'
    }
  ];

  const handleSelect = (item) => {
    trackEvent('need_selection', { need: item.title, requirement: item.requirement });
    if (onOpenModal) {
      onOpenModal(item.requirement);
    }
  };

  return (
    <section id="what-are-you-planning-for" className="section py-5 bg-white position-relative border-top border-bottom border-gold-subtle">
      <div className="container py-4">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              IMMEDIATE ASSISTANCE
            </span>
            <h2 className="display-4 font-playfair text-emerald fw-bold mb-3">
              What are you planning for?
            </h2>
            <div className="luxury-divider mx-auto mb-4"></div>
            <p className="lead font-serif text-secondary mb-0">
              Tell us what matters to you. We'll help you understand the next step.
            </p>
          </div>
        </div>

        {/* 6 Needs Cards Grid */}
        <div className="row g-4">
          {needs.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div 
                onClick={() => handleSelect(item)}
                className="user-need-card p-4 rounded-4 shadow-sm bg-ivory border border-gold-subtle h-100 d-flex flex-column transition-all cursor-pointer hover-lift position-relative overflow-hidden"
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-inline-flex align-items-center justify-content-center bg-emerald text-gold-accent rounded-3 p-3" style={{ width: '54px', height: '54px' }}>
                    <i className={`bi ${item.icon} fs-3`}></i>
                  </div>
                  <span className="badge bg-gold-subtle text-emerald font-sans fs-8 tracking-wider uppercase px-3 py-2 rounded-pill fw-bold border border-gold-accent">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-playfair text-emerald fw-bold h5 mb-2 tracking-wide">
                  {item.title}
                </h3>

                <p className="font-sans text-muted fs-6 mb-4 flex-fill">
                  {item.desc}
                </p>

                <div className="mt-auto pt-3 border-top border-gold-subtle d-flex align-items-center justify-content-between text-gold-accent font-serif fw-bold fs-7 uppercase tracking-wider">
                  <span>GET PERSONALIZED GUIDANCE &rarr;</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { trackEvent } from '../utils/analytics';

export default function BalanceScaleSection({ onOpenModal }) {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollable = windowHeight + rect.height;
      const currentScroll = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth tilt balance logic: starts slightly tilted, settles to 0 equilibrium
  const tiltAngle = Math.max(-5 + (scrollProgress * 8), 0) > 0 ? 0 : -5 + (scrollProgress * 8);

  const handleCTAClick = () => {
    trackEvent('scale_cta_click', { cta: 'BOOK A CONSULTATION' });
    if (onOpenModal) {
      onOpenModal('Prosperity & Protection Strategy');
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section py-5 position-relative bg-white text-dark overflow-hidden border-bottom border-gold-subtle"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem'
      }}
    >
      <div className="container py-4 position-relative" style={{ zIndex: 2 }}>

        {/* Top Header */}
        <div className="row justify-content-center text-center mb-4 mb-lg-5">
          <div className="col-lg-10">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
              <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #C9A24D)' }}></div>
              <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold" style={{ color: '#C9A24D' }}>
                OUR PHILOSOPHY
              </span>
              <div style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, #C9A24D, transparent)' }}></div>
            </div>

            <h2 className="display-3 font-playfair fw-bold mb-3" style={{ color: '#0B1F33' }}>
              Prosperity <span className="fst-italic" style={{ color: '#C9A24D' }}>with</span> Protection
            </h2>

            <p className="lead font-serif fs-4 mb-0" style={{ color: '#5F6B73' }}>
              Because a secure tomorrow makes today more meaningful.
            </p>
          </div>
        </div>

        {/* Central Graphic & Side Text Layout */}
        <div className="row align-items-center justify-content-between my-2 my-lg-4 g-4">

          {/* LEFT COLUMN: PROSPERITY */}
          <div className="col-lg-3 col-md-4 text-center text-md-start pe-lg-4">
            <div 
              className="p-4 rounded-4 shadow-sm" 
              style={{ 
                background: '#F8F6F0', 
                border: '1px solid #DDD8CC', 
                boxShadow: '0 10px 30px rgba(11, 31, 51, 0.05)' 
              }}
            >
              <span className="fs-8 text-uppercase tracking-widest fw-bold d-block mb-1" style={{ color: '#C9A24D' }}>
                BUILD &amp; GROW
              </span>
              <h3 className="display-6 font-playfair fw-bold mb-3 tracking-wide" style={{ color: '#0B1F33' }}>
                PROSPERITY
              </h3>
              <ul className="list-unstyled font-serif fs-5 mb-0 ps-0" style={{ color: '#5F6B73' }}>
                <li className="mb-2">&bull; Invest</li>
                <li className="mb-2">&bull; Grow</li>
                <li className="mb-0">&bull; Plan</li>
              </ul>
            </div>
          </div>

          {/* CENTER COLUMN: 3D SVG BALANCE SCALE OVERLAID ON MARBLE PEDESTAL */}
          <div className="col-lg-6 col-md-4 text-center">
            <div className="scale-graphic-wrapper position-relative py-2">

              <svg
                viewBox="0 0 800 440"
                className="w-100 h-auto max-w-2xl mx-auto"
                style={{ maxHeight: '400px', filter: 'drop-shadow(0 15px 25px rgba(11, 31, 51, 0.12))' }}
              >
                <defs>
                  {/* Gold Metallic Gradients */}
                  <linearGradient id="goldBeamBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF2CE" />
                    <stop offset="35%" stopColor="#DFBF77" />
                    <stop offset="70%" stopColor="#C9A24D" />
                    <stop offset="100%" stopColor="#8C6A24" />
                  </linearGradient>

                  <linearGradient id="goldPanBg" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#DFBF77" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#A37E32" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Central Gold Pillar */}
                <path d="M 375 410 L 425 410 L 412 190 L 388 190 Z" fill="url(#goldBeamBg)" />
                <rect x="394" y="130" width="12" height="60" fill="url(#goldBeamBg)" />

                {/* Fulcrum Top Ring & Ornament */}
                <circle cx="400" cy="130" r="16" fill="url(#goldBeamBg)" stroke="#0B1F33" strokeWidth="1.5" />
                <circle cx="400" cy="130" r="7" fill="#0B1F33" />

                {/* Rotating Beam Assembly */}
                <g style={{
                  transform: `rotate(${tiltAngle}deg)`,
                  transformOrigin: '400px 130px',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                  {/* Main Horizontal Crossbeam */}
                  <path d="M 140 126 Q 400 118 660 126 L 660 134 Q 400 126 140 134 Z" fill="url(#goldBeamBg)" />
                  <circle cx="150" cy="130" r="8" fill="url(#goldBeamBg)" />
                  <circle cx="650" cy="130" r="8" fill="url(#goldBeamBg)" />

                  {/* LEFT PAN (PROSPERITY: Sprout + Coins) */}
                  <g id="leftPanGroup">
                    {/* Chains */}
                    <line x1="150" y1="130" x2="110" y2="260" stroke="#C9A24D" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="150" y1="130" x2="190" y2="260" stroke="#C9A24D" strokeWidth="2" strokeDasharray="4,4" />

                    {/* Gold Pan */}
                    <path d="M 90 260 Q 150 300 210 260 Z" fill="url(#goldPanBg)" stroke="#C9A24D" strokeWidth="2" />

                    {/* Sprout & Coins Graphics in Pan */}
                    <g transform="translate(132, 228)">
                      <ellipse cx="18" cy="28" rx="14" ry="5" fill="#C9A24D" stroke="#FFF" strokeWidth="0.8" />
                      <ellipse cx="18" cy="24" rx="14" ry="5" fill="#DFBF77" stroke="#FFF" strokeWidth="0.8" />
                      <ellipse cx="18" cy="20" rx="14" ry="5" fill="#F5E4B3" stroke="#FFF" strokeWidth="0.8" />
                      <path d="M 18 20 C 18 10 10 2 0 4 C 2 14 10 18 18 20 Z" fill="#2ECC71" />
                      <path d="M 18 20 C 18 10 26 2 36 4 C 34 14 26 18 18 20 Z" fill="#27AE60" />
                      <path d="M 18 20 L 18 5" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  </g>

                  {/* RIGHT PAN (PROTECTION: Family Shield) */}
                  <g id="rightPanGroup">
                    {/* Chains */}
                    <line x1="650" y1="130" x2="610" y2="260" stroke="#C9A24D" strokeWidth="2" strokeDasharray="4,4" />
                    <line x1="650" y1="130" x2="690" y2="260" stroke="#C9A24D" strokeWidth="2" strokeDasharray="4,4" />

                    {/* Gold Pan */}
                    <path d="M 590 260 Q 650 300 710 260 Z" fill="url(#goldPanBg)" stroke="#C9A24D" strokeWidth="2" />

                    {/* Gold Family Shield Graphic in Pan */}
                    <g transform="translate(634, 215)">
                      <path d="M 16 0 L 32 8 C 32 24 24 36 16 42 C 8 36 0 24 0 8 Z" fill="url(#goldBeamBg)" stroke="#0B1F33" strokeWidth="1.5" />
                      <circle cx="16" cy="14" r="3.5" fill="#0B1F33" />
                      <path d="M 10 28 C 10 21 22 21 22 28 Z" fill="#0B1F33" />
                      <circle cx="9" cy="17" r="2.5" fill="#0B1F33" />
                      <circle cx="23" cy="17" r="2.5" fill="#0B1F33" />
                    </g>
                  </g>
                </g>

              </svg>

            </div>
          </div>

          {/* RIGHT COLUMN: PROTECTION */}
          <div className="col-lg-3 col-md-4 text-center text-md-end ps-lg-4">
            <div 
              className="p-4 rounded-4 shadow-sm" 
              style={{ 
                background: '#F8F6F0', 
                border: '1px solid #DDD8CC', 
                boxShadow: '0 10px 30px rgba(11, 31, 51, 0.05)' 
              }}
            >
              <span className="fs-8 text-uppercase tracking-widest fw-bold d-block mb-1" style={{ color: '#C9A24D' }}>
                SECURE &amp; PRESERVE
              </span>
              <h3 className="display-6 font-playfair fw-bold mb-3 tracking-wide" style={{ color: '#0B1F33' }}>
                PROTECTION
              </h3>
              <ul className="list-unstyled font-serif fs-5 mb-0 ps-0" style={{ color: '#5F6B73' }}>
                <li className="mb-2">&bull; Insure</li>
                <li className="mb-2">&bull; Secure</li>
                <li className="mb-0">&bull; Preserve</li>
              </ul>
            </div>
          </div>

        </div>

        {/* High-Contrast Luxury Bottom Card */}
        <div className="row justify-content-center text-center mt-4 mt-lg-5">
          <div className="col-lg-9 col-xl-8">
            <div
              className="p-4 p-md-5 rounded-4 shadow-lg position-relative overflow-hidden text-white"
              style={{
                background: '#0B1F33',
                border: '1px solid rgba(201, 162, 77, 0.4)',
                boxShadow: '0 20px 50px rgba(11, 31, 51, 0.2)'
              }}
            >
              <div className="d-inline-block px-3 py-1 rounded-pill mb-3 border" style={{ borderColor: 'rgba(201, 162, 77, 0.6)', background: 'rgba(255, 255, 255, 0.1)' }}>
                <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold" style={{ color: '#DFBF77' }}>
                  BALANCE CREATES A BRIGHTER TOMORROW
                </span>
              </div>

              <h3 className="display-5 font-playfair text-white fw-bold mb-3">
                "Prosperity <span className="fst-italic" style={{ color: '#DFBF77' }}>with</span> Protection"
              </h3>

              <p className="font-serif fs-5 mb-4 max-w-xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                At AVS, we believe building prosperity and protecting it should go hand in hand.
              </p>

              <button
                onClick={handleCTAClick}
                className="btn btn-luxury-gold px-5 py-3 text-uppercase tracking-wider fw-bold shadow-lg fs-6"
                style={{ background: '#C9A24D', color: '#0B1F33', border: 'none', borderRadius: '999px' }}
              >
                BOOK A CONSULTATION &rarr;
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

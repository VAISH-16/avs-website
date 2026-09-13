import React from 'react';

export default function MobileStickyCTA({ onOpenModal }) {
  return (
    <div className="d-md-none fixed-bottom p-3 bg-white border-top border-gold-subtle shadow-lg" style={{ zIndex: 1040 }}>
      <div className="d-flex gap-2 align-items-center">
        <button
          onClick={() => onOpenModal("General Consultation")}
          className="btn btn-luxury-gold flex-fill py-3 text-uppercase tracking-wider fw-bold fs-7 shadow-sm"
          style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
        >
          GET PERSONALIZED GUIDANCE &rarr;
        </button>
        <a 
          href="https://wa.me/919322947512" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn px-3 py-3 text-white rounded-3 d-flex align-items-center justify-content-center"
          style={{ background: '#0B1F33' }}
          title="Chat on WhatsApp"
        >
          <i className="bi bi-whatsapp fs-5 text-gold-accent"></i>
        </a>
      </div>
    </div>
  );
}

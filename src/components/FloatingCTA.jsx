import React from 'react';

export default function FloatingCTA() {
  return (
    <>
      <a
        href="https://wa.me/919322947512?text=Hello%20AVS%20Prosperity%20Consultancy,%20I%20would%20like%20personalized%20financial%20guidance."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Direct WhatsApp Guidance"
      >
        <i className="bi bi-whatsapp"></i>
        <span className="whatsapp-text">Chat with Advisor</span>
      </a>

      <a
        href="tel:+919322947512"
        className="quick-call-float"
        aria-label="Direct Phone Consultation"
      >
        <i className="bi bi-telephone-fill"></i>
        <span className="call-text">Call +91 93229 47512</span>
      </a>
    </>
  );
}

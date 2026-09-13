import React, { useState, useEffect } from 'react';
import { fetchGoogleReviews, DEFAULT_GOOGLE_MAPS_URL, GOOGLE_REVIEW_URL } from '../utils/googleReviews';
import GoogleReviewsWidget from '../components/GoogleReviewsWidget';
import ConsultationModal from '../components/ConsultationModal';
import { trackEvent } from '../utils/analytics';

export default function Testimonials() {
  const [googleData, setGoogleData] = useState({
    rating: 5.0,
    userRatingCount: 16,
    googleMapsUrl: DEFAULT_GOOGLE_MAPS_URL
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRequirement, setModalRequirement] = useState('Client Consultation');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      const res = await fetchGoogleReviews();
      if (isMounted && res.status === 'SUCCESS') {
        setGoogleData({
          rating: res.rating || 5.0,
          userRatingCount: res.userRatingCount || 16,
          googleMapsUrl: res.googleMapsUrl || DEFAULT_GOOGLE_MAPS_URL
        });
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  const handleOpenModal = (req = 'Client Consultation') => {
    trackEvent('testimonials_modal_open', { req });
    setModalRequirement(req);
    setIsModalOpen(true);
  };

  return (
    <main className="main pt-5 bg-ivory min-vh-100">
      
      {/* 1. HERO SECTION */}
      <section className="page-header py-5 text-light position-relative" style={{ background: '#0B1F33', borderBottom: '2px solid #C9A24D' }}>
        <div className="container py-5 text-center">
          <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold d-block mb-2" style={{ color: '#C9A24D', letterSpacing: '0.2em' }}>
            CLIENT TESTIMONIALS
          </span>
          <h1 className="display-4 font-serif text-white fw-bold mb-3">
            Trusted by Our Clients
          </h1>
          <p className="lead font-serif text-light-opacity max-w-2xl mx-auto fs-5 mb-4 lh-lg" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            “Real experiences from clients who have trusted AVS Prosperity.”
          </p>

          {/* DYNAMIC GOOGLE RATING SUMMARY */}
          <div className="d-inline-flex align-items-center gap-3 px-4 py-2 rounded-pill bg-white shadow-sm border border-gold-subtle mb-4">
            <span className="fw-bold fs-5" style={{ color: '#C9A24D' }}>
              ★★★★★ {googleData.rating ? googleData.rating.toFixed(1) : '5.0'}
            </span>
            <span className="text-muted fs-7">|</span>
            <span className="font-sans fw-bold fs-7 text-uppercase tracking-wider" style={{ color: '#0B1F33' }}>
              {googleData.userRatingCount} Google Reviews
            </span>
          </div>

          {/* ACTION BUTTONS */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-2">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('write_google_review_header_click')}
              className="btn btn-luxury-gold px-4 py-3 text-uppercase tracking-wider fw-bold shadow-sm d-inline-flex align-items-center gap-2"
              style={{ background: '#C9A24D', color: '#0B1F33', border: 'none', borderRadius: '30px' }}
            >
              ★ WRITE A GOOGLE REVIEW &rarr;
            </a>

            <a
              href={googleData.googleMapsUrl || DEFAULT_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light px-4 py-3 text-uppercase tracking-wider fw-bold rounded-pill"
              style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
            >
              <i className="bi bi-google"></i> VIEW ON GOOGLE MAPS &rarr;
            </a>
          </div>

        </div>
      </section>

      {/* 2. GOOGLE REVIEWS WIDGET DISPLAY SECTION */}
      <section className="section py-5 bg-white position-relative border-bottom border-gold-subtle">
        <div className="container py-4">

          {/* GOOGLE REVIEWS WIDGET EMBED */}
          <GoogleReviewsWidget layout="grid" />

        </div>
      </section>

      {/* 3. AFTER CLIENT TESTIMONIALS - WRITE A REVIEW CTA */}
      <section className="section py-5 position-relative border-top border-bottom border-gold-subtle" style={{ backgroundColor: '#F8F6F0' }}>
        <div className="container py-4 text-center">
          <div className="max-w-2xl mx-auto p-4 p-md-5 rounded-4 bg-white border border-gold-subtle shadow-sm">
            <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold d-block mb-2" style={{ color: '#C9A24D', letterSpacing: '0.2em' }}>
              YOUR FEEDBACK MATTERS
            </span>
            <h2 className="display-5 font-serif fw-bold mb-2" style={{ color: '#0B1F33' }}>
              Had a Great Experience?
            </h2>
            <p className="lead font-serif fst-italic mb-4" style={{ color: '#5F6B73' }}>
              “We'd love to hear from you.”
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('write_google_review_bottom_click')}
              className="btn btn-luxury-gold px-5 py-3 text-uppercase tracking-wider fw-bold shadow-sm d-inline-flex align-items-center gap-2 fs-6"
              style={{ background: '#C9A24D', color: '#0B1F33', border: 'none', borderRadius: '30px' }}
            >
              ★ WRITE A GOOGLE REVIEW &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="section py-5 text-light position-relative" style={{ background: '#0B1F33' }}>
        <div className="container py-5 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold d-block mb-2" style={{ color: '#C9A24D', letterSpacing: '0.2em' }}>
              START YOUR FINANCIAL JOURNEY
            </span>
            <h2 className="display-4 font-serif text-white fw-bold mb-3">
              Ready to Plan Your Financial Future?
            </h2>
            <p className="lead font-serif text-light-opacity fs-5 mb-4 lh-lg" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              “Let's have a conversation about protecting what matters and growing your wealth.”
            </p>
            <button
              type="button"
              className="btn btn-luxury-gold px-5 py-3 text-uppercase tracking-wider fw-bold shadow-sm rounded-pill"
              style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
              onClick={() => handleOpenModal('Testimonials Bottom CTA')}
            >
              BOOK A CONSULTATION &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialRequirement={modalRequirement}
      />

    </main>
  );
}

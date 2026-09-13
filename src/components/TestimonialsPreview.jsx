import React, { useState, useEffect } from 'react';
import { fetchGoogleReviews, DEFAULT_GOOGLE_MAPS_URL, GOOGLE_REVIEW_URL } from '../utils/googleReviews';
import GoogleReviewsWidget from './GoogleReviewsWidget';
import { trackEvent } from '../utils/analytics';

export default function TestimonialsPreview() {
  const [googleData, setGoogleData] = useState({
    rating: 5.0,
    userRatingCount: 16,
    googleMapsUrl: DEFAULT_GOOGLE_MAPS_URL
  });

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

  return (
    <section className="section py-5 position-relative border-bottom border-gold-subtle" style={{ backgroundColor: '#F8F6F0' }}>
      <div className="container py-5">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <span className="fs-8 text-uppercase tracking-widest font-sans fw-bold d-block mb-2" style={{ color: '#C9A24D', letterSpacing: '0.2em' }}>
              CLIENT TESTIMONIALS
            </span>
            <h2 className="display-4 font-serif text-emerald fw-bold mb-3" style={{ color: '#0B1F33' }}>
              Trusted by Our Clients
            </h2>

            <p className="lead font-serif fst-italic mb-3" style={{ color: '#5F6B73' }}>
              “Real experiences from clients who have trusted AVS Prosperity.”
            </p>

            {/* Dynamic Google Rating Banner */}
            <div className="d-inline-flex align-items-center gap-3 px-3.5 py-1.5 rounded-pill bg-white border border-gold-subtle shadow-sm mb-3">
              <span className="text-gold-accent fw-bold fs-6" style={{ color: '#C9A24D' }}>
                ★★★★★
              </span>
              <span className="text-muted fs-7">|</span>
              <span className="font-sans fw-bold fs-7" style={{ color: '#0B1F33' }}>
                {googleData.rating ? googleData.rating.toFixed(1) : '5.0'} Google Rating
              </span>
              <span className="text-muted fs-7">|</span>
              <span className="font-sans fw-bold fs-7 text-uppercase tracking-wider" style={{ color: '#0B1F33' }}>
                {googleData.userRatingCount} Google Reviews
              </span>
            </div>

            <div className="luxury-divider mx-auto mb-4" style={{ width: '60px', height: '2px', backgroundColor: '#C9A24D' }}></div>
          </div>
        </div>

        {/* EMBEDDED GOOGLE REVIEWS WIDGET */}
        <GoogleReviewsWidget layout="carousel" />

        {/* BELOW WIDGET: HAD A GREAT EXPERIENCE? CTA */}
        <div className="row justify-content-center text-center mt-5 pt-3">
          <div className="col-lg-8">
            <div className="p-4 rounded-4 bg-white border border-gold-subtle shadow-sm max-w-2xl mx-auto">
              <h3 className="font-serif fw-bold h4 mb-2" style={{ color: '#0B1F33' }}>
                Had a Great Experience?
              </h3>
              <p className="font-serif fst-italic text-muted fs-6 mb-4" style={{ color: '#5F6B73' }}>
                “We'd love to hear from you.”
              </p>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('write_google_review_preview_cta')}
                className="btn btn-luxury-gold px-4 py-3 text-uppercase tracking-wider fw-bold shadow-sm d-inline-flex align-items-center gap-2"
                style={{ background: '#C9A24D', color: '#0B1F33', border: 'none', borderRadius: '30px' }}
              >
                ★ WRITE A GOOGLE REVIEW &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

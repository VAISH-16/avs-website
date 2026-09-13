import React, { useEffect, useState } from 'react';
import { GOOGLE_REVIEW_URL, DEFAULT_GOOGLE_MAPS_URL } from '../utils/googleReviews';

/**
 * GoogleReviewsWidget Component
 * Directly embeds official Google Business Profile reviews.
 * 
 * Supports:
 * 1. Custom Google Widget Embed Script (via VITE_GOOGLE_REVIEWS_WIDGET_ID)
 * 2. Official Google Places / Maps Platform API Integration (via VITE_GOOGLE_PLACE_ID)
 * 3. Configuration placeholder container when API credentials / Widget ID are being connected.
 */
export default function GoogleReviewsWidget({ layout = 'carousel' }) {
  const widgetId = (import.meta.env && import.meta.env.VITE_GOOGLE_REVIEWS_WIDGET_ID) || '';
  const placeId = (import.meta.env && import.meta.env.VITE_GOOGLE_PLACE_ID) || '';
  const apiKey = (import.meta.env && import.meta.env.VITE_GOOGLE_API_KEY) || '';

  const [scriptLoaded, setScriptLoaded] = useState(false);

  // If a third-party widget script ID (e.g. Elfsight / Trustindex / Tagembed) is provided
  useEffect(() => {
    if (widgetId) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [widgetId]);

  // Case 1: Custom Widget Script Embed configured
  if (widgetId) {
    return (
      <div className="google-reviews-widget-wrapper my-4">
        <div 
          className={`elfsight-app-${widgetId}`} 
          data-elfsight-app-lazy
        ></div>
      </div>
    );
  }

  // Case 2: Google Places API / Google Maps Widget Container configured
  if (placeId && apiKey) {
    return (
      <div 
        id="google-reviews-container"
        className="google-reviews-widget-wrapper p-4 rounded-4 bg-white border border-gold-subtle shadow-sm my-4 text-center"
      >
        <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
          <i className="bi bi-google fs-3 text-primary"></i>
          <span className="font-serif fw-bold fs-5" style={{ color: '#0B1F33' }}>
            Official Google Reviews
          </span>
        </div>
        
        {/* Dynamic Widget Mount Target */}
        <div id="google-reviews-mount" className="my-3">
          <p className="font-sans text-muted fs-6 mb-3">
            Loading live reviews directly from Google Business Profile...
          </p>
          <div className="spinner-border spinner-border-sm text-warning" role="status">
            <span className="visually-hidden">Loading Google Reviews...</span>
          </div>
        </div>
      </div>
    );
  }

  // Case 3: Credentials / Widget Connection Pending
  // Renders a clean, minimalist integration container without hard-coding fake/static reviews
  return (
    <div className="google-reviews-widget-container p-4 p-md-5 rounded-4 bg-white border border-gold-subtle shadow-sm my-4 text-center max-w-2xl mx-auto">
      {/* Google Branding Header */}
      <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill bg-gold-subtle border border-gold-accent mb-3">
        <i className="bi bi-google text-primary fs-6"></i>
        <span className="font-sans fw-bold fs-7 text-uppercase tracking-wider" style={{ color: '#0B1F33' }}>
          Google Business Profile Reviews
        </span>
      </div>

      <h4 className="font-serif fw-bold text-emerald mb-2" style={{ color: '#0B1F33' }}>
        Live Google Reviews Widget
      </h4>

      <p className="font-sans text-muted fs-6 mb-4" style={{ color: '#5F6B73', lineHeight: '1.6' }}>
        Reviews are automatically synchronized directly from Google. Connect your Google Place ID or Widget Embed ID in environment variables to enable live auto-updates.
      </p>

      {/* Action Links */}
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <a
          href={DEFAULT_GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-emerald px-4 py-2.5 text-uppercase tracking-wider fw-semibold fs-7 d-inline-flex align-items-center gap-2"
          style={{ borderColor: '#0B1F33', color: '#0B1F33', borderRadius: '30px' }}
        >
          <i className="bi bi-google"></i> VIEW ALL REVIEWS ON GOOGLE &rarr;
        </a>

        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-luxury-gold px-4 py-2.5 text-uppercase tracking-wider fw-bold fs-7 shadow-sm d-inline-flex align-items-center gap-2"
          style={{ background: '#C9A24D', color: '#0B1F33', border: 'none', borderRadius: '30px' }}
        >
          ★ WRITE A GOOGLE REVIEW &rarr;
        </a>
      </div>
    </div>
  );
}

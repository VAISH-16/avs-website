import React, { useEffect, useState } from 'react';

/**
 * InstagramWidget Component
 * Embeds official Elfsight Instagram feed widget.
 */
export default function InstagramWidget() {
  const widgetId = (import.meta.env && import.meta.env.VITE_INSTAGRAM_WIDGET_ID) || '23e9b06d-4e43-4a5d-8de9-8c5e771c7a42';
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
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
  }, [widgetId]);

  return (
    <section className="section py-5 bg-white border-top border-gold-subtle">
      <div className="container py-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill bg-gold-subtle border border-gold-accent mb-3">
            <i className="bi bi-instagram text-danger fs-6"></i>
            <span className="font-sans fw-bold fs-7 text-uppercase tracking-wider" style={{ color: '#0B1F33' }}>
              INSTAGRAM FEED
            </span>
          </div>
          
          <h2 className="display-5 font-serif fw-bold mb-2" style={{ color: '#0B1F33' }}>
            Follow AVS Prosperity on Instagram
          </h2>

          <p className="lead font-serif fst-italic mb-3 text-muted">
            “Stay connected for daily financial insights, wealth management tips &amp; policy updates.”
          </p>

          <div className="luxury-divider mx-auto mb-4" style={{ width: '60px', height: '2px', backgroundColor: '#C9A24D' }}></div>
        </div>

        {/* Elfsight Instagram Widget Embed Target */}
        <div className="instagram-widget-wrapper my-3">
          <div 
            className={`elfsight-app-${widgetId}`} 
            data-elfsight-app-lazy
          ></div>
        </div>

      </div>
    </section>
  );
}

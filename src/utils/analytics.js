/**
 * AVS Prosperity Conversion Analytics Helper
 * Tracks lead conversion funnel events safely.
 */

export const trackEvent = (eventName, payload = {}) => {
  try {
    const timestamp = new Date().toISOString();
    const eventData = {
      event: eventName,
      timestamp,
      ...payload
    };

    // Push to window.dataLayer if GTM or Google Analytics is present
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(eventData);
    }

    // Log to console in development mode
    if (import.meta.env && import.meta.env.DEV) {
      console.log(`[AVS Analytics] Event: ${eventName}`, eventData);
    }
  } catch (err) {
    console.warn('[AVS Analytics] Tracking error:', err);
  }
};

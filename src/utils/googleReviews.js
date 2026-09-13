/**
 * Utility to fetch and cache official Google Reviews for AVS Prosperity Consultancy
 * Uses Google Places API (New) & Legacy API with local/session caching.
 */

const CACHE_KEY = 'avs_google_reviews_cache_v2';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 Hour Cache TTL

export const DEFAULT_GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=AVS+Prosperity+Consultancy+Goregaon+East+Mumbai";
export const GOOGLE_REVIEW_URL = "https://g.page/r/Cabc9dnxr-WuEAE/review";

/**
 * Normalizes review item from Places API (New or Legacy format)
 */
function normalizeReview(r, idx) {
  // New API format (Places API v1)
  if (r.authorAttribution) {
    return {
      id: r.name || `review-${idx}`,
      authorName: r.authorAttribution.displayName || 'Google User',
      authorPhoto: r.authorAttribution.photoUri || '',
      rating: r.rating || 5,
      relativePublishTime: r.relativePublishTimeDescription || r.publishTime || 'Recently',
      text: r.text?.text || r.originalText?.text || '',
      googleMapsUri: r.authorAttribution.uri || DEFAULT_GOOGLE_MAPS_URL
    };
  }

  // Legacy Details API format
  return {
    id: `review-legacy-${idx}`,
    authorName: r.author_name || 'Google User',
    authorPhoto: r.profile_photo_url || '',
    rating: r.rating || 5,
    relativePublishTime: r.relative_time_description || 'Recently',
    text: r.text || '',
    googleMapsUri: r.author_url || DEFAULT_GOOGLE_MAPS_URL
  };
}

/**
 * Fetches Google Place Details and Reviews with caching strategy
 */
export async function fetchGoogleReviews() {
  // 1. Check local/session cache first for fast render and zero wasteful API calls
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.data) {
        return parsed.data;
      }
    }
  } catch (e) {
    console.warn('Session storage read error:', e);
  }

  const placeId = (import.meta.env && import.meta.env.VITE_GOOGLE_PLACE_ID) || '';
  const apiKey = (import.meta.env && import.meta.env.VITE_GOOGLE_API_KEY) || '';

  // If no credentials supplied in environment, return error state as specified
  if (!placeId || !apiKey) {
    const errorResult = {
      status: 'ERROR',
      errorMessage: 'Google reviews are temporarily unavailable.',
      googleMapsUrl: DEFAULT_GOOGLE_MAPS_URL,
      rating: 0,
      userRatingCount: 0,
      reviews: []
    };
    return errorResult;
  }

  try {
    // Try Google Places API (New) endpoint first
    let response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=displayName,rating,userRatingCount,reviews,googleMapsUri&key=${apiKey}`
    );

    let data;
    if (response.ok) {
      data = await response.json();
      const rawReviews = data.reviews || [];
      const normalizedReviews = rawReviews.map(normalizeReview);

      const result = {
        status: normalizedReviews.length > 0 ? 'SUCCESS' : 'NO_REVIEWS',
        businessName: data.displayName?.text || 'AVS Prosperity Consultancy',
        rating: data.rating || 5.0,
        userRatingCount: data.userRatingCount || 0,
        reviews: normalizedReviews,
        googleMapsUrl: data.googleMapsUri || DEFAULT_GOOGLE_MAPS_URL
      };

      // Cache successful response
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: result }));
      } catch (e) {}

      return result;
    } else {
      // Fallback to Places Legacy API Details endpoint
      response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,url&key=${apiKey}`
      );
      
      if (response.ok) {
        data = await response.json();
        if (data.result) {
          const rawReviews = data.result.reviews || [];
          const normalizedReviews = rawReviews.map(normalizeReview);

          const result = {
            status: normalizedReviews.length > 0 ? 'SUCCESS' : 'NO_REVIEWS',
            businessName: data.result.name || 'AVS Prosperity Consultancy',
            rating: data.result.rating || 5.0,
            userRatingCount: data.result.user_ratings_total || 0,
            reviews: normalizedReviews,
            googleMapsUrl: data.result.url || DEFAULT_GOOGLE_MAPS_URL
          };

          try {
            sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: result }));
          } catch (e) {}

          return result;
        }
      }
    }

    throw new Error('Google Places API call returned error status');
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return {
      status: 'ERROR',
      errorMessage: 'Google reviews are temporarily unavailable.',
      googleMapsUrl: DEFAULT_GOOGLE_MAPS_URL,
      rating: 0,
      userRatingCount: 0,
      reviews: []
    };
  }
}

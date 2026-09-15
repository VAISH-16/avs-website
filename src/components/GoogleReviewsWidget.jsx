import React, { useEffect } from 'react';

/**
 * GoogleReviewsWidget Component
 * Exclusively embeds JotForm Website Widget for reviews:
 * <div id="JFWebsiteWidget-01a0a5c76f9070008c485b7732045672913d"></div>
 * <script src="https://www.jotform.com/website-widgets/embed/01a0a5c76f9070008c485b7732045672913d"></script>
 */
export default function GoogleReviewsWidget() {
  useEffect(() => {
    const scriptSrc = 'https://www.jotform.com/website-widgets/embed/01a0a5c76f9070008c485b7732045672913d';

    // Remove existing script if present to allow re-initialization
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="reviews-widget-wrapper my-4 w-100 min-vh-25">
      <div id="JFWebsiteWidget-01a0a5c76f9070008c485b7732045672913d"></div>
    </div>
  );
}

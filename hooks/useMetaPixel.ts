'use client';

declare global {
  interface Window {
    fbq: any;
  }
}

export const useMetaPixel = () => {
  const trackPurchase = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 29.90,
        currency: 'BRL',
        content_name: 'Clone page 10',
        content_category: 'Software',
        content_type: 'product'
      });
    }
  };

  const trackLead = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Clone page 10',
        content_category: 'Software'
      });
    }
  };

  return {
    trackPurchase,
    trackLead
  };
}; 
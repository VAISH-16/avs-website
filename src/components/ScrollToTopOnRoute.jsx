import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
  '/': 'AVS MERIDIAN Consultancy | Wealth Guidance & Asset Protection',
  '/services': 'AVS MERIDIAN Consultancy | Financial Services & Solutions',
  '/personal-finance': 'AVS MERIDIAN Consultancy | Personal Financial Planning',
  '/investments': 'AVS MERIDIAN Consultancy | Investments & Wealth Management',
  '/mutual-funds': 'AVS MERIDIAN Consultancy | Mutual Funds Advisory',
  '/sip': 'AVS MERIDIAN Consultancy | SIP & Wealth Accumulation',
  '/nfo': 'AVS MERIDIAN Consultancy | New Fund Offers (NFO)',
  '/bonds': 'AVS MERIDIAN Consultancy | Government & Corporate Bonds',
  '/insurance': 'AVS MERIDIAN Consultancy | Comprehensive Risk Protection',
  '/life-insurance': 'AVS MERIDIAN Consultancy | Life & Term Insurance',
  '/health-insurance': 'AVS MERIDIAN Consultancy | Health & Mediclaim Protection',
  '/motor-insurance': 'AVS MERIDIAN Consultancy | Motor Insurance Solutions',
  '/travel-insurance': 'AVS MERIDIAN Consultancy | Travel Insurance Solutions',
  '/business-insurance': 'AVS MERIDIAN Consultancy | Corporate & Commercial Risk',
  '/claim-assistance': 'AVS MERIDIAN Consultancy | Priority Claim Assistance Desk',
  '/about': 'AVS MERIDIAN Consultancy | About Us & Leadership',
  '/insights': 'AVS MERIDIAN Consultancy | Wealth Insights & Articles',
  '/contact': 'AVS MERIDIAN Consultancy | Contact Us & Book a Consultation'
};

export default function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = routeTitles[pathname] || 'AVS MERIDIAN Consultancy | Personalized Financial Guidance';
    document.title = title;
  }, [pathname]);

  return null;
}

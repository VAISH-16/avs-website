import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
  '/': 'AVS Prosperity Consultancy | Wealth Guidance & Asset Protection',
  '/services': 'AVS Prosperity Consultancy | Financial Services & Solutions',
  '/personal-finance': 'AVS Prosperity Consultancy | Personal Financial Planning',
  '/investments': 'AVS Prosperity Consultancy | Investments & Wealth Management',
  '/mutual-funds': 'AVS Prosperity Consultancy | Mutual Funds Advisory',
  '/sip': 'AVS Prosperity Consultancy | SIP & Wealth Accumulation',
  '/nfo': 'AVS Prosperity Consultancy | New Fund Offers (NFO)',
  '/bonds': 'AVS Prosperity Consultancy | Government & Corporate Bonds',
  '/insurance': 'AVS Prosperity Consultancy | Comprehensive Risk Protection',
  '/life-insurance': 'AVS Prosperity Consultancy | Life & Term Insurance',
  '/health-insurance': 'AVS Prosperity Consultancy | Health & Mediclaim Protection',
  '/motor-insurance': 'AVS Prosperity Consultancy | Motor Insurance Solutions',
  '/travel-insurance': 'AVS Prosperity Consultancy | Travel Insurance Solutions',
  '/business-insurance': 'AVS Prosperity Consultancy | Corporate & Commercial Risk',
  '/claim-assistance': 'AVS Prosperity Consultancy | Priority Claim Assistance Desk',
  '/about': 'AVS Prosperity Consultancy | About Us & Leadership',
  '/insights': 'AVS Prosperity Consultancy | Wealth Insights & Articles',
  '/contact': 'AVS Prosperity Consultancy | Contact Us & Book a Consultation'
};

export default function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = routeTitles[pathname] || 'AVS Prosperity Consultancy | Personalized Financial Guidance';
    document.title = title;
  }, [pathname]);

  return null;
}

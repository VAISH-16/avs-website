import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Utility Components
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRoute from './components/ScrollToTopOnRoute';

// Core Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import PersonalFinance from './pages/PersonalFinance';
import BusinessFinance from './pages/BusinessFinance';
import Investments from './pages/Investments';
import Insurance from './pages/Insurance';
import ClaimAssistance from './pages/ClaimAssistance';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

// Dedicated Landing Pages & Detail Views
import MutualFundsPage from './pages/dedicated/MutualFundsPage';
import SipPage from './pages/dedicated/SipPage';
import BondsPage from './pages/dedicated/BondsPage';
import NfoPage from './pages/dedicated/NfoPage';
import LifeInsurancePage from './pages/dedicated/LifeInsurancePage';
import HealthInsurancePage from './pages/dedicated/HealthInsurancePage';
import MotorInsurancePage from './pages/dedicated/MotorInsurancePage';
import TravelInsurancePage from './pages/dedicated/TravelInsurancePage';
import BusinessInsurancePage from './pages/dedicated/BusinessInsurancePage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import InvestmentCategoryDetailPage from './pages/InvestmentCategoryDetailPage';
import FinancialPlanningDetailPage from './pages/FinancialPlanningDetailPage';

import AskAVSChatbot from './components/AskAVSChatbot';

export default function App() {
  return (
    <Router>
      <ScrollToTopOnRoute />
      <div className="app-container font-sans text-dark bg-body">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/personal-finance" element={<PersonalFinance />} />
          <Route path="/business-finance" element={<BusinessFinance />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/claim-assistance" element={<ClaimAssistance />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />

          {/* Dedicated Category Detail Pages */}
          <Route path="/insurance-category/:catId" element={<CategoryDetailPage />} />
          <Route path="/investment-category/:catId" element={<InvestmentCategoryDetailPage />} />
          <Route path="/financial-planning-category/:catId" element={<FinancialPlanningDetailPage />} />
          <Route path="/financial-planning-types" element={<FinancialPlanningDetailPage />} />

          {/* Dedicated Product Pages */}
          <Route path="/mutual-funds" element={<MutualFundsPage />} />
          <Route path="/sip" element={<SipPage />} />
          <Route path="/bonds" element={<BondsPage />} />
          <Route path="/nfo" element={<NfoPage />} />
          <Route path="/life-insurance" element={<LifeInsurancePage />} />
          <Route path="/health-insurance" element={<HealthInsurancePage />} />
          <Route path="/motor-insurance" element={<MotorInsurancePage />} />
          <Route path="/travel-insurance" element={<TravelInsurancePage />} />
          <Route path="/business-insurance" element={<BusinessInsurancePage />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
        <AskAVSChatbot />
        <FloatingCTA />
        <ScrollToTop />
      </div>
    </Router>
  );
}

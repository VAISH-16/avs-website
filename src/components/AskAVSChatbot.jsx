import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import { sendEmailNotification } from '../utils/sendEmail';

export default function AskAVSChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewStack, setViewStack] = useState(['main']); // history stack for Back navigation
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'General Guidance',
    contactMethod: 'WhatsApp'
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const navigate = useNavigate();

  // Auto-open chatbot after 5 seconds on initial site visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      trackEvent('ask_avs_auto_opened');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const currentView = viewStack[viewStack.length - 1] || 'main';

  // Toggle Chatbot Window
  const toggleChat = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      trackEvent('ask_avs_opened');
    }
  };

  // Push new view to history stack
  const navigateToView = (viewName, serviceData = null) => {
    if (serviceData) {
      setSelectedService(serviceData);
      setFormData(prev => ({ ...prev, requirement: serviceData.title }));
    }
    setViewStack(prev => [...prev, viewName]);
    trackEvent('ask_avs_navigate', { view: viewName, service: serviceData?.title });
  };

  // Pop view from history stack (Go Back)
  const handleGoBack = () => {
    if (viewStack.length > 1) {
      setViewStack(prev => prev.slice(0, -1));
    }
  };

  // Reset to Main Menu (Start Over)
  const handleStartOver = () => {
    setViewStack(['main']);
    setSelectedService(null);
    setStatus('idle');
  };

  const handleNavigatePage = (path) => {
    trackEvent('ask_avs_learn_more', { path, service: selectedService?.title });
    navigate(path);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Handle Lead Form Submit
  const handleSubmitLead = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    trackEvent('ask_avs_lead_submitted', formData);

    try {
      await sendEmailNotification({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.requirement || 'General Guidance',
        contactMethod: formData.contactMethod || 'WhatsApp',
        message: `Lead captured via Ask AVS Assistant. Preferred contact method: ${formData.contactMethod}`
      }, 'Ask AVS Chatbot Assistant');
    } catch (err) {
      console.error('Error sending chatbot lead email:', err);
    }

    setStatus('success');
  };

  const servicesData = {
    // Insurance
    'health': {
      title: 'Health Insurance',
      explanation: 'Health insurance helps protect you and your family from unexpected medical expenses. AVS Prosperity can help you understand suitable coverage based on your requirements.',
      route: '/insurance-category/health'
    },
    'life': {
      title: 'Life Insurance',
      explanation: 'Life & term insurance provides income replacement and financial security for your dependents, ensuring your family\'s future goals remain protected.',
      route: '/insurance-category/life'
    },
    'motor': {
      title: 'Motor Insurance',
      explanation: 'Motor & fleet cover provides cashless repairs, zero depreciation add-ons, and 24/7 roadside assistance for private cars, two-wheelers, and commercial fleets.',
      route: '/insurance-category/motor'
    },
    'home': {
      title: 'Home Insurance',
      explanation: 'Home & property insurance shields your residence, structure, and home contents against fire, theft, natural calamities, and electrical damage.',
      route: '/insurance-category/home-property'
    },
    'society': {
      title: 'Society Insurance',
      explanation: 'Housing society insurance covers apartment buildings, common amenities, elevators, clubhouses, and public liability risks.',
      route: '/insurance-category/society-insurance'
    },
    'pet': {
      title: 'Pet Insurance',
      explanation: 'Pet / Paw care insurance covers veterinary surgery, unexpected illness treatments, and third-party injury liabilities for dogs and cats.',
      route: '/insurance-category/pet-insurance'
    },
    'travel': {
      title: 'Travel Insurance',
      explanation: 'Travel insurance offers international medical care, Schengen-compliant covers, flight delay compensation, and passport/baggage loss protection.',
      route: '/insurance-category/travel'
    },
    'business': {
      title: 'Business Insurance',
      explanation: 'Business & asset insurance covers shop, office, machinery breakdown, marine cargo, fire perils, and corporate liability risks.',
      route: '/insurance-category/business'
    },
    'general': {
      title: 'Other General Insurance',
      explanation: 'Comprehensive protection spanning personal accident, cyber fraud, crop protection, and specialized asset coverage.',
      route: '/insurance-category/general'
    },

    // Financial Planning
    'fin_planning': {
      title: 'Financial Planning',
      explanation: 'Financial health assessment and holistic planning to align your income, surplus liquidity, and life goals into a structured roadmap.',
      route: '/financial-planning-types'
    },
    'inv_planning': {
      title: 'Investment Planning',
      explanation: 'Custom investment solutions across equity & debt mutual funds, bonds, and asset allocation tailored to your risk capacity.',
      route: '/investment-category/mutual-funds'
    },
    'retirement': {
      title: 'Retirement Planning',
      explanation: 'Retirement corpus engineering and SWP cash flows ensuring lifelong financial independence without depleting your principal.',
      route: '/financial-planning-category/retirement-planning'
    },
    'child_edu': {
      title: 'Child Education Planning',
      explanation: 'Goal-based investment plans structured to fund domestic and overseas higher education milestones for your children.',
      route: '/financial-planning-category/goal-based'
    },
    'wealth_creation': {
      title: 'Wealth Creation',
      explanation: 'Long-term wealth compounding strategies combining systematic SIP investments and strategic capital growth.',
      route: '/financial-planning-category/wealth-creation'
    },
    'tax_planning': {
      title: 'Tax Planning',
      explanation: 'Tax-efficient wealth solutions including Section 80C ELSS mutual funds and tax-optimized capital allocation.',
      route: '/investment-category/mutual-funds'
    },

    // Claims
    'claim_health': {
      title: 'Health Insurance Claim',
      explanation: 'Hassle-free claim guidance for cashless hospital admissions, document preparation, and reimbursement coordination with underwriters.',
      route: '/claim-assistance'
    },
    'claim_motor': {
      title: 'Motor Insurance Claim',
      explanation: 'Step-by-step assistance for survey inspection, garage claim settlement, and repair approval with insurance companies.',
      route: '/claim-assistance'
    },
    'claim_other': {
      title: 'Other Insurance Claim',
      explanation: 'Dedicated advisor support for fire, property, life, or commercial insurance claim processing and settlement.',
      route: '/claim-assistance'
    }
  };

  const whatsappUrl = `https://wa.me/919322947512?text=Hello%20AVS%20Prosperity,%20I%20am%20interested%20in%20${encodeURIComponent(selectedService?.title || 'Personalized Financial Guidance')}.`;

  return (
    <>
      {/* FLOATING TRIGGER BUTTON */}
      <div 
        className="ask-avs-trigger-wrapper position-fixed" 
        style={{ right: '20px', bottom: '20px', zIndex: 1040 }}
      >
        <button
          type="button"
          onClick={toggleChat}
          className="ask-avs-trigger-btn border-0 rounded-circle shadow-lg d-flex align-items-center justify-content-center text-white position-relative"
          style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)',
            border: '2px solid #C9A24D',
            boxShadow: '0 8px 25px rgba(11, 31, 51, 0.35)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          aria-label="Ask AVS Assistant"
        >
          {isOpen ? (
            <i className="bi bi-x-lg fs-4 text-gold-accent"></i>
          ) : (
            <i className="bi bi-chat-dots-fill fs-4 text-gold-accent"></i>
          )}

          {/* Online Dot */}
          <span 
            className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"
            style={{ width: '14px', height: '14px' }}
          ></span>
        </button>

        {/* Hover Tooltip / Badge */}
        {!isOpen && (
          <div 
            className="ask-avs-tooltip position-absolute end-100 top-50 translate-middle-y me-3 bg-dark-navy text-white px-3 py-1 rounded-pill shadow-sm fs-8 fw-bold tracking-wider text-nowrap border border-gold-subtle d-none d-md-block"
            style={{ background: '#0B1F33', border: '1px solid rgba(201, 162, 77, 0.4)' }}
          >
            <span className="text-gold-accent me-1">Ask AVS</span> ✨
          </div>
        )}
      </div>

      {/* CHATBOT PANEL WINDOW */}
      {isOpen && (
        <div 
          className="ask-avs-panel position-fixed rounded-4 shadow-lg border border-gold-subtle d-flex flex-column overflow-hidden bg-white"
          style={{
            right: '20px',
            bottom: '90px',
            width: '380px',
            maxWidth: 'calc(100vw - 32px)',
            height: '560px',
            maxHeight: 'calc(100vh - 110px)',
            zIndex: 1045,
            boxShadow: '0 12px 40px rgba(11, 31, 51, 0.3)',
            animation: 'fadeInUp 0.3s ease-out forwards'
          }}
        >
          {/* HEADER */}
          <div 
            className="p-3 text-white d-flex align-items-center justify-content-between flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #0B1F33 0%, #071524 100%)', borderBottom: '2px solid #C9A24D' }}
          >
            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center text-gold-accent shadow-sm"
                style={{ width: '42px', height: '42px', background: 'rgba(201, 162, 77, 0.15)', border: '1px solid rgba(201, 162, 77, 0.4)' }}
              >
                <i className="bi bi-robot fs-4"></i>
              </div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <h3 className="h6 font-playfair text-white fw-bold mb-0">Ask AVS 👋</h3>
                  <span className="badge bg-success-subtle text-success border border-success border-opacity-25 rounded-pill fs-8 py-0 px-2">
                    🟢 Online
                  </span>
                </div>
                <span className="fs-8 text-gold-accent font-serif fst-italic d-block">
                  ISO 9001:2015 Certified Advisory
                </span>
              </div>
            </div>

            <button 
              type="button" 
              className="btn-close btn-close-white opacity-75"
              onClick={toggleChat}
              aria-label="Close Ask AVS"
            ></button>
          </div>

          {/* PANEL BODY CONTENT AREA */}
          <div className="p-3 flex-grow-1 overflow-y-auto bg-ivory">
            
            {/* VIEW 0: MAIN MENU */}
            {currentView === 'main' && (
              <div className="space-y-3">
                {/* Welcome Card */}
                <div className="bg-white p-3 rounded-4 shadow-sm border border-gold-subtle">
                  <div className="d-inline-flex align-items-center gap-1.5 px-2 py-0.5 rounded-pill mb-2" style={{ backgroundColor: 'rgba(201, 162, 77, 0.15)', border: '1px solid rgba(201, 162, 77, 0.4)' }}>
                    <i className="bi bi-patch-check-fill text-gold-accent fs-8"></i>
                    <span className="fs-8 fw-bold text-uppercase font-sans" style={{ color: '#0B1F33', fontSize: '0.7rem' }}>ISO 9001:2015 Certified</span>
                  </div>
                  <p className="font-serif text-dark fw-bold mb-2 fs-6">
                    Hello! Welcome to AVS Prosperity. 👋
                  </p>
                  <p className="font-sans text-muted fs-7 mb-3 lh-base">
                    I can help you explore our services, understand your insurance options, and connect you with an AVS advisor.
                  </p>
                  <p className="font-sans text-emerald fw-bold fs-7 mb-0">
                    How can I help you today?
                  </p>
                </div>

                {/* Quick Action Category Buttons */}
                <div className="d-grid gap-2">
                  <button 
                    type="button" 
                    className="btn btn-outline-dark text-start p-3 rounded-3 border-gold-subtle bg-white shadow-sm hover-gold d-flex align-items-center justify-content-between"
                    onClick={() => navigateToView('insurance')}
                  >
                    <span className="fs-7 font-sans fw-bold text-dark">🛡️ Insurance</span>
                    <i className="bi bi-chevron-right text-gold-accent fs-7"></i>
                  </button>

                  <button 
                    type="button" 
                    className="btn btn-outline-dark text-start p-3 rounded-3 border-gold-subtle bg-white shadow-sm hover-gold d-flex align-items-center justify-content-between"
                    onClick={() => navigateToView('planning')}
                  >
                    <span className="fs-7 font-sans fw-bold text-dark">📈 Financial Planning</span>
                    <i className="bi bi-chevron-right text-gold-accent fs-7"></i>
                  </button>

                  <button 
                    type="button" 
                    className="btn btn-outline-dark text-start p-3 rounded-3 border-gold-subtle bg-white shadow-sm hover-gold d-flex align-items-center justify-content-between"
                    onClick={() => navigateToView('claims')}
                  >
                    <span className="fs-7 font-sans fw-bold text-dark">📄 Claims Assistance</span>
                    <i className="bi bi-chevron-right text-gold-accent fs-7"></i>
                  </button>

                  <button 
                    type="button" 
                    className="btn btn-luxury-gold p-3 rounded-3 shadow-sm d-flex align-items-center justify-content-between"
                    style={{ background: '#0B1F33', color: '#FFFFFF', border: '1px solid #C9A24D' }}
                    onClick={() => navigateToView('lead_form', { title: 'General Guidance' })}
                  >
                    <span className="fs-7 font-sans fw-bold text-white">👩‍💼 Talk to an AVS Advisor</span>
                    <i className="bi bi-arrow-right text-gold-accent fs-7"></i>
                  </button>

                  <button 
                    type="button" 
                    className="btn btn-outline-secondary p-2 rounded-3 text-center fs-8 fw-bold text-uppercase tracking-wider"
                    onClick={() => navigateToView('lead_form', { title: 'Call Back Request' })}
                  >
                    📞 Request a Call Back
                  </button>
                </div>
              </div>
            )}

            {/* VIEW 1: INSURANCE SUB-MENU */}
            {currentView === 'insurance' && (
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold">🛡️ INSURANCE OPTIONS</span>
                  <button type="button" className="btn btn-link p-0 text-muted fs-8 text-decoration-none" onClick={handleGoBack}>
                    &larr; Back
                  </button>
                </div>

                <div className="d-grid gap-2">
                  {[
                    { key: 'health', name: 'Health Insurance' },
                    { key: 'life', name: 'Life Insurance' },
                    { key: 'motor', name: 'Motor Insurance' },
                    { key: 'home', name: 'Home Insurance' },
                    { key: 'society', name: 'Society Insurance' },
                    { key: 'pet', name: 'Pet Insurance' },
                    { key: 'travel', name: 'Travel Insurance' },
                    { key: 'business', name: 'Business Insurance' },
                    { key: 'general', name: 'Other General Insurance' }
                  ].map(item => (
                    <button
                      key={item.key}
                      type="button"
                      className="btn btn-white text-start p-2 px-3 rounded-3 border border-gold-subtle shadow-xs fs-7 fw-semibold text-dark hover-gold d-flex align-items-center justify-content-between"
                      onClick={() => navigateToView('detail', servicesData[item.key])}
                    >
                      <span>{item.name}</span>
                      <i className="bi bi-chevron-right fs-8 text-gold-accent"></i>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 2: FINANCIAL PLANNING SUB-MENU */}
            {currentView === 'planning' && (
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold">📈 FINANCIAL PLANNING</span>
                  <button type="button" className="btn btn-link p-0 text-muted fs-8 text-decoration-none" onClick={handleGoBack}>
                    &larr; Back
                  </button>
                </div>

                <div className="d-grid gap-2">
                  {[
                    { key: 'fin_planning', name: 'Financial Planning' },
                    { key: 'inv_planning', name: 'Investment Planning' },
                    { key: 'retirement', name: 'Retirement Planning' },
                    { key: 'child_edu', name: 'Child Education Planning' },
                    { key: 'wealth_creation', name: 'Wealth Creation' },
                    { key: 'tax_planning', name: 'Tax Planning' }
                  ].map(item => (
                    <button
                      key={item.key}
                      type="button"
                      className="btn btn-white text-start p-2 px-3 rounded-3 border border-gold-subtle shadow-xs fs-7 fw-semibold text-dark hover-gold d-flex align-items-center justify-content-between"
                      onClick={() => navigateToView('detail', servicesData[item.key])}
                    >
                      <span>{item.name}</span>
                      <i className="bi bi-chevron-right fs-8 text-gold-accent"></i>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 3: CLAIMS ASSISTANCE SUB-MENU */}
            {currentView === 'claims' && (
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold">📄 CLAIMS ASSISTANCE</span>
                  <button type="button" className="btn btn-link p-0 text-muted fs-8 text-decoration-none" onClick={handleGoBack}>
                    &larr; Back
                  </button>
                </div>

                <div className="d-grid gap-2">
                  {[
                    { key: 'claim_health', name: 'Health Insurance Claim' },
                    { key: 'claim_motor', name: 'Motor Insurance Claim' },
                    { key: 'claim_other', name: 'Other Insurance Claim' }
                  ].map(item => (
                    <button
                      key={item.key}
                      type="button"
                      className="btn btn-white text-start p-2 px-3 rounded-3 border border-gold-subtle shadow-xs fs-7 fw-semibold text-dark hover-gold d-flex align-items-center justify-content-between"
                      onClick={() => navigateToView('detail', servicesData[item.key])}
                    >
                      <span>{item.name}</span>
                      <i className="bi bi-chevron-right fs-8 text-gold-accent"></i>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW 4: SERVICE DETAIL & DECISION VIEW */}
            {currentView === 'detail' && selectedService && (
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-4 shadow-sm border border-gold-subtle">
                  <h4 className="font-playfair text-emerald fw-bold h6 mb-2">
                    {selectedService.title}
                  </h4>
                  <p className="font-sans text-muted fs-7 mb-0 lh-base">
                    {selectedService.explanation}
                  </p>
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="button"
                    className="btn btn-luxury-gold p-2.5 rounded-3 shadow-xs fs-7 fw-bold"
                    style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                    onClick={() => handleRedirect(selectedService.route)}
                  >
                    Explore {selectedService.title} &rarr;
                  </button>

                  <button
                    type="button"
                    className="btn btn-dark p-2.5 rounded-3 shadow-xs fs-7 fw-bold"
                    style={{ background: '#0B1F33', border: '1px solid #C9A24D' }}
                    onClick={() => navigateToView('lead_form', selectedService)}
                  >
                    👩‍💼 Talk to an Advisor
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success p-2.5 rounded-3 shadow-xs fs-7 fw-bold d-flex align-items-center justify-content-center gap-2 text-decoration-none"
                  >
                    <i className="bi bi-whatsapp"></i> Continue on WhatsApp
                  </a>

                  <div className="d-flex align-items-center justify-content-between pt-2 border-top border-secondary border-opacity-25">
                    <button type="button" className="btn btn-link p-0 text-muted fs-8 text-decoration-none" onClick={handleGoBack}>
                      &larr; Go Back
                    </button>
                    <button type="button" className="btn btn-link p-0 text-gold-accent fs-8 text-decoration-none fw-bold" onClick={handleStartOver}>
                      🔄 Start Over
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 5: LEAD CAPTURE FORM */}
            {currentView === 'lead_form' && (
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold">CONNECT WITH ADVISOR</span>
                  <button type="button" className="btn btn-link p-0 text-muted fs-8 text-decoration-none" onClick={handleGoBack}>
                    &larr; Back
                  </button>
                </div>

                {status === 'success' ? (
                  <div className="bg-white p-4 rounded-4 shadow-sm text-center border border-gold-subtle">
                    <div className="rounded-circle bg-success-subtle text-success mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
                      <i className="bi bi-check-circle-fill fs-2"></i>
                    </div>
                    <h4 className="font-playfair text-emerald fw-bold h6 mb-2">Request Received!</h4>
                    <p className="font-sans text-muted fs-7 mb-4 lh-sm">
                      Thank you! Your request has been received. An AVS advisor will get in touch with you shortly.
                    </p>
                    <div className="d-grid gap-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success p-2.5 rounded-3 shadow-xs fs-7 fw-bold d-flex align-items-center justify-content-center gap-2 text-decoration-none"
                      >
                        <i className="bi bi-whatsapp"></i> Continue on WhatsApp
                      </a>
                      <button type="button" className="btn btn-outline-dark p-2 rounded-3 fs-8 fw-bold" onClick={handleStartOver}>
                        🔄 Start Over
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitLead} className="bg-white p-3 rounded-4 shadow-sm border border-gold-subtle">
                    <p className="font-serif fw-bold text-dark fs-7 mb-3">
                      Let's connect you with an AVS Advisor
                    </p>

                    <div className="mb-2">
                      <label className="form-label fs-8 text-dark fw-semibold mb-1">Full Name *</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label fs-8 text-dark fw-semibold mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        className="form-control form-control-sm"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label fs-8 text-dark fw-semibold mb-1">Email Address (Optional)</label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label fs-8 text-dark fw-semibold mb-1">Requirement</label>
                      <input
                        type="text"
                        className="form-control form-control-sm bg-light"
                        value={formData.requirement}
                        onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fs-8 text-dark fw-semibold mb-1">Preferred Contact Method</label>
                      <div className="d-flex gap-2">
                        {['WhatsApp', 'Phone Call'].map(method => (
                          <button
                            key={method}
                            type="button"
                            className={`btn btn-sm flex-fill fs-8 ${formData.contactMethod === method ? 'btn-dark fw-bold' : 'btn-outline-secondary'}`}
                            onClick={() => setFormData({ ...formData, contactMethod: method })}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-luxury-gold w-100 p-2.5 rounded-3 font-sans fw-bold fs-7 shadow-sm"
                      style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Request a Callback →'}
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>

          {/* COMPLIANCE FOOTER DISCLAIMER */}
          <div className="p-2 px-3 bg-white border-top border-gold-subtle text-center flex-shrink-0">
            <span className="fs-8 text-muted d-block" style={{ fontSize: '0.68rem', lineHeight: '1.2' }}>
              🔒 Ask AVS provides educational guidance. For personal financial recommendations, connect with an AVS advisor.
            </span>
          </div>

        </div>
      )}
    </>
  );
}

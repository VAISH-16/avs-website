import React, { useState } from 'react';
import { trackEvent } from '../utils/analytics';

export default function FAQSection({ onOpenModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Do I need to know which product I need before contacting AVS?",
      a: "No. You only need to know what goal or concern you have—such as building wealth, securing your family, or planning retirement. During our consultation, we help you understand suitable options available."
    },
    {
      q: "Can AVS help with investments and insurance?",
      a: "Yes. Our core positioning is Prosperity with Protection. We offer guidance covering mutual funds, SIPs, government & corporate bonds, life, health, motor, travel, property, and business insurance."
    },
    {
      q: "Can AVS help with business financial guidance?",
      a: "Yes. We guide business owners and enterprises on commercial risk protection, group insurance for employees, asset coverage, and corporate financial guidance."
    },
    {
      q: "Can AVS assist with insurance claims?",
      a: "Yes. We offer priority claim assistance desk support—guiding clients through documentation, intimation, submission, and follow-up with insurance companies."
    },
    {
      q: "How does a consultation work?",
      a: "When you request a consultation, an advisor reaches out via your preferred method (Call, WhatsApp, or Email) to understand your requirements, answer your questions, and present personalized options."
    },
    {
      q: "How do I get started?",
      a: "Simply click 'BOOK A CONSULTATION' or select your goal in the 'What are you planning for?' section to share your contact details. Our team will get in touch promptly."
    }
  ];

  const toggleFAQ = (idx) => {
    const nextIdx = openIdx === idx ? -1 : idx;
    setOpenIdx(nextIdx);
    if (nextIdx !== -1) {
      trackEvent('faq_open', { question: faqs[idx].q });
    }
  };

  return (
    <section className="section py-5 bg-ivory position-relative border-bottom border-gold-subtle">
      <div className="container py-4">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="display-4 font-playfair text-emerald fw-bold mb-3">
              Clear Answers Before You Begin.
            </h2>
            <div className="luxury-divider mx-auto mb-4"></div>
            <p className="lead font-serif text-secondary mb-0">
              Everything you need to know about starting a conversation with AVS.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="accordion border-0" id="avsFaqAccordion">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="accordion-item mb-3 rounded-4 border border-gold-subtle overflow-hidden shadow-sm bg-white">
                    <h3 className="accordion-header" id={`heading${idx}`}>
                      <button
                        className={`accordion-button font-playfair fw-bold text-emerald fs-5 p-4 ${isOpen ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFAQ(idx)}
                        style={{ backgroundColor: isOpen ? '#F8F6F0' : '#FFFFFF', boxShadow: 'none' }}
                      >
                        {faq.q}
                      </button>
                    </h3>
                    {isOpen && (
                      <div className="accordion-collapse collapse show bg-white">
                        <div className="accordion-body font-sans text-secondary fs-6 p-4 pt-2 border-top border-gold-subtle">
                          {faq.a}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Need More Help Box */}
            <div className="text-center mt-5 p-4 rounded-4 bg-white border border-gold-accent shadow-sm">
              <h3 className="font-playfair text-emerald fw-bold h5 mb-2">Have a specific question not listed here?</h3>
              <p className="font-sans text-muted fs-7 mb-3">Our principal advisors are happy to clarify any details for your peace of mind.</p>
              <button 
                onClick={() => onOpenModal && onOpenModal('FAQ Assistance')}
                className="btn btn-luxury-gold px-4 py-2 text-uppercase tracking-wider fw-bold fs-7"
                style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
              >
                Ask an Advisor <i className="bi bi-chat-text ms-1"></i>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

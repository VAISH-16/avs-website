import React, { useState, useEffect } from 'react';
import { trackEvent } from '../utils/analytics';
import { sendEmailNotification } from '../utils/sendEmail';

export default function ConsultationModal({ isOpen, onClose, initialRequirement = "General Guidance" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    contactMethod: 'Call',
    requirement: initialRequirement,
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  useEffect(() => {
    if (initialRequirement) {
      setFormData(prev => ({ ...prev, requirement: initialRequirement }));
    }
  }, [initialRequirement]);

  useEffect(() => {
    if (isOpen) {
      trackEvent('consultation_form_open', { requirement: initialRequirement });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialRequirement]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    trackEvent('consultation_form_submit', formData);

    try {
      await sendEmailNotification(formData, 'Consultation Modal');
    } catch (err) {
      console.error('Error sending modal email:', err);
    }

    setStatus('success');
    setFormData({
      name: '',
      phone: '',
      email: '',
      contactMethod: 'Call',
      requirement: initialRequirement,
      message: ''
    });
  };

  const handleClose = () => {
    setStatus('idle');
    onClose();
  };

  return (
    <div 
      className="modal fade show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(15, 61, 46, 0.75)', backdropFilter: 'blur(6px)', zIndex: 1055 }}
      onClick={handleClose}
    >
      <div 
        className="modal-dialog modal-dialog-centered modal-lg" 
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden" style={{ background: '#F8F6F0' }}>
          
          {/* Header */}
          <div className="modal-header border-bottom border-gold-subtle p-4 bg-white position-relative d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <img 
                src="/assets/img/avs-logo.png" 
                alt="AVS Prosperity Logo" 
                className="rounded-2 shadow-sm border border-gold-subtle"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', backgroundColor: '#FFFFFF', padding: '2px' }}
              />
              <div>
                <span className="fs-8 text-uppercase tracking-widest text-gold-accent font-sans fw-bold d-block mb-1">
                  AVS PERSONALIZED CONSULTATION
                </span>
                <h3 className="modal-title font-playfair text-emerald fw-bold h4 mb-0">
                  Let's understand what you need.
                </h3>
              </div>
            </div>
            <button 
              type="button" 
              className="btn-close me-1" 
              onClick={handleClose} 
              aria-label="Close"
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body p-4 p-md-5">

            {status === 'success' ? (
              <div className="text-center py-4">
                <div className="d-inline-flex align-items-center justify-content-center text-gold-accent rounded-circle mb-3" style={{ width: '70px', height: '70px', background: '#0B1F33' }}>
                  <i className="bi bi-check-lg fs-1 text-gold-accent"></i>
                </div>
                <h4 className="font-playfair fw-bold mb-2" style={{ color: '#0B1F33' }}>Request Received</h4>
                <p className="lead font-serif text-secondary mb-4">
                  Thank you. Our team will get in touch with you shortly.
                </p>
                <button 
                  type="button" 
                  className="btn btn-luxury-gold px-5 py-3 text-uppercase tracking-wider fw-bold"
                  style={{ background: '#C9A24D', color: '#0B1F33', border: 'none' }}
                  onClick={handleClose}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* Selected Requirement Badge */}
                <div className="p-3 mb-4 rounded-3 d-flex align-items-center justify-content-between shadow-sm" style={{ background: '#0B1F33', color: '#FFFFFF' }}>
                  <div>
                    <span className="fs-8 text-uppercase tracking-wider text-gold-accent fw-bold d-block">Selected Goal</span>
                    <span className="font-serif fw-bold fs-5 text-white">{formData.requirement}</span>
                  </div>
                  <i className="bi bi-shield-check text-gold-accent fs-2"></i>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-dark fs-7 fw-bold">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      className="form-control luxury-input" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-dark fs-7 fw-bold">Mobile Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="form-control luxury-input" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-dark fs-7 fw-bold">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control luxury-input" 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-dark fs-7 fw-bold">Preferred Contact Method *</label>
                    <div className="d-flex gap-2 mt-1">
                      {['Call', 'WhatsApp', 'Email'].map(method => (
                        <button
                          key={method}
                          type="button"
                          className={`btn btn-sm flex-fill ${formData.contactMethod === method ? 'text-white fw-bold' : 'btn-outline-dark'}`}
                          style={{ backgroundColor: formData.contactMethod === method ? '#0B1F33' : 'transparent' }}
                          onClick={() => setFormData(prev => ({ ...prev, contactMethod: method }))}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label text-dark fs-7 fw-bold">Tell us a little about your requirement (Optional)</label>
                    <textarea 
                      name="message"
                      className="form-control luxury-input" 
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 pt-2 text-center">
                  <button 
                    type="submit" 
                    className="btn btn-luxury-gold w-100 py-3 text-uppercase tracking-wider fw-bold fs-6 shadow-sm rounded-pill"
                    style={{ background: '#C9A24D', color: '#0B1F33', border: '2px solid #0B1F33' }}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <span><span className="spinner-border spinner-border-sm me-2" role="status"></span>Processing...</span>
                    ) : (
                      <span>GET PERSONALIZED GUIDANCE &rarr;</span>
                    )}
                  </button>
                  <span className="fs-8 text-muted d-block mt-3">
                    <i className="bi bi-lock-fill me-1 text-gold-accent"></i> Strict Privacy: Your details are encrypted &amp; never shared.
                  </span>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

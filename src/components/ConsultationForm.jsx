import React, { useState } from 'react';
import { sendEmailNotification } from '../utils/sendEmail';

export default function ConsultationForm({ title = "Request a Financial Consultation", subtitle = "Speak directly with Mrs. Archana Ssalunkhe & team for custom portfolio and risk guidance." }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Mutual Funds & Wealth',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await sendEmailNotification(formData, 'Consultation Form');
    } catch (err) {
      console.error('Error sending consultation email:', err);
    }

    setStatus('success');
    setFormData({ name: '', phone: '', email: '', service: 'Mutual Funds & Wealth', message: '' });
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <div className="consultation-box shadow-sm p-5">
      <div className="text-center mb-4">
        <h3 className="gold-heading-sm mb-2">{title}</h3>
        <p className="subtext text-muted">{subtitle}</p>
      </div>

      {status === 'success' && (
        <div className="alert alert-success text-center py-3 mb-4 rounded-3 border-0 bg-success bg-opacity-10 text-success fw-medium">
          <i className="bi bi-check-circle-fill me-2"></i>
          Thank you! Your consultation request has been submitted successfully. Our principal advisor will reach out shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="consultation-form">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label text-secondary fs-7">Full Name *</label>
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
            <label className="form-label text-secondary fs-7">Phone Number *</label>
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
            <label className="form-label text-secondary fs-7">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control luxury-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-secondary fs-7">Area of Guidance *</label>
            <select
              name="service"
              className="form-select luxury-input"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="Mutual Funds & Wealth">Mutual Funds & Wealth Advisory</option>
              <option value="SIP & Systematic Growth">SIP & Systematic Wealth Growth</option>
              <option value="Government & Corporate Bonds">Government & Corporate Bonds</option>
              <option value="Life & Term Insurance">Life & Term Protection</option>
              <option value="Health Insurance">Health & Medical Protection</option>
              <option value="Corporate & Group Insurance">Corporate & Asset Protection</option>
              <option value="Claim Settlement Assistance">Claim Settlement Assistance</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label text-secondary fs-7">Financial Goals or Details</label>
            <textarea
              name="message"
              className="form-control luxury-input"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-12 text-center mt-4">
            <button
              type="submit"
              className="btn btn-luxury-gold w-100 py-3.5 text-uppercase tracking-wider fw-bold shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #C9A24D 50%, #B38B38 100%)',
                color: '#0B1F33',
                border: 'none',
                borderRadius: '30px',
                boxShadow: '0 6px 20px rgba(201, 162, 77, 0.45)',
                fontSize: '1.02rem',
                letterSpacing: '0.08em'
              }}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <span><span className="spinner-border spinner-border-sm me-2" role="status"></span>Submitting Request...</span>
              ) : (
                <span className="fw-bold">Request Consultation <i className="bi bi-arrow-right ms-2"></i></span>
              )}
            </button>
            <p className="form-note text-muted mt-2 fs-8 mb-0">
              <i className="bi bi-shield-lock me-1"></i> Your details remain strictly confidential and will never be shared with third parties.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    profession: 'Financial Consultant',
    leadCapacity: '6-15 leads',
    acceptedTerms: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    const phoneClean = formData.mobileNumber.replace(/\D/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      errs.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.city.trim()) {
      errs.city = 'City is required';
    }
    if (!formData.acceptedTerms) {
      errs.acceptedTerms = 'You must accept the partner terms to proceed';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563eb', '#10b981', '#38bdf8', '#1e3a8a'],
        });
      } catch {
        // Fallback gracefully if canvas-confetti is not loaded
      }
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="cb-modal-backdrop" onClick={handleResetAndClose}>
      <div
        className="cb-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="cb-modal-header">
          <div>
            <div className="cb-pill cb-pill-blue" style={{ fontSize: '0.72rem', marginBottom: '6px' }}>
              <Sparkles size={12} />
              <span>Partner Onboarding</span>
            </div>
            <h3 id="modal-title" style={{ fontSize: '1.35rem', color: 'var(--cb-navy-900)' }}>
              {isSubmitted ? 'Welcome to the Program' : 'Become a Lead Partner'}
            </h3>
          </div>
          <button
            type="button"
            className="cb-modal-close"
            onClick={handleResetAndClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="cb-modal-body">
          {isSubmitted ? (
            <div className="cb-success-view">
              <div className="cb-success-icon-badge">
                <CheckCircle2 size={36} />
              </div>
              <h4 style={{ fontSize: '1.4rem', color: 'var(--cb-navy-900)' }}>
                Thank you, {formData.fullName}!
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--cb-text-muted)', lineHeight: 1.6 }}>
                Your interest in the Credo Bazaar Lead Partner Program has been received. Our partner desk will review your details and contact you at{' '}
                <strong style={{ color: 'var(--cb-navy-900)' }}>{formData.mobileNumber}</strong> with your onboarding kit and referral guide.
              </p>

              <div
                style={{
                  background: 'var(--cb-bg-base)',
                  border: '1px solid var(--cb-border-subtle)',
                  borderRadius: 'var(--cb-radius-md)',
                  padding: '14px 18px',
                  width: '100%',
                  textAlign: 'left',
                  fontSize: '0.85rem',
                  color: 'var(--cb-text-muted)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <ShieldCheck size={16} color="var(--cb-emerald-600)" />
                  <strong style={{ color: 'var(--cb-navy-900)' }}>What happens next:</strong>
                </div>
                <ul style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
                  <li>Account verification via SMS / WhatsApp</li>
                  <li>Receipt of your dedicated referral link</li>
                  <li>Access to lead tracking guidelines</li>
                </ul>
              </div>

              <button
                type="button"
                className="cb-btn cb-btn-primary"
                onClick={handleResetAndClose}
                style={{ width: '100%', marginTop: '12px' }}
              >
                <span>Back to Overview</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--cb-text-muted)',
                  marginBottom: '20px',
                  lineHeight: 1.5,
                }}
              >
                Join Credo Bazaar&apos;s network of verified Lead Partners. Start referring potential borrowers today.
              </p>

              {/* Full Name */}
              <div className="cb-form-group">
                <label className="cb-form-label" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="cb-form-input"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && (
                  <span style={{ color: '#ef4444', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                    <AlertCircle size={12} /> {errors.fullName}
                  </span>
                )}
              </div>

              {/* Mobile Number & City (2-col) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="cb-form-group">
                  <label className="cb-form-label" htmlFor="mobileNumber">
                    Mobile Number *
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    className="cb-form-input"
                    placeholder="10-digit number"
                    maxLength={10}
                    value={formData.mobileNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, mobileNumber: e.target.value.replace(/\D/g, '') })
                    }
                  />
                  {errors.mobileNumber && (
                    <span style={{ color: '#ef4444', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                      <AlertCircle size={12} /> {errors.mobileNumber}
                    </span>
                  )}
                </div>

                <div className="cb-form-group">
                  <label className="cb-form-label" htmlFor="city">
                    City *
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="cb-form-input"
                    placeholder="e.g. Mumbai, Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                  {errors.city && (
                    <span style={{ color: '#ef4444', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                      <AlertCircle size={12} /> {errors.city}
                    </span>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div className="cb-form-group">
                <label className="cb-form-label" htmlFor="email">
                  Work / Personal Email *
                </label>
                <input
                  id="email"
                  type="email"
                  className="cb-form-input"
                  placeholder="e.g. rahul@consultancy.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && (
                  <span style={{ color: '#ef4444', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                    <AlertCircle size={12} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Profession Selection */}
              <div className="cb-form-group">
                <label className="cb-form-label" htmlFor="profession">
                  Professional Background
                </label>
                <select
                  id="profession"
                  className="cb-form-select"
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                >
                  <option value="Financial Consultant">Financial Consultant</option>
                  <option value="Chartered Accountant (CA)">Chartered Accountant (CA)</option>
                  <option value="Business Advisor / Consultant">Business Advisor / Consultant</option>
                  <option value="DSA / Loan Agent">DSA / Loan Agent</option>
                  <option value="Real Estate Consultant">Real Estate Consultant</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Estimated Monthly Leads */}
              <div className="cb-form-group">
                <label className="cb-form-label" htmlFor="leadCapacity">
                  Estimated Monthly Potential Leads
                </label>
                <select
                  id="leadCapacity"
                  className="cb-form-select"
                  value={formData.leadCapacity}
                  onChange={(e) => setFormData({ ...formData, leadCapacity: e.target.value })}
                >
                  <option value="1-5 leads">1 - 5 potential leads</option>
                  <option value="6-15 leads">6 - 15 potential leads</option>
                  <option value="16-50 leads">16 - 50 potential leads</option>
                  <option value="50+ leads">50+ potential leads</option>
                </select>
              </div>

              {/* Terms Checkbox */}
              <div className="cb-form-group">
                <label className="cb-form-checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.acceptedTerms}
                    onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                  />
                  <span>
                    I agree to the Lead Partner Program Terms &amp; Conditions. I understand loan approvals and commission eligibility are determined independently by respective lending partners.
                  </span>
                </label>
                {errors.acceptedTerms && (
                  <span style={{ color: '#ef4444', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                    <AlertCircle size={12} /> {errors.acceptedTerms}
                  </span>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="cb-btn cb-btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '12px' }}
              >
                <span>{isSubmitting ? 'Registering...' : 'Register as Lead Partner'}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

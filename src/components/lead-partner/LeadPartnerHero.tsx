import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Lock,
  Play,
  X,
  Info,
  Send,
  Landmark,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const LeadPartnerHero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loanAmount, setLoanAmount] = useState<string>('5,00,000');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [loanCategory, setLoanCategory] = useState<string>('Personal Loan');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const journeySteps = [
    { id: 1, title: 'Choose Loan' },
    { id: 2, title: 'Submit Details' },
    { id: 3, title: 'Verify Mobile' },
    { id: 4, title: 'Compare Offers' },
    { id: 5, title: 'Get Approved' },
  ];

  const loanCategories = [
    'Personal Loan',
    'Business Loan',
    'Home Loan',
    'Loan Against Property',
    'Vehicle Loan',
    'Machinery Loan',
  ];

  const handleScrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('how-to-apply') || document.getElementById('how-it-works');
    if (el) {
      const offset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleScrollToWhyChoose = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('why-choose');
    if (el) {
      const offset = 73;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // ignore
      }
    }, 500);
  };

  return (
    <section className="ref-hero-section">
      <div className="cb-container">
        {/* Main 2-Column Hero Layout */}
        <div className="ref-hero-layout">
          {/* ================= LEFT COLUMN: HERO HEADLINE & CTAS ================= */}
          <div className="ref-hero-left">
            {/* Headline */}
            <h1 className="ref-hero-title">
              A Smarter Platform <br />
              <span className="ref-hero-title-blue">for Your Financial Needs</span>
            </h1>

            {/* Subtitle */}
            <p className="ref-hero-subtitle">
              One simple platform to discover, compare, and explore financial opportunities that fit your needs.
            </p>

            {/* 4 Trust Points (Unboxed & Clean) */}
            <div className="ref-hero-points-row">
              <div className="ref-hero-point">
                <div className="ref-point-icon-wrap">
                  <Landmark size={18} color="#2563eb" />
                </div>
                <div className="ref-point-text">
                  <span className="ref-point-title">50+ Top Banks</span>
                  <span className="ref-point-desc">Wide lender network</span>
                </div>
              </div>

              <div className="ref-hero-point">
                <div className="ref-point-icon-wrap">
                  <ShieldCheck size={18} color="#2563eb" />
                </div>
                <div className="ref-point-text">
                  <span className="ref-point-title">Clear &amp; Transparent</span>
                  <span className="ref-point-desc">No hidden charges</span>
                </div>
              </div>

              <div className="ref-hero-point">
                <div className="ref-point-icon-wrap">
                  <FileText size={18} color="#2563eb" />
                </div>
                <div className="ref-point-text">
                  <span className="ref-point-title">100% Digital</span>
                  <span className="ref-point-desc">Fast &amp; paperless</span>
                </div>
              </div>

              <div className="ref-hero-point">
                <div className="ref-point-icon-wrap">
                  <Lock size={18} color="#2563eb" />
                </div>
                <div className="ref-point-text">
                  <span className="ref-point-title">Safe &amp; Secure</span>
                  <span className="ref-point-desc">Your data is protected</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="ref-hero-actions-row">
              <a
                href={CHECKOUT_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-btn-primary"
                id="hero-start-request-btn"
                style={{ textDecoration: 'none' }}
              >
                <span>Apply Now</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#how-to-apply"
                onClick={handleScrollToHowItWorks}
                className="ref-btn-secondary"
                id="hero-how-it-works-btn"
              >
                <div className="ref-play-circle">
                  <Play size={12} fill="#2563eb" color="#2563eb" style={{ marginLeft: 2 }} />
                </div>
                <span>How It Works</span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: VISUAL SMARTPHONE & JOURNEY ================= */}
          <div className="ref-hero-right">
            <div className="ref-visual-stage">
              {/* Soft Organic Pastel Sky-Blue Backdrop Blob */}
              <div className="ref-visual-backdrop-blob" />

              {/* Flying Paper Airplane with Dashed Trail */}
              <div className="ref-paper-plane-wrap">
                <svg
                  className="ref-plane-trail"
                  width="130"
                  height="110"
                  viewBox="0 0 130 110"
                  fill="none"
                >
                  <path
                    d="M 15 95 C 45 65, 80 85, 105 25"
                    stroke="#60a5fa"
                    strokeWidth="2.2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="ref-plane-icon">
                  <Send size={26} color="#2563eb" fill="#2563eb" />
                </div>
              </div>

              {/* Central Smartphone Mockup */}
              <div className="ref-phone-frame">
                <div className="ref-phone-screen">
                  {/* Phone Speaker Notch */}
                  <div className="ref-phone-notch" />

                  {/* Screen Header */}
                  <h3 className="ref-phone-title">Your Loan Journey</h3>

                  {/* 5 Journey Checklist Cards */}
                  <div className="ref-phone-checklist">
                    {journeySteps.map((step) => (
                      <div
                        key={step.id}
                        className="ref-phone-step-card"
                      >
                        <div className="ref-step-check-icon">
                          <CheckCircle2 size={20} color="#10b981" fill="#ecfdf5" />
                        </div>
                        <span className="ref-step-label">{step.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Borrower Cutout Image (Right Foreground) */}
              <div className="ref-hero-man-cutout-wrap">
                <img
                  src="/borrower_man_cutout.png?v=hero2"
                  alt="Borrower checking approved loan offers on mobile"
                  className="ref-hero-man-cutout-img"
                  loading="eager"
                />
                <div className="ref-man-status-badge">
                  <CheckCircle2 size={13} color="#10b981" />
                  <span>Approved in 2 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Cue to Why Choose Us */}
        <div className="ref-hero-scroll-cue">
          <a
            href="#why-choose"
            onClick={handleScrollToWhyChoose}
            className="ref-scroll-cue-link"
            aria-label="Scroll down to Why Choose Us"
          >
            <span>Your simple platform to explore and connect with financial solutions. </span>
          </a>
        </div>
      </div>

      {/* ================= FAST-TRACK DIGITAL LOAN REQUEST MODAL ================= */}
      {isModalOpen && (
        <div className="cb-loan-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="cb-loan-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cb-loan-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <div className="cb-loan-modal-header">
                  <div className="cb-loan-modal-pill">
                    <span className="cb-info-icon-badge" aria-hidden="true">
                      <Info size={14} color="#2563eb" />
                    </span>
                    <span>Fast Digital Check</span>
                  </div>
                  <h3 className="cb-loan-modal-title">Check Your Loan Offers</h3>
                  <p className="cb-loan-modal-desc">
                    Compare personalized loan offers from 25+ lenders with zero impact on your credit score.
                  </p>
                </div>

                <form onSubmit={handleModalSubmit} className="cb-loan-modal-form">
                  <div className="cb-modal-field">
                    <label>Select Loan Type</label>
                    <div className="cb-modal-types-row">
                      {loanCategories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setLoanCategory(cat)}
                          className={`cb-modal-type-chip ${loanCategory === cat ? 'active' : ''}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="cb-modal-field">
                    <label>Loan Amount Required</label>
                    <div className="cb-modal-input-wrap">
                      <span className="cb-modal-prefix">₹</span>
                      <input
                        type="text"
                        placeholder="e.g. 5,00,000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="cb-modal-grid-2">
                    <div className="cb-modal-field">
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="As per PAN card"
                        className="cb-modal-input-std"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="cb-modal-field">
                      <label>Mobile Number</label>
                      <div className="cb-modal-input-wrap">
                        <span className="cb-modal-prefix">+91</span>
                        <input
                          type="tel"
                          maxLength={10}
                          placeholder="10-digit mobile"
                          value={mobileNumber}
                          onChange={(e) =>
                            setMobileNumber(e.target.value.replace(/\D/g, ''))
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cb-modal-submit-btn"
                  >
                    <span>{isSubmitting ? 'Comparing 50+ Banks...' : 'See Best Loan Offers →'}</span>
                  </button>

                  <div className="cb-modal-security-note">
                    <Lock size={12} color="#16a34a" />
                    <span>256-bit Bank Grade Security • Zero Broker Commission • 100% Free</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="cb-modal-success-screen">
                <div className="cb-modal-success-icon">
                  <CheckCircle2 size={50} color="#10b981" />
                </div>
                <h3>Loan Request Initiated!</h3>
                <p>
                  Thank you, <strong>{fullName || 'Borrower'}</strong>! We are fetching customized {loanCategory} sanction offers for your amount of ₹{loanAmount}.
                </p>
                <div className="cb-modal-success-box">
                  <div>Estimated Disbursal: <strong>Within 15–24 Hours</strong></div>
                  <div>Partner Network: <strong>SBI, HDFC, ICICI, Axis + 46 more</strong></div>
                  <div>Zero CIBIL Impact: <strong>Soft match leaves credit score untouched</strong></div>
                </div>
                <a
                  href={CHECKOUT_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cb-modal-submit-btn"
                  style={{ textDecoration: 'none', marginTop: 16 }}
                >
                  <span>Continue on Fast-Track Portal →</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default LeadPartnerHero;

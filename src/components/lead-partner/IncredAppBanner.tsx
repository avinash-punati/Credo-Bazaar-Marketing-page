import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const IncredAppBanner: React.FC = () => {
  return (
    <section className="cb-incred-app-section">
      <div className="cb-container">
        <div className="cb-incred-app-card">
          <div className="cb-incred-app-content">
            <div className="cb-incred-app-tag">
              <Zap size={14} color="#2563eb" />
              <span>Fast Digital Approval</span>
            </div>
            <h2 className="cb-incred-app-title">
              Get the Best Loan Offer on Your Phone
            </h2>
            <p className="cb-incred-app-sub">
              Whether it is for an emergency, home repair, wedding, or business — get approved quickly with zero branch visits.
            </p>

            <div className="cb-incred-app-bullets">
              <div className="cb-incred-app-bullet">
                <CheckCircleIcon />
                <span>Loan amounts from ₹50,000 to ₹50 Lakhs</span>
              </div>
              <div className="cb-incred-app-bullet">
                <CheckCircleIcon />
                <span>Direct bank transfer within 48 hours</span>
              </div>
              <div className="cb-incred-app-bullet">
                <CheckCircleIcon />
                <span>Zero branch visits • 100% paperless</span>
              </div>
            </div>

            <div className="cb-incred-app-actions">
              <a
                href={CHECKOUT_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cb-btn-app-apply"
                style={{ textDecoration: 'none' }}
              >
                <span>Apply Now</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="cb-incred-app-visual">
            <div className="cb-incred-phone-mockup">
              <div className="cb-phone-screen">
                <div className="cb-phone-status-bar">
                  <span>9:41</span>
                  <span>5G • 100%</span>
                </div>
                <div className="cb-phone-app-header">
                  <div>Credo Bazaar</div>
                  <small>Personal Loans</small>
                </div>
                <div className="cb-phone-loan-sanction">
                  <span className="cb-phone-sanction-tag">Pre-Approved Offer</span>
                  <div className="cb-phone-sanction-amt">₹5,00,000</div>
                  <small>@ 10.49% p.a. • 36 Months</small>
                  <div className="cb-phone-emi-pill">EMI: ₹16,248 / mo</div>
                </div>
                <div className="cb-phone-banks-row">
                  <span>HDFC</span>
                  <span>SBI</span>
                  <span>ICICI</span>
                  <span>AXIS</span>
                </div>
                <div className="cb-phone-action-btn">Disburse to Bank Account</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckCircleIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#10b981" />
    <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default IncredAppBanner;

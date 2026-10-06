import React from 'react';
import {
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  AlertTriangle,
  Building2,
} from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const LeadPartnerHero: React.FC = () => {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="cb-hero-section" style={{ paddingBottom: '0' }}>
      <div className="cb-container">
        {/* Top Urgency Banner for Borrowers */}
        <div
          style={{
            background: 'linear-gradient(90deg, #fef3c7 0%, #fff7ed 100%)',
            border: '1px solid #fde68a',
            borderRadius: '12px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <AlertTriangle size={18} color="#d97706" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.875rem', color: '#92400e', margin: 0, lineHeight: 1.5 }}>
            <strong>Already connected with another DSA or bank?</strong> Traditional agents often route your file only to lenders paying them the highest agent payout.{' '}
            <a
              href="#why-credo"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('why-credo');
                if (el) {
                  const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              style={{ color: '#d97706', fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}
            >
              See why borrowing with Credo Bazaar saves you money &amp; CIBIL score →
            </a>
          </p>
        </div>

        <div className="cb-hero-grid">
          {/* Left Column: Borrower Value Proposition */}
          <div className="cb-hero-content animate-fade-in">
            <div className="cb-pill cb-pill-blue">
              <Sparkles size={14} />
              <span>Borrower-First Digital Platform</span>
            </div>

            <h1 className="cb-hero-title">
              Get the Best Loan Offers{' '}
              <span className="cb-hero-title-highlight">Without the DSA Hassle</span>
            </h1>

            <p className="cb-hero-subtitle">
              One application connects you with 50+ leading banks and NBFCs — with zero agent bias.
            </p>

            <p className="cb-hero-desc">
              Whether you need working capital, MSME business loans, machinery financing, or personal credit, Credo Bazaar puts you in control. Compare transparent sanction offers side-by-side, protect your credit score from uncontrolled inquiries, and enjoy 100% digital processing.
            </p>

            {/* Borrower Value Points */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '28px',
                width: '100%',
              }}
            >
              {[
                '50+ Banks & NBFCs competing for you',
                'Soft eligibility match — CIBIL protected',
                '100% Free for borrowers — zero hidden fees',
                'DPDP Act & RBI digital lending compliant',
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.875rem',
                    color: '#334155',
                    fontWeight: 500,
                  }}
                >
                  <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs: Checkout Website */}
            <div className="cb-hero-cta-group">
              <a
                href={CHECKOUT_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cb-btn cb-btn-primary"
                id="hero-primary-cta"
                style={{ padding: '14px 28px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Checkout Website</span>
                <ExternalLink size={18} />
              </a>

              <button
                type="button"
                className="cb-btn cb-btn-secondary"
                onClick={scrollToHowItWorks}
                id="hero-secondary-cta"
                style={{ padding: '14px 24px', fontSize: '0.975rem' }}
              >
                <span>See How It Works</span>
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="cb-hero-badges" style={{ marginTop: '24px' }}>
              <div className="cb-hero-badge-item">
                <CheckCircle2 size={16} />
                <span>Zero Upfront Fee</span>
              </div>
              <div className="cb-hero-badge-item">
                <ShieldCheck size={16} />
                <span>DPDP Act Compliant</span>
              </div>
              <div className="cb-hero-badge-item">
                <Building2 size={16} />
                <span>50+ Partner Lenders</span>
              </div>
            </div>
          </div>

          {/* Right Column: Borrower Match Preview Card */}
          <div className="cb-hero-visual animate-slide-up">
            <div
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '28px',
                boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
                border: '1px solid #e2e8f0',
                position: 'relative',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b' }}>
                    Live Request Demonstration
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '2px 0 0' }}>
                    Business Loan Request
                  </h3>
                </div>
                <span
                  style={{
                    background: '#ecfdf5',
                    color: '#059669',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: '1px solid #a7f3d0',
                  }}
                >
                  ✓ 3 Pre-Sanction Offers
                </span>
              </div>

              {/* Loan Details summary */}
              <div
                style={{
                  background: '#f8fafc',
                  borderRadius: '14px',
                  padding: '14px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  border: '1px solid #f1f5f9',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Requested Amount</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>₹45,00,000</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Purpose</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a' }}>Factory Equipment</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Tenure</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a' }}>48 Months</div>
                </div>
              </div>

              {/* Matched Offers */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                {/* Offer 1 */}
                <div
                  style={{
                    border: '1.5px solid #2563eb',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    background: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontWeight: 700, color: '#1e3a8a', fontSize: '0.9rem' }}>Tier-1 Private Bank</span>
                      <span style={{ fontSize: '0.65rem', background: '#2563eb', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>Best Rate</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '2px' }}>
                      ROI: <strong style={{ color: '#1e3a8a' }}>9.15% p.a.</strong> • Processing: 0.5%
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e3a8a' }}>₹1,12,350/mo</div>
                    <div style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 600 }}>Save ₹1.4L vs DSA</div>
                  </div>
                </div>

                {/* Offer 2 */}
                <div
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: '#334155', fontSize: '0.9rem' }}>Leading PSU Bank</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                      ROI: <strong>9.40% p.a.</strong> • Zero Prepayment Penalty
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#334155' }}>₹1,12,890/mo</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Sanction in 3 days</div>
                  </div>
                </div>

                {/* Offer 3 */}
                <div
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: '#334155', fontSize: '0.9rem' }}>Fast-Track NBFC</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                      ROI: <strong>10.25% p.a.</strong> • Minimal Documentation
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#334155' }}>₹1,14,750/mo</div>
                    <div style={{ fontSize: '0.7rem', color: '#d97706', fontWeight: 600 }}>Disbursal in 24 hrs</div>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div
                style={{
                  background: '#f8fafc',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <ShieldCheck size={18} color="#059669" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.775rem', color: '#475569', lineHeight: 1.4 }}>
                  <strong>CIBIL Protection Guarantee:</strong> Soft inquiries do not reduce your credit score. Zero unsolicited sales calls.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

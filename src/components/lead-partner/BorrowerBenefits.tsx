import React from 'react';
import {
  Network,
  ShieldCheck,
  BarChart3,
  BadgeCheck,
  Scale,
  Lock,
} from 'lucide-react';

export const BorrowerBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Network,
      accent: '#2563eb',
      bg: '#eff6ff',
      title: 'One Request. 25+ Lenders.',
      desc: 'Submit once and receive competitive sanction offers from leading banks without visiting multiple branches.',
      tag: 'Multi-Lender',
    },
    {
      icon: ShieldCheck,
      accent: '#059669',
      bg: '#ecfdf5',
      title: 'CIBIL Score Protected',
      desc: 'Soft credit evaluation keeps your credit rating 100% safe from damaging multiple bureau inquiries.',
      tag: 'Zero Hit',
    },
    {
      icon: Lock,
      accent: '#7c3aed',
      bg: '#f5f3ff',
      title: 'Bank-Grade Privacy',
      desc: '256-bit encryption compliant with RBI & DPDP Act. Zero WhatsApp document forwarding.',
      tag: 'Encrypted',
    },
    {
      icon: Scale,
      accent: '#0369a1',
      bg: '#eff6ff',
      title: 'Unbiased Matching',
      desc: 'Offers ranked solely by lowest interest rate and approval chance, with zero agent commission markup.',
      tag: 'Zero Bias',
    },
    {
      icon: BarChart3,
      accent: '#d97706',
      bg: '#fffbeb',
      title: 'Real-Time Tracking',
      desc: 'Track every verification and approval milestone digitally without daily follow-up calls.',
      tag: 'Digital Trail',
    },
    {
      icon: BadgeCheck,
      accent: '#16a34a',
      bg: '#f0fdf4',
      title: '100% Free for Borrowers',
      desc: 'Zero file charges, zero login fees, and zero hidden consulting costs. Completely free to apply.',
      tag: 'Zero Cost',
    },
  ];

  return (
    <section id="borrower-benefits" className="cb-section cb-section-alt">
      <div className="cb-container">
        {/* Header */}
        <div className="cb-section-header">
          <h2 className="cb-section-title">
            What You Gain When Your Loan Request Goes Through Credo Bazaar
          </h2>
          <p className="cb-section-subtitle">
            A modern, institutional, borrower-first experience—designed to protect your interests, your data, and your credit score at every step.
          </p>
        </div>

        {/* 3x2 Benefit Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '22px',
            marginBottom: '0px',
          }}
          className="borrower-benefits-grid"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="borrower-benefit-card"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: b.bg,
                      color: b.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: b.accent,
                      background: b.bg,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {b.tag}
                  </span>
                </div>
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    lineHeight: 1.3,
                  }}
                >
                  {b.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: 1.65,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


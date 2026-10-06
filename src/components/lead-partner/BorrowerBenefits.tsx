import React from 'react';
import {
  Network,
  ShieldCheck,
  BarChart3,
  BadgeCheck,
  Scale,
  Zap,
  Lock,
} from 'lucide-react';

export const BorrowerBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Network,
      accent: '#2563eb',
      bg: '#eff6ff',
      title: 'One Request. Multiple Lenders.',
      desc: 'Submit a single structured loan request and let multiple institutional banks and NBFCs evaluate your profile simultaneously—without visiting branch after branch.',
      tag: 'Multi-Lender Access',
    },
    {
      icon: ShieldCheck,
      accent: '#059669',
      bg: '#ecfdf5',
      title: 'Your CIBIL Score Stays Safe',
      desc: 'Unlike offline DSAs who trigger multiple uncontrolled bureau inquiries, Credo Bazaar handles your request in a controlled, structured process—protecting your credit profile.',
      tag: 'Credit Protection',
    },
    {
      icon: Lock,
      accent: '#7c3aed',
      bg: '#f5f3ff',
      title: 'Bank-Grade Document Privacy',
      desc: 'Your PAN, Aadhaar, bank statements, and ITR documents are encrypted and compliant with RBI Digital Lending Guidelines and the DPDP Act 2023. No WhatsApp, no photocopies.',
      tag: 'Data Security',
    },
    {
      icon: Scale,
      accent: '#0369a1',
      bg: '#eff6ff',
      title: 'Unbiased, Borrower-First Matching',
      desc: 'Credo Bazaar has no incentive to push any specific lender. Your profile is matched to lending partners best suited to your eligibility—not whoever pays the highest agent commission.',
      tag: 'Zero Bias',
    },
    {
      icon: BarChart3,
      accent: '#d97706',
      bg: '#fffbeb',
      title: 'Real-Time Application Visibility',
      desc: 'Track every milestone of your loan request digitally. No more calling agents daily to ask "what happened to my file." Every status update is transparent and accessible.',
      tag: 'Full Transparency',
    },
    {
      icon: BadgeCheck,
      accent: '#16a34a',
      bg: '#f0fdf4',
      title: 'Completely Free for Borrowers',
      desc: 'There are no file-login fees, processing charges, or hidden consulting commissions charged to borrowers by Credo Bazaar. Your loan request is submitted at zero cost.',
      tag: 'Zero Cost',
    },
  ];

  return (
    <section id="borrower-benefits" className="cb-section cb-section-alt">
      <div className="cb-container">
        {/* Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <Zap size={14} />
            <span>For Potential Borrowers</span>
          </div>
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
            marginBottom: '44px',
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

        {/* Comparison Table: Credo Bazaar vs Traditional DSA */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.8fr 1.1fr 1.1fr',
              background: '#0f172a',
              padding: '18px 24px',
              gap: '12px',
            }}
          >
            <span style={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.875rem' }}>Feature / Aspect</span>
            <span style={{ color: '#f87171', fontWeight: 700, fontSize: '0.875rem', textAlign: 'center' }}>Traditional DSA / Broker</span>
            <span style={{ color: '#34d399', fontWeight: 700, fontSize: '0.875rem', textAlign: 'center' }}>Credo Bazaar Platform</span>
          </div>

          {[
            ['Lender Access', '2–5 empaneled lenders', 'Multi-lender institutional network'],
            ['Lender Selection Basis', 'Highest agent commission payout', 'Borrower eligibility match'],
            ['Credit Score Risk', 'Multiple uncontrolled bureau hits', 'Structured, protected evaluation'],
            ['Data Privacy', 'Physical copies & WhatsApp sharing', 'Encrypted, DPDP Act 2023 compliant'],
            ['Application Visibility', 'Opaque — manual phone calls', 'Transparent digital milestone tracking'],
            ['Processing Commitment', 'Verbal promises, frequent delays', 'Structured institutional timelines'],
            ['Cost to Borrower', 'Informal charges common', 'Zero charges — free for borrowers'],
          ].map(([feature, dsa, credo], i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.8fr 1.1fr 1.1fr',
                padding: '16px 24px',
                gap: '12px',
                borderBottom: i < 6 ? '1px solid #f1f5f9' : 'none',
                background: i % 2 === 0 ? '#ffffff' : '#fafafa',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a' }}>{feature}</span>
              <div style={{ textAlign: 'center' }}>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#ef4444',
                    background: '#fef2f2',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    display: 'inline-block',
                    lineHeight: 1.4,
                  }}
                >
                  {dsa}
                </span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#059669',
                    fontWeight: 600,
                    background: '#ecfdf5',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    display: 'inline-block',
                    lineHeight: 1.4,
                  }}
                >
                  {credo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note beneath comparison */}
        <div
          style={{
            marginTop: '28px',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#64748b', fontSize: '0.925rem', margin: 0 }}>
            Experience the difference of an institutional, borrower-first loan platform.
          </p>
        </div>
      </div>
    </section>
  );
};

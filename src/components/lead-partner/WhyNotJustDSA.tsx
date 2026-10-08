import React from 'react';
import {
  ShieldAlert,
  TrendingDown,
  Lock,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Zap,
} from 'lucide-react';

export const WhyNotJustDSA: React.FC = () => {
  const dsa_problems = [
    {
      icon: AlertTriangle,
      color: '#ef4444',
      bg: '#fef2f2',
      title: 'Limited to 2–3 Preferred Banks',
      desc: 'Agents push lenders that pay them the highest broker commission, not the lender offering you the best interest rate.',
    },
    {
      icon: TrendingDown,
      color: '#f59e0b',
      bg: '#fffbeb',
      title: 'Uncontrolled CIBIL Inquiries',
      desc: 'DSAs circulate files across branches at once, triggering multiple hard inquiries that quietly lower your credit score.',
    },
    {
      icon: Lock,
      color: '#7c3aed',
      bg: '#f5f3ff',
      title: 'Unsafe Document Handling',
      desc: 'PAN, Aadhaar, and ITR documents get photocopied and forwarded on WhatsApp groups with zero data privacy.',
    },
    {
      icon: Clock,
      color: '#0369a1',
      bg: '#eff6ff',
      title: 'False Promises & Weeks of Delay',
      desc: 'Verbal promises drag out for weeks without visibility, often ending in surprise rejections and lost time.',
    },
  ];

  const credo_advantages = [
    {
      icon: CheckCircle2,
      text: '50+ institutional lenders evaluated simultaneously in 2 minutes',
    },
    {
      icon: CheckCircle2,
      text: 'Soft credit evaluation with zero impact on your CIBIL score',
    },
    {
      icon: CheckCircle2,
      text: 'Bank-grade 256-bit encryption compliant with RBI & DPDP Act',
    },
    {
      icon: CheckCircle2,
      text: 'Live digital status tracking with complete transparency',
    },
    {
      icon: CheckCircle2,
      text: '100% free service for borrowers with zero broker markups',
    },
  ];

  return (
    <section
      id="why-credo"
      className="cb-section cb-section-alt"
      style={{
        background: '#ffffff',
        padding: '36px 0',
        borderLeft: '3.5px solid #0ea5e9',
        boxSizing: 'border-box',
      }}
    >
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill" style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' }}>
            <ShieldAlert size={14} />
            <span>Already Talking to a Agent?</span>
          </div>
          <h2 className="cb-section-title" style={{ color: '#0f172a' }}>
            Before You Decide, Know What You're Missing
          </h2>
          <p className="cb-section-subtitle" style={{ color: '#64748b' }}>
            If a loan agent is already handling your request, they might be working in their interest, not yours. Here's what traditional offline channels won't tell you.
          </p>
        </div>

        {/* 4 Problem Cards (DSA Risks) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            marginBottom: '28px',
          }}
          className="dsa-problems-grid"
        >
          {dsa_problems.map((prob, i) => {
            const Icon = prob.icon;
            return (
              <div
                key={i}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                }}
                className="dsa-problem-card"
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: prob.bg,
                    color: prob.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.3 }}>
                    {prob.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65 }}>
                    {prob.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Switch Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #ecfdf5 100%)',
            border: '1px solid #bfdbfe',
            borderRadius: '20px',
            padding: '36px 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.06)',
          }}
          className="dsa-vs-credo-card"
        >
          <div>
            <div className="cb-pill cb-pill-blue" style={{ marginBottom: '16px' }}>
              <Zap size={14} />
              <span>The Smarter Way</span>
            </div>
            <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, marginBottom: '12px' }}>
              You Don't Have to Choose.<br />Use Credo Bazaar as Your Safety Net.
            </h3>
            <p style={{ fontSize: '0.975rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
              Keep your existing DSA conversations open. Submit your loan request on Credo Bazaar in under 3 minutes as a parallel digital track. If our lending partners offer better terms, faster processing, or higher approval probability — you simply go with the superior option.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {credo_advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <Icon size={18} color="#059669" style={{ flexShrink: 0, marginTop: '1px' }} />
                  <span style={{ fontSize: '0.875rem', color: '#1e293b', lineHeight: 1.45, fontWeight: 500 }}>{adv.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

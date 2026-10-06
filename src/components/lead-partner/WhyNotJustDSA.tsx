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
      title: 'Your DSA Only Shows You Their Preferred Banks',
      desc: 'Most individual DSAs are empaneled with only 2–4 specific banks. They recommend lenders that pay them the highest agent commission—not the lender that gives you the best interest rate or fastest processing.',
    },
    {
      icon: TrendingDown,
      color: '#f59e0b',
      bg: '#fffbeb',
      title: 'Your CIBIL Score is at Risk',
      desc: 'DSAs often circulate your physical file across multiple branches simultaneously without your knowledge. Each bank triggers a hard credit inquiry, silently damaging your CIBIL score before you even receive an offer.',
    },
    {
      icon: Lock,
      color: '#7c3aed',
      bg: '#f5f3ff',
      title: 'Your Documents Travel Unsafely',
      desc: 'PAN, Aadhaar, ITR, bank statements, and GST documents get photocopied in offices and shared across WhatsApp groups. Once shared, you lose all control over who accesses your most sensitive financial information.',
    },
    {
      icon: Clock,
      color: '#0369a1',
      bg: '#eff6ff',
      title: 'False Timelines & Silent Rejections',
      desc: 'DSAs routinely promise "approval by Monday" to retain clients, while your application sits unprocessed. Three weeks later you discover a quiet rejection, and now your credit score has taken hits, losing valuable time.',
    },
  ];

  const credo_advantages = [
    {
      icon: CheckCircle2,
      text: 'One submission reaches multiple institutional lenders simultaneously',
    },
    {
      icon: CheckCircle2,
      text: 'Borrower-first platform — no agent commission bias in lender matching',
    },
    {
      icon: CheckCircle2,
      text: 'DPDP Act & RBI Digital Lending Guideline compliant data handling',
    },
    {
      icon: CheckCircle2,
      text: 'Full digital status trail — no mystery, no "check with the branch" calls',
    },
    {
      icon: CheckCircle2,
      text: 'Use as your safety net alongside any existing DSA — zero exclusivity',
    },
    {
      icon: CheckCircle2,
      text: '100% free for borrowers — no file-login fees or hidden charges',
    },
  ];

  return (
    <section id="why-credo" className="cb-section" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)', padding: '80px 0' }}>
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header" style={{ marginBottom: '52px' }}>
          <div className="cb-pill" style={{ background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.25)' }}>
            <ShieldAlert size={14} />
            <span>Already Talking to a DSA?</span>
          </div>
          <h2 className="cb-section-title" style={{ color: '#ffffff' }}>
            Before You Decide, Know What You're Missing
          </h2>
          <p className="cb-section-subtitle" style={{ color: '#94a3b8', maxWidth: '680px' }}>
            If a loan agent or DSA is already handling your request, they might be working in their interest, not yours. Here's what traditional offline channels won't tell you.
          </p>
        </div>

        {/* 4 Problem Cards (DSA Risks) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            marginBottom: '52px',
          }}
          className="dsa-problems-grid"
        >
          {dsa_problems.map((prob, i) => {
            const Icon = prob.icon;
            return (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                  transition: 'all 0.25s ease',
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
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '8px', lineHeight: 1.3 }}>
                    {prob.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.65 }}>
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
            background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(16,185,129,0.08) 100%)',
            border: '1px solid rgba(37,99,235,0.25)',
            borderRadius: '20px',
            padding: '36px 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="dsa-vs-credo-card"
        >
          <div>
            <div className="cb-pill cb-pill-dark" style={{ marginBottom: '16px' }}>
              <Zap size={14} />
              <span>The Smarter Way</span>
            </div>
            <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, marginBottom: '12px' }}>
              You Don't Have to Choose.<br />Use Credo Bazaar as Your Safety Net.
            </h3>
            <p style={{ fontSize: '0.975rem', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
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
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                  }}
                >
                  <Icon size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '1px' }} />
                  <span style={{ fontSize: '0.875rem', color: '#e2e8f0', lineHeight: 1.45 }}>{adv.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

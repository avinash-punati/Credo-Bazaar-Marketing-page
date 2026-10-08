import React from 'react';
import {
  FileEdit,
  Cpu,
  Lock,
  Building2,
  Scale,
  FileCheck,
  Banknote,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export const ReferralJourney: React.FC = () => {
  const journeySteps = [
    { id: 'request', label: 'Submit Request', icon: FileEdit, desc: '2-min digital form', color: '#2563eb', bg: '#eff6ff' },
    { id: 'match', label: 'AI Soft Match', icon: Cpu, desc: 'Zero CIBIL damage', color: '#2563eb', bg: '#eff6ff' },
    { id: 'docs', label: 'Encrypted Docs', icon: Lock, desc: 'DPDP Act protected', color: '#7c3aed', bg: '#f5f3ff' },
    { id: 'review', label: 'Multi-Lender Review', icon: Building2, desc: '50+ banks evaluate', color: '#2563eb', bg: '#eff6ff' },
    { id: 'compare', label: 'Compare Offers', icon: Scale, desc: 'Choose best ROI & EMI', color: '#0284c7', bg: '#f0f9ff' },
    { id: 'sanction', label: 'Digital Sanction', icon: FileCheck, desc: 'Official approval letter', color: '#059669', bg: '#ecfdf5' },
    { id: 'disbursal', label: 'Direct Disbursal', icon: Banknote, desc: 'Funds in your account', color: '#059669', bg: '#ecfdf5' },
  ];

  return (
    <section id="how-it-works" className="cb-section cb-section-alt">
      <span id="borrower-journey" style={{ position: 'relative', top: '-80px', display: 'block', visibility: 'hidden' }} />
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue" style={{ marginBottom: '14px' }}>
            <span>How It Works</span>
          </div>
          <h2 className="cb-section-title">How Credo Bazaar Works</h2>
          <p className="cb-section-subtitle">
            Experience complete transparency, institutional security, and lightning speed from your initial request to direct bank disbursal.
          </p>
        </div>

        {/* 7-Step Connected Chain Pipeline */}
        <div className="cb-journey-pipeline">
          {journeySteps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === journeySteps.length - 1;
            return (
              <React.Fragment key={item.id}>
                <div className="cb-journey-node">
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: item.bg,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '2px',
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="cb-journey-node-title">{item.label}</span>
                  <span className="cb-journey-node-desc">{item.desc}</span>
                </div>

                {!isLast && (
                  <div className="cb-journey-line-connector" aria-hidden="true">
                    <span className="cb-line-track" />
                    <span className="cb-line-arrow">
                      <ChevronRight size={13} strokeWidth={2.5} />
                    </span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Informative Note */}
        <div
          style={{
            marginTop: '36px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              padding: '10px 18px',
              borderRadius: '999px',
              border: '1px solid #e2e8f0',
              fontSize: '0.85rem',
              color: '#475569',
            }}
          >
            <ShieldCheck size={16} color="#059669" />
            <span>Bank-grade 256-bit encryption • No unsolicited agent calls</span>
          </div>
        </div>
      </div>
    </section>
  );
};

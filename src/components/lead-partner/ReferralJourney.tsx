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
    { step: 1, label: 'Submit Request', icon: FileEdit, desc: '2-min digital form' },
    { step: 2, label: 'AI Soft Match', icon: Cpu, desc: 'Zero CIBIL damage' },
    { step: 3, label: 'Encrypted Docs', icon: Lock, desc: 'DPDP Act protected' },
    { step: 4, label: 'Multi-Lender Review', icon: Building2, desc: '50+ banks evaluate' },
    { step: 5, label: 'Compare Offers', icon: Scale, desc: 'Choose best ROI & EMI' },
    { step: 6, label: 'Digital Sanction', icon: FileCheck, desc: 'Official approval letter' },
    { step: 7, label: 'Direct Disbursal', icon: Banknote, desc: 'Funds in your account' },
  ];

  return (
    <section id="borrower-journey" className="cb-section cb-section-alt">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <span>Fulfillment Pipeline</span>
          </div>
          <h2 className="cb-section-title">Your End-to-End Loan Journey</h2>
          <p className="cb-section-subtitle">
            Experience complete transparency, institutional security, and speed from initial request to fund disbursal.
          </p>
        </div>

        {/* 7-Step Connected Journey */}
        <div className="cb-journey-pipeline">
          {journeySteps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === journeySteps.length - 1;
            return (
              <React.Fragment key={item.step}>
                <div className="cb-journey-node">
                  <div className="cb-journey-step-indicator">{item.step}</div>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: isLast ? 'var(--cb-emerald-50)' : 'var(--cb-blue-50)',
                      color: isLast ? 'var(--cb-emerald-600)' : 'var(--cb-blue-600)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="cb-journey-node-title">{item.label}</span>
                  <span className="cb-journey-node-desc">{item.desc}</span>
                </div>

                {!isLast && (
                  <div className="cb-journey-connector">
                    <ChevronRight size={18} color="var(--cb-border)" />
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

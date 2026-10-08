import React from 'react';
import { FileEdit, ShieldCheck, GitCompare, Landmark, ArrowRight } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const SimpleStepsSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Provide Details',
      desc: 'Enter your desired loan amount, employment details, and city in under 2 minutes.',
      icon: FileEdit,
      color: '#1257ebff',
      bg: '#e4f0fdff',
    },
    {
      step: '02',
      title: 'Verify Eligibility',
      desc: 'Instant soft credit match generates pre-approved offers without dropping your CIBIL score.',
      icon: ShieldCheck,
      color: '#059669',
      bg: '#ecfdf5',
    },
    {
      step: '03',
      title: 'Compare Options',
      desc: 'Review multi-lender sanctions side-by-side and choose the lowest interest rate and EMI.',
      icon: GitCompare,
      color: '#7c3aed',
      bg: '#f5f3ff',
    },
    {
      step: '04',
      title: 'Instant Disbursal',
      desc: 'Digital verification with the chosen lender leads to direct loan credit in your bank account.',
      icon: Landmark,
      color: '#d97706',
      bg: '#fffbeb',
    },
  ];

  return (
    <section id="how-it-works" className="cb-section cb-section-alt pw-steps-section">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <span>Seamless Process</span>
          </div>
          <h2 className="cb-section-title">Your Loan in 4 Simple Steps</h2>
          <p className="cb-section-subtitle">
            Experience an effortless, transparent journey from request to account credit.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="pw-steps-grid">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div key={st.step} className="pw-step-card">
                <div className="pw-step-top">
                  <div className="pw-step-icon-wrap" style={{ background: st.bg, color: st.color }}>
                    <Icon size={24} />
                  </div>
                  <span className="pw-step-num">{st.step}</span>
                </div>

                <h3 className="pw-step-title">{st.title}</h3>
                <p className="pw-step-desc">{st.desc}</p>

                {i < steps.length - 1 && (
                  <div className="pw-step-arrow" aria-hidden="true">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action button */}
        <div className="pw-steps-cta-wrap">
          <a
            href={CHECKOUT_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cb-btn cb-btn-primary"
            style={{ padding: '14px 32px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Start Your 2-Minute Request</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

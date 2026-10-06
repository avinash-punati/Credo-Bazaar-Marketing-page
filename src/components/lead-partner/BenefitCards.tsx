import React from 'react';
import { Users, Link2, Activity, IndianRupee, ShieldCheck } from 'lucide-react';

export const BenefitCards: React.FC = () => {
  const benefits = [
    {
      id: 'grow-network',
      icon: Users,
      title: 'Grow Your Network',
      description: 'Refer potential borrowers from your professional or personal network.',
      accent: 'var(--cb-blue-600)',
    },
    {
      id: 'simple-referrals',
      icon: Link2,
      title: 'Simple Referrals',
      description: 'Share your referral link and make it easy for potential borrowers to get started.',
      accent: '#059669',
    },
    {
      id: 'track-referrals',
      icon: Activity,
      title: 'Track Your Referrals',
      description: 'Stay informed about the progress of your referred leads through the applicable partner process.',
      accent: '#7c3aed',
    },
    {
      id: 'eligible-commissions',
      icon: IndianRupee,
      title: 'Eligible Commissions',
      description: 'Earn applicable commissions based on successful referrals and the Lead Partner terms.',
      accent: '#d97706',
    },
  ];

  return (
    <section id="benefits" className="cb-section cb-section-alt">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <span>Partner Advantages</span>
          </div>
          <h2 className="cb-section-title">Why Become a Credo Bazaar Lead Partner?</h2>
          <p className="cb-section-subtitle">
            Designed for consultants, advisors, and professionals looking to create value from their trusted network.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="cb-benefits-grid">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.id} className="cb-benefit-card">
                <div className="cb-benefit-icon-wrapper">
                  <IconComponent size={28} />
                </div>
                <h3 className="cb-benefit-title">{benefit.title}</h3>
                <p className="cb-benefit-desc">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Compliance Guardrail Note */}
        <div
          style={{
            marginTop: '36px',
            padding: '16px 20px',
            background: 'var(--cb-bg-base)',
            border: '1px solid var(--cb-border-subtle)',
            borderRadius: 'var(--cb-radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '820px',
            marginInline: 'auto',
          }}
        >
          <ShieldCheck size={20} color="var(--cb-blue-600)" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '0.85rem', color: 'var(--cb-text-muted)', lineHeight: 1.5 }}>
            <strong>Transparent Model:</strong> Commission eligibility is subject to the applicable Lead Partner terms, successful referral completion, and partner policies. Credo Bazaar does not offer guaranteed income or guaranteed loan approvals.
          </span>
        </div>
      </div>
    </section>
  );
};

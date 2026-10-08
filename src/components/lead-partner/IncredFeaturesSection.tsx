import React from 'react';
import {
  Landmark,
  Smartphone,
  Zap,
  ShieldCheck,
  Headphones,
  Lock,
  CheckCircle2,
} from 'lucide-react';

export const IncredFeaturesSection: React.FC = () => {
  const reasons = [
    {
      num: 1,
      title: 'Best Offers Across 25+ Top Banks & NBFCs',
      icon: Landmark,
      accent: '#2563eb',
      tag: '25+ Partners',
      badge: 'Multi-Lender Marketplace',
      points: [
        'One Application, Multiple Lenders',
        'AI-Powered Matchmaking',
      ],
    },
    {
      num: 2,
      title: '100% Paperless & Hassle-Free Digital Journey',
      icon: Smartphone,
      accent: '#059669',
      tag: '100% Digital',
      badge: 'Zero Branch Visits',
      points: [
        'No Branch Visits Required',
        'Quick, Guided Forms',
        'Minimal Documentation',
      ],
    },
    {
      num: 3,
      title: 'Lightning-Fast Approvals & Quick Disbursals',
      icon: Zap,
      accent: '#f59e0b',
      tag: 'Express',
      badge: 'In Minutes, Not Days',
      points: [
        'Instant Eligibility & Pre-Approval',
        'Rapid Turnaround',
      ],
    },
    {
      num: 4,
      title: 'Free Credit Health Check with Zero Score Impact',
      icon: ShieldCheck,
      accent: '#0284c7',
      tag: 'CIBIL Check',
      badge: 'Zero Score Impact',
      points: [
        'Free CIBIL Score',
        'Soft Inquiries Only',
        'Instant Bureau Verification',
      ],
    },
    {
      num: 5,
      title: 'Dedicated Loan Specialist Support (24-Hour SLA)',
      icon: Headphones,
      accent: '#ea580c',
      tag: '24-Hour SLA',
      badge: 'Dedicated Guidance',
      points: [
        'Personal Human Guidance',
        'Zero Drop-Off Fallback',
      ],
    },
    {
      num: 6,
      title: 'Bank-Grade Security & RBI Compliance',
      icon: Lock,
      accent: '#10b981',
      tag: '256-Bit SSL',
      badge: 'RBI Guidelines Aligned',
      points: [
        '256-Bit Data Encryption',
        'Data Privacy First',
        'Regulatory Compliance',
      ],
    },
  ];

  return (
    <section id="why-choose" className="cb-incred-steps-section cb-incred-features-section">
      <div className="cb-container">
        {/* Section Header - Same Modern Aesthetic */}
        <div className="cb-incred-steps-header">
          <div className="cb-pill cb-pill-blue" style={{ marginBottom: '12px' }}>
            <span>Why Borrowers Choose Us</span>
          </div>
          <h2 className="cb-incred-steps-title">
            The Modern Way to Discover &amp; Secure Your <span className="cb-gradient-text-blue">Loan</span>
          </h2>
          <p className="cb-section-subtitle" style={{ maxWidth: '820px', margin: '14px auto 0' }}>
            CredoBazaar replaces the slow, frustrating, and paperwork-heavy traditional banking process with a fast, transparent, and 100% digital experience.
          </p>
        </div>

        {/* 6 Modern Cards in 2x3 Grid - Matching Steps Section */}
        <div className="cb-incred-steps-exact-grid">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.num} className="cb-step-card-modern cb-why-card-modern">
                {/* Top Row: Glowing Icon + Tag Pill */}
                <div className="cb-step-card-head">
                  <div className="cb-step-icon-glow">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>
                  <div className="cb-step-badge-pill">
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="cb-why-card-title">{item.title}</h3>

                {/* Bullet Points */}
                <div className="cb-why-points-list">
                  {item.points.map((pt, idx) => (
                    <div key={idx} className="cb-why-point-row">
                      <div className="cb-why-bullet-dot" />
                      <span className="cb-why-point-text">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Card Footer Reassurance Badge */}
                <div className="cb-why-card-footer">
                  <CheckCircle2 size={14} color="#059669" strokeWidth={2.5} />
                  <span className="cb-why-footer-badge">{item.badge}</span>
                </div>

                {/* Large Background Watermark Number */}
                <span className="cb-step-watermark-num" aria-hidden="true">
                  0{item.num}
                </span>

                {/* Hover Accent Line */}
                <div className="cb-step-card-accent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IncredFeaturesSection;

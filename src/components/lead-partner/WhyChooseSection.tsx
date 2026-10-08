import React from 'react';
import { Layers, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const WhyChooseSection: React.FC = () => {
  const cards = [
    {
      id: 'compare',
      badge: 'Unbiased Choice',
      title: 'Compare & Pick the Best Loan',
      description:
        'Instantly view multi-lender sanction offers side-by-side. Compare real interest rates, tenure, and EMI without visiting dozens of bank branches.',
      icon: Layers,
      color: '#2563eb',
      bg: '#eff6ff',
      points: ['50+ Institutional Banks & NBFCs', 'Transparent ROI benchmarks upfront', 'Zero agent bias or broker markup'],
    },
    {
      id: 'eligibility',
      badge: 'CIBIL Safe',
      title: 'Know Your Chance of Approval',
      description:
        'Check your real pre-qualified loan eligibility with zero risk. Our smart digital match runs soft inquiries that do not drop your credit score.',
      icon: ShieldCheck,
      color: '#059669',
      bg: '#ecfdf5',
      points: ['Zero impact on CIBIL rating', 'Instant AI-based credit matching', 'Pre-qualified offer indications'],
    },
    {
      id: 'digital',
      badge: 'Fast Track',
      title: '100% Digital & Paperless Journey',
      description:
        'From your first mobile request to final bank account credit—the entire loan journey is seamless, online, and completely paperless.',
      icon: Zap,
      color: '#d97706',
      bg: '#fffbeb',
      points: ['Express 2-minute digital request', 'Bank-grade 256-bit data encryption', 'Direct account disbursal in 24–48 hrs'],
    },
  ];

  return (
    <section id="why-choose" className="cb-section pw-why-section">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <span>Why Credo Bazaar?</span>
          </div>
          <h2 className="cb-section-title">Fast, Transparent &amp; Smart Loan Discovery</h2>
          <p className="cb-section-subtitle">
            Say goodbye to offline brokers and unfair commissions. Experience India’s modern borrower-first loan platform.
          </p>
        </div>

        {/* 3 Visual Cards */}
        <div className="pw-why-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className="pw-why-card">
                <div className="pw-why-card-top">
                  <div className="pw-why-icon-wrap" style={{ background: card.bg, color: card.color }}>
                    <Icon size={26} />
                  </div>
                  <span className="pw-why-tag" style={{ color: card.color, background: card.bg }}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="pw-why-title">{card.title}</h3>
                <p className="pw-why-desc">{card.description}</p>

                <div className="pw-why-points">
                  {card.points.map((pt, i) => (
                    <div key={i} className="pw-why-point-row">
                      <div className="pw-why-check-dot">
                        <Check size={12} color="#059669" />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={CHECKOUT_WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pw-why-card-link"
                >
                  <span>Explore Offers</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import {
  CheckCircle2,
  Building,
} from 'lucide-react';
import personalLoanIcon from '../../assets/personal_loan_icon.png';
import homeLoanIcon from '../../assets/home_loan_icon.png';
import businessLoanIcon from '../../assets/business_loan_icon.png';

export const LoanProductsSection: React.FC = () => {
  // Exactly the 4 loan types available on https://www.creditgenai.com/
  const products = [
    {
      id: 'personal-loan',
      image: personalLoanIcon,
      isImage: true,
      title: 'Personal Loan',
      subtitle: 'Personal Loan with Instant Approval',
      amount: 'Up to ₹50 Lakhs',
      rate: 'From 10.49%* p.a.',
      tenure: '12 – 60 Months',
      tag: 'Popular',
      isPopular: true,
      features: ['Instant Approval', '100% Paperless', 'Quick Disbursal in 24–48 hrs'],
    },
    {
      id: 'home-loan',
      image: homeLoanIcon,
      isImage: true,
      title: 'Home Loan',
      subtitle: 'Home Loan with Lowest Interest',
      amount: 'Up to ₹10+ Crores',
      rate: 'From 8.35%* p.a.',
      tenure: 'Up to 30 Years',
      tag: 'Lowest Interest',
      isPopular: false,
      features: ['Flexible Tenures', 'Max Loan Eligibility', 'Doorstep Assistance'],
    },
    {
      id: 'business-loan',
      image: businessLoanIcon,
      isImage: true,
      title: 'Business Loans',
      subtitle: 'Collateral-Free MSME & Growth Capital',
      amount: 'Up to ₹5 Crores',
      rate: 'From 9.75%* p.a.',
      tenure: '12 – 60 Months',
      tag: 'Zero Collateral',
      isPopular: false,
      features: ['Minimal Documentation', 'Speedy Processing', 'Unbiased Multi-Bank Offers'],
    },
    {
      id: 'loan-against-property',
      icon: Building,
      isImage: false,
      title: 'Loan Against Property',
      subtitle: 'Loan Against Property with Flexible Tenures',
      amount: 'Up to ₹50+ Crores',
      rate: 'From 8.50%* p.a.',
      tenure: 'Up to 15 Years',
      tag: 'High Ticket Size',
      isPopular: false,
      features: ['Lower Interest Rates', 'Large Sanction Limits', 'Retain Property Ownership'],
    },
  ];

  return (
    <section id="loan-products" className="cb-section">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header" style={{ marginBottom: '28px' }}>
          <h2 className="cb-section-title">Personal &amp; Home Loan Options</h2>
          <p className="cb-section-subtitle">
            Pre-approved multi-lender offers with lowest interest rates and zero broker markup.
          </p>
        </div>

        {/* 4 Compact Loan Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginBottom: '0px',
          }}
          className="creditgenai-loans-grid"
        >
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                style={{
                  background: '#ffffff',
                  border: prod.isPopular ? '2px solid #2563eb' : '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '16px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: prod.isPopular ? '0 8px 20px -4px rgba(37, 99, 235, 0.12)' : '0 2px 8px rgba(15,23,42,0.03)',
                  transition: 'all 0.25s ease',
                }}
                className="creditgenai-loan-card"
              >
                {/* Popular Pill */}
                {prod.isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '12px',
                      background: '#2563eb',
                      color: '#ffffff',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      boxShadow: '0 2px 6px rgba(37, 99, 235, 0.3)',
                    }}
                  >
                    ★ Popular
                  </div>
                )}

                {/* Product Icon & Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '6px',
                      border: '1px solid #f1f5f9',
                    }}
                  >
                    {prod.isImage ? (
                      <img
                        src={prod.image}
                        alt={prod.title}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    ) : (
                      Icon && <Icon size={24} color="#0284c7" />
                    )}
                  </div>

                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: prod.isPopular ? '#2563eb' : '#0369a1',
                      background: prod.isPopular ? '#eff6ff' : '#f0f9ff',
                      padding: '3px 8px',
                      borderRadius: '999px',
                      border: '1px solid rgba(37, 99, 235, 0.15)',
                    }}
                  >
                    {prod.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>
                  {prod.title}
                </h3>

                <div style={{ fontSize: '0.74rem', color: '#0284c7', fontWeight: 600, marginBottom: '12px' }}>
                  {prod.subtitle}
                </div>

                {/* Key Metrics */}
                <div
                  style={{
                    background: '#f8fafc',
                    borderRadius: '10px',
                    padding: '10px',
                    border: '1px solid #f1f5f9',
                    marginBottom: '12px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '6px',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Loan Limit</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e293b' }}>{prod.amount}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Interest Rate</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#059669' }}>{prod.rate}</div>
                  </div>
                </div>

                {/* Features list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {prod.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: '#475569' }}>
                      <CheckCircle2 size={12} color="#10b981" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

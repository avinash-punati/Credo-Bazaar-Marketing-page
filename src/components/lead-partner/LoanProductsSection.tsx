import React from 'react';
import {
  Sparkles,
  ShieldCheck,
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
      desc: 'Quick funds for your needs, anytime, anywhere. Get personal loans with easy process, minimal paperwork, and fast approval.',
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
      desc: 'Turn your dream home into reality with competitive interest rates, flexible repayment tenures, and end-to-end guidance.',
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
      desc: 'Fuel your enterprise expansion, inventory acquisition, and working capital needs with customized business financing.',
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
      desc: 'Unlock the high financial value of your residential or commercial real estate at lower commercial interest rates.',
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
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <Sparkles size={14} />
            <span>Available on CreditGenAI</span>
          </div>
          <h2 className="cb-section-title">Featured Loan Products</h2>
          <p className="cb-section-subtitle">
            Explore the exact suite of loan options available on CreditGenAI — offering quick disbursals, high limits, and competitive interest rates.
          </p>
        </div>

        {/* 4 Loan Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '22px',
            marginBottom: '44px',
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
                  borderRadius: '20px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: prod.isPopular ? '0 10px 25px -5px rgba(37, 99, 235, 0.15)' : '0 2px 12px rgba(15,23,42,0.04)',
                  transition: 'all 0.25s ease',
                }}
                className="creditgenai-loan-card"
              >
                {/* Popular Pill */}
                {prod.isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '18px',
                      background: '#2563eb',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)',
                    }}
                  >
                    ★ Popular Choice
                  </div>
                )}

                {/* Product Icon & Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: '#f8fafc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px',
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
                      Icon && <Icon size={32} color="#0284c7" />
                    )}
                  </div>

                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: prod.isPopular ? '#2563eb' : '#0369a1',
                      background: prod.isPopular ? '#eff6ff' : '#f0f9ff',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      border: '1px solid rgba(37, 99, 235, 0.15)',
                    }}
                  >
                    {prod.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                  {prod.title}
                </h3>

                <div style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 600, marginBottom: '10px' }}>
                  {prod.subtitle}
                </div>

                <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>
                  {prod.desc}
                </p>

                {/* Key Metrics */}
                <div
                  style={{
                    background: '#f8fafc',
                    borderRadius: '12px',
                    padding: '12px',
                    border: '1px solid #f1f5f9',
                    marginBottom: '16px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.67rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Loan Limit</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1e293b' }}>{prod.amount}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.67rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Interest Rate</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#059669' }}>{prod.rate}</div>
                  </div>
                </div>

                {/* Features list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {prod.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#475569' }}>
                      <CheckCircle2 size={13} color="#10b981" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Live Platform Guarantee Callout */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '20px',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(56, 189, 248, 0.15)',
              color: '#38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <ShieldCheck size={26} />
          </div>
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, margin: '0 0 4px' }}>
              Verified Official Products from CreditGenAI
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>
              All 4 products feature digital soft-inquiry pre-qualification, 256-bit encryption, and zero broker markup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

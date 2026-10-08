import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  Award,
  ShieldCheck,
  Calendar,
  Building2,
  ArrowUpRight,
  IndianRupee,
} from 'lucide-react';

export const DisbursementHistorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'product'>('timeline');

  // Key Top-Level Track Record Metrics
  const coreMetrics = [
    {
      id: 'approved',
      title: 'Total Loans Approved',
      value: '90+',
      growth: '+142% YoY',
      icon: CheckCircle2,
      accent: '#2563eb',
      bg: '#eff6ff',
      subtext: 'Across Personal, Home, Business & LAP',
    },
    {
      id: 'customers',
      title: 'Total Customers Served',
      value: '100+',
      growth: 'Pan-India',
      icon: Users,
      accent: '#059669',
      bg: '#ecfdf5',
      subtext: 'Borrowers empowered across 150+ cities',
    },
    {
      id: 'disbursed',
      title: 'Total Amount Disbursed',
      value: '₹10+ Cr',
      growth: 'Institutional',
      icon: IndianRupee,
      accent: '#d97706',
      bg: '#fffbeb',
      subtext: 'Directly disbursed through 50+ partner banks',
    },
    {
      id: 'lenders',
      title: 'Regulated Partner Lenders',
      value: '25+ Banks',
      growth: 'RBI Adherent',
      icon: Building2,
      accent: '#7c3aed',
      bg: '#f5f3ff',
      subtext: 'PSU, Private Sector Banks & Top NBFCs',
    },
  ];

  // Year-over-Year Growth History
  const historyTimeline = [

    {
      year: '2026 (YTD)',
      disbursed: '₹10+ Crores',
      approved: '40+ Loans',
      customers: '120+ Customers',
      percentage: '98%',
      badge: 'Market Leader',
      highlight: 'Full DPDP Act 2023 compliance, digital KYC, and automated AI loan underwriting.',
    },
  ];

  // Product-Wise Historical Breakdown
  const productHistory = [
    {
      product: 'Personal Loans',
      totalDisbursed: '₹4+ Crores',
      totalApproved: '31+ Loans',
      avgSanction: '24 – 48 Hours',
      rateBenchmark: 'From 10.49%* p.a.',
      ticketSize: 'Up to ₹50 Lakhs',
      color: '#2563eb',
    },
    {
      product: 'Home Loans',
      totalDisbursed: '₹3+ Crores',
      totalApproved: '31+ Loans',
      avgSanction: '3 – 5 Days',
      rateBenchmark: 'From 8.35%* p.a.',
      ticketSize: 'Up to ₹10+ Crores',
      color: '#059669',
    },
    {
      product: 'Business Loans',
      totalDisbursed: '₹2+ Crores',
      totalApproved: '7+ Loans',
      avgSanction: '48 – 72 Hours',
      rateBenchmark: 'From 9.75%* p.a.',
      ticketSize: 'Up to ₹5 Crores',
      color: '#d97706',
    },
    {
      product: 'Loan Against Property (LAP)',
      totalDisbursed: '₹1+ Crores',
      totalApproved: '3+ Loans',
      avgSanction: '5 – 7 Days',
      rateBenchmark: 'From 8.50%* p.a.',
      ticketSize: 'Up to ₹50+ Crores',
      color: '#7c3aed',
    },
  ];

  return (
    <section id="metrics-history" className="cb-section cb-section-alt">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <h2 className="cb-section-title">
            Our Disbursement &amp; Approval History
          </h2>
          <p className="cb-section-subtitle">
            Transparent milestones demonstrating the real financial volume processed through our multi-bank borrowing ecosystem.
          </p>
        </div>

        {/* 4 Big Track Record Counter Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '28px',
          }}
          className="metrics-counter-grid"
        >
          {coreMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.25s ease',
                }}
                className="metric-counter-card"
              >
                {/* Header row with icon & badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div
                    className="metric-counter-icon"
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: item.bg,
                      color: item.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <span
                    className="metric-counter-badge"
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: item.accent,
                      background: item.bg,
                      padding: '3px 8px',
                      borderRadius: '999px',
                      border: `1px solid ${item.accent}20`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <ArrowUpRight size={12} />
                    <span>{item.growth}</span>
                  </span>
                </div>

                {/* Big Stat Value */}
                <div
                  className="metric-counter-value"
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    marginBottom: '4px',
                  }}
                >
                  {item.value}
                </div>

                <div
                  className="metric-counter-title"
                  style={{ fontSize: '0.9rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}
                >
                  {item.title}
                </div>

                <div
                  className="metric-counter-subtext"
                  style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.45 }}
                >
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive History View Toggle: Year-by-Year vs By Loan Product */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 30px rgba(15, 23, 42, 0.05)',
            overflow: 'hidden',
          }}
        >
          {/* Header & Tab Switcher */}
          <div
            style={{
              padding: '24px 28px',
              borderBottom: '1px solid #f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>
                Historical Audit &amp; Performance
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '2px 0 0' }}>
                {activeTab === 'timeline'
                  ? 'Cumulative Year-over-Year Growth Timeline'
                  : 'Product-Wise Historical Disbursement Breakdown'}
              </h3>
            </div>

            {/* Segmented Control Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '4px',
                background: '#f1f5f9',
                padding: '4px',
                borderRadius: '12px',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('timeline')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeTab === 'timeline' ? '#ffffff' : 'transparent',
                  color: activeTab === 'timeline' ? '#0f172a' : '#64748b',
                  fontWeight: activeTab === 'timeline' ? 700 : 500,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: activeTab === 'timeline' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Calendar size={14} />
                <span>Yearly Timeline</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('product')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeTab === 'product' ? '#ffffff' : 'transparent',
                  color: activeTab === 'product' ? '#0f172a' : '#64748b',
                  fontWeight: activeTab === 'product' ? 700 : 500,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: activeTab === 'product' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Award size={14} />
                <span>By Loan Product</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Yearly Growth Timeline */}
          {activeTab === 'timeline' && (
            <div style={{ padding: '28px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {historyTimeline.map((item, index) => (
                  <div
                    key={item.year}
                    style={{
                      background: index === historyTimeline.length - 1 ? '#f8fafc' : '#ffffff',
                      border: index === historyTimeline.length - 1 ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '20px 24px',
                      display: 'grid',
                      gridTemplateColumns: '120px 1.2fr 1.5fr',
                      gap: '24px',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                    className="timeline-history-row"
                  >
                    {/* Year badge */}
                    <div>
                      <div
                        style={{
                          fontSize: '1.4rem',
                          fontWeight: 800,
                          color: index === historyTimeline.length - 1 ? '#2563eb' : '#0f172a',
                        }}
                      >
                        {item.year}
                      </div>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: index === historyTimeline.length - 1 ? '#2563eb' : '#64748b',
                          background: index === historyTimeline.length - 1 ? '#eff6ff' : '#f1f5f9',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          display: 'inline-block',
                          marginTop: '2px',
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Stats 3 Columns */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '12px',
                        background: '#ffffff',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        border: '1px solid #f1f5f9',
                      }}
                      className="timeline-stats-box"
                    >
                      <div>
                        <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>
                          Disbursed
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#059669' }}>
                          {item.disbursed}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>
                          Approved
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#2563eb' }}>
                          {item.approved}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>
                          Customers
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a' }}>
                          {item.customers}
                        </div>
                      </div>
                    </div>

                    {/* Description & Growth Bar */}
                    <div>
                      <p style={{ fontSize: '0.85rem', color: '#475569', margin: '0 0 10px', lineHeight: 1.45 }}>
                        {item.highlight}
                      </p>
                      {/* Visual Progress Bar */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div
                          style={{
                            flex: 1,
                            height: '6px',
                            background: '#e2e8f0',
                            borderRadius: '3px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: item.percentage,
                              height: '100%',
                              background: index === historyTimeline.length - 1 ? 'linear-gradient(90deg, #2563eb, #38bdf8)' : '#94a3b8',
                              borderRadius: '3px',
                            }}
                          />
                        </div>
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>
                          {item.percentage}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: By Loan Product Breakdown */}
          {activeTab === 'product' && (
            <div style={{ padding: '28px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px',
                }}
                className="product-history-grid"
              >
                {productHistory.map((item) => (
                  <div
                    key={item.product}
                    style={{
                      background: '#f8fafc',
                      borderRadius: '16px',
                      padding: '22px 24px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                        {item.product}
                      </h4>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: item.color,
                          background: '#ffffff',
                          padding: '3px 10px',
                          borderRadius: '999px',
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        {item.rateBenchmark}
                      </span>
                    </div>

                    {/* Stats 2x2 grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '12px',
                      }}
                    >
                      <div style={{ background: '#ffffff', padding: '12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Total Disbursed</div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#059669' }}>{item.totalDisbursed}</div>
                      </div>
                      <div style={{ background: '#ffffff', padding: '12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Total Approved</div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2563eb' }}>{item.totalApproved}</div>
                      </div>
                      <div style={{ background: '#ffffff', padding: '12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Avg Turnaround</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#334155' }}>{item.avgSanction}</div>
                      </div>
                      <div style={{ background: '#ffffff', padding: '12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Max Ticket Size</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#334155' }}>{item.ticketSize}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Audit Verification Banner */}
          <div
            style={{
              padding: '18px 28px',
              background: '#f8fafc',
              borderTop: '1px solid #f1f5f9',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <ShieldCheck size={20} color="#059669" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.85rem', color: '#475569' }}>
              All disbursements verified through institutional banking partner settlement records. RBI Digital Lending Guideline compliant.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

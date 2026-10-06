import React from 'react';
import {
  Link2,
  FileText,
  TrendingUp,
  Award,
  Shield,
  Globe,
  Star,
  ArrowRight,
  Briefcase,
} from 'lucide-react';
import { LEAD_PARTNER_REGISTER_URL } from './constants';

export const PartnerValueSection: React.FC = () => {
  const partnerBenefits = [
    {
      icon: Link2,
      accent: '#2563eb',
      bg: '#eff6ff',
      title: 'Zero Lead Poaching — Digital Attribution',
      desc: 'Every borrower who registers through your unique referral link is permanently attributed to your partner profile. Unlike offline DSA networks where agents steal leads at branch level, the platform records every step digitally under your code.',
      tag: 'Lead Security',
    },
    {
      icon: FileText,
      accent: '#059669',
      bg: '#ecfdf5',
      title: 'Zero Paperwork or Document Collection',
      desc: 'You never need to collect bank statements, ITR copies, or KYC documents from borrowers. Just share your referral link—borrowers complete the entire application securely on the platform themselves.',
      tag: 'No Admin Burden',
    },
    {
      icon: TrendingUp,
      accent: '#7c3aed',
      bg: '#f5f3ff',
      title: 'Diverse Loan Product Access',
      desc: 'While local DSAs specialize in just one loan type, Credo Bazaar allows you to refer leads across Business Loans, Working Capital, MSME Financing, Personal Loans, and Loan Against Property—maximizing your earning potential.',
      tag: 'Wide Portfolio',
    },
    {
      icon: Award,
      accent: '#d97706',
      bg: '#fffbeb',
      title: 'Eligible Commission on Successful Referrals',
      desc: 'Earn applicable commissions when your referred borrower successfully completes the loan journey with a lending partner. Transparent milestone tracking ensures you\'re never in the dark about your referral status.',
      tag: 'Eligible Commission',
    },
    {
      icon: Globe,
      accent: '#0369a1',
      bg: '#eff6ff',
      title: 'Pan-India Digital Reach — No Geography Limits',
      desc: 'A local DSA is restricted by their physical office territory and registered branch relationships. As a Credo Bazaar Lead Partner, you can refer contacts anywhere in India through a single digital link.',
      tag: 'Nationwide Access',
    },
    {
      icon: Shield,
      accent: '#16a34a',
      bg: '#f0fdf4',
      title: 'Professional Reputation Enhancement',
      desc: 'Directing your clients to an institutional, RBI-compliant digital platform strengthens your credibility. You are no longer just another agent—you become a trusted modern financial advisor in your network.',
      tag: 'Professional Edge',
    },
  ];

  const whoCanJoin = [
    { icon: Briefcase, role: 'Financial Consultants', desc: 'Existing client advisory portfolio' },
    { icon: FileText, role: 'Chartered Accountants', desc: 'Business clients needing credit access' },
    { icon: Globe, role: 'Real Estate Professionals', desc: 'Buyers needing home or LAP financing' },
    { icon: Award, role: 'DSA Agents', desc: 'Supplement your lender panel digitally' },
    { icon: Star, role: 'Business Advisors', desc: 'MSME and SME lending connections' },
    { icon: Link2, role: 'Networked Professionals', desc: 'Anyone with a trust-based contact network' },
  ];

  return (
    <section id="partner-benefits" className="cb-section">
      <div className="cb-container">
        {/* Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-emerald">
            <Star size={14} />
            <span>For Lead Partners</span>
          </div>
          <h2 className="cb-section-title">
            Why Professionals Partner with Credo Bazaar
          </h2>
          <p className="cb-section-subtitle">
            More secure, more scalable, and more rewarding than routing leads through traditional offline agents. Here's what you actually gain.
          </p>
        </div>

        {/* 3x2 Partner Benefits Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '22px',
            marginBottom: '56px',
          }}
          className="partner-benefits-grid"
        >
          {partnerBenefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="partner-benefit-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: b.bg,
                      color: b.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: b.accent,
                      background: b.bg,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {b.tag}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>
                  {b.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65 }}>
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Who Can Join Section */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0b132b 0%, #1c2541 50%, #1e3a8a 100%)',
            borderRadius: '24px',
            padding: '48px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="who-can-join-card"
        >
          <div>
            <div className="cb-pill cb-pill-dark" style={{ marginBottom: '16px' }}>
              <span>Who Can Become a Lead Partner?</span>
            </div>
            <h3
              style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              If You Have a Network, You Have Opportunity.
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#94a3b8',
                lineHeight: 1.65,
                marginBottom: '28px',
              }}
            >
              You don't need to be a licensed financial agent to become a Credo Bazaar Lead Partner. Anyone who has professional or personal connections with individuals or businesses seeking financing can join.
            </p>
            <a
              href={LEAD_PARTNER_REGISTER_URL}
              className="cb-btn cb-btn-white"
              style={{ padding: '14px 28px', fontWeight: 700 }}
            >
              <span>Join as a Lead Partner</span>
              <ArrowRight size={17} />
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
            }}
          >
            {whoCanJoin.map((w, i) => {
              const Icon = w.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(96,165,250,0.2)',
                      color: '#60a5fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9' }}>
                    {w.role}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.4 }}>
                    {w.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

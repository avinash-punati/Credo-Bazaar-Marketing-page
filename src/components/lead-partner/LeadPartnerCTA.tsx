import React from 'react';
import { ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const LeadPartnerCTA: React.FC = () => {
  return (
    <section className="cb-cta-section">
      <div className="cb-container">
        <div className="cb-cta-card">
          <div className="cb-pill cb-pill-blue">
            <span>Get Started in 2 Minutes</span>
          </div>

          <h2 className="cb-cta-headline">Ready to Find the Best Loan for Your Needs?</h2>

          <p className="cb-cta-text">
            Compare transparent sanction offers from 50+ leading banks and NBFCs with zero upfront fees, zero agent bias, and complete CIBIL score protection.
          </p>

          <a
            href={CHECKOUT_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cb-btn cb-btn-primary"
            id="final-cta-btn"
            style={{
              padding: '16px 36px',
              fontSize: '1.05rem',
              fontWeight: 700,
              marginTop: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span>Checkout Website</span>
            <ExternalLink size={20} />
          </a>

          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              fontSize: '0.85rem',
              color: 'var(--cb-text-muted)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>100% Free for Borrowers</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#2563eb" />
              <span>Soft Inquiries • CIBIL Safe</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>50+ Institutional Lenders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, Mail, MapPin, ExternalLink } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const MarketingFooter: React.FC = () => {
  return (
    <footer className="cb-footer">
      <div className="cb-container">
        {/* Top Grid: Brand & Links */}
        <div className="cb-footer-grid">
          <div>
            <BrandLogo variant="light" size="md" showTagline={true} />
            <p
              style={{
                marginTop: '16px',
                fontSize: '0.885rem',
                color: '#94a3b8',
                maxWidth: '440px',
                lineHeight: 1.6,
              }}
            >
              Credo Bazaar is India&apos;s trusted loan request platform, empowering businesses and individuals to discover transparent, competitive loan offers from 50+ institutional banks and NBFCs with zero broker bias.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 700,
                color: '#cbd5e1',
              }}
            >
              Quick Links &amp; Legal
            </span>

            <div className="cb-footer-links">
              <a
                href={CHECKOUT_WEBSITE_URL}
                className="cb-footer-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#38bdf8', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Checkout Website</span>
                <ExternalLink size={13} />
              </a>
              <a
                href="/privacy-policy/"
                className="cb-footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions/"
                className="cb-footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="mailto:support@credobazaar.com"
                className="cb-footer-link"
              >
                Contact Support
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '4px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.825rem', color: '#94a3b8' }}>
                <Mail size={14} color="#38bdf8" />
                <span>support@credobazaar.com</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.825rem', color: '#94a3b8' }}>
                <MapPin size={14} color="#38bdf8" />
                <span>India</span>
              </span>
            </div>
          </div>
        </div>

        {/* REGULATORY DISCLAIMER */}
        <div className="cb-disclaimer-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <ShieldCheck size={16} color="#38bdf8" />
            <h5 className="cb-disclaimer-heading" style={{ margin: 0 }}>
              Borrower Regulatory &amp; Platform Notice
            </h5>
          </div>
          <p className="cb-disclaimer-text">
            Credo Bazaar operates as a loan request facilitation platform connecting borrowers with regulated lending entities. Loan approval, credit underwriting, interest rates, tenure, fees, and disbursals are determined independently by participating Banks and NBFCs in accordance with their respective credit policies. Credo Bazaar does not charge borrowers any fee for loan request submissions and strictly adheres to RBI Digital Lending Guidelines and the Digital Personal Data Protection Act (DPDP Act 2023).
          </p>
        </div>

        {/* Footer Bottom Line */}
        <div className="cb-footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Credo Bazaar. All rights reserved. Loan Request Platform.
          </span>
          <span style={{ color: '#64748b' }}>
            Borrower-First Platform • RBI Digital Lending Adherent • Bank-Grade Security
          </span>
        </div>
      </div>
    </footer>
  );
};

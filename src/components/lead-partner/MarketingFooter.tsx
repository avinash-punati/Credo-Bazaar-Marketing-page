import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Mail, MapPin } from 'lucide-react';

export const MarketingFooter: React.FC = () => {
  return (
    <footer className="cb-footer">
      <div className="cb-container">
        {/* Top: Brand Logo & One-Line Company Description */}
        <div className="cb-footer-top">
          <BrandLogo variant="light" size="lg" showTagline={false} />
          <p className="cb-footer-desc">
            Credo Bazaar is India&apos;s trusted loan request platform, empowering businesses and individuals to discover transparent, competitive loan offers from 50+ institutional banks and NBFCs with zero broker bias.
          </p>
        </div>

        {/* Middle: Compact Horizontal Quick Links & Contact Support */}
        <div className="cb-footer-nav-row">
          <div className="cb-footer-group">
            <span className="cb-footer-group-label">Quick Links &amp; Legal:</span>
            <div className="cb-footer-links">
              <a
                href="/privacy-policy/"
                className="cb-footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <span className="cb-footer-dot" aria-hidden="true">•</span>
              <a
                href="/terms-and-conditions/"
                className="cb-footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms &amp; Conditions
              </a>
              <span className="cb-footer-dot" aria-hidden="true">•</span>

            </div>
          </div>

          <div className="cb-footer-group">
            <span className="cb-footer-group-label">Contact Support:</span>
            <div className="cb-footer-support">
              <a
                href="mailto:support@credobazaar.com"
                className="cb-footer-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              >
                <Mail size={13} color="#38bdf8" />
                <span>support@credobazaar.com</span>
              </a>
              <span className="cb-footer-dot" aria-hidden="true">•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#94a3b8', fontSize: '0.825rem' }}>
                <MapPin size={13} color="#ef0000ff" />
                <span>India</span>
              </span>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Legal/Copyright Row */}
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

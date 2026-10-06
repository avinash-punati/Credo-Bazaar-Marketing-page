import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ExternalLink } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const MarketingHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`cb-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="cb-container">
        <div className="cb-header-inner">
          {/* Brand Logo */}
          <a
            href="/"
            aria-label="Credo Bazaar Loan Platform"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <BrandLogo size="md" />
          </a>

          {/* Simple Navigation Links for Borrowers */}
          <nav className="cb-nav-desktop" aria-label="Borrower Navigation">
            <a
              href="#how-it-works"
              className="cb-nav-link"
              onClick={(e) => scrollToSection(e, 'how-it-works')}
            >
              How It Works
            </a>
            <a
              href="#metrics-history"
              className="cb-nav-link"
              onClick={(e) => scrollToSection(e, 'metrics-history')}
            >
              Track Record
            </a>
            <a
              href="#procedure"
              className="cb-nav-link"
              onClick={(e) => scrollToSection(e, 'procedure')}
            >
              How to Apply
            </a>
            <a
              href="#why-credo"
              className="cb-nav-link"
              onClick={(e) => scrollToSection(e, 'why-credo')}
            >
              Why Credo vs DSA
            </a>
            <a
              href="#borrower-benefits"
              className="cb-nav-link"
              onClick={(e) => scrollToSection(e, 'borrower-benefits')}
            >
              Borrower Benefits
            </a>
            <a
              href="#loan-products"
              className="cb-nav-link"
              onClick={(e) => scrollToSection(e, 'loan-products')}
            >
              Loan Types
            </a>
            <a
              href="#faq"
              className="cb-nav-link"
              onClick={(e) => scrollToSection(e, 'faq')}
            >
              FAQ
            </a>
          </nav>

          {/* Right Action CTA: Checkout Website */}
          <div className="cb-header-actions">
            <a
              href={CHECKOUT_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cb-btn cb-btn-primary"
              id="header-cta-btn"
              style={{
                padding: '10px 22px',
                fontSize: '0.885rem',
                whiteSpace: 'nowrap',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>Checkout Website</span>
              <ExternalLink size={14} />
            </a>

            <button
              type="button"
              className="cb-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`cb-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <a
          href="#how-it-works"
          className="cb-mobile-nav-link"
          onClick={(e) => scrollToSection(e, 'how-it-works')}
        >
          How It Works
        </a>
        <a
          href="#metrics-history"
          className="cb-mobile-nav-link"
          onClick={(e) => scrollToSection(e, 'metrics-history')}
        >
          Track Record
        </a>
        <a
          href="#procedure"
          className="cb-mobile-nav-link"
          onClick={(e) => scrollToSection(e, 'procedure')}
        >
          How to Apply
        </a>
        <a
          href="#why-credo"
          className="cb-mobile-nav-link"
          onClick={(e) => scrollToSection(e, 'why-credo')}
        >
          Why Credo vs DSA
        </a>
        <a
          href="#borrower-benefits"
          className="cb-mobile-nav-link"
          onClick={(e) => scrollToSection(e, 'borrower-benefits')}
        >
          Borrower Benefits
        </a>
        <a
          href="#loan-products"
          className="cb-mobile-nav-link"
          onClick={(e) => scrollToSection(e, 'loan-products')}
        >
          Loan Types
        </a>
        <a
          href="#faq"
          className="cb-mobile-nav-link"
          onClick={(e) => scrollToSection(e, 'faq')}
        >
          FAQ
        </a>
        <div style={{ padding: '16px 24px' }}>
          <a
            href={CHECKOUT_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cb-btn cb-btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Checkout Website</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowRight, Smartphone } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const MarketingHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems = [
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'how-to-apply', label: 'How It Works' },
    { id: 'credit-score', label: 'Credit Score' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect current active section based on scroll position
      const scrollPosition = window.scrollY + 130;
      let current = '';
      for (let i = navItems.length - 1; i >= 0; i--) {
        const sec = document.getElementById(navItems[i].id);
        if (sec && sec.offsetTop <= scrollPosition) {
          current = navItems[i].id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);
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

  const handleDownloadAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById('download-app');
    if (element) {
      const headerOffset = 75;
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
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <BrandLogo size="md" showTagline={false} />
          </a>

          {/* Clean Centered Navigation Bar */}
          <nav className="cb-nav-desktop" aria-label="Borrower Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`cb-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs: Apply Now + Download Mobile App (Last) */}
          <div className="cb-header-actions">
            <a
              href={CHECKOUT_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cb-btn cb-btn-primary"
              id="header-cta-btn"
              style={{
                padding: '9px 20px',
                fontSize: '0.875rem',
                whiteSpace: 'nowrap',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '999px',
                textDecoration: 'none',
              }}
            >
              <span>Apply Now</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="#download-app"
              onClick={handleDownloadAppClick}
              className="cb-header-download-btn"
              id="header-download-app-btn"
              title="Download Credo Bazaar Mobile App"
            >
              <Smartphone size={15} />
              <span>DOWNLOAD MOBILE APP</span>
            </a>

            <button
              type="button"
              className="cb-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`cb-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`cb-mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => scrollToSection(e, item.id)}
          >
            <span>{item.label}</span>
          </a>
        ))}
        <div style={{ paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <a
            href={CHECKOUT_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cb-btn cb-btn-primary"
            style={{ width: '100%', justifyContent: 'center', borderRadius: '999px', gap: '8px', textDecoration: 'none', padding: '11px 20px' }}
          >
            <span>Apply Now</span>
            <ArrowRight size={15} />
          </a>
          <a
            href="#download-app"
            onClick={handleDownloadAppClick}
            className="cb-header-download-btn"
            style={{ width: '100%', justifyContent: 'center', borderRadius: '999px', padding: '11px 20px', display: 'inline-flex' }}
          >
            <Smartphone size={15} />
            <span>DOWNLOAD MOBILE APP</span>
          </a>
        </div>
      </div>
    </header>
  );
};

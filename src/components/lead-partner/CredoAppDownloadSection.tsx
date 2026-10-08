import React from 'react';
import { GOOGLE_PLAY_STORE_URL, APPLE_APP_STORE_URL } from './constants';

// Clean Checkmark Icon for Benefits
const CheckCircleBlueIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="cb-benefit-check-icon">
    <circle cx="10" cy="10" r="9" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="1.5" />
    <path d="M6 10.2L8.7 12.9L14 7.6" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Official Google Play Store Vector Icon
const GooglePlayIcon: React.FC = () => (
  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" aria-hidden="true">
    <path d="M1.1 0.7C0.8 1.1 0.6 1.7 0.6 2.4V21.6C0.6 22.3 0.8 22.9 1.1 23.3L1.2 23.4L12.1 12.5V12.1L1.2 0.6L1.1 0.7Z" fill="#2196F3" />
    <path d="M15.7 16.1L12.1 12.5V12.1L15.7 8.5L15.8 8.6L20.1 11.0C21.3 11.7 21.3 12.8 20.1 13.5L15.8 15.9L15.7 16.1Z" fill="#FFC107" />
    <path d="M15.8 16.0L12.1 12.3L1.1 23.3C1.5 23.7 2.2 23.8 3.1 23.3L15.8 16.0Z" fill="#4CAF50" />
    <path d="M15.8 8.6L3.1 1.3C2.2 0.8 1.5 0.9 1.1 1.3L12.1 12.3L15.8 8.6Z" fill="#F44336" />
  </svg>
);

// Official Apple Store Vector Icon
const AppleStoreIcon: React.FC = () => (
  <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
    <path d="M16.4 12.6C16.4 8.9 19.4 7.1 19.5 7.0C17.8 4.6 15.2 4.2 14.3 4.2C12.1 4.0 10.0 5.5 8.9 5.5C7.7 5.5 6.0 4.2 4.2 4.2C1.9 4.2 0 5.8 0 9.5C0 14.8 4.2 22.2 6.5 22.2C7.6 22.2 8.7 21.4 10.1 21.4C11.4 21.4 12.5 22.2 13.7 22.2C16.0 22.2 19.8 15.6 19.8 15.5C19.7 15.5 16.4 14.2 16.4 12.6Z" />
    <path d="M13.2 2.8C14.2 1.6 14.8 0 14.6 0C13.2 0.1 11.6 0.9 10.6 2.1C9.8 3.0 9.1 4.6 9.3 6.2C10.9 6.3 12.3 5.4 13.2 2.8Z" />
  </svg>
);

export const CredoAppDownloadSection: React.FC = () => {
  return (
    <section id="download-app" className="cb-app-promo-light-section" aria-label="Download the Credo Bazaar Mobile App">
      <div className="cb-container">
        <div className="cb-app-promo-grid">
          {/* =========================================================
              LEFT COLUMN: Eyebrow, Heading, Subtitle, Benefits, Buttons
              ========================================================= */}
          <div className="cb-app-promo-left">
            {/* Eyebrow Badge */}
            <div className="cb-app-eyebrow">
              <span className="cb-app-eyebrow-dot" aria-hidden="true" />
              <span>CREDO BAZAAR MOBILE APP</span>
            </div>

            {/* Main Heading with Violet/Purple Accent */}
            <h2 className="cb-app-promo-title">
              Your Loan Journey.<br />
              <span className="cb-app-title-violet">Now in Your Pocket.</span>
            </h2>

            {/* Supporting Text */}
            <p className="cb-app-promo-desc">
              Explore lending opportunities, submit your loan request, track your application, and stay updated — all from the Credo Bazaar mobile app.
            </p>

            {/* 4 Compact Benefit Points */}
            <div className="cb-app-benefits-list">
              <div className="cb-app-benefit-item">
                <CheckCircleBlueIcon />
                <span>Explore multiple lending options</span>
              </div>
              <div className="cb-app-benefit-item">
                <CheckCircleBlueIcon />
                <span>Submit your loan request digitally</span>
              </div>
              <div className="cb-app-benefit-item">
                <CheckCircleBlueIcon />
                <span>Track your application status</span>
              </div>
              <div className="cb-app-benefit-item">
                <CheckCircleBlueIcon />
                <span>Simple, secure &amp; transparent experience</span>
              </div>
            </div>

            {/* CTA Sub-heading */}
            <div className="cb-app-cta-block">
              <span className="cb-app-cta-label">Download the Credo Bazaar App</span>

              {/* App Store Buttons (Only Play Store shown on mobile devices) */}
              <div className="cb-app-store-btns">
                {/* Google Play Button */}
                <a
                  href={GOOGLE_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cb-store-btn cb-store-play"
                  aria-label="Download Credo Bazaar on Google Play"
                >
                  <div className="cb-store-btn-icon">
                    <GooglePlayIcon />
                  </div>
                  <div className="cb-store-btn-text">
                    <span className="cb-store-sub">GET IT ON</span>
                    <strong className="cb-store-main">Google Play</strong>
                  </div>
                </a>

                {/* Apple App Store Button (hidden on mobile screen to show only Play Store) */}
                <a
                  href={APPLE_APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cb-store-btn cb-store-apple"
                  aria-label="Download Credo Bazaar on App Store"
                >
                  <div className="cb-store-btn-icon">
                    <AppleStoreIcon />
                  </div>
                  <div className="cb-store-btn-text">
                    <span className="cb-store-sub">Download on the</span>
                    <strong className="cb-store-main">App Store</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Mobile Phone Mockup showing PLAY STORE ONLY
              ========================================================= */}
          <div className="cb-app-promo-right">
            {/* Outer Mockup Wrapper with Floating Badges */}
            <div className="cb-phone-mockup-wrapper">
              {/* Phone Device Chassis: Clean Google Play Store Mockup */}
              <div className="cb-playstore-phone-frame">
                {/* Top Speaker Ear Piece */}
                <div className="cb-phone-top-speaker" />
                {/* Front Camera Dot */}
                <div className="cb-phone-front-cam" />

                {/* Inside Screen: Pure Google Play Store Interface */}
                <div className="cb-playstore-screen">
                  {/* Phone Status Bar */}
                  <div className="cb-phone-status-bar">
                    <div className="cb-status-left">
                      <span>12:19</span>
                      <span className="cb-status-sub-icons">🔔 💬</span>
                    </div>
                    <div className="cb-status-right">
                      <span>📶</span>
                      <span>5G</span>
                      <span>🔋 94%</span>
                    </div>
                  </div>

                  {/* Google Play Navigation Row */}
                  <div className="cb-play-nav-row">
                    <span className="cb-play-nav-back">←</span>
                    <div className="cb-play-nav-actions">
                      <span>🔍</span>
                      <span>⋮</span>
                    </div>
                  </div>

                  {/* App Header Row */}
                  <div className="cb-play-app-header">
                    <div className="cb-play-app-icon-sq">
                      <span className="cb-icon-incred-txt">Credo</span>
                      <span className="cb-icon-finance-txt">Bazaar</span>
                    </div>

                    <div className="cb-play-app-meta">
                      <h3 className="cb-play-app-title">
                        Credo Bazaar: Instant Loans
                      </h3>
                      <span className="cb-play-dev-name">
                        Credo Technologies
                      </span>
                    </div>
                  </div>

                  {/* Metrics Row: Reviews, Size, Rating */}
                  <div className="cb-play-metrics-row">
                    <div className="cb-metric-col">
                      <div className="cb-metric-val">4.8 ★</div>
                      <div className="cb-metric-label">25K reviews</div>
                    </div>
                    <div className="cb-metric-divider" />
                    <div className="cb-metric-col">
                      <div className="cb-metric-val">⬇ 15 MB</div>
                      <div className="cb-metric-label">15 MB</div>
                    </div>
                    <div className="cb-metric-divider" />
                    <div className="cb-metric-col">
                      <div className="cb-metric-val">3+</div>
                      <div className="cb-metric-label">Rated for 3+</div>
                    </div>
                  </div>

                  {/* Install Button Area */}
                  <div className="cb-play-install-area">
                    <a
                      href={GOOGLE_PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cb-play-install-btn"
                      style={{ textDecoration: 'none', display: 'block' }}
                      aria-label="Install Credo Bazaar on Google Play"
                    >
                      Install
                    </a>
                    <span className="cb-play-install-sub">
                      Install on phone. More devices available.
                    </span>
                  </div>

                  {/* Video / Promo Screenshot Card */}
                  <div className="cb-play-promo-card">
                    <div className="cb-promo-content">
                      {/* Photo on Left Side: Presenter Person Cutout */}
                      <img
                        src="/playstore_presenter.png"
                        alt="Credo Bazaar App Presenter"
                        className="cb-promo-presenter-img"
                        loading="eager"
                      />

                      {/* Official Credo Bazaar Brand Logo resting right on presenter's open hands */}
                      <img
                        src="/credo_bazaar_official_logo.png"
                        alt="Credo Bazaar Logo"
                        className="cb-promo-hands-logo-img"
                        loading="eager"
                      />

                      {/* Video Play Button Overlay */}
                      <div className="cb-promo-play-btn" aria-label="Play App Demo Video">
                        <span>▶</span>
                      </div>

                      {/* Right Side Text (Moved slightly to top, strictly 2 lines) */}
                      <div className="cb-promo-right">
                        <span className="cb-promo-line-blue">My Best Choice,</span>
                        <span className="cb-promo-line-dark">One Simple Platform</span>
                      </div>
                    </div>
                  </div>

                  {/* About This App Section */}
                  <div className="cb-play-about-section">
                    <div className="cb-about-header">
                      <span>About this app</span>
                      <span className="cb-about-arrow">→</span>
                    </div>
                    <p className="cb-about-snippet">
                      Instant Multi-Lender Loan App | Fast Digital Approval &amp; Lowest Interest Rates
                    </p>
                  </div>

                  {/* Bottom Play Store Navigation Tabs */}
                  <div className="cb-play-bottom-tabs">
                    <div className="cb-tab-item">
                      <span>🎮</span>
                      <small>Games</small>
                    </div>
                    <div className="cb-tab-item">
                      <span>📱</span>
                      <small>Apps</small>
                    </div>
                    <div className="cb-tab-item active">
                      <span className="cb-tab-pill">🔍</span>
                      <small>Search</small>
                    </div>
                    <div className="cb-tab-item">
                      <span>🏷</span>
                      <small>Offers</small>
                    </div>
                    <div className="cb-tab-item">
                      <span>📚</span>
                      <small>Books</small>
                    </div>
                  </div>

                  {/* Android System Soft Buttons */}
                  <div className="cb-android-bottom-bar">
                    <span>|||</span>
                    <span>□</span>
                    <span>&lt;</span>
                  </div>
                </div>
              </div>

              {/* Small Badge Near the Phone */}
              <div className="cb-phone-trust-badge">
                <span className="cb-trust-badge-dot" aria-hidden="true" />
                <span>Simple • Digital • Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredoAppDownloadSection;

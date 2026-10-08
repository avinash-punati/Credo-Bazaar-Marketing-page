import React from 'react';
import { Shield, Unlock } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const CreditScoreSection: React.FC = () => {
  return (
    <section id="credit-score" className="cb-credit-score-section">
      {/* Background Radiating Flow Waves */}
      <div className="cb-credit-bg-waves" aria-hidden="true">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="none" className="cb-credit-waves-svg">
          <path
            d="M-50,220 C250,260 400,160 600,160 C800,160 950,60 1250,100"
            stroke="rgba(191, 219, 254, 0.45)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-50,250 C260,290 420,180 600,180 C780,180 940,90 1250,130"
            stroke="rgba(191, 219, 254, 0.38)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-50,280 C270,320 440,200 600,200 C760,200 930,120 1250,160"
            stroke="rgba(191, 219, 254, 0.3)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-50,310 C280,350 460,220 600,220 C740,220 920,150 1250,190"
            stroke="rgba(191, 219, 254, 0.22)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-50,190 C240,230 380,140 600,140 C820,140 960,30 1250,70"
            stroke="rgba(191, 219, 254, 0.28)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      <div className="cb-container cb-credit-score-container">
        {/* Title */}
        <h2 className="cb-credit-score-title">Check Your Credit Score For Free</h2>

        {/* 3 Trust Badges / Pills */}
        <div className="cb-credit-pills-row">
          <div className="cb-credit-pill">
            <Shield size={15} color="#2563eb" className="cb-credit-pill-icon" />
            <span>Encrypted &amp; Secure</span>
          </div>

          <div className="cb-credit-pill">
            {/* Hand outline icon matching reference */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cb-credit-pill-icon"
            >
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.83l1.76 1.77V6" />
            </svg>
            <span>Impact-Free Check</span>
          </div>

          <div className="cb-credit-pill">
            <Unlock size={15} color="#2563eb" className="cb-credit-pill-icon" />
            <span>Unlock Digital Credit Eligibility</span>
          </div>
        </div>

        {/* Center Meter / Gauge */}
        <div className="cb-credit-gauge-wrap">
          <svg
            className="cb-credit-gauge-svg"
            viewBox="0 0 320 280"
            width="320"
            height="280"
          >
            {/* Drop shadow for inner circle */}
            <defs>
              <filter id="gaugeCircleShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.08" />
              </filter>
              <filter id="knobGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0284c7" floodOpacity="0.4" />
              </filter>
            </defs>

            {/* Segment 1: Red/Coral (bottom left) */}
            <path
              d="M 69 216 A 114 114 0 0 1 48 138"
              fill="none"
              stroke="#f87171"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Segment 2: Orange (top left) */}
            <path
              d="M 58 108 A 114 114 0 0 1 138 48"
              fill="none"
              stroke="#fb923c"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Segment 3: Yellow-Orange (top center-right) */}
            <path
              d="M 160 46 A 114 114 0 0 1 246 92"
              fill="none"
              stroke="#f9f116ff"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Segment 4: Emerald Green (right side) */}
            <path
              d="M 264 122 A 114 114 0 0 1 254 216"
              fill="none"
              stroke="#10b981"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Indicator Dot at 750 (Good rating mark) */}
            <circle
              cx="246"
              cy="92"
              r="12"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1.5"
              filter="url(#knobGlow)"
            />
            <circle
              cx="246"
              cy="92"
              r="7.5"
              fill="#0284c7"
            />

            {/* Inner White Score Disc */}
            <circle
              cx="160"
              cy="158"
              r="76"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1.5"
              filter="url(#gaugeCircleShadow)"
            />

            {/* Inner Text Labels */}
            <text
              x="160"
              y="132"
              textAnchor="middle"
              className="cb-gauge-label-score"
            >
              Score
            </text>
            <text
              x="160"
              y="172"
              textAnchor="middle"
              className="cb-gauge-val-750"
            >
              750
            </text>
            <text
              x="160"
              y="200"
              textAnchor="middle"
              className="cb-gauge-label-good"
            >
              Good
            </text>
          </svg>
        </div>

        {/* Orange CTA Button */}
        <div className="cb-credit-btn-wrap">
          <a
            href={CHECKOUT_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cb-credit-btn-cta"
          >
            <span className="cb-credit-btn-title">Get Started</span>
            <span className="cb-credit-btn-sub">to check your score</span>
          </a>
        </div>

        {/* Powered by Experian */}
        <div className="cb-experian-powered-row">
          <span className="cb-experian-powered-label">Powered by</span>
          <div className="cb-experian-badge">
            <img
              src="/logos/experian.svg"
              alt="Experian"
              className="cb-experian-logo-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditScoreSection;

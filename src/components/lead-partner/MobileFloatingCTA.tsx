import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const MobileFloatingCTA: React.FC = () => {
  return (
    <div className="pw-mobile-floating-bar">
      <div className="pw-floating-inner">
        <div className="pw-floating-text">
          <div className="pw-floating-title">
            <span>Apply Now</span>
            <ShieldCheck size={14} color="#10b981" />
          </div>
          <div className="pw-floating-sub">Zero CIBIL Impact • 50+ Top Banks</div>
        </div>

        <a
          href={CHECKOUT_WEBSITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cb-btn cb-btn-primary pw-floating-btn"
        >
          <span>Apply Now</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

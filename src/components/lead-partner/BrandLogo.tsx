import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'light';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  showTagline = true,
  className = '',
  size = 'md',
}) => {
  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const currentSize = iconSizes[size];

  return (
    <div
      className={`cb-brand-logo ${variant} size-${size} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: `${currentSize}px`,
          height: `${currentSize}px`,
          flexShrink: 0,
          position: 'relative',
        }}
      >
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <defs>
            <linearGradient id="cb-logo-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="55%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <radialGradient id="cb-logo-shine" cx="16" cy="16" r="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="cb-logo-spark" x1="36" y1="26" x2="48" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#BAE6FD" />
              <stop offset="45%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <filter id="cb-logo-glow" x="30" y="20" width="24" height="24" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Squircle Base */}
          <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#cb-logo-bg)" />
          <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#cb-logo-shine)" />
          <rect x="3" y="3" width="58" height="58" rx="15" fill="none" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1.5" />

          {/* Bold Monogram 'C' */}
          <path
            d="M 45.5 21 C 41.5 15.5 35.5 13.5 29.5 13.5 C 19 13.5 13 21 13 32 C 13 43 19 50.5 29.5 50.5 C 35.5 50.5 41.5 48.5 45.5 43"
            stroke="#FFFFFF"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Spark Accent */}
          <path
            d="M 42 26 Q 42 32 48 32 Q 42 32 42 38 Q 42 32 36 32 Q 42 32 42 26 Z"
            fill="url(#cb-logo-spark)"
            filter="url(#cb-logo-glow)"
          />
        </svg>
      </div>

      {variant !== 'compact' && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <div
            style={{
              fontFamily: 'var(--cb-font-display)',
              fontWeight: 800,
              fontSize: size === 'sm' ? '1.1rem' : size === 'lg' ? '1.45rem' : '1.25rem',
              letterSpacing: '-0.03em',
              color: variant === 'light' ? '#ffffff' : 'var(--cb-navy-900)',
              display: 'flex',
              alignItems: 'baseline',
              gap: '4px',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Credo</span>
            <span style={{ color: 'var(--cb-blue-600)' }}>Bazaar</span>
          </div>

          {showTagline && (
            <span
              style={{
                fontFamily: 'var(--cb-font-body)',
                fontSize: size === 'sm' ? '0.68rem' : size === 'lg' ? '0.76rem' : '0.72rem',
                fontWeight: 600,
                letterSpacing: size === 'lg' ? '0.06em' : '0.05em',
                textTransform: 'uppercase',
                color: variant === 'light' ? '#94a3b8' : 'var(--cb-text-muted)',
                marginTop: '2px',
                whiteSpace: 'nowrap',
                display: 'block',
              }}
            >
              Loan Request Platform
            </span>
          )}
        </div>
      )}
    </div>
  );
};

import React from 'react';
import {
  ShieldCheck,
  IdCard,
  Briefcase,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

// Custom CIBIL Speedometer Gauge with Checkmark
const CibilScoreGaugeIcon: React.FC<{ color?: string }> = ({ color = '#0284c7' }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3.5 15C3.5 10.3 7.3 6.5 12 6.5C16.7 6.5 20.5 10.3 20.5 15"
      stroke="#e2e8f0"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M3.5 15C3.5 11.5 5.5 9 8 7.6"
      stroke="#ef4444"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M8.5 7.4C10 6.8 11 6.5 12 6.5C13 6.5 14 6.8 15.5 7.4"
      stroke="#f59e0b"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M16 7.6C18.5 9 20.5 11.5 20.5 15"
      stroke="#10b981"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M12 15L15 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="15" r="2" fill={color} />
    <circle cx="16.5" cy="15" r="4.2" fill="#0284c7" />
    <path
      d="M15 15L16 16L18 14"
      stroke="#ffffff"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Mobile Phone with tap gesture icon
const SmartphoneTapIcon: React.FC<{ color?: string }> = ({ color = '#2563eb' }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="5" y="2" width="11" height="19" rx="2.5" stroke={color} strokeWidth="1.9" />
    <line x1="9" y1="17.5" x2="12" y2="17.5" stroke={color} strokeWidth="1.9" strokeLinecap="round" />
    <path
      d="M13.5 11L16.5 14L15 16.5"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M13.5 11L17.5 7.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="17.5" cy="7.5" r="1.3" fill={color} />
    <path d="M19.5 4.5L20.5 3.5M16 3.5L16 2M21 8L22.5 8" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const IncredStepsSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Apply Now',
      desc: 'Click “Apply Now” and enter your mobile number',
      renderIcon: (color: string) => <SmartphoneTapIcon color={color} />,
      accentColor: '#2563eb',
      gradStart: '#b8d5fcff',
      gradMid: '#d3e6ffff',
      gradEnd: '#f8fafc',
      borderColor: '#5396e3ff',
      iconBorderColor: '#bfdbfe',
      shadowColor: 'rgba(37, 99, 235, 0.16)',
      hoverShadowColor: 'rgba(37, 99, 235, 0.28)',
      zIndex: 5,
    },
    {
      num: '02',
      title: 'Verify Identity',
      desc: 'Verify your identity with the SMS confirmation code',
      renderIcon: (color: string) => <ShieldCheck size={21} color={color} strokeWidth={2.2} />,
      accentColor: '#059669',
      gradStart: '#d1fae5',
      gradMid: '#ecfdf5',
      gradEnd: '#f0fdf4',
      borderColor: '#86efac',
      iconBorderColor: '#a7f3d0',
      shadowColor: 'rgba(16, 185, 129, 0.16)',
      hoverShadowColor: 'rgba(16, 185, 129, 0.28)',
      zIndex: 4,
    },
    {
      num: '03',
      title: 'Basic Details',
      desc: 'Fill in basic details DOB, gender, pincode and PAN',
      renderIcon: (color: string) => <IdCard size={21} color={color} strokeWidth={2.2} />,
      accentColor: '#7c3aed',
      gradStart: '#ede9fe',
      gradMid: '#f5f3ff',
      gradEnd: '#faf5ff',
      borderColor: '#d8b4fe',
      iconBorderColor: '#ddd6fe',
      shadowColor: 'rgba(124, 58, 237, 0.16)',
      hoverShadowColor: 'rgba(124, 58, 237, 0.28)',
      zIndex: 3,
    },
    {
      num: '04',
      title: 'Employment',
      desc: 'Select your employment type and provide income and company information',
      renderIcon: (color: string) => <Briefcase size={21} color={color} strokeWidth={2.2} />,
      accentColor: '#ea580c',
      gradStart: '#fed7aa',
      gradMid: '#ffedd5',
      gradEnd: '#fff7ed',
      borderColor: '#fdba74',
      iconBorderColor: '#fed7aa',
      shadowColor: 'rgba(234, 88, 12, 0.16)',
      hoverShadowColor: 'rgba(234, 88, 12, 0.28)',
      zIndex: 2,
    },
    {
      num: '05',
      title: 'Submit Application',
      desc: 'Check your CIBIL Score and submit application',
      renderIcon: (color: string) => <CibilScoreGaugeIcon color={color} />,
      accentColor: '#0284c7',
      gradStart: '#bae6fd',
      gradMid: '#e0f2fe',
      gradEnd: '#f0f9ff',
      borderColor: '#7dd3fc',
      iconBorderColor: '#bae6fd',
      shadowColor: 'rgba(2, 132, 199, 0.16)',
      hoverShadowColor: 'rgba(2, 132, 199, 0.28)',
      zIndex: 1,
    },
  ];

  return (
    <section id="how-to-apply" className="cb-true-chevron-section" aria-labelledby="steps-section-title">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-chevron-header-area">
          <h2 id="steps-section-title" className="cb-chevron-title">
            Steps to apply for a <span className="cb-chevron-title-highlight">Loan</span>
          </h2>
        </div>

        {/* 5 Connected Horizontal Chevrons */}
        <ol className="cb-true-chevron-stepper">
          {steps.map((st, index) => {
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;

            return (
              <li
                key={st.num}
                className={`cb-true-chevron-step ${isFirst ? 'cb-step-first' : ''} ${isLast ? 'cb-step-last' : ''
                  }`}
                style={
                  {
                    '--step-accent': st.accentColor,
                    '--step-border': st.borderColor,
                    '--step-shadow': st.shadowColor,
                    '--step-hover-shadow': st.hoverShadowColor,
                    '--step-grad-start': st.gradStart,
                    '--step-grad-mid': st.gradMid,
                    '--step-grad-end': st.gradEnd,
                    '--step-z': st.zIndex,
                  } as React.CSSProperties
                }
              >
                {/* Outer Border Wrap with Matching Chevron Clip-Path */}
                <div className="cb-true-chevron-border">
                  {/* Inner Gradient Body with Matching Chevron Clip-Path */}
                  <div className="cb-true-chevron-body">
                    <div className="cb-true-chevron-content">
                      {/* Top Row: Number Badge & Circular White Icon */}
                      <div className="cb-true-chevron-top">
                        <div
                          className="cb-true-chevron-num"
                          style={{ backgroundColor: st.accentColor }}
                          aria-label={`Step ${st.num}`}
                        >
                          {st.num}
                        </div>

                        <div
                          className="cb-true-chevron-icon-wrap"
                          style={{ borderColor: st.iconBorderColor }}
                          aria-hidden="true"
                        >
                          {st.renderIcon(st.accentColor)}
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="cb-true-chevron-heading">{st.title}</h3>

                      {/* Step Description */}
                      <p className="cb-true-chevron-desc">{st.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Floating Chevron Arrow Connector Button on Apex (Steps 01-04) */}
                {!isLast && (
                  <div
                    className="cb-true-chevron-btn"
                    style={{ color: st.accentColor }}
                    aria-hidden="true"
                  >
                    <ChevronRight size={14} strokeWidth={3} />
                  </div>
                )}

                {/* Vertical Downward Connector for Mobile Layout */}
                {!isLast && (
                  <div className="cb-true-chevron-mobile-connector" aria-hidden="true">
                    <div className="cb-true-chevron-mobile-line" style={{ backgroundColor: st.accentColor }} />
                    <div
                      className="cb-true-chevron-mobile-badge"
                      style={{ color: st.accentColor, borderColor: st.iconBorderColor }}
                    >
                      <ChevronDown size={13} strokeWidth={3} />
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default IncredStepsSection;

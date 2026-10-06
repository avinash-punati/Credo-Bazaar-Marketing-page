import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Lock,
  Check,
  CheckCircle2,
  Camera,
  Eye,
  ShieldCheck,
} from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';
import homepageRealImg from '../../assets/homepage_real.png';
import featuredLoansRealImg from '../../assets/featured_loans_real.png';
import applyPhoneRealImg from '../../assets/apply_phone_real.png';
import step1PersonalImg from '../../assets/step1_personal_details.png';
import step2EmploymentImg from '../../assets/step2_employment_details.png';
import step3LoanDetailsImg from '../../assets/step3_loan_details.png';
import step4CibilImg from '../../assets/step4_cibil_verification.png';

interface ProcedureStep {
  id: number;
  badge: string;
  tabTitle: string;
  stepNumberBadge: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  directUrl: string;
}

export const BorrowerProcedureWalkthrough: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcedureStep[] = [
    {
      id: 1,
      badge: 'Portal Screen',
      tabTitle: '1. Visit Website',
      stepNumberBadge: 'Step 01',
      title: 'Visit CreditGenAI Portal',
      subtitle: 'Open https://www.creditgenai.com/ in your browser.',
      description:
        'Navigate to the official CreditGenAI portal. You will see the secure homepage with multi-bank credit solutions, instant approvals, and the top navigation bar featuring "Loan Products".',
      points: [
        'Direct access to India\'s multi-bank digital lending platform',
        'Transparent interest rate benchmarks and 100% paperless workflow',
        'Official website: https://www.creditgenai.com/',
      ],
      imageSrc: homepageRealImg,
      imageAlt: 'CreditGenAI Live Homepage Screenshot',
      directUrl: CHECKOUT_WEBSITE_URL,
    },
    {
      id: 2,
      badge: 'Loans Section',
      tabTitle: '2. Select Personal Loan',
      stepNumberBadge: 'Step 02',
      title: 'Choose Personal Loan from Featured Products',
      subtitle: 'Select from Personal Loan, Home Loan, Business Loans, or LAP.',
      description:
        'Scroll to "Featured Loan Products: Tailored Credit for Every Need" and click on "Personal Loan (Popular Choice)" or click "Apply →" to start your application.',
      points: [
        'Personal loans with instant approval up to ₹50 Lakhs',
        'Competitive rates starting from 10.49%* p.a.',
        'Zero physical paperwork — quick disbursal in 24–48 hours',
      ],
      imageSrc: featuredLoansRealImg,
      imageAlt: 'CreditGenAI Featured Loan Products Section Screenshot',
      directUrl: `${CHECKOUT_WEBSITE_URL}apply`,
    },
    {
      id: 3,
      badge: 'Auth Screen',
      tabTitle: '3. Verify Mobile (OTP)',
      stepNumberBadge: 'Step 03',
      title: 'Enter Mobile Number & Verify with OTP',
      subtitle: 'Takes 3–5 minutes • 256-Bit secure application session.',
      description:
        'Enter your 10-digit mobile number on the secure login screen and click "Send OTP →". Enter the 6-digit one-time password sent via SMS to initiate your private encrypted borrower session.',
      points: [
        'Structured 3-step timeline: Verify Mobile → Complete Application → Review & Submit',
        'Bank-grade 256-bit encryption with RBI-compliant digital authentication',
        'Zero passwords needed — fast mobile verification in 10 seconds',
      ],
      imageSrc: applyPhoneRealImg,
      imageAlt: 'CreditGenAI Verify Mobile Number Application Screenshot',
      directUrl: `${CHECKOUT_WEBSITE_URL}apply`,
    },
    {
      id: 4,
      badge: 'Form Step 1',
      tabTitle: '4. Personal Details',
      stepNumberBadge: 'Step 04',
      title: 'Step 1: Fill Personal Details & Identity',
      subtitle: 'Basic demographic and identity information.',
      description:
        'Fill in your First Name, Middle Name, Last Name, Email Address, Gender (Male / Female / Other), Date of Birth, PAN Number, PIN Code, City, and State. Your mobile number appears pre-verified with a green badge.',
      points: [
        'Pre-verified mobile session (+91 9014657014 Verified)',
        'Standard PAN & PIN Code validation ensures accurate credit mapping',
        'Click "CONTINUE →" to proceed to employment background',
      ],
      imageSrc: step1PersonalImg,
      imageAlt: 'CreditGenAI Loan Application Personal Details Step Screenshot',
      directUrl: `${CHECKOUT_WEBSITE_URL}apply`,
    },
    {
      id: 5,
      badge: 'Form Step 2',
      tabTitle: '5. Employment Details',
      stepNumberBadge: 'Step 05',
      title: 'Step 2: Provide Employment & Income Details',
      subtitle: 'Your employment and income information.',
      description:
        'Specify your Employment Type by selecting either "Salaried" or "Self-employed". Enter your Employee Sector, Total Work Experience from dropdowns, and your Monthly Take-home Income (e.g. ₹50,000).',
      points: [
        'Personal Details marked as Completed with green checkmark',
        'One-click toggle between Salaried and Self-employed profiles',
        'Instant mapping to active institutional lender salary criteria',
      ],
      imageSrc: step2EmploymentImg,
      imageAlt: 'CreditGenAI Loan Application Employment Details Step Screenshot',
      directUrl: `${CHECKOUT_WEBSITE_URL}apply`,
    },
    {
      id: 6,
      badge: 'Form Step 3',
      tabTitle: '6. Loan Details & Slider',
      stepNumberBadge: 'Step 06',
      title: 'Step 3: Customize Loan Amount & Tenure',
      subtitle: 'Enter your loan requirements and repayment preferences.',
      description:
        'Enter your Current Monthly EMI (e.g. ₹0), select your preferred Loan Tenure from the dropdown, adjust the interactive Loan Amount Slider (₹10,000 to ₹50,00,000), and choose your Loan Purpose.',
      points: [
        'Interactive loan amount slider up to ₹50,00,000',
        'Flexible repayment tenure options tailored to your monthly budget',
        'Click "CONTINUE →" to reach the credit profile & CIBIL consent screen',
      ],
      imageSrc: step3LoanDetailsImg,
      imageAlt: 'CreditGenAI Loan Application Loan Details Step Screenshot',
      directUrl: `${CHECKOUT_WEBSITE_URL}apply`,
    },
    {
      id: 7,
      badge: 'CIBIL Step 4',
      tabTitle: '7. CIBIL Verification',
      stepNumberBadge: 'Step 07',
      title: 'Step 4: Credit Profile & CIBIL Score Verification',
      subtitle: 'Review profile, provide consent, and initiate soft credit inquiry.',
      description:
        'Review your profile summary: Full Name (as per PAN), Date of Birth, Phone Number, and PAN Number. Authorize the platform to check your CIBIL/Credit Bureau score. Bank-grade security with a soft pull guarantee — zero impact on your credit score.',
      points: [
        'Clear summary of PAN, DOB, and phone verification details',
        'Explicit statutory consent checkboxes for Terms & CIBIL bureau pull',
        'Soft inquiry guarantee — zero negative impact on your CIBIL credit score',
        'Click "SUBMIT & PROCEED TO CREDIT CHECK →" to view instant pre-sanctions',
      ],
      imageSrc: step4CibilImg,
      imageAlt: 'CreditGenAI Credit Profile CIBIL Score Verification Step Screenshot',
      directUrl: `${CHECKOUT_WEBSITE_URL}apply`,
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="procedure" className="cb-section" style={{ background: '#070d19', color: '#ffffff', padding: '80px 0' }}>
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header" style={{ marginBottom: '36px' }}>
          <div
            className="cb-pill"
            style={{
              background: 'rgba(56, 189, 248, 0.12)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.25)',
            }}
          >
            <Camera size={14} />
            <span>Actual Screenshots from creditgenai.com</span>
          </div>
          <h2 className="cb-section-title" style={{ color: '#ffffff' }}>
            Complete Borrower Application Procedure
          </h2>
          <p className="cb-section-subtitle" style={{ color: '#94a3b8', maxWidth: '780px' }}>
            Follow the exact 7-step journey on <strong style={{ color: '#38bdf8' }}>https://www.creditgenai.com/</strong>: Visit the website, select Personal Loan, verify your mobile with OTP, fill Personal &amp; Employment details, adjust Loan Sliders, and verify CIBIL score.
          </p>
        </div>

        {/* 7-Step Horizontal Tab Navigator */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            background: 'rgba(15, 23, 42, 0.9)',
            padding: '6px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '32px',
            overflowX: 'auto',
          }}
          className="procedure-tab-bar"
        >
          {steps.map((s, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                style={{
                  flex: 1,
                  minWidth: '145px',
                  padding: '11px 10px',
                  borderRadius: '12px',
                  border: 'none',
                  background: isActive
                    ? 'linear-gradient(135deg, #2563eb, #1d4ed8)'
                    : 'transparent',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(37, 99, 235, 0.4)' : 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {isActive && <Check size={14} color="#67e8f9" />}
                <span>{s.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Step Content: Left Details & Right Actual Screenshot Frame */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.35fr',
            gap: '36px',
            alignItems: 'center',
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '36px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
          }}
          className="procedure-content-grid"
        >
          {/* Left Column: Explanatory Content */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span
                style={{
                  background: '#2563eb',
                  color: '#ffffff',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                }}
              >
                {current.stepNumberBadge}
              </span>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(37, 99, 235, 0.2)',
                  color: '#60a5fa',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                }}
              >
                <Eye size={12} />
                <span>{current.badge}</span>
              </div>
            </div>

            <h3
              style={{
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '8px',
                lineHeight: 1.25,
              }}
            >
              {current.title}
            </h3>

            <p style={{ color: '#38bdf8', fontSize: '0.925rem', fontWeight: 600, marginBottom: '14px' }}>
              {current.subtitle}
            </p>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '22px' }}>
              {current.description}
            </p>

            {/* Checkpoints */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {current.points.map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.865rem', color: '#e2e8f0', lineHeight: 1.45 }}>{pt}</span>
                </div>
              ))}
            </div>

            {/* Step Navigation Controls: Prev / Next Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: activeStep === 0 ? '#475569' : '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '11px 18px',
                  cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
              >
                <ArrowLeft size={15} />
                <span>Prev Step</span>
              </button>

              <button
                type="button"
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className="cb-btn cb-btn-primary"
                style={{
                  borderRadius: '10px',
                  padding: '11px 22px',
                  cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
                  opacity: activeStep === steps.length - 1 ? 0.45 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                <span>Next Step</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Column: Actual Website Screenshot Display */}
          <div
            style={{
              background: '#030712',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7)',
              position: 'relative',
            }}
          >
            {/* Browser Frame Top Bar */}
            <div
              style={{
                background: '#111827',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  flex: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                <Lock size={12} color="#10b981" />
                <span style={{ color: '#e2e8f0' }}>{current.directUrl}</span>
              </div>
              <span
                style={{
                  fontSize: '0.7rem',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                ● Real Screenshot
              </span>
            </div>

            {/* Real Screenshot Image Container */}
            <div
              style={{
                position: 'relative',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',
                maxHeight: '480px',
                overflow: 'hidden',
              }}
            >
              <img
                src={current.imageSrc}
                alt={current.imageAlt}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '480px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />

              {/* Bottom Transparent Action Pill */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '14px',
                  right: '14px',
                  background: 'rgba(15, 23, 42, 0.92)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(37, 99, 235, 0.4)',
                  borderRadius: '12px',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <ShieldCheck size={16} color="#38bdf8" />
                <span style={{ fontSize: '0.78rem', color: '#ffffff' }}>
                  Authentic screen from <strong>creditgenai.com</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

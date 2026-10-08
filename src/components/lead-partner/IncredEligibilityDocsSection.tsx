import React from 'react';
import {
  UserCheck,
  FileCheck2,
  CheckCircle2,
  Shield,
  Info,
} from 'lucide-react';

export const IncredEligibilityDocsSection: React.FC = () => {
  const eligibilityCriteria = [
    { label: 'Age Group', value: '21 to 60 Years' },
    { label: 'Employment', value: 'Salaried or Self-Employed' },
    { label: 'Minimum Income', value: '₹30,000 / month net income' },
    { label: 'Credit Score', value: '650+ (First-time borrowers welcome)' },
    { label: 'Citizenship', value: 'Indian Resident' },
  ];

  const documentsRequired = [
    {
      title: 'PAN Card',
      desc: 'Used for instant identity and soft credit check.',
      pill: 'Identity Proof',
    },
    {
      title: 'Aadhaar Card',
      desc: 'Quick paperless verification completed via mobile OTP.',
      pill: 'Address Proof',
    },
    {
      title: "Last 6 Months' Bank Statement",
      desc: 'Fast digital upload via NetBanking or Account Aggregator.',
      pill: 'Bank Proof',
    },
    {
      title: 'Income Proof',
      desc: 'Last 3 months salary slip for salaried, or recent ITR for self-employed.',
      pill: 'Income Record',
    },
  ];

  return (
    <section id="eligibility" className="cb-section cb-incred-elig-section">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <span>Eligibility &amp; Documents</span>
          </div>
          <h2 className="cb-section-title">Simple Eligibility &amp; Minimal Documents</h2>
          <p className="cb-section-subtitle">
            Check what you need to qualify for quick loan approval with zero physical paperwork.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="cb-incred-elig-grid">
          {/* Card 1: Eligibility Criteria */}
          <div className="cb-incred-elig-card">
            <div className="cb-incred-elig-card-header">
              <div className="cb-incred-elig-icon-box">
                <UserCheck size={24} color="#2563eb" />
              </div>
              <div>
                <h3 className="cb-incred-elig-card-title">Who Can Apply?</h3>
                <p className="cb-incred-elig-card-sub">Basic requirements for instant approval</p>
              </div>
            </div>

            <div className="cb-incred-elig-list">
              {eligibilityCriteria.map((item, i) => (
                <div key={i} className="cb-incred-elig-row">
                  <div className="cb-incred-check-circle">
                    <CheckCircle2 size={18} color="#059669" />
                  </div>
                  <div className="cb-incred-elig-details">
                    <span className="cb-incred-elig-label">{item.label}</span>
                    <span className="cb-incred-elig-val">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="cb-incred-elig-tip">
              <span className="cb-info-icon-badge" aria-hidden="true">
                <Info size={16} />
              </span>
              <span>Checking your eligibility will never affect your credit score.</span>
            </div>
          </div>

          {/* Card 2: Documents Required */}
          <div className="cb-incred-elig-card">
            <div className="cb-incred-elig-card-header">
              <div className="cb-incred-elig-icon-box">
                <FileCheck2 size={24} color="#059669" />
              </div>
              <div>
                <h3 className="cb-incred-elig-card-title">Documents Required</h3>
                <p className="cb-incred-elig-card-sub">100% digital &amp; paperless upload</p>
              </div>
            </div>

            <div className="cb-incred-docs-list">
              {documentsRequired.map((doc, i) => (
                <div key={i} className="cb-incred-doc-item">
                  <div className="cb-incred-doc-top">
                    <span className="cb-incred-doc-title">{doc.title}</span>
                    <span className="cb-incred-doc-tag">{doc.pill}</span>
                  </div>
                  <p className="cb-incred-doc-desc">{doc.desc}</p>
                </div>
              ))}
            </div>

            <div className="cb-incred-elig-tip">
              <Shield size={16} color="#059669" />
              <span>Your data is protected with 256-bit bank grade security.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncredEligibilityDocsSection;

import React from 'react';
import { FileEdit, Cpu, ShieldCheck, Scale, Banknote } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Loan Request',
      description: 'Specify your loan amount, funding purpose, and business or income profile in a fast 2-minute digital form.',
      icon: FileEdit,
      badge: 'Quick & Paperless',
    },
    {
      number: '02',
      title: 'AI Multi-Lender Matching',
      description: 'Our engine maps your financial parameters against the active credit policies of 50+ institutional banks & NBFCs.',
      icon: Cpu,
      badge: '50+ Institutions',
    },
    {
      number: '03',
      title: 'Soft Credit Evaluation',
      description: 'Get matched without multiple hard bureau inquiries that damage your CIBIL score. Your credit profile remains protected.',
      icon: ShieldCheck,
      badge: 'CIBIL Safe',
    },
    {
      number: '04',
      title: 'Compare Offers Side-by-Side',
      description: 'Review competitive sanction quotes with 100% transparent interest rates, tenure, EMI, and processing fees. Zero broker bias.',
      icon: Scale,
      badge: 'Unbiased Choice',
    },
    {
      number: '05',
      title: 'Direct Digital Disbursal',
      description: 'Complete digital KYC, receive official institutional sanction letters, and get funds disbursed directly to your bank account.',
      icon: Banknote,
      badge: 'Fast Turnaround',
    },
  ];

  return (
    <section id="how-it-works" className="cb-section cb-section-alt">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">

          <h2 className="cb-section-title">How Getting a Loan Works on Credo Bazaar</h2>
          <p className="cb-section-subtitle">
            A transparent, 5-step digital path from loan request to institutional fund disbursal.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="cb-timeline-grid">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="cb-timeline-card">
                <div className="cb-timeline-badge">{step.badge}</div>
                <div className="cb-timeline-number">{step.number}</div>
                <div className="cb-timeline-icon-wrap">
                  <IconComponent size={24} />
                </div>
                <h3 className="cb-timeline-step-title">{step.title}</h3>
                <p className="cb-timeline-step-desc">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

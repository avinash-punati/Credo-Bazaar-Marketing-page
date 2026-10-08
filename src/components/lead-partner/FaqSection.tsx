import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How quickly will I receive the loan money?',
      a: 'Once your quick online application and mobile OTP verification are completed, funds are transferred directly into your bank account within 15 minutes to 24 hours.',
    },
    {
      q: 'Will checking my offers affect my CIBIL credit score?',
      a: 'No, not at all! Checking your loan options on Credo Bazaar is a soft check that leaves your CIBIL score completely untouched.',
    },
    {
      q: 'What is the minimum income required to apply?',
      a: 'A minimum net income of ₹15,000 per month is required, whether you are a salaried employee or self-employed.',
    },
    {
      q: 'What interest rates and repayment tenures are available?',
      a: 'Interest rates start as low as 10.49% p.a. with flexible repayment tenures from 1 to 5 years (12 to 60 months).',
    },
    {
      q: 'What documents do I need to submit?',
      a: 'Zero physical paperwork is needed. You only need your PAN card, Aadhaar for mobile OTP verification, and your last 3 months’ bank statement.',
    },
    {
      q: 'Can I repay or close my loan early?',
      a: 'Yes, our partner lenders provide easy prepayment and foreclosure options after the initial lock-in period, helping you save on interest.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="cb-section cb-faq-section">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <span>FAQs</span>
          </div>
          <h2 className="cb-section-title">Frequently Asked Questions</h2>
          <p className="cb-section-subtitle">
            Quick, clear answers to common questions about your loan, interest rates, and disbursal.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="cb-faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`cb-faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggle(idx)}
              >
                <div className="cb-faq-question">
                  <span>{faq.q}</span>
                  <div className={`cb-faq-arrow ${isOpen ? 'open' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </div>
                {isOpen && (
                  <div className="cb-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions? Checkout Website Action Button in Centre */}
        <div className="cb-faq-more-help-wrap">
          <a
            href="https://www.creditgenai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cb-faq-checkout-website-btn"
          >
            <span>Have more questions? Checkout Website</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

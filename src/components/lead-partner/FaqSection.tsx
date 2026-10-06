import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Does requesting a loan on Credo Bazaar damage my CIBIL score?',
      answer:
        'No. Credo Bazaar utilizes an initial AI soft eligibility match that has zero negative impact on your credit bureau score. Unlike offline DSAs who submit physical files across multiple branches triggering hard credit inquiries, your credit profile remains fully protected until you personally select and accept your preferred lender sanction.',
    },
    {
      question: 'Are there any upfront fees or hidden charges for borrowers?',
      answer:
        'No. Credo Bazaar is 100% free for borrowers. We never charge file-login fees, upfront advisory charges, or hidden consulting commissions. Any official lender processing fees are clearly detailed on your formal sanction letter.',
    },
    {
      question: 'I already have a DSA or local broker working on my loan. Can I still use Credo Bazaar?',
      answer:
        'Yes, absolutely. There is zero exclusivity. You can use Credo Bazaar as a transparent parallel benchmark. If our network of 50+ institutional banks and NBFCs offers you lower interest rates, better tenure, or higher sanction amounts, you are free to choose the superior option.',
    },
    {
      question: 'How many banks and NBFCs will review my loan request?',
      answer:
        'Credo Bazaar is connected with over 50+ institutional lenders, including leading PSU banks, private sector banks, and top NBFCs. Our matching algorithm automatically routes your requirement to institutions whose active underwriting criteria best fit your financial profile.',
    },
    {
      question: 'How quickly can I get loan sanction and disbursal?',
      answer:
        'Pre-qualified match indications are generated in real-time. For standard business and MSME loans, formal institutional sanctions are typically delivered within 24 to 72 hours, with fund disbursal directly following digital verification and documentation.',
    },
    {
      question: 'How is my financial and personal data protected?',
      answer:
        'All documents and sensitive financial identifiers (PAN, Aadhaar, GST, bank statements) are encrypted using bank-grade 256-bit encryption. Credo Bazaar strictly complies with RBI Digital Lending Guidelines and the Digital Personal Data Protection (DPDP) Act 2023. We never share your data via unencrypted channels like WhatsApp.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="cb-section">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="cb-section-title">Frequently Asked Questions</h2>
          <p className="cb-section-subtitle">
            Everything you need to know about requesting a loan through Credo Bazaar.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="cb-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`cb-faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="cb-faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className="cb-faq-icon"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--cb-transition-fast)',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="cb-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA in FAQ */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <a
            href={CHECKOUT_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cb-btn cb-btn-secondary"
            style={{ padding: '12px 28px', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Have more questions? Checkout Website</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import '../components/lead-partner/LeadPartner.css';
import {
  MarketingHeader,
  LeadPartnerHero,
  DisbursementHistorySection,
  BorrowerProcedureWalkthrough,
  ProcessTimeline,
  WhyNotJustDSA,
  BorrowerBenefits,
  LoanProductsSection,
  ConversationDemo,
  ReferralJourney,
  MarketingSection,
  FaqSection,
  LeadPartnerCTA,
  MarketingFooter,
} from '../components/lead-partner';

export const LeadPartnerPage: React.FC = () => {
  return (
    <div
      className="cb-page-lead-partner"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Sticky Header Navigation */}
      <MarketingHeader />

      <main style={{ flex: 1 }}>
        {/* 1. Hero — Borrower Value Proposition & Live Demo */}
        <LeadPartnerHero />

        {/* 2. Track Record & Disbursement History (Total Loans Approved, Customers, Disbursed) */}
        <DisbursementHistorySection />

        {/* 3. Complete Step-by-Step Borrower Procedure on CreditGenAI with Real Screenshots */}
        <BorrowerProcedureWalkthrough />

        {/* 4. How Getting a Loan Works — 5-Step Process */}
        <ProcessTimeline />

        {/* 5. Already Have a DSA? — Persuasion & Pitfalls */}
        <WhyNotJustDSA />

        {/* 6. Borrower Benefits & Side-by-Side Comparison */}
        <BorrowerBenefits />

        {/* 7. Comprehensive Loan Solutions / Products (Personal, Home, Business, LAP) */}
        <LoanProductsSection />

        {/* 8. Real Scenario — Borrower Consultation Demonstration */}
        <ConversationDemo />

        {/* 9. Borrower Loan Fulfillment Journey (7 Steps) */}
        <ReferralJourney />

        {/* 10. Institutional Power Banner */}
        <MarketingSection />

        {/* 11. Borrower FAQ */}
        <FaqSection />

        {/* 12. Final Conversion CTA */}
        <LeadPartnerCTA />
      </main>

      {/* Regulatory Notice & Footer */}
      <MarketingFooter />
    </div>
  );
};

export default LeadPartnerPage;

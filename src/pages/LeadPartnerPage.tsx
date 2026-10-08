import React from 'react';
import '../components/lead-partner/LeadPartner.css';
import {
  MarketingHeader,
  LeadPartnerHero,
  IncredFeaturesSection,
  IncredEligibilityDocsSection,
  IncredStepsSection,
  CreditScoreSection,
  CustomerTestimonials,
  FaqSection,
  CredoAppDownloadSection,
  MarketingFooter,
  MobileFloatingCTA,
} from '../components/lead-partner';

export const LeadPartnerPage: React.FC = () => {
  return (
    <div
      className="cb-page-lead-partner"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff' }}
    >
      {/* Sticky Marketing Header Navigation */}
      <MarketingHeader />

      <main style={{ flex: 1 }}>
        {/* Screen 1: InCred Personal Loan Hero with Interactive Eligibility Form */}
        <LeadPartnerHero />

        {/* Screen 2: Why Choose Us (6-Card 2x3 Grid) */}
        <IncredFeaturesSection />

        {/* Screen 4: Eligibility Criteria & Documentation Required */}
        <IncredEligibilityDocsSection />

        {/* Screen 5: Steps to Apply for Instant Personal Loan (5-Step Chevron Stepper) */}
        <IncredStepsSection />

        {/* Screen 6: Check Your Credit Score For Free (Experian) */}
        <CreditScoreSection />

        {/* Screen 7: Customer Success Stories & Social Proof */}
        <CustomerTestimonials />

        {/* Screen 8: Frequently Asked Questions (Borrower FAQs) */}
        <FaqSection />

        {/* Screen 9: Download Credo Bazaar Mobile App (Available on Playstore and iOS store) */}
        <CredoAppDownloadSection />
      </main>

      {/* Screen 10: Regulatory Notice, Banking Disclosures & Clean Footer */}
      <MarketingFooter />

      {/* Sticky Mobile Floating Fast-Track CTA */}
      <MobileFloatingCTA />
    </div>
  );
};

export default LeadPartnerPage;

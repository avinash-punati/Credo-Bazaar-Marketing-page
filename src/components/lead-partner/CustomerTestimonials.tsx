import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Prachi Desai',
      city: 'Pune',
      purpose: 'Medical Emergency',
      amount: '₹6 Lakhs Disbursed',
      rating: 5,
      review:
        'When my father was admitted, I needed immediate funds. Credo Bazaar got me sanctioned within minutes at 10.49% p.a., and money was credited the next morning. Zero physical documents or hassle!',
    },
    {
      id: 2,
      name: 'Rohan Verma',
      city: 'Bengaluru',
      purpose: 'Home Renovation',
      amount: '₹8 Lakhs Disbursed',
      rating: 5,
      review:
        'Compared multiple quotes online without visiting any bank branches. Saved ₹42,000 on interest vs my primary bank offer. Paperless DigiLocker eKYC was super fast!',
    },
    {
      id: 3,
      name: 'Ananya Sharma',
      city: 'Hyderabad',
      purpose: 'Wedding Expenses',
      amount: '₹5 Lakhs Disbursed',
      rating: 5,
      review:
        'The best part is that my CIBIL score remained completely untouched during the eligibility check. No spam calls from brokers—just pure, transparent personal loan options.',
    },
  ];

  return (
    <section id="reviews" className="cb-section cb-incred-stories-section">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <Star size={14} fill="#2563eb" color="#2563eb" />
            <span>Customer Reviews</span>
          </div>
          <h2 className="cb-section-title">Trusted by Thousands of Borrowers</h2>
          <p className="cb-section-subtitle">
            Read real reviews from borrowers who found the best loan offers through Credo Bazaar.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="cb-incred-stories-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="cb-incred-story-card">
              <div className="cb-story-top">
                <div className="cb-story-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="cb-story-purpose">{rev.purpose}</span>
              </div>

              <p className="cb-story-quote">"{rev.review}"</p>

              <div className="cb-story-author-row">
                <div className="cb-story-author-avatar">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="cb-story-author-name">{rev.name}</div>
                  <div className="cb-story-author-meta">{rev.city} • <span style={{ color: '#2563eb', fontWeight: 700 }}>{rev.amount}</span></div>
                </div>
                <div className="cb-story-verified" title="Verified Borrower Disbursal">
                  <CheckCircle2 size={16} color="#059669" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;

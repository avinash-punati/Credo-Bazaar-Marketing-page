import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarketingSection: React.FC = () => {
  return (
    <section className="cb-section" style={{ padding: '40px 0 80px' }}>
      <div className="cb-container">
        <div
          className="cb-marketing-banner"
          style={{ gridTemplateColumns: '1fr', padding: '52px 48px' }}
        >
          <div className="cb-marketing-banner-text" style={{ maxWidth: '860px' }}>
            <div
              className="cb-pill cb-pill-dark"
              style={{ alignSelf: 'flex-start' }}
            >
              <Sparkles size={14} />
              <span>Institutional Power</span>
            </div>

            <h2 className="cb-marketing-h2">Empower Your Next Loan Request.</h2>

            <p className="cb-marketing-h3">
              Don&apos;t settle for high broker margins or limited single-bank choices.
            </p>

            <p className="cb-marketing-p">
              Whether you are an established business scaling manufacturing operations or an entrepreneur securing working capital, Credo Bazaar unlocks direct access to 50+ leading banks and NBFCs with complete transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

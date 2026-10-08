import React from 'react';

interface LenderItem {
  id: string;
  name: string;
  src: string;
  height?: number;
}

const lenders: LenderItem[] = [
  { id: 'hdfc', name: 'HDFC Bank', src: '/logos/hdfc.svg', height: 26 },
  { id: 'sbi', name: 'State Bank of India', src: '/logos/sbi.svg', height: 28 },
  { id: 'icici', name: 'ICICI Bank', src: '/logos/icici.svg', height: 25 },
  { id: 'axis', name: 'Axis Bank', src: '/logos/axis.svg', height: 25 },
  { id: 'kotak', name: 'Kotak Mahindra Bank', src: '/logos/kotak.svg', height: 25 },
  { id: 'idfc', name: 'IDFC FIRST Bank', src: '/logos/idfc_user.png', height: 28 },
  { id: 'bob', name: 'Bank of Baroda', src: '/logos/bob.svg', height: 27 },
  { id: 'bajaj', name: 'Bajaj Finserv', src: '/logos/bajaj.svg', height: 26 },

];

export const LenderMarquee: React.FC = () => {
  return (
    <section className="pw-marquee-section">
      <div className="cb-container">
        <div className="pw-marquee-header">
          <span className="pw-marquee-label">Compare Real-Time Offers from Leading Banks &amp; NBFCs Across India</span>
        </div>
      </div>

      <div className="pw-marquee-container">
        <div className="pw-marquee-fade-left" />
        <div className="pw-marquee-fade-right" />
        <div className="pw-marquee-track">
          {/* Track 1 */}
          <div className="pw-marquee-group">
            {lenders.map((lender, index) => (
              <div key={`track-1-${lender.id}-${index}`} className="pw-lender-slot">
                <div className="pw-lender-logo-wrapper" title={lender.name}>
                  <img
                    src={lender.src}
                    alt={lender.name}
                    className="pw-lender-brand-img"
                    style={{ height: lender.height ? `${lender.height}px` : '28px' }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 (Seamless loop duplicate) */}
          <div className="pw-marquee-group" aria-hidden="true">
            {lenders.map((lender, index) => (
              <div key={`track-2-${lender.id}-${index}`} className="pw-lender-slot">
                <div className="pw-lender-logo-wrapper" title={lender.name}>
                  <img
                    src={lender.src}
                    alt={lender.name}
                    className="pw-lender-brand-img"
                    style={{ height: lender.height ? `${lender.height}px` : '28px' }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Info, HelpCircle } from 'lucide-react';
import { CHECKOUT_WEBSITE_URL } from './constants';

export const EmiCalculatorSection: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [interestRate, setInterestRate] = useState<number>(12.5);
  const [tenureYears, setTenureYears] = useState<number>(3);

  // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  const calculation = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (P <= 0 || r <= 0 || n <= 0) {
      return { emi: 0, totalInterest: 0, totalPayment: 0, principalRatio: 100 };
    }

    const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalPayment = emi * n;
    const totalInterest = Math.max(0, totalPayment - P);
    const principalRatio = Math.round((P / totalPayment) * 100);

    return {
      emi,
      totalInterest,
      totalPayment,
      principalRatio,
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatRupee = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="emi-calculator" className="cb-section cb-incred-calc-section">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <span>EMI Calculator</span>
          </div>
          <h2 className="cb-section-title">Personal Loan EMI Calculator</h2>
          <p className="cb-section-subtitle">
            Calculate your estimated monthly installment and plan your finances with 100% transparency.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="cb-incred-calc-grid">
          {/* Left Column: Sliders */}
          <div className="cb-incred-calc-controls">
            {/* 1. Loan Amount */}
            <div className="cb-calc-field">
              <div className="cb-calc-field-top">
                <label className="cb-calc-label">Loan Amount</label>
                <div className="cb-calc-val-pill">{formatRupee(loanAmount)}</div>
              </div>
              <input
                type="range"
                min={50000}
                max={1500000}
                step={25000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="incred-range-slider"
                aria-label="Loan Amount"
              />
              <div className="cb-calc-range-marks">
                <span>₹50,000</span>
                <span>₹15,00,000 (15 Lakhs)</span>
              </div>
            </div>

            {/* 2. Interest Rate */}
            <div className="cb-calc-field">
              <div className="cb-calc-field-top">
                <label className="cb-calc-label">Interest Rate (% p.a.)</label>
                <div className="cb-calc-val-pill">{interestRate}% p.a.</div>
              </div>
              <input
                type="range"
                min={10.49}
                max={36}
                step={0.25}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="incred-range-slider"
                aria-label="Interest Rate"
              />
              <div className="cb-calc-range-marks">
                <span>Min 10.49%</span>
                <span>Max 36.00%</span>
              </div>
            </div>

            {/* 3. Loan Tenure */}
            <div className="cb-calc-field">
              <div className="cb-calc-field-top">
                <label className="cb-calc-label">Loan Tenure</label>
                <div className="cb-calc-val-pill">{tenureYears} {tenureYears === 1 ? 'Year' : 'Years'} ({tenureYears * 12} Months)</div>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="incred-range-slider"
                aria-label="Loan Tenure"
              />
              <div className="cb-calc-range-marks">
                <span>Min 1 Year</span>
                <span>Max 5 Years</span>
              </div>
            </div>

            {/* InCred Benefits of EMI Calculator Callout */}
            <div className="cb-incred-calc-benefits">
              <div className="cb-calc-benefits-title">
                <span className="cb-info-icon-badge" aria-hidden="true">
                  <Info size={16} />
                </span>
                <span>Benefits of Using the Credo Bazaar EMI Calculator:</span>
              </div>
              <ul className="cb-calc-benefits-list">
                <li>Easy personal loan planning tool that's simple to access</li>
                <li>Instant EMI calculations for those looking to apply for an online personal loan</li>
                <li>Compare EMI values with different tenures for your eligible rate of interest</li>
                <li>Zero surprise deductions—accurate amortization breakdown</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Output Summary Card */}
          <div className="cb-incred-calc-results">
            <div className="cb-calc-result-card">
              <div className="cb-calc-result-header">
                <span className="cb-calc-emi-tag">Your Monthly EMI</span>
                <div className="cb-calc-emi-amount">{formatRupee(calculation.emi)}</div>
                <div className="cb-calc-emi-sub">@{interestRate}% Interest Per Annum</div>
              </div>

              {/* Breakdown Bar */}
              <div className="cb-calc-breakdown-bar-wrap">
                <div className="cb-calc-breakdown-labels">
                  <span>Principal: {calculation.principalRatio}%</span>
                  <span>Interest: {100 - calculation.principalRatio}%</span>
                </div>
                <div className="cb-calc-breakdown-bar">
                  <div
                    className="cb-calc-bar-principal"
                    style={{ width: `${calculation.principalRatio}%` }}
                  />
                  <div
                    className="cb-calc-bar-interest"
                    style={{ width: `${100 - calculation.principalRatio}%` }}
                  />
                </div>
              </div>

              {/* Rupee Line Items */}
              <div className="cb-calc-metrics">
                <div className="cb-calc-metric-row">
                  <span className="cb-calc-metric-label">Principal Amount</span>
                  <span className="cb-calc-metric-val">{formatRupee(loanAmount)}</span>
                </div>
                <div className="cb-calc-metric-row">
                  <span className="cb-calc-metric-label">Total Interest Payable</span>
                  <span className="cb-calc-metric-val" style={{ color: '#2563eb' }}>
                    {formatRupee(calculation.totalInterest)}
                  </span>
                </div>
                <div className="cb-calc-metric-row total">
                  <span className="cb-calc-metric-label">Total Repayment Amount</span>
                  <span className="cb-calc-metric-val">{formatRupee(calculation.totalPayment)}</span>
                </div>
              </div>

              {/* Direct Apply Button */}
              <a
                href="#hero-apply"
                className="incred-submit-btn"
                style={{ textDecoration: 'none', marginTop: 18 }}
              >
                <span>Apply for this Loan Amount</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* APR & Loan Tenure Transparency Cards (as on InCred) */}
            <div className="cb-incred-apr-grid">
              <div className="cb-incred-apr-card">
                <div className="cb-apr-card-title">Annual Percentage Rate (APR)</div>
                <div className="cb-apr-row">
                  <div>
                    <span className="cb-apr-label">Minimum</span>
                    <strong className="cb-apr-val">10.49%</strong>
                  </div>
                  <div>
                    <span className="cb-apr-label">Maximum</span>
                    <strong className="cb-apr-val">36.00%</strong>
                  </div>
                </div>
              </div>

              <div className="cb-incred-apr-card">
                <div className="cb-apr-card-title">Personal Loan Tenure</div>
                <div className="cb-apr-row">
                  <div>
                    <span className="cb-apr-label">Minimum</span>
                    <strong className="cb-apr-val">1 Year</strong>
                  </div>
                  <div>
                    <span className="cb-apr-label">Maximum</span>
                    <strong className="cb-apr-val">5 Years</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Loan Breakup Example Card (Exact InCred section) */}
        <div className="cb-incred-example-card">
          <div className="cb-example-header">
            <Info size={20} color="#2563eb" />
            <div>
              <h4 className="cb-example-title">Quick Loan Breakup Example</h4>
              <p className="cb-example-sub">
                This is a representative illustration. Final APR and sanctioned amount will depend on your individual credit assessment.
              </p>
            </div>
          </div>

          <div className="cb-example-scenario">
            <p className="cb-example-story">
              <strong>Representative Case:</strong> Mr. Rohan needs an urgent loan of <strong>₹1,00,000</strong> for home renovation. He applied through Credo Bazaar and his loan was approved within minutes.
            </p>

            <div className="cb-example-stats-grid">
              <div className="cb-stat-pill">
                <span>Sanctioned Amount</span>
                <strong>₹1,00,000</strong>
              </div>
              <div className="cb-stat-pill">
                <span>Interest Rate (p.a.)</span>
                <strong>11.00%</strong>
              </div>
              <div className="cb-stat-pill">
                <span>Loan Tenure</span>
                <strong>2 Years (24 Mo)</strong>
              </div>
              <div className="cb-stat-pill">
                <span>Monthly EMI</span>
                <strong style={{ color: '#2563eb' }}>₹4,661 / mo</strong>
              </div>
              <div className="cb-stat-pill">
                <span>Total Interest</span>
                <strong>₹11,858</strong>
              </div>
              <div className="cb-stat-pill">
                <span>Total Repayment</span>
                <strong>₹1,11,858</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiCalculatorSection;

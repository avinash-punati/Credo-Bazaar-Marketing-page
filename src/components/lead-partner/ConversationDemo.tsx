import React, { useState, useEffect } from 'react';
import {
  CheckCheck,
  Shield,
  RotateCcw,
  Sparkles,
  Info,
} from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'Vikram (Business Owner)' | 'Credo Bazaar Credit Advisor';
  role: 'borrower' | 'advisor';
  text: string;
  time: string;
  hasLinkCard?: boolean;
}

export const ConversationDemo: React.FC = () => {
  const allMessages: ChatMessage[] = [
    {
      id: 1,
      sender: 'Vikram (Business Owner)',
      role: 'borrower',
      text: 'Hi, I need ₹60 Lakhs working capital for my manufacturing unit. My local DSA is pushing a 14.2% rate with a 2% upfront commission. Can Credo Bazaar help me get better terms?',
      time: '10:14 AM',
    },
    {
      id: 2,
      sender: 'Credo Bazaar Credit Advisor',
      role: 'advisor',
      text: 'Hello Vikram! Yes, definitely. Offline brokers often push lenders that pay them the highest commission. On Credo Bazaar, we match your GST turnover and banking health across 50+ institutional lenders with zero agent bias. You qualify for prime MSME rates starting at 9.20% p.a.',
      time: '10:15 AM',
    },
    {
      id: 3,
      sender: 'Vikram (Business Owner)',
      role: 'borrower',
      text: "Will comparing across multiple lenders hurt my CIBIL score? My DSA warned me about multiple hits.",
      time: '10:16 AM',
    },
    {
      id: 4,
      sender: 'Credo Bazaar Credit Advisor',
      role: 'advisor',
      text: "That CIBIL damage only happens when offline DSAs circulate your physical file across branches. Credo Bazaar runs an initial AI soft match with zero credit score impact. You only trigger one formal inquiry when you choose your winning sanction.",
      time: '10:17 AM',
    },
    {
      id: 5,
      sender: 'Vikram (Business Owner)',
      role: 'borrower',
      text: 'That will save me more than ₹2.5 Lakhs in interest and fees! How do I submit my request?',
      time: '10:18 AM',
    },
    {
      id: 6,
      sender: 'Credo Bazaar Credit Advisor',
      role: 'advisor',
      text: 'Just checkout our website below, complete the 2-minute request form, and review pre-sanction offers from top banks & NBFCs.',
      time: '10:19 AM',
      hasLinkCard: true,
    },
    {
      id: 7,
      sender: 'Vikram (Business Owner)',
      role: 'borrower',
      text: 'Checking it out right now. Thanks for the transparent guidance!',
      time: '10:20 AM',
    },
  ];

  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isPlaying && visibleCount < allMessages.length) {
      setIsTyping(true);
      timer = setTimeout(() => {
        setIsTyping(false);
        setVisibleCount((prev) => prev + 1);
      }, 1600);
    }
    return () => clearTimeout(timer);
  }, [visibleCount, isPlaying, allMessages.length]);

  const handleReset = () => {
    setVisibleCount(0);
    setIsTyping(false);
    setIsPlaying(true);
  };

  const currentNextSender =
    visibleCount < allMessages.length ? allMessages[visibleCount].sender : null;

  return (
    <section id="example-conversation" className="cb-section">
      <div className="cb-container">
        {/* Section Header */}
        <div className="cb-section-header">
          <div className="cb-pill cb-pill-blue">
            <Sparkles size={14} />
            <span>Real-World Scenario</span>
          </div>
          <h2 className="cb-section-title">See How Credo Bazaar Solves the Borrower Dilemma</h2>
          <p className="cb-section-subtitle">
            An inside look at how borrowers transition from high-interest broker pitches to transparent institutional sanctions.
          </p>
        </div>

        {/* Chat Card Wrapper */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            background: 'var(--cb-surface)',
            borderRadius: '24px',
            border: '1px solid var(--cb-border-subtle)',
            boxShadow: 'var(--cb-shadow-lg)',
            overflow: 'hidden',
          }}
        >
          {/* Mock Phone / WhatsApp-style Header */}
          <div
            style={{
              background: '#0f172a',
              color: '#ffffff',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2563eb, #38bdf8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                CB
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                  Credo Bazaar Advisory Desk
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#4ade80',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#4ade80',
                      display: 'inline-block',
                    }}
                  />
                  Institutional Underwriting Active
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="cb-btn cb-btn-secondary"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '6px 12px',
                fontSize: '0.8rem',
              }}
              title="Replay conversation"
            >
              <RotateCcw size={14} />
              <span>Replay</span>
            </button>
          </div>

          {/* Chat Messages Body */}
          <div
            style={{
              padding: '24px 20px',
              background: '#f8fafc',
              minHeight: '440px',
              maxHeight: '520px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Timestamp Notice */}
            <div style={{ textAlign: 'center', margin: '4px 0 10px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--cb-text-muted)',
                  background: 'var(--cb-surface)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  border: '1px solid var(--cb-border-subtle)',
                }}
              >
                Today • Live Borrower Consultation
              </span>
            </div>

            {allMessages.slice(0, visibleCount).map((msg) => {
              const isBorrower = msg.role === 'borrower';
              return (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isBorrower ? 'flex-start' : 'flex-end',
                    animation: 'fadeIn 0.3s ease-out',
                  }}
                >
                  {/* Sender Name */}
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--cb-text-muted)',
                      marginBottom: '4px',
                      paddingLeft: isBorrower ? '4px' : '0',
                      paddingRight: !isBorrower ? '4px' : '0',
                    }}
                  >
                    {msg.sender}
                  </span>

                  {/* Message Bubble */}
                  <div
                    style={{
                      maxWidth: '85%',
                      background: isBorrower ? '#ffffff' : '#eff6ff',
                      color: isBorrower ? '#0f172a' : '#1e3a8a',
                      padding: '12px 16px',
                      borderRadius: isBorrower
                        ? '16px 16px 16px 4px'
                        : '16px 16px 4px 16px',
                      border: isBorrower
                        ? '1px solid #e2e8f0'
                        : '1px solid #bfdbfe',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                      position: 'relative',
                    }}
                  >
                    <div>{msg.text}</div>

                    {/* Rich Link Card inside Chat */}
                    {msg.hasLinkCard && (
                      <div
                        style={{
                          marginTop: '12px',
                          background: '#ffffff',
                          borderRadius: '12px',
                          border: '1px solid #93c5fd',
                          overflow: 'hidden',
                          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                        }}
                      >
                        <div
                          style={{
                            background: '#1e3a8a',
                            color: '#ffffff',
                            padding: '10px 14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>
                            Credo Bazaar • Multi-Lender Platform
                          </span>
                          <Shield size={14} />
                        </div>
                        <div style={{ padding: '12px 14px' }}>
                          <p
                            style={{
                              fontSize: '0.82rem',
                              color: '#475569',
                              margin: 0,
                              lineHeight: 1.4,
                            }}
                          >
                            Explore loan options across 50+ institutional banks and NBFCs with zero agent bias.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Time & Delivery ticks */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '4px',
                        marginTop: '4px',
                        fontSize: '0.68rem',
                        color: 'var(--cb-text-muted)',
                      }}
                    >
                      <span>{msg.time}</span>
                      <CheckCheck size={13} color="#2563eb" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  padding: '8px 14px',
                  borderRadius: '16px',
                  width: 'fit-content',
                  border: '1px solid #e2e8f0',
                  animation: 'pulse 1.5s infinite',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  {currentNextSender ? `${currentNextSender} is typing...` : 'Typing...'}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    gap: '3px',
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#2563eb',
                    }}
                  />
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#2563eb',
                    }}
                  />
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#2563eb',
                    }}
                  />
                </span>
              </div>
            )}
          </div>

          {/* Footer Callout */}
          <div
            style={{
              padding: '14px 20px',
              background: '#f1f5f9',
              borderTop: '1px solid var(--cb-border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.825rem',
              color: 'var(--cb-text-muted)',
            }}
          >
            <Info size={16} color="var(--cb-blue-600)" style={{ flexShrink: 0 }} />
            <span>
              Credo Bazaar provides an institutional alternative to biased loan agents. 100% free for borrowers.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

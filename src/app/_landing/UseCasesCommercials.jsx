import React from 'react';

const UseCasesCommercials = () => {
  return (
    <>
      {/*  ═══════════════ USE CASES + COMMERCIALS ═══════════════  */}
      <section className="section" id="commercials">
        <div className="container">
          <div className="sec-header" data-anim>
            <div className="eyebrow">Built for Business</div>
            <h2>Flexible by Design.<br /><span className="underline-yellow">Transparent</span> by Principle.</h2>
          </div>
          <div className="biz-grid">
            <div className="biz-card" data-anim data-delay="1">
              <div className="biz-title">Built for Every Business That Sells</div>
              <div className="uc-list">
                <div className="uc-item">
                  <div className="uc-icon">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="#013046" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="13" height="9.5" rx="1.5" /><path d="M5.5 5V4.5a3 3 0 016 0V5" /></svg>
                  </div>
                  <div className="uc-label">Consumer Durables</div>
                </div>
                <div className="uc-item">
                  <div className="uc-icon">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="#013046" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15.5h13M2.5 15.5V7l6-5 6 5v8.5" /><rect x="6.5" y="10" width="4" height="5.5" rx="0.5" /></svg>
                  </div>
                  <div className="uc-label">Retail Chains</div>
                </div>
                <div className="uc-item">
                  <div className="uc-icon">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="#013046" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 13l2-7.5h5.5l2 7.5H3.5z" /><path d="M8.5 5.5V3" /></svg>
                  </div>
                  <div className="uc-label">D2C Brands</div>
                </div>
                <div className="uc-item">
                  <div className="uc-icon">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="#013046" strokeWidth="1.3" strokeLinecap="round"><circle cx="8.5" cy="8.5" r="6.5" /><path d="M5 8.5h7M8.5 5v7" /></svg>
                  </div>
                  <div className="uc-label">OEMs &amp; Distributors</div>
                </div>
                <div className="uc-item">
                  <div className="uc-icon">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="#013046" strokeWidth="1.2" strokeLinejoin="round"><path d="M8.5 1.5l2 4.5 4.5 0.5-3.5 3 1.5 4.5-4.5-2.5-4.5 2.5 1.5-4.5-3.5-3 4.5-0.5z" /></svg>
                  </div>
                  <div className="uc-label">High Ticket Products</div>
                </div>
              </div>
            </div>

            <div className="biz-card dark" data-anim data-delay="2">
              <div className="biz-title">Simple. Transparent. Growth Aligned.</div>
              <div className="comm-list">
                <div className="comm-row">
                  <div className="comm-lbl">Platform Licensing &amp; Setup</div>
                  <div className="comm-val g">No fee — Year 1</div>
                </div>
                <div className="comm-row">
                  <div className="comm-lbl">Maintenance &amp; Support</div>
                  <div className="comm-val g">NIL</div>
                </div>
                <div className="comm-row">
                  <div className="comm-lbl">Payment Gateway</div>
                  <div className="comm-val">As per actuals</div>
                </div>
                <div className="comm-row">
                  <div className="comm-lbl">Transaction Commission</div>
                  <div className="comm-val y">Connect with us</div>
                </div>
              </div>
              <div className="payg">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1l1.8 3.6L12 5l-3 2.6 1 3.9-3.5-2-3.5 2 1-3.9L1 5l3.7-.4z" stroke="#013046" strokeWidth="1" strokeLinejoin="round" fill="#013046" /></svg>
                Pay-as-you-grow model
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCasesCommercials;

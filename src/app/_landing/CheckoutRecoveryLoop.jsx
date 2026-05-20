import React from 'react';

const CheckoutRecoveryLoop = () => {
  return (
    <>
      {/*  ═══════════════ CHECKOUT RECOVERY LOOP ═══════════════  */}
<section className="recovery-loop-section" id="checkout-recovery">
  <div className="container">
    <div className="recovery-loop-grid">
      <div data-anim>
        <div className="eyebrow">Checkout Recovery</div>
        <h2>Recover Failed Checkouts with <span className="underline-yellow">Alternate EMI Routes.</span></h2>
        <p style={{fontSize: '16px', color: 'var(--muted)', lineHeight: '1.72', marginTop: '16px'}}>When a customer drops off because of loan rejection or payment friction, DPanda creates a second conversion path through personalized recovery links.</p>
        <div className="recovery-points">
          <div className="recovery-point"><strong>Personalized Link</strong><span>Re-engage customers with a direct EMI completion journey.</span></div>
          <div className="recovery-point"><strong>Alternate Route</strong><span>Give customers another lender or EMI option to complete purchase.</span></div>
          <div className="recovery-point"><strong>Revenue Recovery</strong><span>Turn failed checkouts into completed sales opportunities.</span></div>
          <div className="recovery-point"><strong>Trackable Flow</strong><span>Monitor recovery links, attempts, approvals, and conversions.</span></div>
        </div>
      </div>
      <div className="loop-visual" data-anim data-delay="2">
        <div className="loop-center">
          <strong>DPanda<br />Recovery</strong>
          <span>Second conversion path</span>
          <div className="loop-kpi">Recover more sales</div>
        </div>

        <div className="loop-node n1">
          <div className="node-num">01</div>
          <div className="mini-ico">✕</div>
          <div><strong>Failed Checkout</strong><span>Loan denied or funds low</span></div>
        </div>

        <div className="loop-node n2">
          <div className="node-num">02</div>
          <div className="mini-ico">↗</div>
          <div><strong>Smart Link Sent</strong><span>Personalized EMI journey</span></div>
        </div>

        <div className="loop-node n3">
          <div className="node-num">03</div>
          <div className="mini-ico">₹</div>
          <div><strong>Alternate EMI</strong><span>New lender / tenure route</span></div>
        </div>

        <div className="loop-node n4">
          <div className="node-num">04</div>
          <div className="mini-ico">✓</div>
          <div><strong>Sale Recovered</strong><span>Customer completes purchase</span></div>
        </div>

        <div className="loop-arrow ar1">
          <svg viewBox="0 0 18 18" fill="none"><path d="M3 9h12M10.5 4.5L15 9l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="loop-arrow ar2">
          <svg viewBox="0 0 18 18" fill="none"><path d="M3 9h12M10.5 4.5L15 9l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="loop-arrow ar3">
          <svg viewBox="0 0 18 18" fill="none"><path d="M3 9h12M10.5 4.5L15 9l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="loop-arrow ar4">
          <svg viewBox="0 0 18 18" fill="none"><path d="M3 9h12M10.5 4.5L15 9l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>

        <div className="loop-metric"><span>● Live</span> Recovery flow tracking</div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default CheckoutRecoveryLoop;

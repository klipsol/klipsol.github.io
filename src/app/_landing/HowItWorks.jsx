import React from 'react';

const HowItWorks = () => {
  return (
    <>
      {/*  ═══════════════ HOW IT WORKS ═══════════════  */}
<section className="section section-alt" id="how">
  <div className="container">
    <div className="sec-header" data-anim>
      <div className="eyebrow">Process</div>
      <h2>How DPanda <span className="underline-yellow">LOMS</span> Works</h2>
      <p>From integration to conversion in five clean, automated steps.</p>
    </div>
    <div className="steps-wrap">
      <div className="steps-connector"><div className="steps-connector-fill" id="stepFill"></div></div>
      <div className="steps-grid">
        <div className="step" data-anim data-delay="1">
          <div className="step-icon">⚙</div>
          <div className="step-num">01</div>
          <h4>Integrate LOMS</h4>
          <p>Enable in stores, online, or through outreach campaigns. No hardware needed.</p>
        </div>
        <div className="step" data-anim data-delay="2">
          <div className="step-icon">👤</div>
          <div className="step-num">02</div>
          <h4>Customer Applies</h4>
          <p>User starts a 2-minute digital EMI application from any device.</p>
        </div>
        <div className="step" data-anim data-delay="3">
          <div className="step-icon">🏦</div>
          <div className="step-num">03</div>
          <h4>Lender Routing</h4>
          <p>Application is intelligently routed to 8+ lenders in real time.</p>
        </div>
        <div className="step" data-anim data-delay="4">
          <div className="step-icon">✓</div>
          <div className="step-num">04</div>
          <h4>Approval &amp; Checkout</h4>
          <p>Customer completes EMI checkout — no paperwork, no branch visit.</p>
        </div>
        <div className="step" data-anim data-delay="5">
          <div className="step-icon">📊</div>
          <div className="step-num">05</div>
          <h4>Track &amp; Grow</h4>
          <p>Monitor leads, approvals, and conversions from one clean dashboard.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default HowItWorks;

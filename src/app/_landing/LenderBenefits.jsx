import React from 'react';

const LenderBenefits = () => {
  return (
    <>
      {/*  ═══════════════ LENDER BENEFITS ═══════════════  */}
<section className="section" id="merchants">
  <div className="container">
    <div className="sec-header" data-anim>
      <div className="eyebrow">Lender Network</div>
      <h2>More Lenders.<br /><span className="underline-yellow">More Approvals.</span></h2>
      <p>Our intelligent multi-lender routing engine maximises every application&apos;s chance of success.</p>
    </div>

    <div className="routing-graphic" data-anim>
      <div className="route-flow">
        <div className="route-node">
          <div className="mini-ico">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="9" cy="6" r="3"/><path d="M3.5 15a5.5 5.5 0 0111 0"/></svg>
          </div>
          <div className="route-label">Customer Application</div>
          <div className="route-sub">Retail or online EMI request</div>
        </div>
        <div className="route-node main">
          <div className="mini-ico" style={{background: 'rgba(247,184,1,0.16)', color: '#F7B801'}}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="12" height="12" rx="3"/><path d="M6 9h6"/></svg>
          </div>
          <div className="route-label">DPanda LOMS</div>
          <div className="route-sub">Smart eligibility + routing</div>
        </div>
        <div className="route-node">
          <div className="route-lenders">
            <div className="bank-chip">HDFC</div>
            <div className="bank-chip">Bajaj</div>
            <div className="bank-chip">TVS Credit</div>
            <div className="bank-chip">Tata Capital</div>
          </div>
          <div className="route-sub" style={{marginTop: '9px'}}>8+ lenders mapped in real time</div>
        </div>
        <div className="route-node">
          <div className="mini-ico" style={{background: 'var(--yellow)'}}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6.5"/><path d="M6 9l2 2 4-4"/></svg>
          </div>
          <div className="route-label">Best EMI Route</div>
          <div className="route-sub">Approval + checkout completion</div>
        </div>
        <div className="route-arrow a1"></div>
        <div className="route-arrow a2"></div>
        <div className="route-arrow a3"></div>
      </div>
    </div>

    <div className="lender-grid">
      <div className="lender-card" data-anim data-delay="1">
        <div className="l-card-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#013046" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2.5L2.5 7v2h17V7L11 2.5z"/><path d="M4.5 9v7M8.5 9v7M13.5 9v7M17.5 9v7"/><path d="M2.5 16h17"/></svg>
        </div>
        <h3>Strong Lender Network</h3>
        <p>8+ NBFCs and banks all on one unified platform.</p>
      </div>
      <div className="lender-card" data-anim data-delay="2">
        <div className="l-card-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#013046" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8.5"/><path d="M7.5 11l2.5 2.5 5-5"/></svg>
        </div>
        <h3>Higher Approval Rate</h3>
        <p>Smart routing delivers 85%+ approvals consistently.</p>
      </div>
      <div className="lender-card" data-anim data-delay="3">
        <div className="l-card-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#013046" strokeWidth="1.4" strokeLinecap="round"><path d="M15.5 19v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M21 19v-2a4 4 0 00-3-3.87"/><path d="M14.5 3.13a4 4 0 010 7.74"/></svg>
        </div>
        <h3>Inclusive Credit Access</h3>
        <p>Thin-file and new-to-credit customers included.</p>
      </div>
      <div className="lender-card" data-anim data-delay="4">
        <div className="l-card-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#013046" strokeWidth="1.4" strokeLinecap="round"><rect x="1.5" y="4.5" width="19" height="13" rx="2"/><path d="M1.5 9h19"/><path d="M5.5 13.5h4"/></svg>
        </div>
        <h3>Multiple EMI Options</h3>
        <p>6 to 36-month plans tailored for every buyer profile.</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default LenderBenefits;

import React from 'react';

const CoreValue = () => {
  return (
    <>
      {/*  ═══════════════ CORE VALUE ═══════════════  */}
<section className="section value-section" id="retail" data-anim-section>
  <div className="container">
    <div className="sec-header" data-anim>
      <div className="eyebrow">Core Value</div>
      <h2>One Platform. <span className="underline-yellow">Multiple Ways</span> to Convert More.</h2>
      <p>End-to-end loan onboarding for every sales touchpoint — physical, digital, and merchant-led.</p>
    </div>

    <div className="hub-wrap" data-anim>
      <div className="hub-card">
        <div className="hub-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8M12 8v8"/></svg>
        </div>
        <div>
          <div className="hub-title">DPanda LOMS Engine</div>
          <div className="hub-sub">One platform powering multiple conversion channels</div>
        </div>
      </div>
      <div className="hub-lines"></div>
    </div>

    <div className="value-grid">
      <div className="value-card" data-anim data-delay="1">
        <div className="val-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#013046" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M7 14h4M7 17h6"/></svg>
        </div>
        <h3>Retail Outlet Implementation</h3>
        <p>Enable digital EMI checkout in physical stores. No POS machines, no rentals, no hardware dependency whatsoever.</p>
        <div className="val-link">Learn more →</div>
      </div>
      <div className="value-card" data-anim data-delay="2">
        <div className="val-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#013046" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/></svg>
        </div>
        <h3>B2B Merchant Network Visibility</h3>
        <p>Reach active electronics and appliance retailers through our merchant portal. Drive finance-ready footfall.</p>
        <div className="val-link">Learn more →</div>
      </div>
      <div className="value-card" data-anim data-delay="3">
        <div className="val-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#013046" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v12H4z"/><path d="M8 20h8M12 16v4"/><path d="M9 9l2 2 4-4"/></svg>
        </div>
        <h3>Checkout Recovery</h3>
        <p>Re-engage customers with failed checkouts. Turn dropped leads into completed EMI sales with smart follow-up flows.</p>
        <div className="val-link">Learn more →</div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default CoreValue;

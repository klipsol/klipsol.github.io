import React from 'react';

const ProblemVisual = () => {
  return (
    <>
      {/*  ═══════════════ PROBLEM + VISUAL ═══════════════  */}
<section className="section section-alt problem-section" id="recovery">
  <div className="container">
    <div className="problem-head sec-header" data-anim>
      <div className="eyebrow">The Problem</div>
      <h2>Good Intent. <span className="underline-yellow">Lost Sales.</span><br />Don&apos;t Let Finance Be the Reason.</h2>
      <p>When financing is slow, limited, or unavailable, ready-to-buy customers drop off before the sale is completed.</p>
    </div>
    <div className="problem-inner">
      <div className="problem-copy">
        <div className="pain-list">
          <div className="pain-item" data-anim data-delay="1">
            <div className="pain-ico">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#013046" strokeWidth="1.4" strokeLinecap="round"><path d="M9 3v5l3 2"/><circle cx="9" cy="9" r="7"/></svg>
            </div>
            <div>
              <h4>In-Store Friction</h4>
              <p>Long queues, slow verification, and paperwork push customers away at the point of sale.</p>
            </div>
          </div>
          <div className="pain-item" data-anim data-delay="2">
            <div className="pain-ico">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#013046" strokeWidth="1.4" strokeLinecap="round"><rect x="2.5" y="7.5" width="13" height="8" rx="1.5"/><path d="M6 7.5V5.5a3 3 0 016 0v2"/></svg>
            </div>
            <div>
              <h4>Limited Credit Access</h4>
              <p>Single-lender dependency means more rejections and less choice for customers.</p>
            </div>
          </div>
          <div className="pain-item" data-anim data-delay="3">
            <div className="pain-ico">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#013046" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h12M11 5l4 4-4 4"/></svg>
            </div>
            <div>
              <h4>Lost Digital Checkouts</h4>
              <p>63% of customers drop off when EMI is not available at online checkout.</p>
            </div>
          </div>
          <div className="pain-item" data-anim data-delay="4">
            <div className="pain-ico">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#013046" strokeWidth="1.4" strokeLinecap="round"><circle cx="9" cy="9" r="7"/><path d="M9 5.5v4l2.5 1.5"/></svg>
            </div>
            <div>
              <h4>Low Retailer Visibility</h4>
              <p>Brands cannot see which stores are active, engaging, or driving finance-led sales.</p>
            </div>
          </div>

        </div>
        <div className="loss-flow-card" data-anim data-delay="5">
          <div className="loss-flow-title">
            <strong>Where Sales Get Lost</strong>
            <span>DPanda fixes the gap</span>
          </div>
          <div className="loss-flow-grid">
            <div className="loss-flow-step">
              <div className="loss-flow-icon">01</div>
              <strong>Customer Intent</strong>
              <small>Ready to buy at store or online checkout</small>
            </div>
            <div className="loss-flow-step">
              <div className="loss-flow-icon">02</div>
              <strong>Finance Friction</strong>
              <small>Loan rejected, slow process, or no EMI option</small>
            </div>
            <div className="loss-flow-step warning">
              <div className="loss-flow-icon">03</div>
              <strong>Checkout Drop-off</strong>
              <small>Customer leaves before completing purchase</small>
            </div>
            <div className="loss-flow-step recovery">
              <div className="loss-flow-icon">04</div>
              <strong>DPanda Recovery</strong>
              <small>Alternate EMI route brings the sale back</small>
            </div>
          </div>
        </div>
      </div>

      {/*  Phone mockup  */}
      <div className="phone-visual">
        <div className="phone-glow"></div>
        <div className="phone" data-anim>
          <div className="phone-notch"><div className="phone-bar"></div></div>
          <div className="phone-screen">
            <div className="phn-header">
              <span className="phn-title">DPanda Checkout</span>
              <span className="phn-live">● Live</span>
            </div>
            <div className="phn-product">
              <div className="phn-pname">Samsung 55&quot; QLED TV</div>
              <div className="phn-price">₹74,990</div>
              <div className="phn-sublabel">Choose your EMI plan</div>
            </div>
            <div className="emi-grid">
              <div className="emi-opt"><div className="emi-dur">6 Months</div><div className="emi-amt">₹13,200/mo</div></div>
              <div className="emi-opt sel"><div className="emi-dur">12 Months</div><div className="emi-amt">₹6,890/mo</div></div>
              <div className="emi-opt"><div className="emi-dur">18 Months</div><div className="emi-amt">₹4,780/mo</div></div>
              <div className="emi-opt"><div className="emi-dur">24 Months</div><div className="emi-amt">₹3,680/mo</div></div>
            </div>
            <div className="phn-cta">Apply Now — Instant Approval</div>
            <div className="phn-lenders">
              <div className="l-chip">HDFC</div>
              <div className="l-chip">Bajaj</div>
              <div className="l-chip">+6 more</div>
            </div>
          </div>
        </div>
        <div className="phone-float f1">
          <div className="fl-label">Approval Status</div>
          <div className="fl-val" style={{color: '#12B76A'}}>Approved ✓</div>
          <div className="fl-sub">Routing to HDFC Bank</div>
        </div>
        <div className="phone-float f2">
          <div className="fl-label">Conversion Rate</div>
          <div className="fl-val">85.2%</div>
          <div className="fl-bar"><div className="fl-fill" style={{width: '85%'}}></div></div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default ProblemVisual;

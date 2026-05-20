import React from 'react';

const Hero = ({ onBookDemo }) => {
  return (
    <>
      {/*  ═══════════════ HERO ═══════════════  */}
<section className="hero" id="overview">
  <div className="hero-bg"></div>
  <div className="hero-grid-bg"></div>
  <div className="container">
    <div className="hero-inner">

      {/*  Left content  */}
      <div>
        <div className="eyebrow">DPanda LOMS</div>
        <h1>Turn Every<br /><span className="underline-yellow">Touchpoint</span><br />Into an EMI<br />Sales Channel</h1>
        <p className="hero-subline">Enable digital financing across retail stores, online checkout, and merchant networks — seamlessly and at scale.</p>
        <div className="hero-btns">
          <a href="#cta" onClick={onBookDemo} className="btn btn-primary">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 7.5h11M8.5 3l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Book a Demo
          </a>
          <a href="#how" className="btn btn-secondary">Explore LOMS</a>
        </div>
        <div className="hero-pills">
          <div className="pill"><span className="pill-dot"></span>2 Min Digital Checkout</div>
          <div className="pill"><span className="pill-dot"></span>No POS Machine Needed</div>
          <div className="pill"><span className="pill-dot"></span>NBFC &amp; Bank Network</div>
          <div className="pill"><span className="pill-dot"></span>85%+ Approval Ratio</div>
        </div>
      </div>

      {/*  Right: Dashboard  */}
      <div className="hero-visual">
        <div className="dash-frame">
          <div className="dash-titlebar">
            <div className="d-dot d-dot-r"></div>
            <div className="d-dot d-dot-y"></div>
            <div className="d-dot d-dot-g"></div>
          </div>
          <div className="dash-body">
            {/*  Sidebar  */}
            <div className="dash-side">
              <div className="dash-side-logo">DP</div>
              <div className="side-nav-item active">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="1" width="5.5" height="5.5" rx="1" fill="rgba(255,255,255,0.9)"/><rect x="8.5" y="1" width="5.5" height="5.5" rx="1" fill="rgba(255,255,255,0.35)"/><rect x="1" y="8.5" width="5.5" height="5.5" rx="1" fill="rgba(255,255,255,0.35)"/><rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1" fill="rgba(255,255,255,0.35)"/></svg>
              </div>
              <div className="side-nav-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M1.5 4h12M1.5 7.5h8M1.5 11h10" stroke="rgba(255,255,255,0.35)" strokeWidth="1.3" strokeLinecap="round"/></svg>
              </div>
              <div className="side-nav-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="6" cy="6" r="4.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.3"/><path d="M13 13l-2.8-2.8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.3" strokeLinecap="round"/></svg>
              </div>
              <div className="side-nav-item">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 1.5v12M1.5 7.5h12" stroke="rgba(255,255,255,0.35)" strokeWidth="1.3" strokeLinecap="round"/></svg>
              </div>
            </div>

            {/*  Main area  */}
            <div className="dash-main">
              <div className="dash-toprow">
                <div className="dash-heading">LOMS Dashboard</div>
                <div className="dash-chips">
                  <div className="dash-chip chip-green">● Live</div>
                  <div className="dash-chip chip-yellow">May 2025</div>
                </div>
              </div>

              {/*  Stats  */}
              <div className="dash-stats">
                <div className="d-stat featured">
                  <div className="d-stat-label">Approval Rate</div>
                  <div className="d-stat-val">85.2%</div>
                  <div className="d-stat-delta">↑ +3.1% this month</div>
                </div>
                <div className="d-stat">
                  <div className="d-stat-label">Applications</div>
                  <div className="d-stat-val">2,847</div>
                  <div className="d-stat-delta">↑ +12.4%</div>
                </div>
                <div className="d-stat">
                  <div className="d-stat-label">Active Stores</div>
                  <div className="d-stat-val">4,200+</div>
                  <div className="d-stat-delta">↑ +8.0%</div>
                </div>
              </div>

              {/*  Chart  */}
              <div className="dash-chart">
                <div className="chart-head">
                  <div className="chart-title">Application Trend</div>
                  <div className="chart-legend">
                    <div className="legend-item"><div className="legend-dot" style={{background: '#013046'}}></div>Applications</div>
                    <div className="legend-item"><div className="legend-dot" style={{background: '#F7B801'}}></div>Approvals</div>
                  </div>
                </div>
                <svg viewBox="0 0 350 84" style={{width: '100%', height: '84px'}} xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#013046" stop-opacity="0.14"/><stop offset="100%" stop-color="#013046" stop-opacity="0.01"/></linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F7B801" stop-opacity="0.18"/><stop offset="100%" stop-color="#F7B801" stop-opacity="0.01"/></linearGradient>
                  </defs>
                  <line x1="0" y1="20" x2="350" y2="20" stroke="#E8ECF2" strokeWidth="1"/>
                  <line x1="0" y1="42" x2="350" y2="42" stroke="#E8ECF2" strokeWidth="1"/>
                  <line x1="0" y1="64" x2="350" y2="64" stroke="#E8ECF2" strokeWidth="1"/>
                  {/*  Applications fill  */}
                  <path d="M0,70 C25,60 50,56 70,50 C90,44 110,48 130,40 C150,32 165,26 190,18 C215,10 230,14 255,8 C280,2 295,5 350,2 L350,84 L0,84 Z" fill="url(#g1)"/>
                  <path d="M0,70 C25,60 50,56 70,50 C90,44 110,48 130,40 C150,32 165,26 190,18 C215,10 230,14 255,8 C280,2 295,5 350,2" stroke="#013046" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                  {/*  Approvals fill  */}
                  <path d="M0,78 C25,74 50,70 70,66 C90,62 110,66 130,58 C150,50 165,46 190,38 C215,30 230,32 255,24 C280,16 295,18 350,12 L350,84 L0,84 Z" fill="url(#g2)"/>
                  <path d="M0,78 C25,74 50,70 70,66 C90,62 110,66 130,58 C150,50 165,46 190,38 C215,30 230,32 255,24 C280,16 295,18 350,12" stroke="#F7B801" strokeWidth="1.8" fill="none" stroke-dasharray="4 3"/>
                  {/*  Month labels  */}
                  <text x="0" y="82" font-size="6.5" fill="#667085" font-family="Manrope,sans-serif">Jan</text>
                  <text x="58" y="82" font-size="6.5" fill="#667085" font-family="Manrope,sans-serif">Feb</text>
                  <text x="118" y="82" font-size="6.5" fill="#667085" font-family="Manrope,sans-serif">Mar</text>
                  <text x="178" y="82" font-size="6.5" fill="#667085" font-family="Manrope,sans-serif">Apr</text>
                  <text x="238" y="82" font-size="6.5" fill="#667085" font-family="Manrope,sans-serif">May</text>
                  <text x="295" y="82" font-size="6.5" fill="#667085" font-family="Manrope,sans-serif">Jun</text>
                  <circle cx="350" cy="2" r="3.5" fill="#013046"/>
                  <circle cx="350" cy="12" r="3.5" fill="#F7B801"/>
                </svg>
              </div>

              {/*  Table  */}
              <div className="dash-table">
                <div style={{fontSize: '9.5px', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px'}}>Recent Applications</div>
                <div className="tbl-head-row">
                  <div className="tbl-cell hdr">Customer</div>
                  <div className="tbl-cell hdr">Amount</div>
                  <div className="tbl-cell hdr">Lender</div>
                  <div className="tbl-cell hdr">Status</div>
                </div>
                <div className="tbl-row">
                  <div className="tbl-cell bold">Rajesh K.</div>
                  <div className="tbl-cell">₹28,500</div>
                  <div className="tbl-cell">HDFC Bank</div>
                  <div className="tbl-cell"><span className="s-tag approved">Approved</span></div>
                </div>
                <div className="tbl-row">
                  <div className="tbl-cell bold">Meera S.</div>
                  <div className="tbl-cell">₹15,000</div>
                  <div className="tbl-cell">Bajaj Fin.</div>
                  <div className="tbl-cell"><span className="s-tag processing">Processing</span></div>
                </div>
                <div className="tbl-row">
                  <div className="tbl-cell bold">Amit P.</div>
                  <div className="tbl-cell">₹42,000</div>
                  <div className="tbl-cell">Tata Capital</div>
                  <div className="tbl-cell"><span className="s-tag approved">Approved</span></div>
                </div>
              </div>
            </div>{/*  end dash-main  */}
          </div>{/*  end dash-body  */}
        </div>{/*  end dash-frame  */}

        {/*  Floating badges  */}
        <div className="f-badge top-right">
          <div className="f-icon">🎯</div>
          <div>
            <div className="f-badge-val">85%+</div>
            <div className="f-badge-label">Approval Ratio</div>
          </div>
        </div>
        <div className="f-badge bot-left">
          <div className="f-icon navy-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L14 5v6H2V5L8 2z" stroke="#F7B801" strokeWidth="1.2" strokeLinejoin="round"/><rect x="6" y="8" width="4" height="3" fill="#F7B801" opacity="0.6"/></svg>
          </div>
          <div>
            <div className="f-badge-val">8 Lenders</div>
            <div className="f-badge-label">Routing today</div>
          </div>
        </div>
        <div className="f-badge mid-right">
          <div className="f-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M3 8h10M3 12h6" stroke="#013046" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div className="f-badge-val">2 Min</div>
            <div className="f-badge-label">Digital checkout</div>
          </div>
        </div>
        <div className="f-badge top-left">
          <div className="f-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="2" stroke="#013046" strokeWidth="1.4"/><path d="M6 12h4" stroke="#013046" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div className="f-badge-val">No POS</div>
            <div className="f-badge-label">Machine needed</div>
          </div>
        </div>

      </div>{/*  end hero-visual  */}
    </div>

    <div className="hero-story-strip" data-anim>
      <div className="story-flow">
        <div className="story-step">
          <div className="story-ico">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15V7l6-4 6 4v8"/><path d="M6.5 15v-5h5v5"/></svg>
          </div>
          <div><div className="story-title">Retail / Online</div><div className="story-sub">Customer starts purchase</div></div>
        </div>
        <div className="story-step active">
          <div className="story-ico">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="12" height="12" rx="3"/><path d="M6 9h6M9 6v6"/></svg>
          </div>
          <div><div className="story-title">DPanda LOMS</div><div className="story-sub">Loan onboarding engine</div></div>
        </div>
        <div className="story-step">
          <div className="story-ico">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 2.5L2.5 6v1.5h13V6L9 2.5z"/><path d="M5 7.5v6M9 7.5v6M13 7.5v6"/></svg>
          </div>
          <div><div className="story-title">Lender Routing</div><div className="story-sub">NBFCs & banks mapped</div></div>
        </div>
        <div className="story-step">
          <div className="story-ico">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="6.5"/><path d="M6 9l2 2 4-4"/></svg>
          </div>
          <div><div className="story-title">EMI Approval</div><div className="story-sub">Best available route</div></div>
        </div>
        <div className="story-step">
          <div className="story-ico">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 9h12M11 5l4 4-4 4"/></svg>
          </div>
          <div><div className="story-title">Sale Completed</div><div className="story-sub">Revenue recovered</div></div>
        </div>
      </div>
    </div>

  </div>
</section>
    </>
  );
};

export default Hero;

import React from 'react';

const Header = () => {
  return (
    <>
      {/* ═══════════════ HEADER ═══════════════ */}
      <header className="header" id="site-header">
        <div className="container">
          <div className="header-inner">
            <a href="https://www.dpanda.ai/" className="logo real-logo" aria-label="DPanda home">
              <img className="site-logo-img" src="/DpandaLogo.png" alt="DPanda logo" />
            </a>
            <nav className="nav">
              <a href="#overview">Overview</a>
              <a href="#retail">Retail Outlet</a>
              <a href="#merchants">Merchant Network</a>
              <a href="#checkout-recovery">Recovery</a>
              <a href="#commercials">Commercials</a>
            </nav>
            <a href="/discover" className="btn btn-primary" style={{ fontSize: '13px', padding: '11px 22px' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Discovery
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

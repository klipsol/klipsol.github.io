import React from 'react';

const FinalCta = ({ onBookDemo }) => {
  return (
    <>
      {/*  ═══════════════ FINAL CTA ═══════════════  */}
<section className="final-cta" id="cta">
  <div className="cta-blob1"></div>
  <div className="cta-blob2"></div>
  <div className="cta-dots"></div>
  <div className="container">
    <div className="cta-inner" data-anim>
      <div className="eyebrow" style={{color: 'var(--yellow)', justifyContent: 'center'}}>Get Started Today</div>
      <h2>Ready to Transform Financing into Your Growth Engine?</h2>
      <p>Enable more sales, more approvals, and better customer conversion across every channel and touchpoint.</p>
      <div className="cta-btns">
        <a href="#" onClick={onBookDemo} className="btn btn-primary">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 7.5h11M8.5 3l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Book a Demo
        </a>
        <a href="#" className="btn btn-ghost-white">Talk to Our Expert</a>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default FinalCta;

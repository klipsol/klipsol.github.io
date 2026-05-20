import React from 'react';

const BuiltOnTrust = () => {
  return (
    <>
      {/* ═══════════════ FOOTER TRUST / SOCIAL PROOF ═══════════════ */}
      <section className="footer-proof">
        <div className="proof-block">
          <div className="container">
            <h2 className="proof-title" data-anim>Built on <span className="underline-yellow">Trust</span></h2>
            <p className="proof-subtitle" data-anim>Leadership and ecosystem credibility that supports DPanda’s commerce and financing platform.</p>
            <div className="founder-card" data-anim data-delay="1">
              <div className="founder-photo">
                <img src="/founder.png" alt="Gaurav Gupta" />
              </div>
              <div className="founder-info">
                <h3>Gaurav Gupta</h3>
                <p>CTO &amp; Co-founder</p>
                <div className="cred-row">
                  <span className="cred-badge google">Google</span>
                  <span className="cred-badge amazon">Amazon</span>
                  <span className="cred-badge yahoo">Yahoo!</span>
                  <span className="cred-badge linkedin">in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="proof-block compact">
          <div className="container">
            <div className="backed-row" data-anim>
              <div className="backed-label">Backed By</div>
              <div className="logo-cloud">
                <div className="cloud-logo"><img src="/accel.png" alt="Accel" /></div>
                <div className="cloud-logo"><img src="/lightspeed.png" alt="Lightspeed" /></div>
                <div className="cloud-logo"><img src="/sauce.png" alt="sauce.vc" /></div>
                <div className="cloud-logo whiteboard"><img src="/whiteboard.png" alt="Whiteboard" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-block compact">
        <div className="container">
          <h2 className="proof-title" data-anim>DPanda in the News</h2>
          <p className="proof-subtitle" data-anim>Featured across leading business and startup media platforms.</p>
          <div className="news-grid" data-anim data-delay="1">
            <div className="news-logo businessline"><img src="/businessline.png" alt="Businessline" /></div>
            <div className="news-logo forbes"><img src="/forbes.png" alt="Forbes" /></div>
            <div className="news-logo mint"><img src="/mint.png" alt="Mint" /></div>
            <div className="news-logo yourstory"><img src="/yourstory.png" alt="YourStory" /></div>
            <div className="news-logo et"><img src="/et.png" alt="The Economic Times" /></div>
            <div className="news-logo inc42"><img src="/inc42.png" alt="Inc42" /></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuiltOnTrust;

import React from 'react';

const Footer = () => {
  return (
    <>
      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="footer-main">
        <div className="container">
          <div className="footer-main-inner">
            <div className="footer-brand">
              <div className="logo real-logo" aria-label="DPanda">
                <img className="footer-logo-img" src="/DpandaLogo.png" alt="DPanda logo" />
              </div>
              <p className="footer-tagline">Democratising Digital Commerce</p>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Office Address</div>
              <div className="footer-address">
                KLIP SOLUTIONS PRIVATE LIMITED (DPanda),<br />
                204-205, 2nd Floor, Plot No. 250,<br />
                Phase IV, Udyog Vihar, Sector-18,<br />
                Gurugram, Haryana, 122015.<br />
                95821 25864<br />
                support@dpanda.in
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Useful Links</div>
              <a href="#">For Influencers</a>
              <a href="#">Post Checkout Monetisation</a>
              <a href="#">Employee Rewards</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Other Links</div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms-of-Service</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-copy">© {new Date(Date.now()).getFullYear()} DPanda Technologies Pvt. Ltd. All rights reserved.</div>
            <div className="footer-social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/dpanda" className="social-dot">in</a>
              {/* <a href="#" className="social-dot">x</a>
              <a href="#" className="social-dot">yt</a> */}
            </div>
          </div>
        </div>
      </footer>
      <a className="footer-float-mail" href="#cta" aria-label="Contact DPanda">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5.5h14v10H3v-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M3 6l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </>
  );
};

export default Footer;

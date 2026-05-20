'use client';

import React, { useEffect, useState } from 'react';
import '../landing.css';
import Header from './Header';
import Hero from './Hero';
import Trust from './Trust';
import CoreValue from './CoreValue';
import ProblemVisual from './ProblemVisual';
import CheckoutRecoveryLoop from './CheckoutRecoveryLoop';
import LenderBenefits from './LenderBenefits';
import HowItWorks from './HowItWorks';
import UseCasesCommercials from './UseCasesCommercials';
import WhyDpanda from './WhyDpanda';
import FinalCta from './FinalCta';
import BuiltOnTrust from './BuiltOnTrust';
import Footer from './Footer';
import CalendlyModal from './CalendlyModal';

export default function LandingPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-anim]').forEach((el) => {
      observer.observe(el);
    });

    const header = document.querySelector('.dpanda-lp .header');
    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 20) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openCalendly = (e) => {
    if (e) e.preventDefault();
    setIsCalendlyOpen(true);
  };

  return (
    <div className="dpanda-lp">
      <Header />
      <Hero onBookDemo={openCalendly} />
      <Trust />
      <CoreValue />
      <ProblemVisual />
      <CheckoutRecoveryLoop />
      <LenderBenefits />
      <HowItWorks />
      <UseCasesCommercials />
      <WhyDpanda />
      <FinalCta onBookDemo={openCalendly} />
      <BuiltOnTrust />
      <Footer />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
}

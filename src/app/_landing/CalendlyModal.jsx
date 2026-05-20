'use client';

import React, { useEffect } from 'react';

const CalendlyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center backdrop-blur-md p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[85vh]   flex flex-col "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Close button bar */}
        <div className="flex items-center justify-between  border-b border-white/10">
          <h3 className="font-sans font-semibold text-lg text-white">Book a Demo</h3>
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Iframe Content */}
        <div className="flex-1 w-full h-full relative ">
          <iframe
            src="https://calendly.com/gaurav-dpanda/30min?embed_type=Inline&embed_domain=1"
            width="100%"
            height="100%"
            frameBorder="0"
            title=""
            className="w-full h-full bg-transparent"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;

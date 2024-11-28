'use client';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

const CalendlyModal = ({ isOpen, onClose }) => {
  const [loaded, setLoaded] = useState(false);

  // Handle escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Initialize Calendly widget when script loads
  const handleCalendlyLoad = () => {
    setLoaded(true);
    if (window.Calendly && isOpen) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/rajat-dpanda/connect-with-rajat-ceo-dpanda',
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: {},
        utm: {},
      });
    }
  };

  // Re-initialize widget when modal opens
  useEffect(() => {
    if (isOpen && loaded && window.Calendly) {
      handleCalendlyLoad();
    }
  }, [isOpen, loaded]);

  // Prevent body scroll when modal is open
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

  return (
    <>
      {/* Load Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onLoad={handleCalendlyLoad}
        strategy="lazyOnload"
      />
      {/* Modal Overlay */}
      {isOpen && (
        <div className="absolute min-h-screen min-w-full inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center p-4">
          {/* Modal Content */}
          <div className="relative min-h-[600px] max-h-[600px] overflow-auto bg-white rounded-lg w-full max-w-5xl mx-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <ContactForm />
            <h2 className="my-4 sm:mt-10 sm:mb-2 text-2xl font-bold text-center text-gray-800">
              Or schedule a meeting
            </h2>
            {/* Calendly Widget Container */}
            <div id="calendly-inline-widget" className="w-full h-[680px]" />
          </div>
        </div>
      )}
    </>
  );
};

export default CalendlyModal;

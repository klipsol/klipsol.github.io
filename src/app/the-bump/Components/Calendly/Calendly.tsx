'use client';
import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

const Calendly = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  return (
    <div>
      <style jsx global>{`
        .calendly-popup-overlay {
          backdrop-filter: blur(5px) !important;
          background-color: rgba(0, 0, 0, 0.5) !important;
        }
      `}</style>
      {rootElement ? (
        <PopupButton
          url="https://calendly.com/rajat-dpanda/connect-with-rajat-ceo-dpanda"
          rootElement={rootElement}
          text="Talk to us"
        />
      ) : (
        <div
          onClick={() => window.alert('Something went wrong!')}
          id="error-calendly"
        >
          Talk to us
        </div>
      )}
    </div>
  );
};

export default Calendly;

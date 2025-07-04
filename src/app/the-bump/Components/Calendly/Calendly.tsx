"use client";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const Calendly = ({ className = "", text = "Talk to us" }) => {
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
          className={className}
          url="https://calendly.com/srinand-dpanda/30min"
          rootElement={rootElement}
          text={text}
        />
      ) : (
        <div
          onClick={() => window.alert("Something went wrong!")}
          id="error-calendly"
        >
          Talk to us
        </div>
      )}
    </div>
  );
};

export default Calendly;

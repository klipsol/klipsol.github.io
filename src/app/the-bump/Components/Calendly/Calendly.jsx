import React from "react";
import { PopupButton } from "react-calendly";

const Calendly = () => {
  return (
    <div>
      <style jsx global>{`
        .calendly-popup-overlay {
          backdrop-filter: blur(5px) !important;
          background-color: rgba(0, 0, 0, 0.5) !important;
        }
      `}</style>
      <PopupButton
        styles={{ backdropFilter: "blur(5px)" }}
        url="https://calendly.com/rajat-dpanda/connect-with-rajat-ceo-dpanda"
        rootElement={document.getElementById("root")}
        text="Talk to us"
      />
    </div>
  );
};

export default Calendly;

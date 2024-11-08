import React, { useEffect } from "react";
import Button from "../UI/Buttons/Button";
import gsap from "gsap";

export default function Navbar() {
  return (
    <div className="sec-container opacity-1 mt-6 relative z-20 pr-10 " id="nav">
      <div className="flex justify-between items-center flex-col md:flex-row bg-transparent rounded-3xl relative ">
        <img src="/DpandaLogo.png" alt="logo" className="max-h-10" />

        <div className="flex md:gap-x-6 items-center pt-4 w-full md:w-fit md:pt-0 justify-between">
          <div className="flex flex-col cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <span className="bg-green-400 w-2 h-2 rounded-full animate-ping"></span>
              <span className="text-white font-medium">Live Preview</span>
            </div>
            <p className="text-[#29D96D] text-[10px] text-center">
              for pinterest
            </p>
          </div>
          <button
            className="rounded-[24px] bg-secondaryBg px-4 py-1 text-white font-medium"
            variant="primary"
          >
            ROI Calculator
          </button>
          <button className="rounded-[24px] bg-primaryBg px-4 py-1 text-primaryTextColor font-medium">
            Talk to us
          </button>
        </div>
      </div>
    </div>
  );
}

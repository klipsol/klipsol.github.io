import { useState } from "react";
import CalendlyModal from "../Calendly/CalendlyModal";
import LivePreviewLinks from "./LivePreviewLinks";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="sec-container opacity-1 mt-6 relative z-50 lg:pr-10 "
        id="nav"
      >
        <div className="lg:flex justify-between items-center flex-col md:flex-row bg-transparent rounded-3xl relative custom-text-base ">
          <img src="/DpandaLogo.png" alt="logo" className="max-h-10" />
          <div className=" md:gap-x-6 items-center pt-4 w-full md:w-fit md:pt-0 justify-between sm:hidden lg:flex">
            <LivePreviewLinks />
            {/* <div className="flex flex-col cursor-pointer">
              <div className="flex gap-x-2 items-center relative">
                <span className="bg-[#F7BA30]/80 w-2 h-2 rounded-full "></span>
                <span className="bg-[#F7BA30] w-2 h-2 rounded-full animate-ping [animation-duration:0.9s] absolute"></span>
                <span className="text-white font-medium">Live Preview</span>
              </div>
              <p className="text-[#F7BA30] text-[10px] text-center">
                for pinterest
              </p>
            </div> */}
            <button
              className="rounded-[24px] bg-secondaryBg px-4 py-1 text-white font-medium"
              variant="primary"
            >
              ROI Calculator
            </button>
            <button
              onClick={openModal}
              className="rounded-[24px] bg-primaryBg px-4 py-1 text-primaryTextColor font-medium"
            >
              Talk to us
            </button>
          </div>
        </div>
      </div>
      <CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

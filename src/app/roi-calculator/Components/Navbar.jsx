'use client';
import CalendlyModal from '@/app/publisher2/Components/Calendly/CalendlyModal';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="sec-container opacity-1 mt-0 relative z-50 lg:pr-10 "
        id="nav"
      >
        <div className="lg:flex justify-between items-center flex flex-row md:flex-row bg-transparent rounded-3xl relative custom-text-base">
          <Link href="/publisher2">
            <img
              src="/DpandaLogo.png"
              alt="logo"
              className="max-h-10 mt-6 mb-4"
            />
          </Link>
          <div className="p-4 md:px-4 md:pt-6 md:pb-4 bg-[#043045] rounded-b-2xl hidden lg:block">
            <div className="md:gap-x-6 gap-y-2 items-center pt-0 md:pt-4 w-full md:w-fit justify-between hidden sm:flex sm:flex-col md:flex-row lg:flex">
              {/* <LivePreviewLinks /> */}
              <a href="/theBump" className="flex flex-col cursor-pointer">
                <div className="flex gap-x-2 items-center relative">
                  <span className="bg-[#F7BA30]/80 w-2 h-2 rounded-full "></span>
                  <span className="bg-[#F7BA30] w-2 h-2 rounded-full animate-ping [animation-duration:0.9s] absolute"></span>
                  <span className="text-white font-medium">Live Preview</span>
                </div>
                <p className="text-[#F7BA30] text-[10px] text-center">
                  for pinterest
                </p>
              </a>
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
      </div>
      <CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

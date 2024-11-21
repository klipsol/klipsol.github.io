'use client';
import Link from 'next/link';
import { useState } from 'react';
import CalendlyModal from '../Calendly/CalendlyModal';

export default function Navbar({ background }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className={'sec-container opacity-1 mt-6 relative z-50 lg:pr-10 '}
        id="nav"
      >
        <div className="flex justify-between items-center flex-row bg-transparent rounded-3xl relative text-sm sm:custom-text-base">
          <img
            src="/dpandaLogo2.png"
            alt="logo"
            className="md:hidden block w-16 -mt-4"
          />
          <img
            src="/DpandaLogo.png"
            alt="logo"
            className="hidden md:block max-h-10"
          />
          <div className="absolute w-4/5 md:relative md:top-auto md:left-auto lg:right-0 -right-6 -top-6 md:gap-x-6 items-center flex-1 md:flex-none md:w-fit justify-between flex bg-[#023046] p-2 md:px-6 rounded-2xl rounded-t-none md:rounded-t-2xl">
            {/* <LivePreviewLinks /> */}
            <a
              href="/theBump"
              className="flex flex-col cursor-pointer text-center"
            >
              <div className="flex gap-x-2 items-center relative">
                {/* <span className="bg-[#F7BA30]/80 w-2 h-2 rounded-full "></span> */}
                <span className="bg-[#F7BA30] w-2 h-2 rounded-full animate-ping [animation-duration:0.9s] absolute top-2 md:top-2 md:-left-4"></span>
                <span className="text-white font-medium ml-3 md:m-auto">
                  Live Preview
                </span>
              </div>
              <p className="text-[#F7BA30] text-[10px] text-center ml-3 md:m-auto">
                for pinterest
              </p>
            </a>
            <Link
              href="/roi-calculator"
              className="rounded-[24px] text-center bg-secondaryBg px-4 py-1 text-white font-medium"
              variant="primary"
            >
              ROI Calculator
            </Link>
            <button
              onClick={openModal}
              className="rounded-[24px] text-white md:bg-primaryBg px-4 text-center py-1 md:text-primaryTextColor font-medium"
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

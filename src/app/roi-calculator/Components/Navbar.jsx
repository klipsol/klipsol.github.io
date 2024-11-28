"use client";
import CalendlyModal from "@/app/publisher2/Components/Calendly/CalendlyModal";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar({ customBg }) {
  // const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const handleRoiRedirect = () => {
  //   if (location.pathname !== '/roi-calculator') {
  //     router.push('/roi-calculator');
  //   }
  // };

  return (
    <>
      <div
        className={twMerge(
          "lg:sec-container opacity-1 mt-0 relative z-50 lg:pr-10 mx-0",
          customBg && "bg-[#eebe50]"
        )}
        id="nav"
      >
        <div className="lg:flex gap-4 relative pl-4 justify-between items-center flex flex-row md:flex-row bg-transparent rounded-3xl md:custom-text-base">
          <Link href="/publisher2">
            <img
              src="/dpandaLogo2.png"
              alt="logo"
              className="md:hidden block w-10 absolute top-2"
            />
            <img
              src="/DpandaLogo.png"
              alt="logo"
              className="max-h-10 mt-6 mb-4 hidden md:block"
            />
          </Link>
          <div className="p-2 md:px-8 md:pt-6 md:pb-4 bg-[#043045] rounded-b-2xl lg:block">
            <div className="text-sm md:gap-x-6 gap-y-2 items-center pt-0 md:pt-4 w-full md:w-fit justify-between hidden sm:flex sm:flex-row md:flex-row lg:flex">
              {/* <LivePreviewLinks /> */}
              <Link
                href="/roi-calculator"
                // onClick={handleRoiRedirect}
                className="rounded-[24px] bg-secondaryBg px-4 py-1 text-white font-medium"
                // variant="primary"
              >
                ROI Calculator
              </Link>{" "}
              <div className="bg-[#004A6C] h-5 w-0.5"></div>
              <button
                onClick={openModal}
                className="rounded-[24px] text-white md:bg-primaryBg px-4 py-1 md:text-primaryTextColor font-medium"
              >
                Talk to us
              </button>
              <div className="bg-[#004A6C] h-5 w-0.5"></div>
              <button
                onClick={openModal}
                className="rounded-[24px] text-white md:bg-primaryBg px-4 py-1 md:text-primaryTextColor font-medium"
              >
                All Features
              </button>
            </div>
          </div>
        </div>
      </div>
      <CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

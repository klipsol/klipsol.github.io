"use client";
import Link from "next/link";
import { useState } from "react";
import CalendlyModal from "../Calendly/CalendlyModal";
import { useParams, usePathname } from "next/navigation";

export default function Navbar({ background }) {
  const params = useParams();
  const pathname = usePathname();
  const publisher = params?.publisherId?.[0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log({ pathname }, !pathname === "/", pathname);
  return (
    <>
      <div
        className={"sec-container opacity-1 mt-6 relative z-50 lg:pr-10 "}
        id="nav"
      >
        <div className="flex justify-between items-center flex-row bg-transparent rounded-3xl relative sm:text-sm  2xl:text-lg xxl:text-2xl">
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
            <Link
              href="/roi-calculator"
              className="rounded-[24px] text-center bg-secondaryBg px-4 py-1 text-white font-medium"
              variant="primary"
            >
              ROI Calculator
            </Link>
            <div className="bg-[#004A6C] h-6 w-0.5"></div>
            <Link
              href="/features"
              className="rounded-[24px] text-center bg-secondaryBg px-4 py-1 text-white font-medium"
              variant="primary"
            >
              All Features
            </Link>
            {pathname !== "/" && <div className="bg-[#004A6C] h-6 w-0.5"></div>}
            {pathname !== "/" && (
              <button
                onClick={openModal}
                className="rounded-[24px] text-white md:bg-primaryBg px-4 text-center py-1 md:text-primaryTextColor font-medium"
              >
                Talk to us
              </button>
            )}
          </div>
        </div>
      </div>
      <CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

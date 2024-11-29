"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CalendlyModal from "../Calendly/CalendlyModal";
import { useParams, usePathname } from "next/navigation";

const ScrollableNavbar = ({ customBg }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const publisher = params?.publisherId?.[0];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full lg:shadow-lg text-white py-2 px-3 transition-opacity duration-300 p-2 md:px-8  bg-[#043045e0] lg:bg-[#f8f8fc] lg:text-black rounded-b-2xl lg:py-1 lg:flex justify-center z-[100] ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-sm text-center md:gap-x-6 gap-y-2 items-center pt-0  w-full md:w-fit justify-between lg:justify-center hidden sm:flex sm:flex-row md:flex-row lg:flex">
        {/* <LivePreviewLinks /> */}
        <a
          href="/theBump"
          className="flex flex-col cursor-pointer lg:bg-black lg:rounded-3xl lg:px-7 lg:leading-[1.3] py-1"
        >
          <div className="flex gap-x-2 items-center relative">
            {/* <span className="bg-[#F7BA30]/80 w-2 h-2 rounded-full "></span> */}
            <span className="bg-[#F7BA30] w-2 h-2 rounded-full animate-ping [animation-duration:0.9s] absolute top-[30%] md:-left-3.5"></span>
            <span className="bg-[#F7BA30] w-2 h-2 rounded-full absolute top-[30%]  md:-left-3.5"></span>
            <span className="text-white lg:text-xs text-center font-medium ml-4 md:m-auto">
              Live Preview
            </span>
          </div>
          <p className="text-[#F7BA30] text-[10px] text-center ml-3 md:m-auto">
            {publisher && `for ${publisher}`}
          </p>
        </a>
        <div className="bg-[#004A6C] h-7 w-0.5 lg:hidden"></div>
        <Link
          href="/roi-calculator"
          // onClick={handleRoiRedirect}
          className="rounded-[24px]  px-4 py-1  font-medium"
          // variant="primary"
        >
          ROI <br className="lg:hidden" /> Calculator
        </Link>{" "}
        {pathname !== "/" && (
          <div className="bg-[#004A6C] h-7 w-0.5 lg:hidden"></div>
        )}
        {pathname !== "/" && (
          <button
            onClick={openModal}
            className="rounded-[24px]  px-4 py-1 md:text-primaryTextColor font-medium"
          >
            Talk <br className="lg:hidden" /> to us
          </button>
        )}
        <div className="bg-[#004A6C] h-7 w-0.5 lg:hidden"></div>
        <Link
          href={"/features"}
          className="rounded-[24px]  px-4 py-1 md:text-primaryTextColor font-medium"
        >
          All <br className="lg:hidden" /> Features
        </Link>
      </div>{" "}
      <CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default ScrollableNavbar;

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ScrollableNavbar = ({ customBg }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  console.log({ isVisible }, window.scrollY, window.innerHeight);
  return (
    <nav
      className={`fixed top-0 w-full z-10 text-white py-2 px-3 transition-opacity duration-300 p-2 md:px-8 lg:hidden md:pt-6 md:pb-4 bg-[#043045e0] rounded-b-2xl lg:block ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-sm text-center md:gap-x-6 gap-y-2 items-center pt-0 md:pt-4 w-full md:w-fit justify-between hidden sm:flex sm:flex-row md:flex-row lg:flex">
        {/* <LivePreviewLinks /> */}
        <a href="/theBump" className="flex flex-col cursor-pointer">
          <div className="flex gap-x-2 items-center relative">
            {/* <span className="bg-[#F7BA30]/80 w-2 h-2 rounded-full "></span> */}
            <span className="bg-[#F7BA30] w-2 h-2 rounded-full animate-ping [animation-duration:0.9s] absolute top-2 md:top-2 md:-left-4"></span>
            <span className="bg-[#F7BA30] w-2 h-2 rounded-full absolute top-2 md:top-2 md:-left-4"></span>
            <span className="text-white text-center font-medium ml-4 md:m-auto">
              Live Preview
            </span>
          </div>
          <p className="text-[#F7BA30] text-[10px] text-center ml-3 md:m-auto">
            for pinterest
          </p>
        </a>
        <div className="bg-[#004A6C] h-7 w-0.5"></div>
        <Link
          href="/roi-calculator"
          // onClick={handleRoiRedirect}
          className="rounded-[24px]  px-4 py-1 text-white font-medium"
          // variant="primary"
        >
          ROI <br className="lg:hidden" /> Calculator
        </Link>{" "}
        <div className="bg-[#004A6C] h-7 w-0.5"></div>
        <button
          onClick={openModal}
          className="rounded-[24px] text-white md:bg-primaryBg px-4 py-1 md:text-primaryTextColor font-medium"
        >
          Talk <br className="lg:hidden" /> to us
        </button>
        <div className="bg-[#004A6C] h-7 w-0.5"></div>
        <button
          onClick={openModal}
          className="rounded-[24px] text-white md:bg-primaryBg px-4 py-1 md:text-primaryTextColor font-medium"
        >
          All <br className="lg:hidden" /> Features
        </button>
      </div>
    </nav>
  );
};

export default ScrollableNavbar;

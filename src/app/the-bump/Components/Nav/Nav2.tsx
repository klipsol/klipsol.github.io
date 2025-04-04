"use client";
import { beaconEvents } from "@/app/utils/events";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Calendly from "../Calendly/Calendly";

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
      if (window.scrollY >= 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBeaconEvent = (e) => {
    let elementId = e.target.id || e.currentTarget.id || "";

    if (e.target.nodeName === "BUTTON") {
      elementId = "calendly-button";
    }
    beaconEvents.fireEvents(`nav-item-click`, { item_name: elementId });
  };

  return (
    <nav
      className={`fixed bottom-0 w-full lg:shadow-lg text-white py-2 px-3 transition-opacity duration-300 p-2 md:px-8  bg-secondary rounded-t-2xl lg:py-1 lg:flex justify-center z-[100] ${
        isVisible ? "opacity-100" : ""
      }`}
    >
      <div className="text-sm text-center md:gap-x-6 gap-y-2 items-center pt-0  w-full md:w-fit justify-between lg:justify-center hidden sm:flex sm:flex-row md:flex-row lg:flex">
        {/* <LivePreviewLinks /> */}
        <a
          href={"/widget/" + publisher}
          className="flex flex-col cursor-pointer lg:bg-black lg:rounded-3xl lg:px-7 lg:leading-[1.3] py-1"
        >
          <div
            id="live-preview-nav"
            onClick={handleBeaconEvent}
            className="flex gap-x-2 items-center relative"
          >
            {/* <span className="bg-[#F7BA30]/80 w-2 h-2 rounded-full "></span> */}
            <span className="bg-[#F7BA30] w-2 h-2 rounded-full animate-ping [animation-duration:0.9s] absolute top-[30%] md:-left-3.5"></span>
            <span className="bg-[#F7BA30] w-2 h-2 rounded-full absolute top-[30%]  md:-left-3.5"></span>
            <span className="text-white lg:text-xs text-center font-medium ml-4 md:m-auto">
              Live Preview
            </span>
          </div>
          {/* <p className="text-[#F7BA30] text-[10px] text-center ml-3 md:m-auto">
            {publisher && `for ${publisher}`}
          </p> */}
        </a>
        <div className="bg-[#004A6C] h-7 w-0.5 lg:hidden"></div>
        <Link
          onClick={handleBeaconEvent}
          id="roi-calculator"
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
        {/* {pathname !== "/" && ( */}
          <div
            onClick={handleBeaconEvent}
            className="rounded-[24px]  px-4 py-1 md:text-white font-medium"
          >
            <Calendly />
          </div>
        {/* )} */}
        <div className="bg-[#004A6C] h-7 w-0.5 lg:hidden"></div>
        <Link
          onClick={handleBeaconEvent}
          id="all-features"
          href="/features"
          className="rounded-[24px]  px-4 py-1 md:text-white font-medium"
        >
          All <br className="lg:hidden" /> Features
        </Link>
      </div>{" "}
      {/* <CalendlyModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </nav>
  );
};

export default ScrollableNavbar;

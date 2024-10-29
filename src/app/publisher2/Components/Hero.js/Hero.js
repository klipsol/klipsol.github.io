import React, { useRef } from "react";
import Navbar from "../Nav/Navbar";
import Button from "../UI/Buttons/Button";
import { useScrollTo } from "@/app/hooks/useSmoothScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DPVideo from "../DPVideo/DPVideo";

export default function Hero() {
  const scroll = useScrollTo();
  const secondSectionRef = useRef(null);
  const logoRef = useRef(null);

  const heroAnimation = () => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power3.out" },
    });

    tl.fromTo(
      ["#left", "#right", "#switch"],
      {
        opacity: 0,
        x: function (index) {
          // Left element moves from left, right from right, switch no horizontal movement
          if (index === 0) return -500;
          if (index === 1) return 500;
          return 0;
        },
        y: function (index) {
          // Only switch moves vertically
          return index === 2 ? 100 : 0;
        },
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
      },
      "<" // This makes all animations start at the same time
    );
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const featureElement = document.getElementById("feature");
    const calculateEndPosition = () => {
      if (featureElement) {
        const featurePosition =
          featureElement.getBoundingClientRect().top + window.scrollY; // Get absolute position in the DOM
        return featurePosition + 100; // Add 100 pixels to the position
      }
      return 420; // Fallback value in case the feature element is not found
    };

    const logoPin = gsap.to(logoRef.current, {
      y: 320,
      x: -100,
      scrollTrigger: {
        pin: true,
        trigger: logoRef.current,
        start: "top 53%",
        end: calculateEndPosition(),
        scrub: true,
        onLeave: () => {},
      },
    });

    heroAnimation();

    return () => {
      logoPin.kill();
    };
  });

  return (
    <>
      <section className="bg-[#FFFAEA] h-screen overflow-hidden relative section">
        <Navbar />
        {/* Hero section starts */}
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-1/2 md:pl-8  px-5" id="left">
            <h2 className="text-primaryTextColor text-2xl md:text-4xl font-extrabold mt-[25%]">
              Drive Monetization By Enabling{" "}
              <span className="text-[#F5BA0B]">On-Site Checkout</span>
            </h2>
            <div className="flex gap-x-4">
              <button className="bg-[#FFDF74] rounded-[30px] px-4 py-3 font-semibold text-primaryTextColor">
                Drive User Delight
              </button>
              <div
                ref={logoRef}
                className="p-4 rounded-full shadow-lg bg-white"
              >
                <img src="/DpandaLogoS.svg" className="h-6" alt="logo" />
              </div>
            </div>
          </div>
          <div className="w-1/2 pt-5">
            <div className="relative w-full pb-[100%]" id="right">
              <div className="absolute inset-0">
                <div className="w-full ml-10 h-full rounded-full bg-[#013046] relative overflow-hidden">
                  <div className="absolute top-[15%] left-[20%] w-[150%] h-[150%]">
                    <DPVideo
                      className="h-[40%] object-cover"
                      src="/HeroVideo.mp4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center cursor-pointer"
          id="switch"
          onClick={() => scroll(document.getElementById("feature"))}
        >
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-gray-800 flex justify-center items-start p-2">
            <div className="w-1 h-2.5 rounded-full bg-gray-800 mb-1 animate-scroll-mouse" />
          </div>
        </div>
      </section>
    </>
  );
}

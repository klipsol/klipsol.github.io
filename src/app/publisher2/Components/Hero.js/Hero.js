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
      ["#left", "#right", "#switch", "#videoDiv"],
      {
        opacity: 0,
        x: function (index) {
          // Left element moves from left, right from right, switch no horizontal movement
          if (index === 0) return -500;
          if (index === 1) return 500;
          if (index === 3) return 1000;
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
        <div className="flex flex-col md:flex-row gap-x-8">
          <div className="w-1/2 md:pl-[10%]  px-5" id="left">
            <h2 className="text-primaryTextColor text-2xl md:text-4xl font-extrabold mt-[10%]">
              <span className="text-[#F5BA0B] pt-3">On-Site Checkout</span> to
              Drive Monetization and:
            </h2>
            <div className="flex gap-x-4 mt-12 justify-start text-primaryTextColor">
              <div className="bg-white rounded-2xl p-4 whitespace-nowrap text-xl relative">
                <h1
                  className="absolute -top-7 text-5xl left-1/2 text-[#dddad3]"
                  style={{ transform: "translate(-50%)" }}
                >
                  01
                </h1>
                <h1>
                  User <br />
                  Experience
                </h1>
              </div>
              <div className="bg-white rounded-2xl p-4 whitespace-nowrap text-xl relative">
                <h1
                  className="absolute -top-7 text-5xl left-1/2 text-[#dddad3]"
                  style={{ transform: "translate(-50%)" }}
                >
                  02
                </h1>
                <h1>
                  Lifetime <br />
                  Value
                </h1>
              </div>
              <div className="bg-white rounded-2xl p-4 whitespace-nowrap text-xl relative">
                <h1
                  className="absolute -top-7 text-5xl left-1/2 text-[#dddad3]"
                  style={{ transform: "translate(-50%)" }}
                >
                  03
                </h1>
                <h1>
                  First-Party <br />
                  Data
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[48%] relative z-0">
            {/* <div className="w-full h-full relative overflow-hidden"> */}
            <img className="w-full -mt-16" src="/circle.svg" alt="circle" />
            <div className="absolute top-[15%] left-[20%]  ">
              <DPVideo
                id="videoDiv"
                className="h-[50vh] object-cover"
                src="/HeroVideo.mp4"
              />
            </div>
            {/* </div> */}
          </div>
        </div>
        <div
          className="absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center cursor-pointer"
          id="switch"
        >
          <div
            className="w-[35px] h-[60px] rounded-3xl border-4 border-gray-800 flex justify-center items-start p-2"
            onClick={() => scroll(document.getElementById("feature"))}
          >
            <div className="w-1 h-2.5 rounded-full bg-gray-800 mb-1 animate-scroll-mouse" />
          </div>
        </div>
        <div className="absolute bg-[#FFF4D0] rounded-r-3xl top-[70%] px-8 w-[45%] flex justify-end">
          <div className="text-primaryTextColor">
            <h1 className="py-4 text-2xl ">One Stop Solutions</h1>
            <div className="flex gap-x-3 font-semibold md:text-base lg:text-lg 2xl:text-2xl text-center">
              <div className="bg-[#FFDF73] px-4 py-3 rounded-t-xl ">
                Technology <br /> Operations
              </div>
              <div className="bg-[#FFDF73] px-4 py-3 rounded-t-xl">
                Direct From <br /> Brand
              </div>
              <div className="bg-[#FFDF73] px-4 py-3 rounded-t-xl">
                Less than 5 Days <br /> Go Live
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

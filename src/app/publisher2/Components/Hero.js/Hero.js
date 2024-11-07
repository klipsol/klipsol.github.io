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

  // const heroAnimation = () => {
  //   const tl = gsap.timeline({
  //     defaults: { duration: 2, ease: "power3.out" },
  //   });

  //   tl.fromTo(
  //     ["#left", "#right", "#switch", "#videoDiv"],
  //     {
  //       opacity: 0,
  //       x: function (index) {
  //         // Left element moves from left, right from right, switch no horizontal movement
  //         if (index === 0) return -500;
  //         if (index === 1) return 500;
  //         if (index === 3) return 1000;
  //         return 0;
  //       },
  //       y: function (index) {
  //         // Only switch moves vertically
  //         return index === 2 ? 100 : 0;
  //       },
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       y: 0,
  //     },
  //     "<" // This makes all animations start at the same time
  //   );
  // };

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const featureElement = document.getElementById("feature");
  //   const calculateEndPosition = () => {
  //     if (featureElement) {
  //       const featurePosition =
  //         featureElement.getBoundingClientRect().top + window.scrollY; // Get absolute position in the DOM
  //       return featurePosition + 100; // Add 100 pixels to the position
  //     }
  //     return 420; // Fallback value in case the feature element is not found
  //   };

  //   const logoPin = gsap.to(logoRef.current, {
  //     y: 320,
  //     x: -100,
  //     scrollTrigger: {
  //       pin: true,
  //       trigger: logoRef.current,
  //       start: "top 53%",
  //       end: calculateEndPosition(),
  //       scrub: true,
  //       onLeave: () => {},
  //     },
  //   });

  //   heroAnimation();

  //   return () => {
  //     logoPin.kill();
  //   };
  // });

  return (
    <>
      <section className="h-screen relative overflow-hidden bg-white">
        <Navbar />
        {/* yellow image layout  */}
        <img
          src="/yellow-layout.svg"
          className="absolute -top-[10%] w-full xxl:top-0 z-10"
          alt="bg"
        />

        <div className="absolute inset-0 sec-container flex justify-between">
          {/* left section */}
          <div className="z-10">
            <h2 className="text-white text-xl md:text-3xl mt-[25%] xxl:text-5xl">
              <span className="text-[#023046] text-2xl xxl:text-6xl md:text-4xl font-extrabold pt-3">
                On-Site Checkout
              </span>
              <br /> to Drive Monetization &:
            </h2>

            {/* description */}
            <div className="flex gap-x-4 mt-[15%] justify-start text-primaryTextColor">
              <div className="bg-[#FFF9E6] rounded-2xl p-4 whitespace-nowrap text-xl relative">
                <h1
                  className="absolute -top-7 font-medium text-5xl left-1/2 text-[#9E8637] "
                  style={{ transform: "translate(-50%)" }}
                >
                  01
                </h1>
                <h1 className="font-medium">
                  User <br />
                  Experience
                </h1>
              </div>
              <div className="bg-[#FFF9E6] rounded-2xl font-medium p-4 whitespace-nowrap text-xl relative">
                <h1
                  className="absolute -top-7 text-5xl left-1/2 text-[#9E8637]"
                  style={{ transform: "translate(-50%)" }}
                >
                  02
                </h1>
                <h1 className="font-medium">
                  Lifetime <br />
                  Value
                </h1>
              </div>
              <div className="bg-[#FFF9E6] rounded-2xl p-4 whitespace-nowrap text-xl relative">
                <h1
                  className="absolute -top-7 font-medium text-5xl left-1/2 text-[#9E8637]"
                  style={{ transform: "translate(-50%)" }}
                >
                  03
                </h1>
                <h1 className="font-medium">
                  First-Party <br />
                  Data
                </h1>
              </div>
            </div>

            {/* bottome section */}
            <div className="text-primaryTextColor absolute bottom-7">
              <h1 className="py-4 text-2xl xxl:text-3xl">
                Everything To Embed Brands On Your Site
              </h1>
              <div className="flex gap-x-3  md:text-base lg:text-lg 2xl:text-2xl ">
                <div className="bg-[#FEF4D3] p-3 py-1.5 rounded-lg  relative">
                  Technology <br /> Operations
                  <div className="absolute h-full bg-[#F7BB30] w-1.5 left-0 top-0"></div>
                </div>
                <div className="bg-[#FEF4D3] p-3 py-1.5 rounded-lg relative">
                  Direct From <br /> Brand
                  <div className="absolute h-full bg-[#F7BB30] w-1.5 left-0 top-0"></div>
                </div>
                <div className="bg-[#FEF4D3] p-3 py-1.5 rounded-lg relative">
                  Less than 5 Days <br /> Go Live
                  <div className="absolute h-full bg-[#F7BB30] w-1.5 left-0 top-0"></div>
                </div>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="h-full rounded-b-full bg-red z-10 w-[51%] bg-[#003045]">
            <div className="mt-[20%] ml-[13%]">
              <DPVideo
                id="videoDiv"
                className="h-[60vh] object-cover"
                src="/HeroVideo.mp4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

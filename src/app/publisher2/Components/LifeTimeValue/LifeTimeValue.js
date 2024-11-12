import React, { useEffect, useRef } from "react";
import DPVideo from "../DPVideo/DPVideo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function LifeTimeValue() {
  const sectionRef = useRef(null);
  const listItems = ["Higher Engagement", "Higher Retention"];

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top center",
  //       toggleActions: "play none none reverse",
  //     },
  //     defaults: { duration: 2, ease: "power3.out" },
  //   });

  //   tl.fromTo(
  //     ["#L-demo-video", "#L-text-banner"],
  //     {
  //       opacity: 0,
  //       x: function (index) {
  //         if (index === 0) return -500;
  //         return 0;
  //       },
  //       y: function (index) {
  //         return index === 1 ? 500 : 0;
  //       },
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       y: 0,
  //     },
  //     "<"
  //   );

  //   // Cleanup
  //   return () => {
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);
  return (
    <section
      className="sec-container h-screen relative flex  w-full"
      id="feature"
    >
      <div className="w-[70%] flex gap-x-3">
        <div className="h-screen bg-[#EEF0F8] overflow-hidden w-[50%]">
          <div className="flex h-full  justify-center flex-col">
            <DPVideo className="h-fit" src={"/vid2.mp4"} />
            <p className="text-center text-[#254652] text-lg font-medium">
              Limited User Control
            </p>
          </div>
        </div>
        <div className="h-screen bg-[#FEF4D3] overflow-hidden w-[50%]">
          <div className="flex h-full  justify-center flex-col">
            <DPVideo className="h-fit" src={"/vid3.mp4"} />
            <p className="text-center text-[#254652] text-lg font-medium">
              Full User Control
            </p>
          </div>
        </div>
      </div>
      <div className="w-[30%] flex flex-col justify-center px-8 gap-y-3">
        <h1 className="text-[#023046]/20 text-6xl font-bold">02</h1>
        <h1 className="text-4xl whitespace-nowrap text-[#1D234E] font-medium">
          <HighlightedText text="Higher" wrapperClass="bottom-2 h-[30%]" />{" "}
          <br /> Lifetime Value
        </h1>
        <p className="custom-text-sm text-[#505C6E]">
          5-10x higher conversion and deeper user engagement.
        </p>

        <ul className="space-y-2 text-[#505C6E] custom-text-sm">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 flex-shrink-0"
              >
                <path
                  d="M3 12.5l6 6 12-12"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <hr className="bottom-0 absolute w-full custom-hr" />
    </section>
  );
}
